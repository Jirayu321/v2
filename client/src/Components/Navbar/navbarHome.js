import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { overviewEN, overviewTH, overviewDE } from "../Data/DataLanguage";
// import { Link } from "react-router-dom";
import "./Navbar.css";

const navbarHome = (props) => {
  // const { innerWidth: width } = window;
  const you = props?.languages;
  const pathname = window.location.pathname;
  const navigate = props?.navigate;

  const promotion = (x) => {
    if (x === 1) {
      window.scrollTo(0, 500);
    } else {
      window.scrollTo(0, 1250);
    }
  };

  const gologin = (x) => {
    navigate("/Login", { state: { languages: `${x}` } });
  };

  const goHome = (x) => {
    navigate("/", { state: { languages: `${x}`, accept: true } });
  };

  return (
    <Navbar
      expand="lg"
      style={{ transition: "initial", boxShadow: "none", position: "initial" }}
    >
      <Container fluid style={{ backgroundColor: "transparent" }}>
        <Navbar.Brand href="/" onClick={() => goHome(you)}>
          <div style={{ left: "40%", position: "relative" }}>
            <img src={logo} alt="Logo" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <>
            <div className="dd">
              {pathname === "/" || pathname === "/Home/Order/Customer" ? (
                <div className="NavLi">
                  <p className="textNavA">
                    {overviewEN[0].label}
                    {/* home */}
                  </p>
                </div>
              ) : (
                <div className="NavLi">
                  <p className="textNavO">
                    {overviewEN[0].label}
                    {/* home */}
                  </p>
                </div>
              )}

              {pathname === "/AboutUs" ? (
                <div
                  className="NavLi"
                  style={{ color: "black" }}
                  onClick={() => promotion(2)}
                >
                  <p className="textNavA">About us</p>
                </div>
              ) : (
                <div
                  className="NavLi"
                  style={{ color: "black" }}
                  // onClick={() => goHome(you)}
                >
                  <p className="textNavO">About us</p>
                </div>
              )}
              {pathname === "/General_Document" ||
              pathname === "/Official Document" ? (
                <NavDropdown
                  className="NavLi"
                  // onClick={() => promotion(1)}
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 20,
                    float: "left",
                    padding: 0,
                  }}
                  title={
                    <div className="icon_accounts">
                      <p className="textNavA">Services</p>
                    </div>
                  }
                >
                  <NavDropdown.Item>General Document</NavDropdown.Item>
                  <NavDropdown.Item>Official Document</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  className="NavLi"
                  // onClick={() => promotion(1)}
                  style={{
                    // marginLeft: 10,
                    color: "#808080",
                    fontSize: 20,
                    float: "left",
                    padding: 0,
                  }}
                  title={
                    <div>
                      <p className="textNavO">Services</p>
                    </div>
                  }
                >
                  <NavDropdown.Item>General Document</NavDropdown.Item>
                  <NavDropdown.Item>Official Document</NavDropdown.Item>
                </NavDropdown>
              )}

              {pathname === "/Price" ? (
                <div className="NavLi" onClick={() => promotion(1)}>
                  <p className="textNavA">Price</p>
                </div>
              ) : (
                <div className="NavLi" onClick={() => goHome(you)}>
                  <p className="textNavO">Price</p>
                </div>
              )}
            </div>

            <div className="dd2">
              <button
                className="buttonLogin"
                onClick={() => gologin("English")}
              >
                <p
                  style={{
                    color: "#FFFF",
                    fontSize: 18,
                    lineHeight: 21,
                    textDecorationLine: "none",
                  }}
                >
                  {overviewEN[4].label}
                </p>
              </button>
            </div>
          </>

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default navbarHome;
