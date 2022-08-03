import { Zoom } from "react-awesome-reveal";
import sea from "../../src/assets/images/sea.jpg";

const Project = ({ title, type, stacks, description, imgUrl }) => {
    return (
        <div className="project">
            <Zoom triggerOnce>
                <div className="project-top">
                    {title}
                    <br />
                    <div className="project-type">{type}</div>
                </div>
                <div className="project-mid">
                    <img className="project-img" src={imgUrl} alt="img"/>
                </div>
                <div className="project-bot">
                    <i>{stacks}</i>
                    <br /><br />
                    {description}
                </div>
            </Zoom>
        </div>
    )
}

export default Project;