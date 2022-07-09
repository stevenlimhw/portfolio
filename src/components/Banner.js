import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const texts = ["Web Developer", "Frontend Developer", "Backend Developer"];
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
        <div className="banner" id="home">
            <Container>
                <Row className="">
                    <Col xs={12} md={6} xl={7}>
                        <div>Welcome to my Portfolio</div>
                        <h1>
                            Hello, I am a 
                            <span> {text}</span>
                        </h1>
                        <p>testing description</p>
                        <Button onClick={() => console.log("connect")}>Let's connect <ArrowRightCircle size={25} /></Button>
                    </Col>
                    <Col xs={12} md={6} xl ={5}>
                        <img alt="Header Image" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;