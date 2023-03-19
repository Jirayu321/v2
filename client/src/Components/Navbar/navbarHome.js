import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container, Nav } from "react-bootstrap";
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
          {you === "English" ? (
            <>
              <div className="dd">
                <div className="NavLi">
                  <p
                    style={{ fontWeight: "bold", fontSize: 24, lineHeight: 28 }}
                  >
                    {overviewEN[0].label}
                  </p>
                </div>
                {pathname === "/" ? (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => promotion(2)}
                  >
                    <p>{overviewEN[1].label}</p>
                  </div>
                ) : (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    // onClick={() => goHome(you)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 21,
                        textDecorationLine: "none",
                        color: "black",
                      }}
                    >
                      {overviewEN[1].label}
                    </p>
                  </div>
                )}
                <div
                  className="NavLi"
                  // onClick={() => promotion(1)}
                  style={{ color: "black" }}
                >
                  <p>{overviewEN[2].label}</p>
                </div>

                {pathname === "/" ? (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => promotion(1)}
                  >
                    <p>{overviewEN[3].label}</p>
                  </div>
                ) : (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => goHome(you)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 21,
                        textDecorationLine: "none",
                        color: "black",
                      }}
                    >
                      {overviewEN[3].label}
                    </p>
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
          ) : you === "German" ? (
            <>
              <div className="dd">
                <div className="NavLi">
                  <p
                    style={{ fontWeight: "bold", fontSize: 24, lineHeight: 28 }}
                  >
                    {overviewDE[0].label}
                  </p>
                </div>
                {pathname === "/" ? (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => promotion(2)}
                  >
                    <p>{overviewDE[1].label}</p>
                  </div>
                ) : (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    // onClick={() => goHome(you)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 21,
                        textDecorationLine: "none",
                        color: "black",
                      }}
                    >
                      {overviewDE[1].label}
                    </p>
                  </div>
                )}
                <div
                  className="NavLi"
                  // onClick={() => promotion(1)}
                  style={{ color: "black" }}
                >
                  <p>{overviewDE[2].label}</p>
                </div>

                {pathname === "/" ? (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => promotion(1)}
                  >
                    <p>{overviewDE[3].label}</p>
                  </div>
                ) : (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => goHome(you)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 21,
                        textDecorationLine: "none",
                        color: "black",
                      }}
                    >
                      {overviewDE[3].label}
                    </p>
                  </div>
                )}
              </div>

              <div className="dd2">
                <button
                  className="buttonLogin"
                  onClick={() => gologin("German")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewDE[4].label}
                  </p>
                </button>
              </div>
            </>
          ) : you === "Thai" ? (
            <>
              <div className="dd">
                <div className="NavLi">
                  <p
                    style={{ fontWeight: "bold", fontSize: 24, lineHeight: 28 }}
                  >
                    {overviewTH[0].label}
                  </p>
                </div>
                {pathname === "/" ? (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => promotion(2)}
                  >
                    <p>{overviewTH[1].label}</p>
                  </div>
                ) : (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    // onClick={() => goHome(you)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 21,
                        textDecorationLine: "none",
                        color: "black",
                      }}
                    >
                      {overviewTH[1].label}
                    </p>
                  </div>
                )}
                <div
                  className="NavLi"
                  // onClick={() => promotion(1)}
                  style={{ color: "black" }}
                >
                  <p>{overviewTH[2].label}</p>
                </div>

                {pathname === "/" ? (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => promotion(1)}
                  >
                    <p>{overviewTH[3].label}</p>
                  </div>
                ) : (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => goHome(you)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 21,
                        textDecorationLine: "none",
                        color: "black",
                      }}
                    >
                      {overviewTH[3].label}
                    </p>
                  </div>
                )}
              </div>

              <div className="dd2">
                <button className="buttonLogin" onClick={() => gologin("Thai")}>
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewTH[4].label}
                  </p>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="dd" style={{ left: "30%" }}>
                <div className="NavLi">
                  <p
                    style={{ fontWeight: "bold", fontSize: 24, lineHeight: 28 }}
                  >
                    {overviewEN[0].label}
                  </p>
                </div>
                {pathname === "/" ? (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => promotion(2)}
                  >
                    <p>{overviewEN[1].label}</p>
                  </div>
                ) : (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    // onClick={() => goHome(you)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 21,
                        textDecorationLine: "none",
                        color: "black",
                      }}
                    >
                      {overviewEN[1].label}
                    </p>
                  </div>
                )}
                <div
                  className="NavLi"
                  // onClick={() => promotion(1)}
                  style={{ color: "black" }}
                >
                  <p>{overviewEN[2].label}</p>
                </div>

                {pathname === "/" ? (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => promotion(1)}
                  >
                    <p>{overviewEN[3].label}</p>
                  </div>
                ) : (
                  <div
                    className="NavLi"
                    style={{ color: "black" }}
                    onClick={() => goHome(you)}
                  >
                    <p
                      style={{
                        fontSize: 18,
                        lineHeight: 21,
                        textDecorationLine: "none",
                        color: "black",
                      }}
                    >
                      {overviewEN[3].label}
                    </p>
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
          )}

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
