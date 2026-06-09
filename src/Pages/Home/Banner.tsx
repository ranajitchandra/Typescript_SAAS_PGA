import { ArrowRight, CheckCircle2, Code2, Rocket, ShieldCheck, Sparkles } from "lucide-react";

export default function Banner() {
    return (
        <section className="relative overflow-hidden rounded-3xl border bg-secondary text-foreground shadow-sm">
            <div className="grid min-h-155 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex flex-col justify-center px-5 py-10 sm:px-8 lg:px-12">
                    <span className="inline-flex w-fit items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-bold uppercase text-accent shadow-sm">
                        <Sparkles className="h-3.5 w-3.5" />
                        Web projects for sale
                    </span>

                    <h1 className="mt-6 max-w-3xl font-black leading-[1.08] text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                        I build complete web apps that look premium and sell with confidence.
                    </h1>

                    <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                        Need a ready-to-launch website, marketplace, dashboard, or custom business platform? I design and develop modern web-based projects with clean code, responsive UI, and a smooth buyer experience.
                    </p>

                    <div className="mt-8 flex gap-3 sm:flex-row">
                        <a
                            href="#contact-us"
                            className="inline-flex p-2 md:p-3 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/25 transition hover:bg-primary/90"
                        >
                            Start a Project
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href="#projects"
                            className="inline-flex p-2 md:p-3 items-center justify-center gap-2 rounded-full border bg-card px-6 text-sm font-bold text-foreground transition hover:bg-muted"
                        >
                            View Work
                            <Code2 className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="mt-9 grid gap-3 sm:grid-cols-3">
                        {[
                            { icon: Rocket, title: "Fast launch", text: "Production-ready build" },
                            { icon: ShieldCheck, title: "Clean code", text: "Easy to maintain" },
                            { icon: CheckCircle2, title: "Full package", text: "UI, logic, and deploy" },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="rounded-2xl border bg-card p-4 shadow-sm">
                                    <Icon className="h-5 w-5 text-accent" />
                                    <p className="mt-3 text-sm font-bold text-foreground">
                                        {item.title}
                                    </p>
                                    <p className="mt-1 text-xs text-muted-foreground">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative min-h-[380px] lg:min-h-full">
                    <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=85"
                        alt="Developer team planning a modern web project"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/35 to-transparent dark:from-background/95" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/12 p-5 text-white shadow-2xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
                        <p className="text-sm font-semibold uppercase text-white/80">
                            Current offer
                        </p>
                        <p className="mt-2 text-2xl font-black">
                            Custom web app package
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/80">
                            Landing page, dashboard, admin panel, API integration, and responsive design for your next digital product.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
