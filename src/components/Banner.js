import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowDown, Briefcase } from "react-bootstrap-icons";
import cat from '../assets/images/cat.png';

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
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <h1>Hello there, I'm Steven.</h1>
                        <h2>
                            <div className="text-input-area">
                                <div className="text-input-label">And I am a </div>
                                <div className="text-input-text">
                                    <Briefcase className="icon" />
                                    <span>{text}<span className="text-cursor" /></span>
                                </div>
                            </div>
                        </h2>
                        <p>
                            I am an undergraduate student at the National University of 
                            Singapore (NUS) studying Computer Science.
                        </p>
                        <Button className="button">About Me <ArrowDown /></Button>
                    </Col>
                    <Col xs={12} md={6} xl ={5}>
                        <img src={cat} alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;