import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Project from "./Project";

const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
        }
    ];

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {
                    projects.map((project, key) => {
                        return (
                            <Project 
                                key={key}
                                {...project}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;