import { Button } from "react-bootstrap";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Navigation = () => {
    return (
      <div className='navbar-navbar'>
        {/* <h4 className="nav-button">PORTFOLIO</h4> */}
        <div className="navbar-links">
          <div className="nav-button">
            Home
          </div>
          <div className="nav-button">
            Skills
          </div>
          <div className="nav-button">
            Projects
          </div>
        </div>
        <div>
        <div className="nav-icons">
            <SiLinkedin color="white" size={40} />
            <SiGithub color="white" size={40} />
        </div>
        </div>
      </div>
    )
}

export default Navigation;