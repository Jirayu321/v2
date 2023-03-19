import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container, Form, Nav } from "react-bootstrap";

import { FaLanguage, FaMapMarkerAlt } from "react-icons/fa";


const Navbars = () => {
  return (
    <Navbar  expand="lg" id="navbardb" >
      <Container fluid >
        <Navbar.Brand href="/Dashboard_freelance">
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
            <div className="box">
              <FaLanguage size="28px" color="#FAEEC3" />
              <h6 style={{ color: "#FAEEC3", paddingTop: 10, marginLeft: 10 }}>
                EN
              </h6>
            </div>
            <div className="box">
              <FaMapMarkerAlt size="20px" color="#FAEEC3" />
              <h6 style={{ color: "#FAEEC3", paddingTop: 10, marginLeft: 10 }}>
                US
              </h6>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navbars;
