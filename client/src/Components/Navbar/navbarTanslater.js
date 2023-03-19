import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container, Form, Nav } from "react-bootstrap";
import "./Navbar.css";
import { FaLanguage, FaMapMarkerAlt ,FaUserCircle} from "react-icons/fa";
// import { Avatar } from "@mui/material";

const navbarTanslater = () => {
  return (
    <Navbar expand="lg" id="navbarTranslater">
      <Container fluid>
        <Navbar.Brand href="/In">
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
            <div className="boxTranslate">
              <FaLanguage
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
                EN
              </p>
            </div>

            <div className="boxTranslate">
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
                US
              </p>
            </div>

            <div className="box4navbarHome2_1" style={{ width: 40 }}>
              <FaUserCircle
                alt="avatar"
                style={{ width: "98%",color:"#3333" }}
              />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default navbarTanslater;

