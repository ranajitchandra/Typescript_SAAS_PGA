import { useMemo, useState } from "react";
import { Filter, LayoutGrid, Search, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/Mock_Data/projects";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";

const PROJECTS_PER_PAGE = 4;

export default function ProjectList() {

    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState(1);

    const categories = useMemo(() => {
        const unique = Array.from(new Set(projects.map((p) => p.category)));
        return ["All", ...unique];
    }, []);

    const filtered = useMemo(() => {
        // Reset to page 1 whenever filters change
        return projects.filter((project) => {
            const matchesCategory =
                activeCategory === "All" || project.category === activeCategory;
            const matchesQuery =
                query.trim().length === 0 ||
                project.title.toLowerCase().includes(query.toLowerCase()) ||
                project.description.toLowerCase().includes(query.toLowerCase()) ||
                project.stack.some((tech) =>
                    tech.name.toLowerCase().includes(query.toLowerCase())
                );
            return matchesCategory && matchesQuery;
        });
    }, [query, activeCategory]);

    const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE);

    // Reset to page 1 when filters/search change
    useMemo(() => {
        setCurrentPage(1);
    }, [query, activeCategory]);

    const paginated = useMemo(() => {
        const start = (currentPage - 1) * PROJECTS_PER_PAGE;
        return filtered.slice(start, start + PROJECTS_PER_PAGE);
    }, [filtered, currentPage]);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Build page number array with ellipsis
    const getPageNumbers = () => {
        const pages: (number | "...")[] = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push("...");
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);
            for (let i = start; i <= end; i++) pages.push(i);
            if (currentPage < totalPages - 2) pages.push("...");
            pages.push(totalPages);
        }
        return pages;
    };

    return (
        <section className="space-y-10">
            {/* Hero header */}
            <div className="project-hero relative overflow-hidden rounded-3xl border bg-linear-to-br from-primary/10 via-accent/10 to-primary/5 p-5 lg:p-12">
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
                <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                <div className="relative flex flex-col gap-4">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border bg-card/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent backdrop-blur-md">
                        <Sparkles className="h-3.5 w-3.5" />
                        Portfolio
                    </span>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                        Featured{" "}
                        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
                        A curated collection of my recent work — from full-stack
                        marketplaces to AI-powered dashboards. Each project
                        showcases real-world problem solving with clean code and
                        thoughtful design.
                    </p>
                </div>
            </div>

            {/* Filters & search */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                        <Filter className="h-4 w-4" />
                        Filter:
                    </span>
                    <Select value={activeCategory} onValueChange={(val) => { setActiveCategory(val); setCurrentPage(1); }}>
                        <SelectTrigger className="w-30">
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="min-w-30 p-1">
                            {categories.map((category) => (
                                <SelectItem key={category} value={category} className="cursor-pointer">
                                    {category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="relative w-full sm:w-72">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => { setQuery(e.target.value); setCurrentPage(1); }}
                        placeholder="Search projects, tech..."
                        className="w-full rounded-full border bg-card py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40"
                    />
                </div>
            </div>

            {/* Result count */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <LayoutGrid className="h-4 w-4" />
                Showing{" "}
                <span className="font-bold text-foreground">
                    {Math.min((currentPage - 1) * PROJECTS_PER_PAGE + 1, filtered.length)}–{Math.min(currentPage * PROJECTS_PER_PAGE, filtered.length)}
                </span>{" "}
                of{" "}
                <span className="font-bold text-foreground">{filtered.length}</span>{" "}
                projects
            </div>

            {/* Grid */}
            {paginated.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2">
                    {paginated.map((project, index) => (
                        <div
                            key={project.id}
                            className="project-card-animate"
                            style={{ animationDelay: `${index * 80}ms` }}
                        >
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border bg-card p-12 text-center">
                    <p className="text-lg font-semibold text-foreground">No projects match your search</p>
                    <p className="mt-2 text-sm text-muted-foreground">Try a different keyword or clear the filters.</p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-1.5">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-card text-muted-foreground transition hover:bg-accent/10 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    {getPageNumbers().map((page, i) =>
                        page === "..." ? (
                            <span key={`ellipsis-${i}`} className="px-1 text-sm text-muted-foreground">
                                …
                            </span>
                        ) : (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition
                                    ${currentPage === page
                                        ? "border-primary bg-primary text-primary-foreground"
                                        : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                                    }`}
                            >
                                {page}
                            </button>
                        )
                    )}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-card text-muted-foreground transition hover:bg-accent/10 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
                        aria-label="Next page"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            )}
        </section>
    );
}