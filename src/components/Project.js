import { Col } from "react-bootstrap";

const Project = ({ title, description, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </Col>
    )
}

export default Project;