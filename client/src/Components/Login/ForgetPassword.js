import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbars from "../Navbar/navbarLogin";

import Login1 from "../../Images/login.png";

import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Link, useNavigate, useLocation } from "react-router-dom";

const ForgetPassword = () => {
  const { innerWidth: width } = window;
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = React.useState("");
  let Type = location?.state?.type;
  console.log("test02:", Type);
  const send_Mail = (e) => {
    e.preventDefault();
    console.log("form.current:", form.current);
    emailjs
      .sendForm(
        "service_u5757dr",
        "template_xxze5ke",
        form.current,
        "Npnv-PIsN0-rxduac"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    navigate("/CreateNewPassword", {
      state: {
        email: `${email}`,
        type: `${Type}`,
      },
    });
  };

  return (
    <>
      <header
        className="App-header"
        style={{ color: "transparent", position: "absolute" }}
      >
        <Navbars />
      </header>
      <div>
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: " -webkit-fill-available",
            background: "#66C0FE",
          }}
        >
          <img
            src={Login1}
            alt="Login"
            style={{ width: 460, position: "absolute", top: " 10%", left: 100 }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "-webkit-fill-available",
            left: "50%",
            background: "#FFF3CC",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: 130,
              left: width * 0.59,
              textAlign: "-webkit-center",
              width: 500,
              background: " #FFFFFF",
              boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: 20,
              padding: 30,
            }}
          >
            <div
              style={{
                fontWeight: 400,
                fontSize: 18,
                textDecorationLine: "none",
                color: "#D9D9D9",
                textAlign: "left",
                marginBottom: 20,
                float: "left",
              }}
            >
              <BsArrowLeftShort />
              <Link
                to="/"
                style={{
                  color: "#D9D9D9",
                  fontSize: 18,
                  textDecorationLine: "none",
                }}
              >
                Home
              </Link>
            </div>
            <div
              style={{
                fontWeight: 400,
                textAlign: "right",
                marginBottom: 20,
                float: "right",
                color: "#D9D9D9",
              }}
            >
              <Link
                to="/Signup"
                style={{
                  color: "#D9D9D9",
                  fontSize: 18,
                  textDecorationLine: "none",
                }}
              >
                Sign up
              </Link>
              <BsArrowRightShort />
            </div>

            <div style={{ padding: 20 }}>
              <h2 className="textForgetPassword">Forgot Password</h2>
              <div
                style={{
                  color: "#858585",
                  margin: 20,
                  marginLeft: 0,
                  marginRight: 0,
                  fontSize: 13,
                }}
              >
                <p>
                  Enter your email to receive a link to change your password.
                </p>
              </div>
              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    color: "#242424",
                  }}
                >
                  E-mail
                </p>
                <form ref={form} onSubmit={send_Mail}>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Example@mail.com"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #F1F1F1",
                      borderRadius: 20,
                      width: "100%",
                      height: 30,
                      padding: 20,
                      paddingLeft: 12,
                      margin: 10,
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: "#001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 50,
                      marginTop: 30,
                    }}
                    type="submit"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          </div>

          <div style={{ top: "90%", position: "absolute", marginLeft: "25%" }}>
            <div style={{ float: "right" }}>
              <p>Privacy policy</p>
            </div>
            <div style={{ float: "right", marginRight: 50 }}>
              <p>Copyrights Give Network 2021.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForgetPassword;
