import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap";
import { FaLanguage, FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";

import { logoutUser } from "../../slices/auth";
import "./Navbar.css";

// import { Avatar } from "@mui/material";

const navbarHome2 = (props) => {
  const navigate = props?.navigate;
  const you = props?.languages;
  const dispatch = props?.dispatch;
  const value = props?.value;

  const goHome = (x) => {
    const pathname = window.location.pathname;
    if (pathname === "/In") {
      navigate("/In", { state: { languages: `${x}`, value: `${value}` } });
    } else if (pathname === "/Matching") {
      navigate("/Matching", {
        state: { languages: `${x}`, value: `${value}` },
      });
    } else if (pathname === "/Order") {
      navigate("/Order", { state: { languages: `${x}`, value: `${value}` } });
    } else if (pathname === "/Chat") {
      navigate("/Chat", { state: { languages: `${x}`, value: `${value}` } });
    } else if (pathname === "/Chats") {
      navigate("/Chats", { state: { languages: `${x}`, value: `${value}` } });
    } else if (pathname === "/Dashboard_freelance") {
      navigate("/Dashboard_freelance", {
        state: { languages: `${x}`, value: `${value}` },
      });
    } else {
      navigate("/Notification", {
        state: { languages: `${x}`, value: `${value}` },
      });
    }
  };

  const Logout = () => {
    dispatch(logoutUser());
    window.location.reload();
  };

  return (
    <Navbar expand="lg" id="navbardb2">
      <Container fluid>
        <Navbar.Brand>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          <Form className="d-flex">
            <div className="box4navbarHome2">
              <FaLanguage
                size="20px"
                color="#808080"
                style={{ float: "left" }}
              />
              {you === "English" ? (
                <NavDropdown
                  title="EN"
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 13,
                    float: "left",
                    padding: 0,
                  }}
                >
                  <NavDropdown.Item onClick={() => goHome("English")}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("Thai")}>
                    Thai
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("German")}>
                    German
                  </NavDropdown.Item>
                </NavDropdown>
              ) : you === "German" ? (
                <NavDropdown
                  title="DE"
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 13,
                    float: "left",
                    padding: 0,
                  }}
                >
                  <NavDropdown.Item onClick={() => goHome("English")}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("Thai")}>
                    Thai
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("German")}>
                    German
                  </NavDropdown.Item>
                </NavDropdown>
              ) : you === "Thai" ? (
                <NavDropdown
                  title="TH"
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 13,
                    float: "left",
                    padding: 0,
                  }}
                >
                  <NavDropdown.Item onClick={() => goHome("English")}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("Thai")}>
                    Thai
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("German")}>
                    German
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown
                  title="EN"
                  style={{
                    marginLeft: 10,
                    color: "#808080",
                    fontSize: 13,
                    float: "left",
                    padding: 0,
                  }}
                >
                  <NavDropdown.Item onClick={() => goHome("English")}>
                    English
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("Thai")}>
                    Thai
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => goHome("German")}>
                    German
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </div>

            <div className="box4navbarHome2">
              <FaMapMarkerAlt
                size="20px"
                color="#808080"
                style={{ float: "left" }}
              />
              <p
                style={{
                  marginLeft: 10,
                  color: "#808080",
                  fontSize: 13,
                  float: "left",
                }}
              >
                TH
              </p>
            </div>

            <div className="box4navbarHome2_1">
              <NavDropdown
                title={
                  <div className="icon_accounts">
                    <FaUserCircle alt="avatar" className="avatar" />
                  </div>
                }
                style={{
                  marginLeft: 10,
                  color: "#808080",
                  fontSize: 20,
                  float: "left",
                  padding: 0,
                }}
              >
                <NavDropdown.Item onClick={() => Logout()} className="Logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default navbarHome2;
