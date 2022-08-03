import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Project from "./Project";
import sea from "../../src/assets/images/sea.jpg";
import fintrax from "../../src/assets/images/fintrax.png";
import catask from "../../src/assets/images/catask.png";
import grouping from "../../src/assets/images/grouping.png";
import wellnus from "../../src/assets/images/wellnus.png";
import lipzum from "../../src/assets/images/lipzum.png";
import portfolio from "../../src/assets/images/portfolio.png";


const Projects = () => {
    const projects = [
        {
            title: "E-Wallet Tracker System",
            type: "Internship Project",
            stacks: "Javascript, React, Express, Node, MongoDB (Atlas), DigitalOcean Space, HTML, CSS",
            description: "All-in-one system to track the transactions of a user’s various e-wallets, with reports, budgets, reimbursement and categories features to enable users to make rational financial decisions.",
            imgUrl: fintrax
        },
        {
            title: "Student Counselling Platform",
            type: "NUS Orbital (Artemis) Project",
            stacks: "Typescript, React, Redux, Golang, HTML, CSS and PostgreSQL",
            description: "Web app that connects counsellors with students for counselling sessions supporting user role authentication, student grouping and matching, counsellor matching, and group chat feature.",
            imgUrl: wellnus
        },
        {
            title: "Task Management System",
            type: "Personal Project",
            stacks: "Javascript, React, Ruby on Rails, HTML, CSS and PostgreSQL",
            description: "Supports daily and weekly tasks dashboards, as well as searching and sorting features.",
            imgUrl: catask
        },
        {
            title: "Student Grouping System",
            type: "Internship Project",
            stacks: "Javascript, React, Express, Node, MongoDB (Atlas), DigitalOcean Space, HTML, CSS",
            description: "An app that automatically processes spreadsheets, stores the data in a database, sorts students by various fields and divides them into groups of a particular size.",
            imgUrl: grouping
        },
        {
            title: "Lorem Ipsum Generator",
            type: "Internship Project",
            stacks: "Javascript, React, Express, Node, MongoDB (Atlas), HTML, CSS",
            description: "Web app that generates lorem ipsum.",
            imgUrl: lipzum
        },
        {
            title: "Personal Portfolio Website",
            type: "Personal Project",
            stacks: "Javascript, React, HTML and CSS",
            // description: "Fetches data from a publicly available government web end-point and stores the infected and recovered statistical data into a local database.",
            description: "Website to showcase my software engineering skills and projects.",
            imgUrl: portfolio
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