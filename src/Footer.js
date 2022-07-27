import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-heading">Connect with me</div>
                <div className="footer-icons">
                    <SiLinkedin color="white" size={40} />
                    <SiGithub color="white" size={40} />
                </div>
            </div>
        </div>
    )
}

export default Footer;