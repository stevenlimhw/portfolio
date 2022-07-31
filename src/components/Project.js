import { Zoom } from "react-awesome-reveal";
import sea from "../../src/assets/images/sea.jpg";

const Project = ({ title, description, imgUrl }) => {
    return (
        <div className="project">
            <Zoom triggerOnce>
                <div className="project-top">
                    {title}
                </div>
                <div className="project-mid">
                    <img className="project-img" src={sea} alt="img"/>
                </div>
                <div className="project-bot">
                    {description}
                </div>
            </Zoom>
        </div>
    )
}

export default Project;