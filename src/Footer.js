import { Fade, Zoom } from "react-awesome-reveal";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <div className="footer">
                <Zoom>
                <div className="footer-wrapper">
                    <div className="footer-heading">Connect with me</div>
                    <div className="footer-icons">
                        <a href="https://www.linkedin.com/in/stevenlimhw/">
                            <SiLinkedin color="white" size={40} />
                        </a>
                        <a href="https://github.com/stevenlimhw">
                            <SiGithub color="white" size={40} />
                        </a>
                    </div>
                </div>
                </Zoom>
            </div>
    )
}

export default Footer;