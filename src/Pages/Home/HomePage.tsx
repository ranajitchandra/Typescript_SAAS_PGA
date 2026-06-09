

import ProjectList from "../Projects/ProjectList";
import "./HomePage.css";
import Banner from "./Banner";
import Testmonial from "./Testmonial/Testmonial";
import ContactUs from "./ContactUs";

export default function HomePage() {
    return (
        <div className="space-y-16">
            <Banner />

            <div id="projects" className="scroll-mt-24">
                <ProjectList />
            </div>

            <Testmonial />
            <ContactUs />

        </div>
    );
}
