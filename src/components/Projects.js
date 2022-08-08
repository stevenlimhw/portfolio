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
            title: "E-Wallet Tracking System",
            type: "Internship Project",
            stacks: "Javascript, React, Express, Node, MongoDB Atlas, DigitalOcean Space, HTML, CSS",
            description: "Worked in a software team to build an all-in-one system to track the transactions of a user’s various e-wallets, with reports, budgets, reimbursement and categories features to enable users to make rational financial decisions.",
            contributionsFE: [
                "Added a download filtered transactions summary spreadsheet feature, by processing JSON data (based on selected filters) from MongoDB Atlas into an excel file.",
                "Built the UI for the various dashboards as well as the individual wallet and transaction pages using Ant Design.",
                "Added a chart dashboard to summarise the monthly income and expenses of a selected wallet using Ant Design.",
                "Created the necessary forms and made the corresponding API calls for CRUD operations.",
            ],
            contributionsBE: [
                "Designed the API for the Report, Receipt Upload, and Budget features of the app, and wrote the corresponding API documentation.",
                "Integrated AWS S3 SDK to manage DigitalOcean Space buckets to store and serve images of payment receipts (in PNG or JPG or JPEG format) which are used as payment evidence.",
                "Used Nodemailer and Postmark, a Simple Mail Transfer Protocol (SMTP), to send automatically-generated warning emails to users with wallet(s) that exceeds their wallet budget.",
                "Fixed a major bug that caused transfers from different user wallets to not deduct the correct amount from the sending wallet.",
                "Tested the API using Postman."
            ],
            contributionsDO: [],
            imgUrl: fintrax,
            link: ""
        },
        {
            title: "Student Grouping and Management System",
            type: "Internship Project",
            stacks: "Javascript, React, Express, Node, MongoDB, DigitalOcean Space, HTML, CSS",
            description: "Built a web app that automatically processes spreadsheets, stores the data in a database, sorts students by various fields and divides them into groups of a particular size.",
            contributionsFE: [
                "Discussed with my mentor on the system design and activity flow of the web app, following client requirements.",
                "Built the upload file dashboard which shows the preview of the data contained within the uploaded spreadsheet file.",
                "Created the uploaded file dashboard which shows all the uploaded spreadsheets, and allows downloading of the original unprocessed spreadsheets stored in DigitalOcean Space.",
                "Developed the student grouping feature which will fetch, then sort the student data in MongoDB Atlas according to the selected filter. Afterwards, n student details will be contained within each spreadsheet file, where n is the number of students in each group (modifiable). The batch of spreadsheet files can then be automatically downloaded all at once.",
            ],
            contributionsBE: [
                "Designed relevant APIs for core CRUD operations as well as additional APIs that processes the student data based on selected fields, and wrote the corresponding API documentation.",
                "Tested the API using Postman.",
                "Integrated AWS S3 SDK to manage DigitalOcean Space buckets to store and serve spreadsheet files (in CSV or excel format).",
            ],
            contributionsDO: [],
            imgUrl: grouping,
            link: ""
        },
        {
            title: "Student Counselling Platform",
            type: "School Project",
            stacks: "Typescript, React, Redux, Golang, HTML, CSS and PostgreSQL",
            description: "Worked in a pair to build a web app that connects counsellors with students for counselling sessions supporting user role authentication, student grouping and matching, counsellor matching, and group chat feature.",
            contributionsFE: [
                "Designed the UI for the whole web application using Figma, most notably the UI theme, positioning of buttons and forms, and the ease of usage of the app.",
                "Utilised Redux to better conduct state management.",
                "Created reusable React components to standardise the UI and integrated react bootstrap components as well.",
                "Conducted unit testing for React components, as well as user testing which involved collecting feedback on the flow of the UI.",
                "Configured the UI to be responsive for majority of mobile devices.",
                "Iteratively improve the UI/UX through collecting user feedback."
            ],
            contributionsBE: [
                "Planned the system design and API endpoints required to create the core features such as the User, Group, Counsel Request, Booking features with my teammate.",
                "Reviewed the API code and tested the functionality of the API written by my teammate and suggested relevant improvements, as well as point out bugs or potential sources of error.",
            ],
            contributionsDO: [
                "Deployed the backend on Heroku.",
                "Deployed the frontend on Vercel."
            ],
            imgUrl: wellnus,
            link: "https://wellnus-frontend.vercel.app/"
        },
        {
            title: "Task Management System",
            type: "Personal Project",
            stacks: "Javascript, React, Ruby on Rails, HTML, CSS and PostgreSQL",
            description: "Built a web app that supports daily and weekly tasks dashboards, as well as searching and sorting features.",
            contributionsFE: [
                "Designed the UI for the whole web application, and crafted the UI components with React JS.",
                "Added a searching and sorting feature to easily locate relevant tasks.",
            ],
            contributionsBE: [
                "Designed the API for the Users and Tasks tables using Ruby on Rails and connected the backend with a PostgreSQL database.",
                "Tested the API using Postman.",
            ],
            contributionsDO: [
                "Deployed the project (which is a monorepo) on Heroku."
            ],
            imgUrl: catask,
            link: "https://catask.herokuapp.com/"
        },
        {
            title: "Lorem Ipsum Generator",
            type: "Internship Project",
            stacks: "MongoDB, Express, React, Node, Javascript, HTML, CSS",
            description: "Migrated a project that was originally written in Javascript, HTML and CSS into the MERN stack.",
            contributionsFE: [
                "Created the landing page and generated lorem ipsum page using React JS.",
            ],
            contributionsBE: [
                "Created the backend in a separate repository from the frontend, using Node and Express JS.",
            ],
            contributionsDO: [],
            imgUrl: lipzum,
            link: ""
        },
        {
            title: "Personal Portfolio Website",
            type: "Personal Project",
            stacks: "Javascript, React, HTML and CSS",
            // description: "Fetches data from a publicly available government web end-point and stores the infected and recovered statistical data into a local database.",
            description: "Built a website to showcase my software engineering skills and projects.",
            contributionsFE: [
                "Designed the UI of the portfolio website using React JS and CSS.",
            ],
            contributionsBE: [],
            contributionsDO: [
                "Deployed the portfolio website on GitHub pages using a custom URL.",
            ],
            imgUrl: portfolio,
            link: "https://limsteven.com/"
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