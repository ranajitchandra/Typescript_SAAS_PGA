import { useMemo, useState } from "react";
import { Filter, LayoutGrid, Search, Sparkles } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/Mock_Data/projects";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";

export default function ProjectList() {
    const [query, setQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const categories = useMemo(() => {
        const unique = Array.from(new Set(projects.map((p) => p.category)));
        return ["All", ...unique];
    }, []);

    const filtered = useMemo(() => {
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

                    <Select
                        value={activeCategory}
                        onValueChange={setActiveCategory}
                    >
                        <SelectTrigger className="w-30">
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>

                        <SelectContent className="min-w-30 p-1">
                            {categories.map((category) => (
                                <SelectItem
                                    key={category}
                                    value={category}
                                    className="cursor-pointer"
                                >
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
                        onChange={(event) => setQuery(event.target.value)}
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
                    {filtered.length}
                </span>{" "}
                of{" "}
                <span className="font-bold text-foreground">
                    {projects.length}
                </span>{" "}
                projects
            </div>

            {/* Grid */}
            {filtered.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2">
                    {filtered.map((project, index) => (
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
                    <p className="text-lg font-semibold text-foreground">
                        No projects match your search
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Try a different keyword or clear the filters.
                    </p>
                </div>
            )}
        </section>
    );
}
