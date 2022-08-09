import { useEffect, useState } from "react";
import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowDown, Briefcase } from "react-bootstrap-icons";
import Link from "react-scroll/modules/components/Link";
import cat from '../assets/images/cat2.png';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const texts = ["Software Engineer", "Frontend Web Developer", "Backend Web Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; // in milliseconds

    const write = () => {
        let i = loopNum % texts.length;
        let fullText = texts[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);
        setText(updatedText);

        // rate for deleting is higher than rate for typing
        if (isDeleting) {
            setDelta(prev => prev / 2);
        }

        // when writer finishes typing out the full text
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            // when writer finishes deleting the full text
            setIsDeleting(false);
            setLoopNum(prev => prev + 1); // go to next word
            const delta = 100; // increase delta to reduce typing speed
            setDelta(delta);
        }
    }

    useEffect(() => {
        let writer = setInterval(() => {
            write();
        }, delta);

        return () => {
            clearInterval(writer);
        }
    }, [text]);

    return (
        <div id="home" className="banner">
            <Container className="reset_padding_margin">
                <Row className="reset_padding_margin">
                    <Col xs={12} md={6} xl={7} className="reset_padding_margin">
                        <JackInTheBox>
                            <h1>Hello there, I'm <span className="name-span">Steven.</span></h1>
                        </JackInTheBox>
                        <Zoom cascade triggerOnce>
                            <h2>
                                <div className="text-input-area">
                                    <div className="text-input-label">And I am a </div>
                                    <div className="text-input-text">
                                        <Briefcase className="icon text-input-text-briefcase" />
                                        <span>{text}<span className="text-cursor" /></span>
                                    </div>
                                </div>
                            </h2>
                            <p>
                                I am an undergraduate student at the National University of 
                                Singapore (NUS) studying Computer Science.
                            </p>
                            <Link activeClass="nav-button-active" to="skills" spy={true} smooth={true} offset={-10} duration={200}>
                                <Button className="button">Check it out <ArrowDown /></Button>
                            </Link>
                        </Zoom>
                    </Col>
                    <Col xs={12} md={6} xl ={5}>
                        {/* <Zoom triggerOnce> */}
                            <img src={cat} alt="Header Image" />
                        {/* </Zoom> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;