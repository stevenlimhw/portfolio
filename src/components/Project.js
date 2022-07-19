import sea from "../../src/assets/images/sea.jpg";

const Project = ({ title, description, imgUrl }) => {
    return (
        <div className="project">
            <div className="project-top">
                {title}
            </div>
            <div className="project-mid">
                <img className="project-img" src={sea} alt="img"/>
            </div>
            <div className="project-bot">
                {description}
            </div>
        </div>
    )
}

export default Project;