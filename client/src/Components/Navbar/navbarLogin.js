import * as React from "react";
import logo from "../../logo.svg";
import { Navbar, Container} from "react-bootstrap";



const navbarLogin = (props) => {
  const you = props?.languages;
  const navigate = props?.navigate;

  // const pathname = window.location.pathname;

  const goHome = (x) => {
    navigate("/", { state: { languages: `${x}` } });
  };
  return (
    <Navbar
      expand="lg"
      style={{ transition: "initial", boxShadow: "none", position: "initial" }}
    >
      <Container fluid style={{ backgroundColor: "transparent" }}>
        <Navbar.Brand href="/" onClick={()=>goHome(you)}>
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default navbarLogin;
