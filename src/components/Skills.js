import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaBeer, FaJava, FaJs, FaNode, FaNodeJs, FaPython } from 'react-icons/fa';
import { DiCss3, DiHtml5, DiReact, DiRuby } from 'react-icons/di';
import { TbBrandKotlin } from 'react-icons/tb';
import { SiExpress, SiRedux, SiTypescript } from 'react-icons/si';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
  

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <Container className="reset_padding_margin">
                <Row className="reset_padding_margin">
                    <Col className="reset_padding_margin">
                        <div>
                            <h2>Skills</h2>
                            <p>Frequently Used</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} containerClass="skills-carousel">
                                <div className="skills-skill">
                                    <FaJava size={100} />
                                </div>
                                <div className="skills-skill">
                                    <FaJs size={100} />
                                </div>
                                <div className="skills-skill">
                                    <SiTypescript size={100} />
                                </div>
                                <div className="skills-skill">
                                    <DiReact size={100} />
                                </div>
                                <div className="skills-skill">
                                    <SiRedux size={100} />
                                </div>
                                <div className="skills-skill">
                                    <FaNodeJs size={100} />
                                </div>
                                <div className="skills-skill">
                                    <SiExpress size={100} />
                                </div>
                                <div className="skills-skill">
                                    <DiHtml5 size={100} />
                                </div>
                                <div className="skills-skill">
                                    <DiCss3 size={100} />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p>Languages and Frameworks</p>
                    <caption>Complete list of all languages and frameworks I have learned and used before.</caption>
                    <div className="skills-list-container">
                        <div className="skills-list-panel skills-list-panel-right">
                            <ul>
                                <div className="skills-subcategory">Languages</div>
                                <li>Javascript</li>
                                <li>Typescript</li>
                                <li>Java</li>
                                <li>Kotlin</li>
                                <li>Ruby</li>
                                <li>Golang (Go)</li>
                                <li>Python</li>
                                <li>C++</li>
                            </ul>
                        </div>
                        <div className="skills-list-panel skills-list-panel-right">
                            <ul>
                                <div className="skills-subcategory">Frameworks</div>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Express</li>
                                <li>Node</li>
                                <li>Ruby on Rails</li>
                                <li>Spring Boot</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>MongoDB Atlas</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div className="skills-list-panel skills-list-panel-right">
                            <ul>
                                <div className="skills-subcategory">Tools</div>
                                <li>Postman</li>
                                <li>JUnit</li>
                                <li>Git and GitHub</li>
                                <li>Android Jetpack</li>
                                <li>Vim</li>
                                <li>IntelliJ</li>
                                <li>Visual Studio Code</li>
                                <li>Bootstrap</li>
                                <li>Ant Design</li>
                            </ul>
                        </div>
                        
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;