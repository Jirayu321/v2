import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container, Form, Nav } from "react-bootstrap";

import { FaLanguage, FaMapMarkerAlt } from "react-icons/fa";
// import { Avatar, Paper, IconButton, InputBase } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
import { Avatar} from "@mui/material";

const navbarHome2 = () => {
  return (
    <Navbar expand="lg" id="navbardb2">
      <Container fluid>
        <Navbar.Brand href="/Chat">
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
            <div className="box4">
              <FaLanguage size="28px" color="#034D82" />
              <h6 style={{ paddingTop: 10, marginLeft: 10 }}>EN</h6>
            </div>
            <div className="box4">
              <FaMapMarkerAlt size="20px" color="#034D82" />
              <h6 style={{ paddingTop: 10, marginLeft: 10 }}>US</h6>
            </div>
            <div className="box4" style={{ width: 40 }}>
              <Avatar
                alt="avatar"
                src={require("../../Images/Avatar2.png")}
                id={"avatar3"}
                style={{ width: "98%" }}
              />
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default navbarHome2;
