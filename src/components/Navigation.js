import { Button } from "react-bootstrap";

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
      </div>
    )
}

export default Navigation;