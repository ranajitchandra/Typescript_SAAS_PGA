import { useState } from "react";
import * as Icons from "lucide-react";
import { ExternalLink, Server, Star } from "lucide-react";
import type { Project } from "@/types/ProjectType";

type ProjectCardProps = {
    project: Project;
};

const statusStyles: Record<Project["status"], string> = {
    Completed:
        "bg-emerald-500/15 text-emerald-600 ring-1 ring-emerald-500/30 dark:text-emerald-300",
    "In Progress":
        "bg-amber-500/15 text-amber-600 ring-1 ring-amber-500/30 dark:text-amber-300",
    Maintenance:
        "bg-sky-500/15 text-sky-600 ring-1 ring-sky-500/30 dark:text-sky-300",
};

export default function ProjectCard({ project }: ProjectCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <article className="project-card group relative flex flex-col overflow-hidden rounded-3xl border bg-card text-card-foreground shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
            {/* Animated gradient ring on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -inset-px rounded-3xl bg-linear-to-r from-primary/40 via-accent/40 to-primary/40 blur-sm" />
            </div>

            <div className="relative">
                {/* Image wrapper with skeleton */}
                <div className="relative h-56 overflow-hidden bg-muted">
                    {!imageLoaded && (
                        <div className="absolute inset-0 animate-pulse bg-linear-to-r from-muted via-muted-foreground/10 to-muted" />
                    )}

                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        onLoad={() => setImageLoaded(true)}
                        className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-110 ${
                            imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                    {/* Top badges */}
                    <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-2">
                        <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${statusStyles[project.status]}`}
                        >
                            {project.status}
                        </span>

                        {project.featured && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-accent/90 px-3 py-1 text-xs font-bold text-accent-foreground shadow-lg backdrop-blur-md">
                                <Star className="h-3 w-3 fill-current" />
                                Featured
                            </span>
                        )}
                    </div>

                    {/* Bottom category */}
                    <div className="absolute bottom-4 left-4">
                        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="relative flex flex-1 flex-col gap-5 p-6">
                <div>
                    <h3 className="line-clamp-1 text-2xl font-bold tracking-tight text-card-foreground transition-colors group-hover:text-primary">
                        {project.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                    </p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => {
                        const Icon = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[
                            tech.icon
                        ] ?? Icons.Code2;

                        return (
                            <span
                                key={tech.name}
                                className="project-tech-badge inline-flex items-center gap-1.5 rounded-full border bg-secondary/60 px-3 py-1 text-xs font-semibold text-secondary-foreground transition-all hover:scale-105 hover:bg-secondary"
                            >
                                <Icon className={`h-3.5 w-3.5 ${tech.color}`} />
                                {tech.name}
                            </span>
                        );
                    })}
                </div>

                {/* Action buttons */}
                <div className="mt-auto grid grid-cols-1 gap-2 border-t pt-5 sm:grid-cols-3">
                    {project.links.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn project-btn-primary inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-xs font-bold text-primary-foreground transition-all hover:bg-primary/90 sm:col-span-1"
                        >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live
                        </a>
                    )}

                    {project.links.client && (
                        <a
                            href={project.links.client}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn inline-flex items-center justify-center gap-2 rounded-xl border bg-background px-3 py-2.5 text-xs font-bold text-foreground transition-all hover:border-foreground/40 hover:bg-muted"
                        >
                            <Icons.GitBranchPlusIcon className="h-3.5 w-3.5" />
                            Client
                        </a>
                    )}

                    {project.links.server && (
                        <a
                            href={project.links.server}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn inline-flex items-center justify-center gap-2 rounded-xl border bg-background px-3 py-2.5 text-xs font-bold text-foreground transition-all hover:border-foreground/40 hover:bg-muted"
                        >
                            <Server className="h-3.5 w-3.5" />
                            Server
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
