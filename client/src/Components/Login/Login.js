import * as React from "react";

import Navbars from "../Navbar/navbarLogin";

import { FiEyeOff, FiEye } from "react-icons/fi";

import Login1 from "../../Images/login.png";

import { Formik } from "formik";
import IconButton from "@mui/material/IconButton";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../slices/auth";

import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  LOGI01_Box1EN,
  LOGI01_Box1TH,
  LOGI01_Box1DE,
} from "../Data/DataLanguage";

import "./Login.css";

const Login = () => {
  const { innerWidth: width } = window;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const auth = useSelector((state) => state.auth);

  const [type, setType] = React.useState("password");
  const [value, setValue] = React.useState(false);
  // const [se, setSe] = React.useState("");

  // const pathname = window.location.pathname;

  let Doc = location?.state?.languages;

  const goSignup = (x) => {
    navigate("/Signup", { state: { languages: `${x}` } });
  };

  const goHome = (x) => {
    navigate("/", { state: { languages: `${x}` } });
  };

  const handleClickShowPassword = () => {
    if (type === "password") {
      setValue(!value);
      setType("text");
    } else if (type === "text") {
      setValue(!value);
      setType("password");
    }
  };

  function login(x, y) {
    const data = { email: x, password: y };
    dispatch(loginUser(data));

    const type = auth.type;
    console.log(type);
    if (type === "customer") {
      navigate("/In", {
        state: {
          languages: `${Doc}`,
        },
      });
    } else if (type === "translators") {
      navigate("/Dashboard_freelance");
    }
  }

  return (
    <>
      <header
        className="App-header"
        style={{ color: "transparent", position: "absolute" }}
      >
        {Doc === undefined ? (
          <Navbars navigate={navigate} languages="English" />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" />
        ) : (
          <Navbars navigate={navigate} languages="English" />
        )}
      </header>

      {/* {Doc === "English" ? (
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
              style={{
                width: 460,
                position: "absolute",
                top: " 10%",
                left: 100,
              }}
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
                  textAlign: "left",
                  marginBottom: 20,
                  float: "left",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => goHome("English")}
              >
                <p id={"Hometext"}>{LOGI01_Box1EN[0].label}</p>
                <BsArrowLeftShort id={"Hometext2"} />
              </div>

              <button
                style={{
                  fontWeight: 400,
                  textAlign: "right",
                  marginBottom: 20,
                  float: "right",
                  color: "#D9D9D9",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => goSignup("English")}
              >
                <p id={"Signuptext"}>{LOGI01_Box1EN[1].label}</p>
                <BsArrowRightShort id={"Signuptext2"} />
              </button>

              <div style={{ padding: 20 }}>
                <h2 className="textLogin">Login</h2>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    if (values) {
                      console.log(
                        "กำลัง set :",
                        values?.email,
                        values?.password
                      );
                      setUser({
                        email: values?.email,
                      });
                      login();
                    }

                    // setTimeout(() => {
                    //   setSubmitting(false);
                    // }, 400);

                    // if (Type === "5") {
                    //   if (email === `${Email}` && password === `${Password}`) {
                    //     setTimeout(() => {
                    //       navigate("/In", {
                    //         state: {
                    //           languages: `${Doc}`,
                    //           value: values,
                    //         },
                    //       })
                    //       setSubmitting(false);
                    //     }, 400);
                    //   }
                    // } else if (Type === "14") {
                    //   if (email === `${Email}` && password === `${Password}`) {
                    //     setTimeout(() => {
                    //       navigate("/Dashboard_freelance");
                    //       setSubmitting(false);
                    //     }, 400);
                    //   }
                    // } else if (Type === "16") {
                    //   if (email === `${Email}` && password === `${Password}`) {
                    //     setTimeout(() => {
                    //       navigate("/Dashboard_freelance");
                    //       setSubmitting(false);
                    //     }, 400);
                    //   }
                    // } else {
                    //   console.log("err:", "มันไม่");
                    //   setSubmitting(false);
                    // }
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                        }}
                      >
                        {LOGI01_Box1EN[3].label}
                      </p>
                      <input
                        type="email"
                        name="email"
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                        }}
                      >
                        {LOGI01_Box1EN[4].label}
                      </p>
                      <div>
                        <input
                          type={type}
                          name="password"
                          placeholder="Enter your password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="on"
                          value={values.password}
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
                          style={{ position: "absolute", right: 61, top: 273 }}
                        >
                          {value ? <FiEye /> : <FiEyeOff />}
                        </IconButton>
                      </div>
                      {errors.email && touched.email && errors.email}
                      {errors.password && touched.password && errors.password}
                      <Link
                      to="/ForgetPassword"
                        style={{
                          float: "right",
                          background: "transparent",
                          border: "none",
                        }}
                        className="ForgetPassword"
                        // onClick={() => goForgetPassword("English")}
                      >
                        <p id={"forpassworttext"}>{LOGI01_Box1EN[6].label}</p>
                      </Link>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          width: "100%",
                          borderRadius: 20,
                          background: "#001E33",
                          height: 40,
                          color: "#FFFFFF",
                          fontSize: 18,
                          borderColor: "transparent",
                          marginBottom: 20,
                          marginTop: 30,
                        }}
                      >
                        {LOGI01_Box1EN[2].label}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>

            <div
              style={{ top: "90%", position: "absolute", marginLeft: "25%" }}
            >
              <div style={{ float: "right" }}>
                <p>{LOGI01_Box1EN[8].label}</p>
              </div>
              <div style={{ float: "right", marginRight: 50 }}>
                <p>{LOGI01_Box1EN[7].label}</p>
              </div>
            </div>
          </div>
        </div>
      ) : Doc === "Thai" ? (
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
              style={{
                width: 460,
                position: "absolute",
                top: " 10%",
                left: 100,
              }}
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
                  textAlign: "left",
                  marginBottom: 20,
                  float: "left",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => goHome("Thai")}
              >
                <p id={"Hometext"}>{LOGI01_Box1TH[0].label}</p>
                <BsArrowLeftShort id={"Hometext2"} />
              </div>

              <button
                style={{
                  fontWeight: 400,
                  textAlign: "right",
                  marginBottom: 20,
                  float: "right",
                  color: "#D9D9D9",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => goSignup("Thai")}
              >
                <p id={"Signuptext"}>{LOGI01_Box1TH[1].label}</p>
                <BsArrowRightShort id={"Signuptext2"} />
              </button>

              <div style={{ padding: 20 }}>
                <h2 className="textLogin">Login</h2>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const email = values?.email;
                    const password = values?.password;
                    if (Type === "5") {
                      if (email === `${Email}` && password === `${Password}`) {
                        setTimeout(() => {
                          navigate("/In", {
                            state: {
                              languages: `${Doc}`,
                              value: values,
                            },
                          });
                          setSubmitting(false);
                        }, 400);
                      }
                    } else if (Type === "14") {
                      if (email === `${Email}` && password === `${Password}`) {
                        setTimeout(() => {
                          navigate("/Dashboard_freelance");
                          setSubmitting(false);
                        }, 400);
                      }
                    } else if (Type === "16") {
                      if (email === `${Email}` && password === `${Password}`) {
                        setTimeout(() => {
                          navigate("/Dashboard_freelance");
                          setSubmitting(false);
                        }, 400);
                      }
                    } else {
                      console.log("err:", "มันไม่");
                      setSubmitting(false);
                    }
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                        }}
                      >
                        {LOGI01_Box1TH[3].label}
                      </p>
                      <input
                        type="email"
                        name="email"
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                        }}
                      >
                        {LOGI01_Box1TH[4].label}
                      </p>
                      <div>
                        <input
                          type={type}
                          name="password"
                          placeholder="ใส่รหัสผ่านของคุณ"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="on"
                          value={values.password}
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
                          style={{ position: "absolute", right: 61, top: 273 }}
                        >
                          {value ? <FiEye /> : <FiEyeOff />}
                        </IconButton>
                      </div>
                      {errors.email && touched.email && errors.email}
                      {errors.password && touched.password && errors.password}
                      <Link
                      to="/ForgetPassword"
                        style={{
                          float: "right",
                          background: "transparent",
                          border: "none",
                        }}
                        className="ForgetPassword"
                        // onClick={() => goForgetPassword("English")}
                      >
                        <p id={"forpassworttext"}>{LOGI01_Box1TH[6].label}</p>
                      </Link>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          width: "100%",
                          borderRadius: 20,
                          background: "#001E33",
                          height: 40,
                          color: "#FFFFFF",
                          fontSize: 18,
                          borderColor: "transparent",
                          marginBottom: 20,
                          marginTop: 30,
                        }}
                      >
                        {LOGI01_Box1TH[2].label}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>

            <div
              style={{ top: "90%", position: "absolute", marginLeft: "25%" }}
            >
              <div style={{ float: "right" }}>
                <p>{LOGI01_Box1TH[8].label}</p>
              </div>
              <div style={{ float: "right", marginRight: 50 }}>
                <p>{LOGI01_Box1TH[7].label}</p>
              </div>
            </div>
          </div>
        </div>
      ) : Doc === "German" ? (
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
              style={{
                width: 460,
                position: "absolute",
                top: " 10%",
                left: 100,
              }}
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
                  textAlign: "left",
                  marginBottom: 20,
                  float: "left",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => goHome("German")}
              >
                <p id={"Hometext"}>{LOGI01_Box1DE[0].label}</p>
                <BsArrowLeftShort id={"Hometext2"} />
              </div>

              <button
                style={{
                  fontWeight: 400,
                  textAlign: "right",
                  marginBottom: 20,
                  float: "right",
                  color: "#D9D9D9",
                  background: "transparent",
                  border: "none",
                }}
                onClick={() => goSignup("German")}
              >
                <p id={"Signuptext"}>{LOGI01_Box1DE[1].label}</p>
                <BsArrowRightShort id={"Signuptext2"} />
              </button>

              <div style={{ padding: 20 }}>
                <h2 className="textLogin">Login</h2>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Required";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    const email = values?.email;
                    const password = values?.password;
                    if (Type === "5") {
                      if (email === `${Email}` && password === `${Password}`) {
                        setTimeout(() => {
                          navigate("/In", {
                            state: {
                              languages: `${Doc}`,
                              value: values,
                            },
                          });
                          setSubmitting(false);
                        }, 400);
                      }
                    } else if (Type === "14") {
                      if (email === `${Email}` && password === `${Password}`) {
                        setTimeout(() => {
                          navigate("/Dashboard_freelance");
                          setSubmitting(false);
                        }, 400);
                      }
                    } else if (Type === "16") {
                      if (email === `${Email}` && password === `${Password}`) {
                        setTimeout(() => {
                          navigate("/Dashboard_freelance");
                          setSubmitting(false);
                        }, 400);
                      }
                    } else {
                      console.log("err:", "มันไม่");
                      setSubmitting(false);
                    }
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                        }}
                      >
                        {LOGI01_Box1DE[3].label}
                      </p>
                      <input
                        type="email"
                        name="email"
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: "#242424",
                          textAlign: "left",
                        }}
                      >
                        {LOGI01_Box1DE[4].label}
                      </p>
                      <div>
                        <input
                          type={type}
                          name="password"
                          placeholder="Enter your Passwort"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="on"
                          value={values.password}
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
                          style={{ position: "absolute", right: 61, top: 273 }}
                        >
                          {value ? <FiEye /> : <FiEyeOff />}
                        </IconButton>
                      </div>
                      {errors.email && touched.email && errors.email}
                      {errors.password && touched.password && errors.password}
                      <Link
                      to="/ForgetPassword"
                        style={{
                          float: "right",
                          background: "transparent",
                          border: "none",
                        }}
                        className="ForgetPassword"
                        // onClick={() => goForgetPassword("English")}
                      >
                        <p id={"forpassworttext"}>{LOGI01_Box1DE[6].label}</p>
                      </Link>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                          width: "100%",
                          borderRadius: 20,
                          background: "#001E33",
                          height: 40,
                          color: "#FFFFFF",
                          fontSize: 18,
                          borderColor: "transparent",
                          marginBottom: 20,
                          marginTop: 30,
                        }}
                      >
                        {LOGI01_Box1DE[2].label}
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>

            <div
              style={{ top: "90%", position: "absolute", marginLeft: "25%" }}
            >
              <div style={{ float: "right" }}>
                <p>{LOGI01_Box1DE[8].label}</p>
              </div>
              <div style={{ float: "right", marginRight: 50 }}>
                <p>{LOGI01_Box1DE[7].label}</p>
              </div>
            </div>
          </div>
        </div>
      ) : ( */}
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
            style={{
              width: 460,
              position: "absolute",
              top: " 10%",
              left: 100,
            }}
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
                textAlign: "left",
                marginBottom: 20,
                float: "left",
                background: "transparent",
                border: "none",
              }}
              onClick={() => goHome("English")}
            >
              <p id={"Hometext"}>{LOGI01_Box1EN[0].label}</p>
              <BsArrowLeftShort id={"Hometext2"} />
            </div>

            <button
              style={{
                fontWeight: 400,
                textAlign: "right",
                marginBottom: 20,
                float: "right",
                color: "#D9D9D9",
                background: "transparent",
                border: "none",
              }}
              onClick={() => goSignup("English")}
            >
              <p id={"Signuptext"}>{LOGI01_Box1EN[1].label}</p>
              <BsArrowRightShort id={"Signuptext2"} />
            </button>

            <div style={{ padding: 20 }}>
              <h2 className="textLogin">Login</h2>

              <Formik
                initialValues={{ email: "", password: "" }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  if (values) {
                    const email = values?.email;
                    const password = values?.password;
                    login(email, password);
                    setSubmitting(false);
                  } else {
                    console.log("err:", "มันไม่ได้");
                    setSubmitting(false);
                  }
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",
                        textAlign: "left",
                      }}
                    >
                      {LOGI01_Box1EN[3].label}
                    </p>
                    <input
                      type="email"
                      name="email"
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#242424",
                        textAlign: "left",
                      }}
                    >
                      {LOGI01_Box1EN[4].label}
                    </p>
                    <div>
                      <input
                        type={type}
                        name="password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="on"
                        value={values.password}
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
                        style={{ position: "absolute", right: 61, top: 273 }}
                      >
                        {value ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>
                    {errors.email && touched.email && errors.email}
                    {errors.password && touched.password && errors.password}
                    <Link
                      to="/ForgetPassword"
                      className="ForgetPassword"
                      // onClick={() => goForgetPassword("English")}
                    >
                      <p id={"forpassworttext"}>{LOGI01_Box1EN[6].label}</p>
                    </Link>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: "#001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginBottom: 20,
                        marginTop: 30,
                      }}
                    >
                      {LOGI01_Box1EN[2].label}
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </div>

          <div style={{ top: "90%", position: "absolute", marginLeft: "25%" }}>
            <div style={{ float: "right" }}>
              <p>{LOGI01_Box1EN[8].label}</p>
            </div>
            <div style={{ float: "right", marginRight: 50 }}>
              <p>{LOGI01_Box1EN[7].label}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
