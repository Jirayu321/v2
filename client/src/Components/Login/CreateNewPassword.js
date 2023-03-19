import * as React from "react";

import Navbars from "../Navbar/navbarLogin";

import { useNavigate, useLocation } from "react-router-dom";
import { FiEyeOff, FiEye } from "react-icons/fi";

import Login1 from "../../Images/login.png";

import IconButton from "@mui/material/IconButton";

const CreateNewPassword = () => {
  const { innerWidth: width } = window;
  const navigate = useNavigate();
  const location = useLocation();
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [values, setValues] = React.useState(false);
  const [values2, setValues2] = React.useState(false);

  let Email = location?.state?.email;
  let Type = location?.state?.type;
  console.log("test01:", Email, Type);
  const handleClickShowPassword = () => {
    if (type === "password") {
      setValues(!values);
      setType("text");
    } else if (type === "text") {
      setValues(!values);
      setType("password");
    }
  };

  const handleClickShowConfirmPassword = () => {
    if (type2 === "password") {
      setValues2(!values2);
      setType2("text");
    } else if (type2 === "text") {
      setValues2(!values2);
      setType2("password");
    }
  };

  const Save = () =>
    navigate("/Login", {
      state: {
        email: `${Email}`,
        password: `${password}`,
        type: `${Type}`,
      },
    });
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
              height: 460,
              background: " #FFFFFF",
              boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
              borderRadius: 20,
              padding: 30,
            }}
          >
            <div style={{ padding: 20 }}>
              <h2 className="textCreateNewPassword">Create New Password</h2>

              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    color: "#242424",
                  }}
                >
                  New password
                </p>
                <input
                  type={type}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your new password"
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
                />
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="end"
                  style={{ position: "absolute", right: 61, top: 190 }}
                >
                  {values ? <FiEye /> : <FiEyeOff />}
                </IconButton>
              </div>

              <div style={{ textAlign: "left" }}>
                <p
                  style={{
                    fontWeight: 500,
                    fontSize: 20,
                    color: "#242424",
                  }}
                >
                  Confirm new password
                </p>
                <input
                  type={type2}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="Enter your new password"
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
                />
                <IconButton
                  onClick={handleClickShowConfirmPassword}
                  edge="end"
                  style={{ position: "absolute", right: 61, top: 282 }}
                >
                  {values2 ? <FiEye /> : <FiEyeOff />}
                </IconButton>
              </div>

              <button
                style={{
                  width: "100%",
                  borderRadius: 20,
                  background: "#001E33",
                  height: 40,
                  color: "#FFFFFF",
                  fontSize: 18,
                  borderColor: "transparent",
                  marginBottom: 30,
                  marginTop: 25,
                }}
                onClick={Save}
              >
                <p
                  style={{
                    color: "#FFFFFF",
                    fontSize: 18,
                    textDecorationLine: "none",
                    fontWeight: 500,
                  }}
                >
                  Save
                </p>
              </button>
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
export default CreateNewPassword;
