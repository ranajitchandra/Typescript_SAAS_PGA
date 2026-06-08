export type ProjectStack = {
    name: string;
    icon: string; // lucide-react icon name
    color: string; // tailwind text color class
};

export type ProjectLinks = {
    live?: string;
    client?: string;
    server?: string;
};

export type Project = {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    category: string;
    status: "Completed" | "In Progress" | "Maintenance";
    featured?: boolean;
    stack: ProjectStack[];
    links: ProjectLinks;
};
