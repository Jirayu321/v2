import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container } from "react-bootstrap";



const navbarLogin = () => {
  return (
    <Navbar
      expand="lg"
      style={{ transition: "initial", boxShadow: "none", position: "initial" }}
    >
      <Container fluid style={{ backgroundColor: "transparent" }}>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div className="dd" style={{ left: width * 0.3 }}>
            <div className="box3">
              <text>Home</text>
            </div>
            <div className="box3">
              <text>Services</text>
              <MdArrowDropDown
                style={{
                  position: "absolute",
                  left: "240px",
                  width: "30px",
                  height: "50px",
                }}
              />
            </div>
            <div className="box3">
              <text>Blogs</text>
            </div>
            <div className="box3">
              <text>About us</text>
            </div>
          </div>
          <div className="dd" style={{ left: width * 0.895 }}>
            <button className="box2">
              <Link
                to="/Login"
                style={{
                  color: "#FFF0C1",
                  fontSize: 18,
                  lineHeight: 21,
                  textDecorationLine: "none",
                }}
              >
                Login
              </Link>
            </button>
          </div>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};
export default navbarLogin;
