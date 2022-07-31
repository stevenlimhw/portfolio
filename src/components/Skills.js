import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaBeer, FaJava, FaJs, FaNode, FaNodeJs, FaPython } from 'react-icons/fa';
import { DiCss3, DiHtml5, DiReact, DiRuby } from 'react-icons/di';
import { TbBrandKotlin, TbLanguage, TbTools } from 'react-icons/tb';
import { SiExpress, SiReact, SiRedux, SiTypescript } from 'react-icons/si';
import { Fade, Slide } from "react-awesome-reveal";


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
                            <Slide triggerOnce>
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
                            </Slide>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p>Languages and Frameworks</p>
                    <caption>Complete list of all languages and frameworks I have learned and used before.</caption>
                    <Slide triggerOnce>
                    <div className="skills-list-container">
                            <div className="skills-list-panel skills-list-panel-right">
                                <TbLanguage size={100}/>
                                <ul>
                                    <div className="skills-subcategory">Languages</div>
                                    <li>Javascript</li>
                                    <li>Typescript</li>
                                    <li>Java</li>
                                    <li>Ruby</li>
                                    <li>Golang (Go)</li>
                                </ul>
                            </div>
                        <div className="skills-list-panel skills-list-panel-right">
                            <SiReact size={100} />
                            <ul>
                                <div className="skills-subcategory">Frameworks</div>
                                <li>React</li>
                                <li>Express</li>
                                <li>Node</li>
                                <li>Ruby on Rails</li>
                                <li>Redux</li>
                                <li>HTML and CSS</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>
                        <div className="skills-list-panel skills-list-panel-right">
                            <TbTools size={100} />
                            <ul>
                                <div className="skills-subcategory">Tools</div>
                                <li>Postman</li>
                                <li>Git and GitHub</li>
                                <li>Bootstrap</li>
                                <li>Vim</li>
                                <li>IntelliJ</li>
                                <li>Visual Studio Code</li>
                            </ul>
                        </div>
                    </div>
                    </Slide>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;