import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export default function ContactUs() {
    return (
        <section id="contact-us" className="scroll-mt-24 rounded-3xl border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <span className="text-sm font-bold uppercase text-accent">
                        Contact us
                    </span>
                    <h2 className="mt-3 text-2xl md:text-3xl font-black text-foreground sm:text-4xl">
                        Have an idea ready to build?
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
                        Send the project details, preferred timeline, and your budget range. I will help turn your web app idea into a polished product that is ready to sell or launch.
                    </p>

                    <div className="mt-8 grid gap-3">
                        {[
                            { icon: Mail, label: "Email", value: "hello@booksealer.com" },
                            { icon: Phone, label: "Phone", value: "+880 1700 000000" },
                            { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.label} className="flex items-center gap-4 rounded-2xl border bg-background p-4">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div>
                                        <p className="text-xs font-bold uppercase text-muted-foreground">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-semibold text-foreground">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <form className="grid gap-4 rounded-2xl border bg-background p-5 sm:p-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <label className="grid gap-2 text-sm font-semibold text-foreground">
                            Name
                            <input
                                type="text"
                                placeholder="Your name"
                                className="h-12 rounded-xl border bg-card px-4 text-sm font-normal outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/35"
                            />
                        </label>
                        <label className="grid gap-2 text-sm font-semibold text-foreground">
                            Email
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="h-12 rounded-xl border bg-card px-4 text-sm font-normal outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/35"
                            />
                        </label>
                    </div>

                    <label className="grid gap-2 text-sm font-semibold text-foreground">
                        Project type
                        <select className="h-12 rounded-xl border bg-card px-4 text-sm font-normal text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/35">
                            <option>Full web application</option>
                            <option>Portfolio or landing page</option>
                            <option>Dashboard or admin panel</option>
                            <option>E-commerce marketplace</option>
                        </select>
                    </label>

                    <label className="grid gap-2 text-sm font-semibold text-foreground">
                        Message
                        <textarea
                            rows={5}
                            placeholder="Tell me about your project, timeline, and key features..."
                            className="resize-none rounded-xl border bg-card px-4 py-3 text-sm font-normal outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/35"
                        />
                    </label>

                    <button
                        type="button"
                        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-sm shadow-primary/25 transition hover:bg-primary/90"
                    >
                        Send Message
                        <MessageCircle className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </section>
    )
}
