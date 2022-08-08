import { Button } from "react-bootstrap";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { Link } from "react-scroll/modules";

const Navigation = () => {
    return (
      <div className='navbar-navbar'>
        {/* <h4 className="nav-button">PORTFOLIO</h4> */}
        <div className="navbar-links">
          <div className="nav-button">
            <Link activeClass="nav-button-active" to="home" spy={true} smooth={true} offset={50} duration={200}>
              Home
            </Link>
          </div>
          <div className="nav-button">
            <Link activeClass="nav-button-active" to="skills" spy={true} smooth={true} offset={-10} duration={200}>
              Skills
            </Link>
          </div>
          <div className="nav-button">
            <Link activeClass="nav-button-active" to="projects" spy={true} smooth={true} offset={-10} duration={200}>
              Projects
            </Link>
          </div>
        </div>
        <div>
        <div className="nav-icons">
            <a href="https://www.linkedin.com/in/stevenlimhw/" target="_blank">
              <SiLinkedin color="white" size={40} />
            </a>
            <a href="https://github.com/stevenlimhw" target="_blank">
              <SiGithub color="white" size={40} />
            </a>
        </div>
        </div>
      </div>
    )
}

export default Navigation;