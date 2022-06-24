import { Component } from "react";
import { Props } from "../interfaces/Props";
import { Link } from "react-router-dom";
import DropDown from "react-bootstrap/Dropdown";

class Navbar extends Component<Props> {
  logout = () => {
    this.props.changeState();
    this.props.logout();
  };

  render() {
    let buttons;
    if (this.props.isLoggedIn) {
      buttons = (
        <ul className="navbar-nav ms-auto">
          <li>
            <DropDown>
              <DropDown.Toggle variant="dark" id="dropdown-basic">
                Publicaciones
              </DropDown.Toggle>
              <DropDown.Menu>
                <DropDown.Item className="dropdown-item">
                  <Link className="nav-link text-dark" to="/create-post">
                    Create Post
                  </Link>
                </DropDown.Item>
                <DropDown.Item className="dropdown-item">
                  <Link className="nav-link text-dark" to="/all-posts">
                    All Posts
                  </Link>
                </DropDown.Item>
                <DropDown.Item className="dropdown-item">
                  <Link className="nav-link text-dark" to="/my-posts">
                    My Posts
                  </Link>
                </DropDown.Item>
              </DropDown.Menu>
            </DropDown>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login" onClick={this.logout}>
              Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      buttons = (
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            React App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            {buttons}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
