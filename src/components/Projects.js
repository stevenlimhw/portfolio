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
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p></p>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={2}>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="nav-item">Work</Nav.Link>
                                    </Nav.Item>
                                    <br/>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="nav-item">Personal</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                </Col>
                                <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
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
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            test description
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;