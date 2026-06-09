
import { testimonials } from "@/Mock_Data/Testmonial";
import MarqueeRow from "./MarqueeRow";

const firstRow = testimonials.slice(0, 3);
const secondRow = testimonials.slice(3);


export default function Testmonial() {

    return (
        <section className="space-y-8">
            <div className="mx-auto max-w-3xl text-center">
                <span className="text-sm font-bold uppercase text-accent">
                    Testimonials
                </span>
                <h2 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
                    Clients trust the build and the process
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                    Mock client feedback for showcasing how buyers feel when they receive a polished, complete web project.
                </p>
            </div>

            <div className="space-y-5">
                <MarqueeRow items={firstRow} />
                <MarqueeRow items={secondRow} reverse />
            </div>
        </section>
    )
}
