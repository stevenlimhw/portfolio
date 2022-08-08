import { Fade, Zoom } from "react-awesome-reveal";
import { TbArrowForward } from "react-icons/tb";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <div className="footer">
                <Zoom>
                <div className="footer-wrapper">
                    <div className="footer-heading">Connect with me</div>
                    <div className="footer-description">Contact me on LinkedIn for my resume.</div>
                    <div className="footer-icons">
                        {/* <TbArrowForward color="white" size={40}/> */}
                        <a href="https://www.linkedin.com/in/stevenlimhw/" target="_blank">
                            <SiLinkedin color="white" size={40} />
                        </a>
                        <a href="https://github.com/stevenlimhw" target="_blank">
                            <SiGithub color="white" size={40} />
                        </a>
                    </div>
                </div>
                </Zoom>
            </div>
    )
}

export default Footer;