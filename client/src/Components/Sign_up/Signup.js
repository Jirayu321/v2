import * as React from "react";
// import emailjs from "@emailjs/browser";
import Navbars from "../Navbar/navbarLogin";

//test
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../slices/auth";

import { data, data5 } from "../Data/data";
import logo from "../../logo.svg";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { FiEyeOff, FiEye, FiImage } from "react-icons/fi";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCameraAlt, MdArrowDropDown } from "react-icons/md";
import Login1 from "../../Images/Sign_up.png";

import {
  REGI01_box1EN,
  REGI01_box1DE,
  REGI01_box1TH,
  REGI01_box2EN,
  REGI01_box2DE,
  REGI01_box2TH,
  REGI01_box3EN,
  REGI01_box3DE,
  REGI01_box3TH,
  REGI01_box4EN,
  REGI01_box4DE,
  REGI01_box4TH,
  REGI01_box5EN,
  REGI01_box5DE,
  REGI01_box5TH,

  // RegisterTranslator
  REGI02_Box1v02EN,
  REGI02_Box1v02DE,
  REGI02_Box1v02TH,
  REGI02_Box2v02EN,
  REGI02_Box2v02DE,
  REGI02_Box2v02TH,
  REGI02_Box4v01EN,
  REGI02_Box4v01DE,
  REGI02_Box4v01TH,
  REGI02_Box3v02EN,
  REGI02_Box3v02DE,
  REGI02_Box3v02TH,
  REGI02_Box5v02EN,
  REGI02_Box5v02DE,
  REGI02_Box5v02TH,
  REGI02_box5EN,
  REGI02_box5DE,
  REGI02_box5TH,

  // Freelance
  REGI02_Box1v01EN,
  REGI02_Box1v01DE,
  REGI02_Box1v01TH,
  REGI02_Box2v01EN,
  REGI02_Box2v01DE,
  REGI02_Box2v01TH,
  REGI02_Box3v01EN,
  REGI02_Box3v01DE,
  REGI02_Box3v01TH,
  REGI02_Box5v01EN,
  REGI02_Box5v01DE,
  REGI02_Box5v01TH,
  REGI02_Box6EN,
  REGI02_Box6DE,
  REGI02_Box6TH,
} from "../Data/DataLanguage";

import {
  IconButton,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Input,
  Modal,
  Typography,
  Box,
  Checkbox,
  Autocomplete,
  TextField,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";
import example12 from "../../Images/watermark.png";
import example14 from "../../Images/CompanyCertificate.jpeg";
import examplefreelance from "../../Images/IDcard.jpeg";
import example11 from "../../Images/CV.jpeg";
import example9 from "../../Images/Education.jpeg";

const Signup = () => {
  const { innerWidth: width } = window;
  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;

  //test
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [images, setImages] = React.useState([]);
  const [imageURLs, setImageURLs] = React.useState([]);

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobilePhone: "",
    address: "",
    district: "",
    province: "",
    country: "",
    postalCode: "",
    type: "",
  });

  const [translators, setTranslators] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobilePhone: "",
    companyName: "",
    juristicPersonNumber: "",
    website: "",
    address: "",
    district: "",
    province: "",
    country: "",
    postalCode: "",
    bankname: "",
    branchname: "",
    accountname: "",
    accountnumber: "",
    watermark: "",
    certificate: "",
    languages: [],
    idcard: "",
    education: "",
    portfolio: "",
    documents: "",
    answer: "",
    question: "",
    type: "",
  });
  console.log("", translators?.languages);
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const [screen, setScreen] = React.useState("");

  const [type, setType] = React.useState("password");
  const [type2, setType2] = React.useState("password");
  const [values, setValues] = React.useState(false);
  const [values2, setValues2] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  React.useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  //ตรงนี้ customer
  const handleOpen = (e) => {
    e.preventDefault();
    setUser({ ...user, type: "customer" });
    setOpen(true);
  };
  const handleClose = () => {
    if (checked !== false) {
      console.log("ไง");
      setOpen(false);
      console.log("user2:", user);
      dispatch(registerUser(user));
      console.log("auth:", auth);
      setOpen2(true);
      setChecked(false);
    }
    setTimeout(() => {
      navigate(
        "/Login"
        // , {
        //   // state: {
        //   //   languages: `${Doc}`,
        //   //   email: `${email}`,
        //   //   password: `${password}`,
        //   //   type: `${screen}`,
        //   // },
        // }
      );
    }, 900);
  };

  // const send_Mail = (e) => {
  //   e.preventDefault();
  //   var templateParams = {
  //     user_email: `${email}`,
  //   };
  //   emailjs
  //     .send(
  //       "service_u5757dr",
  //       "template_dueh1d9",
  //       templateParams,
  //       "Npnv-PIsN0-rxduac"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   // e.target.reset();
  //   handleClose();
  // };

  const [openModal12, setOpenModal12] = React.useState(false);

  const handleClose2 = () => setOpen2(false);

  const handleClose3 = () => {
    setTranslators({ ...translators, type: "translators" });
    setOpen3(false);
  };

  const handleClose4 = () => {
    setTranslators({ ...translators, type: "translators" });
    setOpen3(false);
    setChecked2(false);
    setOpen4(true);
  };

  const handleClose5 = () => {
    setOpen4(false);
    console.log("translators:", translators);
    dispatch(registerUser(translators));
    navigate(
      "/Login"
      // , {
      //   state: {
      //     languages: `${Doc}`,
      //     email: `${email}`,
      //     password: `${password}`,
      //     type: `${screen}`,
      //   },
      // }
    );
  };

  const handleClickShowPassword = (i) => {
    if (i === 1) {
      if (type === "password") {
        setValues(!values);
        setType("text");
      } else if (type === "text") {
        setValues(!values);
        setType("password");
      }
    } else if (i === 2) {
      if (type2 === "password") {
        setValues2(!values2);
        setType2("text");
      } else if (type === "text") {
        setValues2(!values2);
        setType2("password");
      }
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setScreen(event.target.value);
  };

  const handleChange2 = (event) => {
    setChecked(event.target.checked);
    setChecked2(event.target.checked);
  };

  const goHome = (x) => {
    navigate("/", { state: { languages: `${x}` } });
  };

  const goLogin = (x) => {
    navigate("/Login", { state: { languages: `${x}` } });
  };

  const example = (x) => {
    if (x === 12) {
      setOpenModal12(true);
    }
  };

  const handleClose12 = () => {
    setOpenModal12(false);
  };

  console.log("screen", screen);

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
            alt="resgister"
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
          {screen === "" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 30,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
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
                      onClick={() => goHome(Doc)}
                    >
                      <p id={"Hometext"}>{REGI01_box1EN[0].label}</p>
                      <BsArrowLeftShort id={"Hometext2"} />
                    </button>

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
                      onClick={() => goLogin(Doc)}
                    >
                      <p id={"Signuptext"}>{REGI01_box1EN[1].label}</p>
                      <BsArrowRightShort id={"Signuptext2"} />
                    </button>

                    <h2 className="textSignup">{REGI01_box1EN[2].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked={true}
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI01_box1EN[3].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="For Translators"
                            control={<Radio />}
                            label={REGI01_box1EN[4].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={user?.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        placeholder={REGI01_box1EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[6].label}
                      </p>
                      <input
                        type="text"
                        name="user_email"
                        value={user?.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        placeholder={REGI01_box1EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[8].label}
                      </p>
                      <form>
                        <input
                          type={type}
                          value={user?.password}
                          name="password"
                          autoComplete="password"
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          placeholder={REGI01_box1EN[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(1)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 380 }}
                      >
                        {values ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[10].label}
                      </p>
                      <form>
                        <input
                          type={type2}
                          value={user?.confirmPassword}
                          name="confirmPassword"
                          autoComplete="confirmPassword"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1EN[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(2)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 465 }}
                      >
                        {values2 ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[11].label}
                      </p>

                      <input
                        type="text"
                        value={user?.mobilePhone}
                        onChange={(e) =>
                          setUser({ ...user, mobilePhone: e.target.value })
                        }
                        placeholder={REGI01_box1EN[11].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("3")}
                    >
                      {REGI01_box1EN[12].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 30,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
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
                      onClick={() => goHome(Doc)}
                    >
                      <p id={"Hometext"}>{REGI01_box1TH[0].label}</p>
                      <BsArrowLeftShort id={"Hometext2"} />
                    </button>

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
                      onClick={() => goLogin(Doc)}
                    >
                      <p id={"Signuptext"}>{REGI01_box1TH[1].label}</p>
                      <BsArrowRightShort id={"Signuptext2"} />
                    </button>

                    <h2 className="textSignup">{REGI01_box1TH[2].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked={true}
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI01_box1TH[3].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="For Translators"
                            control={<Radio />}
                            label={REGI01_box1TH[4].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[5].label}
                      </p>
                      <input
                        type="text"
                        value={user?.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        placeholder={REGI01_box1TH[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[6].label}
                      </p>
                      <input
                        type="text"
                        name="user_email"
                        value={user?.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        placeholder={REGI01_box1TH[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[8].label}
                      </p>
                      <form>
                        <input
                          type={type}
                          value={user?.password}
                          name="password"
                          autoComplete="password"
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          placeholder={REGI01_box1TH[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(1)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 380 }}
                      >
                        {values ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[10].label}
                      </p>
                      <form>
                        <input
                          type={type2}
                          value={user?.confirmPassword}
                          name="confirmPassword"
                          autoComplete="confirmPassword"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1TH[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(2)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 465 }}
                      >
                        {values2 ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[11].label}
                      </p>

                      <input
                        type="text"
                        value={user?.mobilePhone}
                        onChange={(e) =>
                          setUser({ ...user, mobilePhone: e.target.value })
                        }
                        placeholder={REGI01_box1TH[11].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("3")}
                    >
                      {REGI01_box1TH[12].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 30,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
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
                      onClick={() => goHome(Doc)}
                    >
                      <p id={"Hometext"}>{REGI01_box1DE[0].label}</p>
                      <BsArrowLeftShort id={"Hometext2"} />
                    </button>

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
                      onClick={() => goLogin(Doc)}
                    >
                      <p id={"Signuptext"}>{REGI01_box1DE[1].label}</p>
                      <BsArrowRightShort id={"Signuptext2"} />
                    </button>

                    <h2 className="textSignup">{REGI01_box1DE[2].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked={true}
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI01_box1DE[3].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="For Translators"
                            control={<Radio />}
                            label={REGI01_box1DE[4].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[5].label}
                      </p>
                      <input
                        type="text"
                        value={user?.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        placeholder={REGI01_box1DE[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[6].label}
                      </p>
                      <input
                        type="text"
                        name="user_email"
                        value={user?.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        placeholder={REGI01_box1DE[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[8].label}
                      </p>
                      <form>
                        <input
                          type={type}
                          value={user?.password}
                          name="password"
                          autoComplete="password"
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          placeholder={REGI01_box1DE[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(1)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 380 }}
                      >
                        {values ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[10].label}
                      </p>
                      <form>
                        <input
                          type={type2}
                          value={user?.confirmPassword}
                          name="confirmPassword"
                          autoComplete="confirmPassword"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1DE[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(2)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 465 }}
                      >
                        {values2 ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[11].label}
                      </p>

                      <input
                        type="text"
                        value={user?.mobilePhone}
                        onChange={(e) =>
                          setUser({ ...user, mobilePhone: e.target.value })
                        }
                        placeholder={REGI01_box1DE[11].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("3")}
                    >
                      {REGI01_box1DE[12].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 30,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
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
                      onClick={() => goHome(Doc)}
                    >
                      <p id={"Hometext"}>{REGI01_box1EN[0].label}</p>
                      <BsArrowLeftShort id={"Hometext2"} />
                    </button>

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
                      onClick={() => goLogin(Doc)}
                    >
                      <p id={"Signuptext"}>{REGI01_box1EN[1].label}</p>
                      <BsArrowRightShort id={"Signuptext2"} />
                    </button>

                    <h2 className="textSignup">{REGI01_box1EN[2].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked={true}
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI01_box1EN[3].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="For Translators"
                            control={<Radio />}
                            label={REGI01_box1EN[4].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={user?.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        placeholder={REGI01_box1EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[6].label}
                      </p>
                      <input
                        type="text"
                        name="user_email"
                        value={user?.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        placeholder={REGI01_box1EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[8].label}
                      </p>
                      <form>
                        <input
                          type={type}
                          value={user?.password}
                          name="password"
                          autoComplete="password"
                          onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                          }
                          placeholder={REGI01_box1EN[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(1)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 380 }}
                      >
                        {values ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[10].label}
                      </p>
                      <form>
                        <input
                          type={type2}
                          value={user?.confirmPassword}
                          name="confirmPassword"
                          autoComplete="confirmPassword"
                          onChange={(e) =>
                            setUser({
                              ...user,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1EN[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(2)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 465 }}
                      >
                        {values2 ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[11].label}
                      </p>

                      <input
                        type="text"
                        value={user?.mobilePhone}
                        onChange={(e) =>
                          setUser({ ...user, mobilePhone: e.target.value })
                        }
                        placeholder={REGI01_box1EN[11].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("3")}
                    >
                      {REGI01_box1EN[12].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "For Translators" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 30,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
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
                      onClick={() => goHome(Doc)}
                    >
                      <p id={"Hometext"}>{REGI01_box1EN[0].label}</p>
                      <BsArrowLeftShort id={"Hometext2"} />
                    </button>

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
                      onClick={() => goLogin(Doc)}
                    >
                      <p id={"Signuptext"}>{REGI01_box1EN[1].label}</p>
                      <BsArrowRightShort id={"Signuptext2"} />
                    </button>

                    <h2 className="textSignup">{REGI01_box1EN[2].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI01_box1EN[3].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked={true}
                            onChange={handleChange}
                            name="radio-buttons"
                            value="For Translators"
                            control={<Radio />}
                            label={REGI01_box1EN[4].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.name}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            name: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[6].label}
                      </p>
                      <input
                        type="text"
                        name="user_email"
                        value={translators.email}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            email: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[8].label}
                      </p>
                      <form>
                        <input
                          type={type}
                          value={translators.password}
                          name="password"
                          autoComplete="password"
                          onChange={(e) =>
                            setTranslators({
                              ...translators,
                              password: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1EN[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(1)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 380 }}
                      >
                        {values ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[10].label}
                      </p>

                      <form>
                        <input
                          type={type2}
                          value={translators.confirmPassword}
                          name="confirmPassword"
                          autoComplete="confirmPassword"
                          onChange={(e) =>
                            setTranslators({
                              ...translators,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1EN[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(2)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 465 }}
                      >
                        {values2 ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[11].label}
                      </p>

                      <input
                        type="text"
                        value={translators.mobilePhone}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            mobilePhone: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1EN[11].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      {REGI01_box1EN[12].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 30,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
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
                      onClick={() => goHome(Doc)}
                    >
                      <p id={"Hometext"}>{REGI01_box1TH[0].label}</p>
                      <BsArrowLeftShort id={"Hometext2"} />
                    </button>

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
                      onClick={() => goLogin(Doc)}
                    >
                      <p id={"Signuptext"}>{REGI01_box1TH[1].label}</p>
                      <BsArrowRightShort id={"Signuptext2"} />
                    </button>

                    <h2 className="textSignup">{REGI01_box1TH[2].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI01_box1TH[3].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked={true}
                            onChange={handleChange}
                            name="radio-buttons"
                            value="For Translators"
                            control={<Radio />}
                            label={REGI01_box1TH[4].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.name}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            name: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1TH[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[6].label}
                      </p>
                      <input
                        type="text"
                        name="user_email"
                        value={translators.email}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            email: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1TH[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[8].label}
                      </p>
                      <form>
                        <input
                          type={type}
                          value={translators.password}
                          name="password"
                          autoComplete="password"
                          onChange={(e) =>
                            setTranslators({
                              ...translators,
                              password: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1TH[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(1)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 380 }}
                      >
                        {values ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[10].label}
                      </p>
                      <form>
                        <input
                          type={type2}
                          value={translators.confirmPassword}
                          name="confirmPassword"
                          autoComplete="confirmPassword"
                          onChange={(e) =>
                            setTranslators({
                              ...translators,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1TH[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(2)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 465 }}
                      >
                        {values2 ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1TH[11].label}
                      </p>

                      <input
                        type="text"
                        value={translators.mobilePhone}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            mobilePhone: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1TH[11].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      {REGI01_box1TH[12].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 30,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
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
                      onClick={() => goHome(Doc)}
                    >
                      <p id={"Hometext"}>{REGI01_box1DE[0].label}</p>
                      <BsArrowLeftShort id={"Hometext2"} />
                    </button>

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
                      onClick={() => goLogin(Doc)}
                    >
                      <p id={"Signuptext"}>{REGI01_box1DE[1].label}</p>
                      <BsArrowRightShort id={"Signuptext2"} />
                    </button>

                    <h2 className="textSignup">{REGI01_box1DE[2].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI01_box1DE[3].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked={true}
                            onChange={handleChange}
                            name="radio-buttons"
                            value="For Translators"
                            control={<Radio />}
                            label={REGI01_box1DE[4].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.name}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            name: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1DE[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[6].label}
                      </p>
                      <input
                        type="text"
                        name="user_email"
                        value={translators.email}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            email: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1DE[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[8].label}
                      </p>
                      <form>
                        <input
                          type={type}
                          value={translators.password}
                          name="password"
                          autoComplete="password"
                          onChange={(e) =>
                            setTranslators({
                              ...translators,
                              password: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1DE[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(1)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 380 }}
                      >
                        {values ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[10].label}
                      </p>
                      <form>
                        <input
                          type={type2}
                          value={translators.confirmPassword}
                          name="confirmPassword"
                          autoComplete="confirmPassword"
                          onChange={(e) =>
                            setTranslators({
                              ...translators,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1DE[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(2)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 465 }}
                      >
                        {values2 ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1DE[11].label}
                      </p>

                      <input
                        type="text"
                        value={translators.mobilePhone}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            mobilePhone: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1DE[11].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      {REGI01_box1DE[12].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 30,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
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
                      onClick={() => goHome(Doc)}
                    >
                      <p id={"Hometext"}>{REGI01_box1EN[0].label}</p>
                      <BsArrowLeftShort id={"Hometext2"} />
                    </button>

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
                      onClick={() => goLogin(Doc)}
                    >
                      <p id={"Signuptext"}>{REGI01_box1EN[1].label}</p>
                      <BsArrowRightShort id={"Signuptext2"} />
                    </button>

                    <h2 className="textSignup">{REGI01_box1EN[2].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI01_box1EN[3].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked={true}
                            onChange={handleChange}
                            name="radio-buttons"
                            value="For Translators"
                            control={<Radio />}
                            label={REGI01_box1EN[4].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.name}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            name: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[6].label}
                      </p>
                      <input
                        type="text"
                        name="user_email"
                        value={translators.email}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            email: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[8].label}
                      </p>
                      <form>
                        <input
                          type={type}
                          value={translators.password}
                          name="password"
                          autoComplete="password"
                          onChange={(e) =>
                            setTranslators({
                              ...translators,
                              password: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1EN[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(1)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 380 }}
                      >
                        {values ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[10].label}
                      </p>

                      <form>
                        <input
                          type={type2}
                          value={translators.confirmPassword}
                          name="confirmPassword"
                          autoComplete="confirmPassword"
                          onChange={(e) =>
                            setTranslators({
                              ...translators,
                              confirmPassword: e.target.value,
                            })
                          }
                          placeholder={REGI01_box1EN[9].label}
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1 ",
                            borderRadius: 20,
                            borderColor: "#F1F1F1",
                            width: "100%",
                            height: 30,
                            padding: 20,
                            paddingLeft: 12,
                            margin: 10,
                            fontSize: 13,
                          }}
                        />
                      </form>

                      <IconButton
                        onClick={() => handleClickShowPassword(2)}
                        edge="end"
                        style={{ position: "absolute", right: 40, top: 465 }}
                      >
                        {values2 ? <FiEye /> : <FiEyeOff />}
                      </IconButton>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box1EN[11].label}
                      </p>

                      <input
                        type="text"
                        value={translators.mobilePhone}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            mobilePhone: e.target.value,
                          })
                        }
                        placeholder={REGI01_box1EN[11].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      {REGI01_box1EN[12].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "3" ? (
            <>
              {Doc === "English" ? (
                <div
                  style={{
                    position: "fixed",
                    top: 120,
                    left: width * 0.59,
                    textAlign: "-webkit-center",
                    width: 500,
                    background: " #FFFFFF",
                    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <button
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      textDecorationLine: "none",
                      color: "#D9D9D9",
                      textAlign: "left",
                      marginBottom: 20,
                      float: "left",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("")}
                  >
                    <BsArrowLeftShort />
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "right",
                      }}
                    >
                      {REGI01_box2EN[0].label}
                    </p>
                  </button>

                  <button
                    style={{
                      fontWeight: 400,
                      textAlign: "right",
                      marginBottom: 20,
                      float: "right",
                      color: "#D9D9D9",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("5")}
                  >
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "left",
                      }}
                    >
                      {REGI01_box2EN[1].label}
                    </p>
                    <BsArrowRightShort />
                  </button>

                  <h2 className="textSignup">{REGI01_box2EN[2].label}</h2>
                  <div style={{ margin: 25 }}>
                    <p>{REGI01_box2EN[3].label}</p>
                  </div>
                  {images?.length < 1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 100,
                        width: 83,
                        height: 80,
                        padding: 15,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <MdCameraAlt
                            style={{ fontSize: 35, position: "absolute" }}
                          />
                          <p
                            style={{
                              fontSize: 8,
                              position: "absolute",
                              top: 20,
                              width: 63,
                            }}
                          >
                            {REGI01_box2EN[3].label}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        position: "relative",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {imageURLs?.map((imageSrc, idx) => (
                            <img
                              key={idx}
                              src={imageSrc}
                              alt="imageURLs"
                              style={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "100%",
                                top: -20,
                              }}
                            />
                          ))}
                        </IconButton>
                      </label>
                    </div>
                  )}

                  <button
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: " #001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 10,
                    }}
                    onClick={() => setScreen("5")}
                  >
                    {REGI01_box2EN[4].label}
                  </button>
                </div>
              ) : Doc === "Thai" ? (
                <div
                  style={{
                    position: "fixed",
                    top: 120,
                    left: width * 0.59,
                    textAlign: "-webkit-center",
                    width: 500,
                    background: " #FFFFFF",
                    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <button
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      textDecorationLine: "none",
                      color: "#D9D9D9",
                      textAlign: "left",
                      marginBottom: 20,
                      float: "left",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("")}
                  >
                    <BsArrowLeftShort />
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "right",
                      }}
                    >
                      {REGI01_box2TH[0].label}
                    </p>
                  </button>

                  <button
                    style={{
                      fontWeight: 400,
                      textAlign: "right",
                      marginBottom: 20,
                      float: "right",
                      color: "#D9D9D9",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("5")}
                  >
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "left",
                      }}
                    >
                      {REGI01_box2TH[1].label}
                    </p>
                    <BsArrowRightShort />
                  </button>

                  <h2 className="textSignup">{REGI01_box2TH[2].label}</h2>
                  <div style={{ margin: 25 }}>
                    <p>{REGI01_box2TH[3].label}</p>
                  </div>
                  {images.length < 1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 100,
                        width: 83,
                        height: 80,
                        padding: 15,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <MdCameraAlt
                            style={{ fontSize: 35, position: "absolute" }}
                          />
                          <p
                            style={{
                              fontSize: 8,
                              position: "absolute",
                              top: 20,
                              width: 63,
                            }}
                          >
                            {REGI01_box2TH[3].label}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        position: "relative",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {imageURLs.map((imageSrc, idx) => (
                            <img
                              key={idx}
                              src={imageSrc}
                              alt="imageURLs"
                              style={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "100%",
                                top: -20,
                              }}
                            />
                          ))}
                        </IconButton>
                      </label>
                    </div>
                  )}

                  <button
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: " #001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 10,
                    }}
                    onClick={() => setScreen("5")}
                  >
                    {REGI01_box2TH[4].label}
                  </button>
                </div>
              ) : Doc === "German" ? (
                <div
                  style={{
                    position: "fixed",
                    top: 120,
                    left: width * 0.59,
                    textAlign: "-webkit-center",
                    width: 500,
                    background: " #FFFFFF",
                    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <button
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      textDecorationLine: "none",
                      color: "#D9D9D9",
                      textAlign: "left",
                      marginBottom: 20,
                      float: "left",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("")}
                  >
                    <BsArrowLeftShort />
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "right",
                      }}
                    >
                      {REGI01_box2DE[0].label}
                    </p>
                  </button>

                  <button
                    style={{
                      fontWeight: 400,
                      textAlign: "right",
                      marginBottom: 20,
                      float: "right",
                      color: "#D9D9D9",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("5")}
                  >
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "left",
                      }}
                    >
                      {REGI01_box2DE[1].label}
                    </p>
                    <BsArrowRightShort />
                  </button>

                  <h2 className="textSignup">{REGI01_box2DE[2].label}</h2>
                  <div style={{ margin: 25 }}>
                    <p>{REGI01_box2DE[3].label}</p>
                  </div>
                  {images.length < 1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 100,
                        width: 83,
                        height: 80,
                        padding: 15,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <MdCameraAlt
                            style={{ fontSize: 35, position: "absolute" }}
                          />
                          <p
                            style={{
                              fontSize: 8,
                              position: "absolute",
                              top: 20,
                              width: 63,
                            }}
                          >
                            {REGI01_box2DE[3].label}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        position: "relative",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {imageURLs.map((imageSrc, idx) => (
                            <img
                              key={idx}
                              src={imageSrc}
                              alt="imageURLs"
                              style={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "100%",
                                top: -20,
                              }}
                            />
                          ))}
                        </IconButton>
                      </label>
                    </div>
                  )}

                  <button
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: " #001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 10,
                    }}
                    onClick={() => setScreen("5")}
                  >
                    {REGI01_box2DE[4].label}
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    position: "fixed",
                    top: 120,
                    left: width * 0.59,
                    textAlign: "-webkit-center",
                    width: 500,
                    background: " #FFFFFF",
                    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <button
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      textDecorationLine: "none",
                      color: "#D9D9D9",
                      textAlign: "left",
                      marginBottom: 20,
                      float: "left",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("")}
                  >
                    <BsArrowLeftShort />
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "right",
                      }}
                    >
                      {REGI01_box2EN[0].label}
                    </p>
                  </button>

                  <button
                    style={{
                      fontWeight: 400,
                      textAlign: "right",
                      marginBottom: 20,
                      float: "right",
                      color: "#D9D9D9",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("5")}
                  >
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "left",
                      }}
                    >
                      {REGI01_box2EN[1].label}
                    </p>
                    <BsArrowRightShort />
                  </button>

                  <h2 className="textSignup">{REGI01_box2EN[2].label}</h2>
                  <div style={{ margin: 25 }}>
                    <p>{REGI01_box2EN[3].label}</p>
                  </div>
                  {images.length < 1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 100,
                        width: 83,
                        height: 80,
                        padding: 15,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <MdCameraAlt
                            style={{ fontSize: 35, position: "absolute" }}
                          />
                          <p
                            style={{
                              fontSize: 8,
                              position: "absolute",
                              top: 20,
                              width: 63,
                            }}
                          >
                            {REGI01_box2EN[3].label}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        position: "relative",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {imageURLs.map((imageSrc, idx) => (
                            <img
                              key={idx}
                              src={imageSrc}
                              alt="imageURLs"
                              style={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "100%",
                                top: -20,
                              }}
                            />
                          ))}
                        </IconButton>
                      </label>
                    </div>
                  )}

                  <button
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: " #001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 10,
                    }}
                    onClick={() => setScreen("5")}
                  >
                    {REGI01_box2EN[4].label}
                  </button>
                </div>
              )}
            </>
          ) : screen === "4" ? (
            <>
              {Doc === "English" ? (
                <div
                  style={{
                    position: "fixed",
                    top: 120,
                    left: width * 0.59,
                    textAlign: "-webkit-center",
                    width: 500,
                    background: " #FFFFFF",
                    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <button
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      textDecorationLine: "none",
                      color: "#D9D9D9",
                      textAlign: "left",
                      marginBottom: 20,
                      float: "left",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("For Translators")}
                  >
                    <BsArrowLeftShort />
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "right",
                      }}
                    >
                      {REGI01_box2EN[0].label}
                    </p>
                  </button>

                  <button
                    style={{
                      fontWeight: 400,
                      textAlign: "right",
                      marginBottom: 20,
                      float: "right",
                      color: "#D9D9D9",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("6")}
                  >
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "left",
                      }}
                    >
                      {REGI01_box2EN[1].label}
                    </p>
                    <BsArrowRightShort />
                  </button>

                  <h2 className="textSignup">{REGI01_box2EN[2].label}</h2>
                  <div style={{ margin: 25 }}>
                    <p>{REGI01_box2EN[3].label}</p>
                  </div>
                  {images.length < 1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 100,
                        width: 83,
                        height: 80,
                        padding: 15,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <MdCameraAlt
                            style={{ fontSize: 35, position: "absolute" }}
                          />
                          <p
                            style={{
                              fontSize: 8,
                              position: "absolute",
                              top: 20,
                              width: 63,
                            }}
                          >
                            {REGI01_box2EN[3].label}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        position: "relative",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {imageURLs.map((imageSrc, idx) => (
                            <img
                              key={idx}
                              src={imageSrc}
                              alt="imageURLs"
                              style={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "100%",
                                top: -20,
                              }}
                            />
                          ))}
                        </IconButton>
                      </label>
                    </div>
                  )}

                  <button
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: " #001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 10,
                    }}
                    onClick={() => setScreen("6")}
                  >
                    {REGI01_box2EN[4].label}
                  </button>
                </div>
              ) : Doc === "Thai" ? (
                <div
                  style={{
                    position: "fixed",
                    top: 120,
                    left: width * 0.59,
                    textAlign: "-webkit-center",
                    width: 500,
                    background: " #FFFFFF",
                    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <button
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      textDecorationLine: "none",
                      color: "#D9D9D9",
                      textAlign: "left",
                      marginBottom: 20,
                      float: "left",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("For Translators")}
                  >
                    <BsArrowLeftShort />
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "right",
                      }}
                    >
                      {REGI01_box2TH[0].label}
                    </p>
                  </button>

                  <button
                    style={{
                      fontWeight: 400,
                      textAlign: "right",
                      marginBottom: 20,
                      float: "right",
                      color: "#D9D9D9",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("6")}
                  >
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "left",
                      }}
                    >
                      {REGI01_box2TH[1].label}
                    </p>
                    <BsArrowRightShort />
                  </button>

                  <h2 className="textSignup">{REGI01_box2TH[2].label}</h2>
                  <div style={{ margin: 25 }}>
                    <p>{REGI01_box2TH[3].label}</p>
                  </div>
                  {images.length < 1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 100,
                        width: 83,
                        height: 80,
                        padding: 15,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <MdCameraAlt
                            style={{ fontSize: 35, position: "absolute" }}
                          />
                          <p
                            style={{
                              fontSize: 8,
                              position: "absolute",
                              top: 20,
                              width: 63,
                            }}
                          >
                            {REGI01_box2TH[3].label}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        position: "relative",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {imageURLs.map((imageSrc, idx) => (
                            <img
                              key={idx}
                              src={imageSrc}
                              alt="imageURLs"
                              style={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "100%",
                                top: -20,
                              }}
                            />
                          ))}
                        </IconButton>
                      </label>
                    </div>
                  )}

                  <button
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: " #001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 10,
                    }}
                    onClick={() => setScreen("6")}
                  >
                    {REGI01_box2TH[4].label}
                  </button>
                </div>
              ) : Doc === "German" ? (
                <div
                  style={{
                    position: "fixed",
                    top: 120,
                    left: width * 0.59,
                    textAlign: "-webkit-center",
                    width: 500,
                    background: " #FFFFFF",
                    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <button
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      textDecorationLine: "none",
                      color: "#D9D9D9",
                      textAlign: "left",
                      marginBottom: 20,
                      float: "left",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("For Translators")}
                  >
                    <BsArrowLeftShort />
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "right",
                      }}
                    >
                      {REGI01_box2DE[0].label}
                    </p>
                  </button>

                  <button
                    style={{
                      fontWeight: 400,
                      textAlign: "right",
                      marginBottom: 20,
                      float: "right",
                      color: "#D9D9D9",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("6")}
                  >
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "left",
                      }}
                    >
                      {REGI01_box2DE[1].label}
                    </p>
                    <BsArrowRightShort />
                  </button>

                  <h2 className="textSignup">{REGI01_box2DE[2].label}</h2>
                  <div style={{ margin: 25 }}>
                    <p>{REGI01_box2DE[3].label}</p>
                  </div>
                  {images.length < 1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 100,
                        width: 83,
                        height: 80,
                        padding: 15,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <MdCameraAlt
                            style={{ fontSize: 35, position: "absolute" }}
                          />
                          <p
                            style={{
                              fontSize: 8,
                              position: "absolute",
                              top: 20,
                              width: 63,
                            }}
                          >
                            {REGI01_box2DE[3].label}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        position: "relative",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {imageURLs.map((imageSrc, idx) => (
                            <img
                              key={idx}
                              src={imageSrc}
                              alt="imageURLs"
                              style={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "100%",
                                top: -20,
                              }}
                            />
                          ))}
                        </IconButton>
                      </label>
                    </div>
                  )}

                  <button
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: " #001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 10,
                    }}
                    onClick={() => setScreen("6")}
                  >
                    {REGI01_box2DE[4].label}
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    position: "fixed",
                    top: 120,
                    left: width * 0.59,
                    textAlign: "-webkit-center",
                    width: 500,
                    background: " #FFFFFF",
                    boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                    borderRadius: 20,
                    padding: 30,
                  }}
                >
                  <button
                    style={{
                      fontWeight: 400,
                      fontSize: 18,
                      textDecorationLine: "none",
                      color: "#D9D9D9",
                      textAlign: "left",
                      marginBottom: 20,
                      float: "left",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("For Translators")}
                  >
                    <BsArrowLeftShort />
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "right",
                      }}
                    >
                      {REGI01_box2EN[0].label}
                    </p>
                  </button>

                  <button
                    style={{
                      fontWeight: 400,
                      textAlign: "right",
                      marginBottom: 20,
                      float: "right",
                      color: "#D9D9D9",
                      background: "transparent",
                      border: "transparent",
                    }}
                    onClick={() => setScreen("6")}
                  >
                    <p
                      style={{
                        color: "#D9D9D9",
                        fontSize: 18,
                        textDecorationLine: "none",
                        float: "left",
                      }}
                    >
                      {REGI01_box2EN[1].label}
                    </p>
                    <BsArrowRightShort />
                  </button>

                  <h2 className="textSignup">{REGI01_box2EN[2].label}</h2>
                  <div style={{ margin: 25 }}>
                    <p>{REGI01_box2EN[3].label}</p>
                  </div>
                  {images.length < 1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        borderRadius: 100,
                        width: 83,
                        height: 80,
                        padding: 15,
                        position: "relative",
                        borderStyle: " dotted ",
                        borderColor: "#0865A8",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <MdCameraAlt
                            style={{ fontSize: 35, position: "absolute" }}
                          />
                          <p
                            style={{
                              fontSize: 8,
                              position: "absolute",
                              top: 20,
                              width: 63,
                            }}
                          >
                            {REGI01_box2EN[3].label}
                          </p>
                        </IconButton>
                      </label>
                    </div>
                  ) : (
                    <div
                      style={{
                        borderRadius: 100,
                        width: 100,
                        height: 100,
                        position: "relative",
                        borderWidth: 2,
                        margin: 25,
                      }}
                    >
                      <label htmlFor="icon-button-file">
                        <Input
                          accept="image/*"
                          id="icon-button-file"
                          type="file"
                          style={{ display: "none" }}
                          onChange={onImageChange}
                        />
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          {imageURLs.map((imageSrc, idx) => (
                            <img
                              key={idx}
                              src={imageSrc}
                              alt="imageURLs"
                              style={{
                                position: "absolute",
                                width: 90,
                                height: 90,
                                borderRadius: "100%",
                                top: -20,
                              }}
                            />
                          ))}
                        </IconButton>
                      </label>
                    </div>
                  )}

                  <button
                    style={{
                      width: "100%",
                      borderRadius: 20,
                      background: " #001E33",
                      height: 40,
                      color: "#FFFFFF",
                      fontSize: 18,
                      borderColor: "transparent",
                      marginBottom: 10,
                    }}
                    onClick={() => setScreen("6")}
                  >
                    {REGI01_box2EN[4].label}
                  </button>
                </div>
              )}
            </>
          ) : screen === "5" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("3")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI01_box3EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup">{REGI01_box3EN[1].label}</h2>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[2].label}
                      </p>
                      <input
                        type="text"
                        value={user?.address}
                        onChange={(e) =>
                          setUser({ ...user, address: e.target.value })
                        }
                        placeholder={REGI01_box3EN[2].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[3].label}
                      </p>
                      <input
                        type="text"
                        value={user?.district}
                        onChange={(e) =>
                          setUser({ ...user, district: e.target.value })
                        }
                        placeholder={REGI01_box3EN[3].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={user?.province}
                        onChange={(e) =>
                          setUser({ ...user, province: e.target.value })
                        }
                        placeholder={REGI01_box3EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={user?.country}
                        onChange={(e) =>
                          setUser({ ...user, country: e.target.value })
                        }
                        placeholder={REGI01_box3EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={user?.postalCode}
                        onChange={(e) =>
                          setUser({ ...user, postalCode: e.target.value })
                        }
                        placeholder={REGI01_box3EN[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={handleOpen}
                    >
                      {REGI01_box3EN[1].label}
                    </button>
                  </div>

                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <img src={logo} alt="Logo" style={{ width: 100 }} />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI01_box4EN[0].label}
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{
                          mt: 2,
                          textAlign: "left",
                          overflowY: "auto",
                          height: 200,
                        }}
                      >
                        {REGI01_box4EN[1].label}
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          borderTop: "1px solid #C4C4C4",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChange2}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={REGI01_box4EN[2].label}
                        />
                      </div>
                      <div>
                        {checked === false ? (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#E0E0E0",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            disabled
                          >
                            {REGI01_box4EN[3].label}
                          </button>
                        ) : (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#001E33",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            onClick={() => handleClose()}
                          >
                            {REGI01_box4EN[3].label}
                          </button>
                        )}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    keepMounted
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <AiFillCheckCircle
                        style={{ width: 100, height: 80, color: "#46BC52" }}
                      />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI01_box5EN[0].label}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("3")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI01_box3TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup">{REGI01_box3TH[1].label}</h2>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3TH[2].label}
                      </p>
                      <input
                        type="text"
                        value={user?.address}
                        onChange={(e) =>
                          setUser({ ...user, address: e.target.value })
                        }
                        placeholder={REGI01_box3TH[2].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3TH[3].label}
                      </p>
                      <input
                        type="text"
                        value={user?.district}
                        onChange={(e) =>
                          setUser({ ...user, district: e.target.value })
                        }
                        placeholder={REGI01_box3TH[3].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3TH[4].label}
                      </p>
                      <input
                        type="text"
                        value={user?.province}
                        onChange={(e) =>
                          setUser({ ...user, province: e.target.value })
                        }
                        placeholder={REGI01_box3TH[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3TH[5].label}
                      </p>
                      <input
                        type="text"
                        value={user?.country}
                        onChange={(e) =>
                          setUser({ ...user, country: e.target.value })
                        }
                        placeholder={REGI01_box3TH[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3TH[6].label}
                      </p>
                      <input
                        type="text"
                        value={user?.postalCode}
                        onChange={(e) =>
                          setUser({ ...user, postalCode: e.target.value })
                        }
                        placeholder={REGI01_box3TH[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={handleOpen}
                    >
                      {REGI01_box3TH[1].label}
                    </button>
                  </div>

                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <img src={logo} alt="Logo" style={{ width: 100 }} />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI01_box4TH[0].label}
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{
                          mt: 2,
                          textAlign: "left",
                          overflowY: "auto",
                          height: 200,
                        }}
                      >
                        {REGI01_box4TH[1].label}
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          borderTop: "1px solid #C4C4C4",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChange2}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={REGI01_box4TH[2].label}
                        />
                      </div>
                      <div>
                        {checked === false ? (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#E0E0E0",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            disabled
                          >
                            {REGI01_box4TH[3].label}
                          </button>
                        ) : (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#001E33",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            onClick={() => handleClose()}
                          >
                            {REGI01_box4TH[3].label}
                          </button>
                        )}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    keepMounted
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <AiFillCheckCircle
                        style={{ width: 100, height: 80, color: "#46BC52" }}
                      />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI01_box5TH[0].label}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("3")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI01_box3DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup">{REGI01_box3DE[1].label}</h2>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3DE[2].label}
                      </p>
                      <input
                        type="text"
                        value={user?.address}
                        onChange={(e) =>
                          setUser({ ...user, address: e.target.value })
                        }
                        placeholder={REGI01_box3DE[2].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3DE[3].label}
                      </p>
                      <input
                        type="text"
                        value={user?.district}
                        onChange={(e) =>
                          setUser({ ...user, district: e.target.value })
                        }
                        placeholder={REGI01_box3DE[3].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3DE[4].label}
                      </p>
                      <input
                        type="text"
                        value={user?.province}
                        onChange={(e) =>
                          setUser({ ...user, province: e.target.value })
                        }
                        placeholder={REGI01_box3DE[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3DE[5].label}
                      </p>
                      <input
                        type="text"
                        value={user?.country}
                        onChange={(e) =>
                          setUser({ ...user, country: e.target.value })
                        }
                        placeholder={REGI01_box3DE[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3DE[6].label}
                      </p>
                      <input
                        type="text"
                        value={user?.postalCode}
                        onChange={(e) =>
                          setUser({ ...user, postalCode: e.target.value })
                        }
                        placeholder={REGI01_box3DE[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={handleOpen}
                    >
                      {REGI01_box3DE[1].label}
                    </button>
                  </div>

                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <img src={logo} alt="Logo" style={{ width: 100 }} />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI01_box4DE[0].label}
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{
                          mt: 2,
                          textAlign: "left",
                          overflowY: "auto",
                          height: 200,
                        }}
                      >
                        {REGI01_box4DE[1].label}
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          borderTop: "1px solid #C4C4C4",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChange2}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={REGI01_box4DE[2].label}
                        />
                      </div>
                      <div>
                        {checked === false ? (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#E0E0E0",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            disabled
                          >
                            {REGI01_box4DE[3].label}
                          </button>
                        ) : (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#001E33",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            onClick={() => handleClose()}
                          >
                            {REGI01_box4DE[3].label}
                          </button>
                        )}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    keepMounted
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <AiFillCheckCircle
                        style={{ width: 100, height: 80, color: "#46BC52" }}
                      />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI01_box5DE[0].label}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("3")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI01_box3EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup">{REGI01_box3EN[1].label}</h2>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[2].label}
                      </p>
                      <input
                        type="text"
                        value={user?.address}
                        onChange={(e) =>
                          setUser({ ...user, address: e.target.value })
                        }
                        placeholder={REGI01_box3EN[2].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[3].label}
                      </p>
                      <input
                        type="text"
                        value={user?.district}
                        onChange={(e) =>
                          setUser({ ...user, district: e.target.value })
                        }
                        placeholder={REGI01_box3EN[3].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={user?.province}
                        onChange={(e) =>
                          setUser({ ...user, province: e.target.value })
                        }
                        placeholder={REGI01_box3EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={user?.country}
                        onChange={(e) =>
                          setUser({ ...user, country: e.target.value })
                        }
                        placeholder={REGI01_box3EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI01_box3EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={user?.postalCode}
                        onChange={(e) =>
                          setUser({ ...user, postalCode: e.target.value })
                        }
                        placeholder={REGI01_box3EN[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={handleOpen}
                    >
                      {REGI01_box3EN[1].label}
                    </button>
                  </div>

                  <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <img src={logo} alt="Logo" style={{ width: 100 }} />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI01_box4EN[0].label}
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{
                          mt: 2,
                          textAlign: "left",
                          overflowY: "auto",
                          height: 200,
                        }}
                      >
                        {REGI01_box4EN[1].label}
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          borderTop: "1px solid #C4C4C4",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked}
                              onChange={handleChange2}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={REGI01_box4EN[2].label}
                        />
                      </div>
                      <div>
                        {checked === false ? (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#E0E0E0",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            disabled
                          >
                            {REGI01_box4EN[3].label}
                          </button>
                        ) : (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#001E33",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            onClick={() => handleClose()}
                          >
                            {REGI01_box4EN[3].label}
                          </button>
                        )}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    keepMounted
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <AiFillCheckCircle
                        style={{ width: 100, height: 80, color: "#46BC52" }}
                      />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI01_box5EN[0].label}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              )}
            </>
          ) : screen === "6" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box1v02EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup">{REGI02_Box1v02EN[1].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box1v02EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box1v02EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.companyName}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            companyName: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box1v02EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.juristicPersonNumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            juristicPersonNumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box1v02EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.website}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            website: e.target.value,
                          })
                        }
                        placeholder="https://example.com"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("8")}
                    >
                      {REGI02_Box1v02EN[7].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box1v02TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup">{REGI02_Box1v02TH[1].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box1v02TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box1v02TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02TH[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.companyName}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            companyName: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box1v02TH[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02TH[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.juristicPersonNumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            juristicPersonNumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box1v02TH[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02TH[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.website}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            website: e.target.value,
                          })
                        }
                        placeholder="https://example.com"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("8")}
                    >
                      {REGI02_Box1v02TH[7].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box1v02DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup">{REGI02_Box1v02DE[1].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box1v02DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box1v02DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02DE[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.companyName}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            companyName: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box1v02DE[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02DE[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.juristicPersonNumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            juristicPersonNumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box1v02DE[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02DE[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.website}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            website: e.target.value,
                          })
                        }
                        placeholder="https://example.com"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("8")}
                    >
                      {REGI02_Box1v02DE[7].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box1v02EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup">{REGI02_Box1v02EN[1].label}</h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box1v02EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box1v02EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.companyName}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            companyName: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box1v02EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.juristicPersonNumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            juristicPersonNumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box1v02EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box1v02EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.website}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            website: e.target.value,
                          })
                        }
                        placeholder="https://example.com"
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("8")}
                    >
                      {REGI02_Box1v02EN[7].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "Freelance Translators" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box1v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box1v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box1v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box1v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box1v01EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box1v01EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.idcard === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    idcard: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box1v01EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    idcard: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.idcard}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box1v01EN[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img
                            src={examplefreelance}
                            width="100%"
                            alt="examplefreelance"
                          />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("9")}
                    >
                      {REGI02_Box1v01EN[8].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box1v01TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box1v01TH[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box1v01TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box1v01TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box1v01TH[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box1v01TH[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.idcard === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    idcard: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box1v01TH[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    idcard: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators.idcard}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box1v01TH[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img
                            src={examplefreelance}
                            width="100%"
                            alt="examplefreelance"
                          />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("9")}
                    >
                      {REGI02_Box1v01TH[8].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box1v01DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box1v01DE[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box1v01DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box1v01DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box1v01DE[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box1v01DE[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.idcard === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    idcard: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box1v01DE[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    idcard: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.idcard}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box1v01DE[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img
                            src={examplefreelance}
                            width="100%"
                            alt="examplefreelance"
                          />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("9")}
                    >
                      {REGI02_Box1v01DE[8].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("4")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box1v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box1v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box1v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box1v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box1v01EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box1v01EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.idcard === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    idcard: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box1v01EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    idcard: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.idcard}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box1v01EN[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img
                            src={examplefreelance}
                            width="100%"
                            alt="examplefreelance"
                          />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("9")}
                    >
                      {REGI02_Box1v01EN[8].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "8" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("6")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box2v02EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box2v02EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box2v02EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box2v02EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.address}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            address: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.district}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            district: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.province}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            province: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.country}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            country: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[8].label}
                      </p>
                      <input
                        type="text"
                        value={translators.postalCode}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            postalCode: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[8].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("10")}
                    >
                      {REGI02_Box2v02EN[9].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("6")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box2v02TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box2v02TH[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box2v02TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box2v02TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02TH[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.address}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            address: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02TH[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02TH[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.district}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            district: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02TH[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02TH[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.province}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            province: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02TH[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02TH[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.country}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            country: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02TH[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02TH[8].label}
                      </p>
                      <input
                        type="text"
                        value={translators.postalCode}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            postalCode: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02TH[8].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("10")}
                    >
                      {REGI02_Box2v02TH[9].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("6")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box2v02DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box2v02DE[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box2v02DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box2v02DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02DE[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.address}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            address: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02DE[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02DE[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.district}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            district: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02DE[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02DE[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.province}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            province: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02DE[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02DE[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.country}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            country: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02DE[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02DE[8].label}
                      </p>
                      <input
                        type="text"
                        value={translators.postalCode}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            postalCode: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02DE[8].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("10")}
                    >
                      {REGI02_Box2v02DE[9].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("6")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box2v02EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box2v02EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box2v02EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box2v02EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.address}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            address: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.district}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            district: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.province}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            province: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.country}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            country: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box2v02EN[8].label}
                      </p>
                      <input
                        type="text"
                        value={translators.postalCode}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            postalCode: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box2v02EN[8].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("10")}
                    >
                      {REGI02_Box2v02EN[9].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "9" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("Freelance Translators")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box2v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box2v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box2v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box2v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box2v01EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box2v01EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.education === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    education: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box2v01EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    education: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.education}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box2v01EN[10].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example9} width="100%" alt="example9" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("11")}
                    >
                      {REGI02_Box2v01EN[7].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("Freelance Translators")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box2v01TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box2v01TH[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box2v01TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box2v01TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box2v01TH[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box2v01TH[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.education === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    education: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box2v01TH[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    education: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.education}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box2v01TH[10].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example9} width="100%" alt="example9" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("11")}
                    >
                      {REGI02_Box2v01TH[7].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("Freelance Translators")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box2v01DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box2v01DE[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box2v01DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box2v01DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box2v01DE[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box2v01DE[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.education === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    education: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box2v01DE[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    education: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.education}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box2v01DE[10].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example9} width="100%" alt="example9" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("11")}
                    >
                      {REGI02_Box2v01DE[7].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("Freelance Translators")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box2v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box2v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box2v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box2v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box2v01EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box2v01EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.education === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    education: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box2v01EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    education: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.education}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box2v01EN[10].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example9} width="100%" alt="example9" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("11")}
                    >
                      {REGI02_Box2v01EN[7].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "10" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("8")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box4v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box4v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box4v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box4v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.bankname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            bankname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.branchname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            branchname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountnumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountnumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("12")}
                    >
                      {REGI02_Box4v01EN[8].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("8")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box4v01TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box4v01TH[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box4v01TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box4v01TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01TH[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.bankname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            bankname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01TH[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01TH[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.branchname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            branchname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01TH[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01TH[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01TH[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01TH[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountnumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountnumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01TH[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("12")}
                    >
                      {REGI02_Box4v01TH[8].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("8")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box4v01DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box4v01DE[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box4v01DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box4v01DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01DE[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.bankname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            bankname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01DE[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01DE[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.branchname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            branchname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01DE[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01DE[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01DE[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01DE[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountnumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountnumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01DE[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("12")}
                    >
                      {REGI02_Box4v01DE[8].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("8")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box4v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box4v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box4v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box4v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.bankname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            bankname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.branchname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            branchname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountnumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountnumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("12")}
                    >
                      {REGI02_Box4v01EN[8].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "11" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("9")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box3v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box3v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box3v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box3v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 18,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v01EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v01EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators.portfolio === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box3v01EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.portfolio}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box3v01EN[10].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example11} width="100%" alt="example11" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("13")}
                    >
                      {REGI02_Box3v01EN[7].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("9")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box3v01TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box3v01TH[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box3v01TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box3v01TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 18,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v01TH[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v01TH[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators.portfolio === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box3v01TH[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.portfolio}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box3v01TH[10].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example11} width="100%" alt="example11" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("13")}
                    >
                      {REGI02_Box3v01TH[7].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("9")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box3v01DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box3v01DE[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box3v01DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box3v01DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 18,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v01DE[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v01DE[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators.portfolio === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box3v01DE[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.portfolio}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box3v01DE[10].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example11} width="100%" alt="example11" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("13")}
                    >
                      {REGI02_Box3v01DE[7].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("9")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box3v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box3v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="6"
                            control={<Radio />}
                            label={REGI02_Box3v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box3v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 18,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v01EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v01EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators.portfolio === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box3v01EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    portfolio: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.portfolio}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box3v01EN[10].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example11} width="100%" alt="example11" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("13")}
                    >
                      {REGI02_Box3v01EN[7].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "12" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("10")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box3v02EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box3v02EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box3v02EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box3v02EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v02EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v02EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.watermark === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box3v02EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators?.watermark}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box3v02EN[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example12} width="100%" alt="example12" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("14")}
                    >
                      {REGI02_Box3v02EN[8].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("10")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box3v02TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box3v02TH[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box3v02TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box3v02TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v02TH[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v02TH[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.watermark === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box3v02TH[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators.watermark}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box3v02TH[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example12} width="100%" alt="example12" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("14")}
                    >
                      {REGI02_Box3v02TH[8].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("10")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box3v02DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box3v02DE[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box3v02DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box3v02DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v02DE[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v02DE[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.watermark === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box3v02DE[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators.watermark}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box3v02DE[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example12} width="100%" alt="example12" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("14")}
                    >
                      {REGI02_Box3v02DE[8].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("10")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box3v02EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box3v02EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box3v02EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box3v02EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 20,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v02EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box3v02EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.watermark === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box3v02EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 200,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    watermark: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                    marginTop: 30,
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 60,
                                    width: 100,
                                  }}
                                >
                                  {translators.watermark}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box3v02EN[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example12} width="100%" alt="example12" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("14")}
                    >
                      {REGI02_Box3v02EN[8].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "13" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("11")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box4v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box4v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box4v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box4v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.bankname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            bankname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.branchname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            branchname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountnumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountnumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("15")}
                    >
                      {REGI02_Box4v01EN[8].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("11")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box4v01TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box4v01TH[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box4v01TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box4v01TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01TH[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.bankname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            bankname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01TH[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01TH[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.branchname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            branchname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01TH[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01TH[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01TH[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01TH[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountnumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountnumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01TH[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("15")}
                    >
                      {REGI02_Box4v01TH[8].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("11")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box4v01DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box4v01DE[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box4v01DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box4v01DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01DE[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.bankname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            bankname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01DE[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01DE[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.branchname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            branchname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01DE[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01DE[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01DE[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01DE[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountnumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountnumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01DE[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("15")}
                    >
                      {REGI02_Box4v01DE[8].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("11")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box4v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box4v01EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box4v01EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box4v01EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                    <div style={{ textAlign: "left", marginTop: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[4].label}
                      </p>
                      <input
                        type="text"
                        value={translators.bankname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            bankname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[4].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[5].label}
                      </p>
                      <input
                        type="text"
                        value={translators.branchname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            branchname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[5].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[6].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountname}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountname: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[6].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <div style={{ textAlign: "left", marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: "#242424",
                        }}
                      >
                        {REGI02_Box4v01EN[7].label}
                      </p>
                      <input
                        type="text"
                        value={translators.accountnumber}
                        onChange={(e) =>
                          setTranslators({
                            ...translators,
                            accountnumber: e.target.value,
                          })
                        }
                        placeholder={REGI02_Box4v01EN[7].label}
                        style={{
                          background: "#FFFFFF",
                          border: "1px solid #F1F1F1 ",
                          borderRadius: 20,
                          borderColor: "#F1F1F1",
                          width: "100%",
                          height: 30,
                          padding: 20,
                          paddingLeft: 12,
                          margin: 10,
                          fontSize: 13,
                        }}
                      />
                    </div>

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                      }}
                      onClick={() => setScreen("15")}
                    >
                      {REGI02_Box4v01EN[8].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "14" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("12")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box5v02EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box5v02EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box5v02EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box5v02EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 17,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box5v02EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box5v02EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.certificate === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 150,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 35,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box5v02EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 150,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 35,
                                    width: 100,
                                  }}
                                >
                                  {translators?.certificate}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box5v02EN[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example14} width="80%" alt="example14" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <div style={{}}>
                      <div style={{ marginBottom: 10 }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                            color: "#333333",
                          }}
                        >
                          {REGI02_Box5v02EN[8].label}
                        </p>
                      </div>

                      <Autocomplete
                        multiple
                        id="country-select-demo"
                        sx={{ width: "100%" }}
                        options={data}
                        autoHighlight
                        // แก้ตรงนี้นะ
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            languages: value,
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={REGI02_Box5v02EN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    </div>
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 30,
                      }}
                      onClick={() => setOpen3(true)}
                    >
                      {REGI02_Box5v02EN[1].label}
                    </button>
                  </div>

                  <Modal
                    keepMounted
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <img src={logo} alt="Logo" style={{ width: 100 }} />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI02_box5EN[0].label}
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{
                          mt: 2,
                          textAlign: "left",
                          overflowY: "auto",
                          height: 125,
                        }}
                      >
                        {REGI02_box5EN[1].label}
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          borderTop: "1px solid #C4C4C4",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked2}
                              onChange={handleChange2}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={REGI02_box5EN[2].label}
                        />
                      </div>
                      <div>
                        {checked2 === false ? (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#E0E0E0",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            disabled
                            onClick={handleOpen}
                          >
                            {REGI02_box5EN[3].label}
                          </button>
                        ) : (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#001E33",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            onClick={handleClose4}
                          >
                            {REGI02_box5EN[3].label}
                          </button>
                        )}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    keepMounted
                    open={open4}
                    onClose={handleClose5}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <AiFillCheckCircle
                        style={{ width: 100, height: 80, color: "#46BC52" }}
                      />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI02_box5EN[4].label}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("12")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box5v02TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box5v02TH[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box5v02TH[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box5v02TH[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 17,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box5v02TH[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box5v02TH[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.certificate === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 150,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 35,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box5v02TH[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 150,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 35,
                                    width: 100,
                                  }}
                                >
                                  {translators?.certificate}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box5v02TH[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example14} width="80%" alt="example14" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <div style={{}}>
                      <div style={{ marginBottom: 10 }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                            color: "#333333",
                          }}
                        >
                          {REGI02_Box5v02TH[8].label}
                        </p>
                      </div>

                      <Autocomplete
                        multiple
                        id="country-select-demo"
                        sx={{ width: "100%" }}
                        options={data}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(value) =>
                          setTranslators({
                            ...translators,
                            languages: value?.label,
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={REGI02_Box5v02TH[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    </div>
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 30,
                      }}
                      onClick={() => setOpen3(true)}
                    >
                      {REGI02_Box5v02TH[1].label}
                    </button>
                  </div>

                  <Modal
                    keepMounted
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <img src={logo} alt="Logo" style={{ width: 100 }} />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI02_box5TH[0].label}
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{
                          mt: 2,
                          textAlign: "left",
                          overflowY: "auto",
                          height: 125,
                        }}
                      >
                        {REGI02_box5TH[1].label}
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          borderTop: "1px solid #C4C4C4",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked2}
                              onChange={handleChange2}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={REGI02_box5TH[2].label}
                        />
                      </div>
                      <div>
                        {checked2 === false ? (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#E0E0E0",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            disabled
                            onClick={handleOpen}
                          >
                            {REGI02_box5TH[3].label}
                          </button>
                        ) : (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#001E33",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            onClick={handleClose4}
                          >
                            {REGI02_box5TH[3].label}
                          </button>
                        )}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    keepMounted
                    open={open4}
                    onClose={handleClose5}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <AiFillCheckCircle
                        style={{ width: 100, height: 80, color: "#46BC52" }}
                      />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI02_box5TH[4].label}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("12")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box5v02DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box5v02DE[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box5v02DE[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box5v02DE[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 17,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box5v02DE[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box5v02DE[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.certificate === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 150,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 35,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box5v02DE[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 150,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 35,
                                    width: 100,
                                  }}
                                >
                                  {translators?.certificate}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box5v02DE[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example14} width="80%" alt="example14" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <div style={{}}>
                      <div style={{ marginBottom: 10 }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                            color: "#333333",
                          }}
                        >
                          {REGI02_Box5v02DE[8].label}
                        </p>
                      </div>

                      <Autocomplete
                        multiple
                        id="country-select-demo"
                        sx={{ width: "100%" }}
                        options={data}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            languages: value?.label,
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={REGI02_Box5v02DE[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    </div>
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 30,
                      }}
                      onClick={() => setOpen3(true)}
                    >
                      {REGI02_Box5v02DE[1].label}
                    </button>
                  </div>

                  <Modal
                    keepMounted
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <img src={logo} alt="Logo" style={{ width: 100 }} />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI02_box5DE[0].label}
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{
                          mt: 2,
                          textAlign: "left",
                          overflowY: "auto",
                          height: 125,
                        }}
                      >
                        {REGI02_box5DE[1].label}
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          borderTop: "1px solid #C4C4C4",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked2}
                              onChange={handleChange2}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={REGI02_box5DE[2].label}
                        />
                      </div>
                      <div>
                        {checked2 === false ? (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#E0E0E0",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            disabled
                            onClick={handleOpen}
                          >
                            {REGI02_box5DE[3].label}
                          </button>
                        ) : (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#001E33",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            onClick={handleClose4}
                          >
                            {REGI02_box5DE[3].label}
                          </button>
                        )}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    keepMounted
                    open={open4}
                    onClose={handleClose5}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <AiFillCheckCircle
                        style={{ width: 100, height: 80, color: "#46BC52" }}
                      />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI02_box5DE[4].label}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("12")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box5v02EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box5v02EN[1].label}
                    </h2>
                    <div>
                      <FormControl style={{ display: "inherit" }}>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            checked
                            onChange={handleChange}
                            name="radio-buttons"
                            value=""
                            control={<Radio />}
                            label={REGI02_Box5v02EN[2].label}
                            style={{ marginRight: 50 }}
                          />
                          <FormControlLabel
                            onChange={handleChange}
                            name="radio-buttons"
                            value="Freelance Translators"
                            control={<Radio />}
                            label={REGI02_Box5v02EN[3].label}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 17,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box5v02EN[4].label}
                      </p>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 14,
                          color: " #242424",
                        }}
                      >
                        {REGI02_Box5v02EN[5].label}
                      </p>
                      <div style={{ textAlign: "center" }}>
                        {translators?.certificate === "" ? (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 150,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 35,
                                    width: 100,
                                  }}
                                >
                                  {REGI02_Box5v02EN[6].label}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        ) : (
                          <div
                            style={{
                              background: "#FFFFFF",
                              borderRadius: 20,
                              width: "100%",
                              height: 150,
                              padding: 50,
                              position: "relative",
                              borderStyle: " dotted ",
                              borderColor: "#0865A8",
                              borderWidth: 2,
                              margin: 20,
                              marginLeft: 0,
                            }}
                          >
                            <label htmlFor="icon-button-file">
                              <Input
                                accept="image/*"
                                id="icon-button-file"
                                type="file"
                                style={{ display: "none" }}
                                onChange={(e) =>
                                  setTranslators({
                                    ...translators,
                                    certificate: e.target.value,
                                  })
                                }
                              />
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <FiImage
                                  style={{
                                    fontSize: 50,
                                    position: "absolute",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: 10,
                                    position: "absolute",
                                    top: 35,
                                    width: 100,
                                  }}
                                >
                                  {translators?.certificate}
                                </p>
                              </IconButton>
                            </label>
                          </div>
                        )}
                      </div>
                      <button
                        style={{ background: "transparent", border: "none" }}
                        onClick={() => example(12)}
                      >
                        <p
                          style={{
                            color: "#666666",
                            textDecorationLine: "underline",
                            fontSize: 14,
                          }}
                        >
                          {REGI02_Box5v02EN[7].label}
                        </p>
                      </button>
                      <Modal
                        // hideBackdrop
                        keepMounted
                        open={openModal12}
                        onClose={handleClose12}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50%",
                            bgcolor: "transparent",
                            boxShadow: 24,
                            pt: 2,
                            px: 4,
                            pb: 3,
                          }}
                        >
                          <img src={example14} width="80%" alt="example14" />
                        </Box>
                      </Modal>
                    </div>
                    <hr style={{ width: "97%", height: 2 }} />
                    <div style={{}}>
                      <div style={{ marginBottom: 10 }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                            color: "#333333",
                          }}
                        >
                          {REGI02_Box5v02EN[8].label}
                        </p>
                      </div>

                      <Autocomplete
                        multiple
                        id="country-select-demo"
                        sx={{ width: "100%" }}
                        options={data}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) =>
                          setTranslators({
                            ...translators,
                            languages: value?.label,
                          })
                        }
                        popupIcon={
                          <MdArrowDropDown
                            style={{ color: "#333333", width: 30, height: 33 }}
                          />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            {option.label}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={REGI02_Box5v02EN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    </div>
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 30,
                      }}
                      onClick={() => setOpen3(true)}
                    >
                      {REGI02_Box5v02EN[1].label}
                    </button>
                  </div>

                  <Modal
                    keepMounted
                    open={open3}
                    onClose={handleClose3}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 600,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <img src={logo} alt="Logo" style={{ width: 100 }} />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI02_box5EN[0].label}
                      </Typography>
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{
                          mt: 2,
                          textAlign: "left",
                          overflowY: "auto",
                          height: 125,
                        }}
                      >
                        {REGI02_box5EN[1].label}
                      </Typography>
                      <div
                        style={{
                          textAlign: "left",
                          borderTop: "1px solid #C4C4C4",
                        }}
                      >
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={checked2}
                              onChange={handleChange2}
                              inputProps={{ "aria-label": "controlled" }}
                            />
                          }
                          label={REGI02_box5EN[2].label}
                        />
                      </div>
                      <div>
                        {checked2 === false ? (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#E0E0E0",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            disabled
                            onClick={handleOpen}
                          >
                            {REGI02_box5EN[3].label}
                          </button>
                        ) : (
                          <button
                            style={{
                              width: "30%",
                              borderRadius: 20,
                              background: "#001E33",
                              height: 40,
                              color: "#FFFFFF",
                              fontSize: 18,
                              borderColor: "transparent",
                              position: "relative",
                              left: "35%",
                            }}
                            onClick={handleClose4}
                          >
                            {REGI02_box5EN[3].label}
                          </button>
                        )}
                      </div>
                    </Box>
                  </Modal>

                  <Modal
                    keepMounted
                    open={open4}
                    onClose={handleClose5}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -70%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                      }}
                    >
                      <AiFillCheckCircle
                        style={{ width: 100, height: 80, color: "#46BC52" }}
                      />
                      <Typography
                        id="keep-mounted-modal-description"
                        sx={{ mt: 2, fontWeight: 700 }}
                      >
                        {REGI02_box5EN[4].label}
                      </Typography>
                    </Box>
                  </Modal>
                </div>
              )}
            </>
          ) : screen === "15" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("13")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box5v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box5v01EN[1].label}
                    </h2>

                    <div>
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #034D82",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#034D82",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #034D82",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>1</p>
                        </div>
                        <div
                          style={{
                            color: "#034D82",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box5v01EN[2].label}</p>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #D9D9D9",
                          marginBottom: 10,
                          width: "75%",
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#D9D9D9",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #D9D9D9",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>2</p>
                        </div>
                        <div
                          style={{
                            color: "#D9D9D9",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box5v01EN[3].label}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box5v01EN[4].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          languages: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box5v01EN[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box5v01EN[6].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data5}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          documents: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box5v01EN[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 20,
                      }}
                      onClick={() => setScreen("16")}
                    >
                      {REGI02_Box5v01EN[7].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("13")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box5v01TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box5v01TH[1].label}
                    </h2>

                    <div>
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #034D82",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#034D82",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #034D82",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>1</p>
                        </div>
                        <div
                          style={{
                            color: "#034D82",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box5v01TH[2].label}</p>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #D9D9D9",
                          marginBottom: 10,
                          width: "75%",
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#D9D9D9",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #D9D9D9",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>2</p>
                        </div>
                        <div
                          style={{
                            color: "#D9D9D9",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box5v01TH[3].label}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box5v01TH[4].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          languages: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box5v01TH[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box5v01TH[6].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data5}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          documents: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box5v01TH[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 20,
                      }}
                      onClick={() => setScreen("16")}
                    >
                      {REGI02_Box5v01TH[7].label}
                    </button>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("13")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box5v01DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box5v01DE[1].label}
                    </h2>

                    <div>
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #034D82",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#034D82",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #034D82",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>1</p>
                        </div>
                        <div
                          style={{
                            color: "#034D82",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box5v01DE[2].label}</p>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #D9D9D9",
                          marginBottom: 10,
                          width: "75%",
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#D9D9D9",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #D9D9D9",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>2</p>
                        </div>
                        <div
                          style={{
                            color: "#D9D9D9",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box5v01DE[3].label}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box5v01DE[4].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          languages: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box5v01DE[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box5v01DE[6].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data5}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          documents: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box5v01DE[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 20,
                      }}
                      onClick={() => setScreen("16")}
                    >
                      {REGI02_Box5v01DE[7].label}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("13")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box5v01EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box5v01EN[1].label}
                    </h2>

                    <div>
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #034D82",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#034D82",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #034D82",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>1</p>
                        </div>
                        <div
                          style={{
                            color: "#034D82",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box5v01EN[2].label}</p>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #D9D9D9",
                          marginBottom: 10,
                          width: "75%",
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#D9D9D9",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #D9D9D9",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>2</p>
                        </div>
                        <div
                          style={{
                            color: "#D9D9D9",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box5v01EN[3].label}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box5v01EN[4].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          languages: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box5v01EN[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box5v01EN[6].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data5}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          documents: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box5v01EN[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 20,
                      }}
                      onClick={() => setScreen("16")}
                    >
                      {REGI02_Box5v01EN[7].label}
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : screen === "16" ? (
            <>
              {Doc === "English" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("15")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box6EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box6EN[1].label}
                    </h2>

                    <div>
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #D9D9D9",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#D9D9D9",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #D9D9D9",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>1</p>
                        </div>
                        <div
                          style={{
                            color: "#D9D9D9",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box6EN[2].label}</p>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #034D82",
                          marginBottom: 10,
                          width: "75%",
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#034D82",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #034D82",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>2</p>
                        </div>
                        <div
                          style={{
                            color: "#034D82",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box6EN[3].label}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box6EN[4].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      // defaultValue={""}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          question: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box6EN[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box6EN[6].label}
                      </p>
                    </div>

                    <textarea
                      value={translators?.answer}
                      onChange={(e) =>
                        setTranslators({
                          ...translators,
                          answer: e.target.value,
                        })
                      }
                      maxLength={150}
                      style={{
                        width: "100%",
                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        boxSizing: "border-box",
                        borderRadius: 5,
                        padding: 20,
                      }}
                    />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 30,
                      }}
                      onClick={() => setOpen3(true)}
                    >
                      {REGI02_Box6EN[1].label}
                    </button>

                    <Modal
                      keepMounted
                      open={open3}
                      onClose={handleClose3}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -70%)",
                          width: 600,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 5,
                          border: "1px solid #E5E5E5",
                          textAlign: "center",
                        }}
                      >
                        <img src={logo} alt="Logo" style={{ width: 100 }} />
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{ mt: 2, fontWeight: 700 }}
                        >
                          {REGI02_box5EN[0].label}
                        </Typography>
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{
                            mt: 2,
                            textAlign: "left",
                            overflowY: "auto",
                            height: 125,
                          }}
                        >
                          {REGI02_box5EN[1].label}
                        </Typography>
                        <div
                          style={{
                            textAlign: "left",
                            borderTop: "1px solid #C4C4C4",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked2}
                                onChange={handleChange2}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label={REGI02_box5EN[2].label}
                          />
                        </div>
                        <div>
                          {checked2 === false ? (
                            <button
                              style={{
                                width: "30%",
                                borderRadius: 20,
                                background: "#E0E0E0",
                                height: 40,
                                color: "#FFFFFF",
                                fontSize: 18,
                                borderColor: "transparent",
                                position: "relative",
                                left: "35%",
                              }}
                              disabled
                              onClick={handleOpen}
                            >
                              {REGI02_box5EN[3].label}
                            </button>
                          ) : (
                            <button
                              style={{
                                width: "30%",
                                borderRadius: 20,
                                background: "#001E33",
                                height: 40,
                                color: "#FFFFFF",
                                fontSize: 18,
                                borderColor: "transparent",
                                position: "relative",
                                left: "35%",
                              }}
                              onClick={handleClose4}
                            >
                              {REGI02_box5EN[3].label}
                            </button>
                          )}
                        </div>
                      </Box>
                    </Modal>

                    <Modal
                      keepMounted
                      open={open4}
                      onClose={handleClose5}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -70%)",
                          width: 400,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 5,
                          border: "1px solid #E5E5E5",
                          textAlign: "center",
                        }}
                      >
                        <AiFillCheckCircle
                          style={{ width: 100, height: 80, color: "#46BC52" }}
                        />
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{ mt: 2, fontWeight: 700 }}
                        >
                          {REGI02_box5EN[4].label}
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                </div>
              ) : Doc === "Thai" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("15")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box6TH[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box6TH[1].label}
                    </h2>

                    <div>
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #D9D9D9",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#D9D9D9",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #D9D9D9",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>1</p>
                        </div>
                        <div
                          style={{
                            color: "#D9D9D9",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box6TH[2].label}</p>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #034D82",
                          marginBottom: 10,
                          width: "75%",
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#034D82",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #034D82",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>2</p>
                        </div>
                        <div
                          style={{
                            color: "#034D82",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box6TH[3].label}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box6TH[4].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      // defaultValue={""}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          question: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box6TH[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box6TH[6].label}
                      </p>
                    </div>

                    <textarea
                      value={translators?.answer}
                      onChange={(e) =>
                        setTranslators({
                          ...translators,
                          answer: e.target.value,
                        })
                      }
                      maxLength={150}
                      style={{
                        width: "100%",
                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        boxSizing: "border-box",
                        borderRadius: 5,
                        padding: 20,
                      }}
                    />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 30,
                      }}
                      onClick={() => setOpen3(true)}
                    >
                      {REGI02_Box6TH[1].label}
                    </button>

                    <Modal
                      keepMounted
                      open={open3}
                      onClose={handleClose3}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -70%)",
                          width: 600,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 5,
                          border: "1px solid #E5E5E5",
                          textAlign: "center",
                        }}
                      >
                        <img src={logo} alt="Logo" style={{ width: 100 }} />
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{ mt: 2, fontWeight: 700 }}
                        >
                          {REGI02_box5TH[0].label}
                        </Typography>
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{
                            mt: 2,
                            textAlign: "left",
                            overflowY: "auto",
                            height: 125,
                          }}
                        >
                          {REGI02_box5TH[1].label}
                        </Typography>
                        <div
                          style={{
                            textAlign: "left",
                            borderTop: "1px solid #C4C4C4",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked2}
                                onChange={handleChange2}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label={REGI02_box5TH[2].label}
                          />
                        </div>
                        <div>
                          {checked2 === false ? (
                            <button
                              style={{
                                width: "30%",
                                borderRadius: 20,
                                background: "#E0E0E0",
                                height: 40,
                                color: "#FFFFFF",
                                fontSize: 18,
                                borderColor: "transparent",
                                position: "relative",
                                left: "35%",
                              }}
                              disabled
                              onClick={handleOpen}
                            >
                              {REGI02_box5TH[3].label}
                            </button>
                          ) : (
                            <button
                              style={{
                                width: "30%",
                                borderRadius: 20,
                                background: "#001E33",
                                height: 40,
                                color: "#FFFFFF",
                                fontSize: 18,
                                borderColor: "transparent",
                                position: "relative",
                                left: "35%",
                              }}
                              onClick={handleClose4}
                            >
                              {REGI02_box5TH[3].label}
                            </button>
                          )}
                        </div>
                      </Box>
                    </Modal>

                    <Modal
                      keepMounted
                      open={open4}
                      onClose={handleClose5}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -70%)",
                          width: 400,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 5,
                          border: "1px solid #E5E5E5",
                          textAlign: "center",
                        }}
                      >
                        <AiFillCheckCircle
                          style={{ width: 100, height: 80, color: "#46BC52" }}
                        />
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{ mt: 2, fontWeight: 700 }}
                        >
                          {REGI02_box5TH[4].label}
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                </div>
              ) : Doc === "German" ? (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("15")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box6DE[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box6DE[1].label}
                    </h2>

                    <div>
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #D9D9D9",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#D9D9D9",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #D9D9D9",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>1</p>
                        </div>
                        <div
                          style={{
                            color: "#D9D9D9",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box6DE[2].label}</p>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #034D82",
                          marginBottom: 10,
                          width: "75%",
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#034D82",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #034D82",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>2</p>
                        </div>
                        <div
                          style={{
                            color: "#034D82",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box6DE[3].label}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box6DE[4].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      // defaultValue={""}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          question: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box6DE[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box6DE[6].label}
                      </p>
                    </div>

                    <textarea
                      value={translators?.answer}
                      onChange={(e) =>
                        setTranslators({
                          ...translators,
                          answer: e.target.value,
                        })
                      }
                      maxLength={150}
                      style={{
                        width: "100%",
                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        boxSizing: "border-box",
                        borderRadius: 5,
                        padding: 20,
                      }}
                    />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 30,
                      }}
                      onClick={() => setOpen3(true)}
                    >
                      {REGI02_Box6DE[1].label}
                    </button>

                    <Modal
                      keepMounted
                      open={open3}
                      onClose={handleClose3}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -70%)",
                          width: 600,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 5,
                          border: "1px solid #E5E5E5",
                          textAlign: "center",
                        }}
                      >
                        <img src={logo} alt="Logo" style={{ width: 100 }} />
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{ mt: 2, fontWeight: 700 }}
                        >
                          {REGI02_box5DE[0].label}
                        </Typography>
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{
                            mt: 2,
                            textAlign: "left",
                            overflowY: "auto",
                            height: 125,
                          }}
                        >
                          {REGI02_box5DE[1].label}
                        </Typography>
                        <div
                          style={{
                            textAlign: "left",
                            borderTop: "1px solid #C4C4C4",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked2}
                                onChange={handleChange2}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label={REGI02_box5DE[2].label}
                          />
                        </div>
                        <div>
                          {checked2 === false ? (
                            <button
                              style={{
                                width: "30%",
                                borderRadius: 20,
                                background: "#E0E0E0",
                                height: 40,
                                color: "#FFFFFF",
                                fontSize: 18,
                                borderColor: "transparent",
                                position: "relative",
                                left: "35%",
                              }}
                              disabled
                              onClick={handleOpen}
                            >
                              {REGI02_box5DE[3].label}
                            </button>
                          ) : (
                            <button
                              style={{
                                width: "30%",
                                borderRadius: 20,
                                background: "#001E33",
                                height: 40,
                                color: "#FFFFFF",
                                fontSize: 18,
                                borderColor: "transparent",
                                position: "relative",
                                left: "35%",
                              }}
                              onClick={handleClose4}
                            >
                              {REGI02_box5DE[3].label}
                            </button>
                          )}
                        </div>
                      </Box>
                    </Modal>

                    <Modal
                      keepMounted
                      open={open4}
                      onClose={handleClose5}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -70%)",
                          width: 400,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 5,
                          border: "1px solid #E5E5E5",
                          textAlign: "center",
                        }}
                      >
                        <AiFillCheckCircle
                          style={{ width: 100, height: 80, color: "#46BC52" }}
                        />
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{ mt: 2, fontWeight: 700 }}
                        >
                          {REGI02_box5DE[4].label}
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      position: "fixed",
                      top: 20,
                      left: width * 0.59,
                      textAlign: "-webkit-center",
                      width: 500,
                      background: " #FFFFFF",
                      boxShadow: " 0px 4px 25px rgba(0, 0, 0, 0.15)",
                      borderRadius: 20,
                      padding: 30,
                    }}
                  >
                    <button
                      style={{
                        fontWeight: 400,
                        fontSize: 18,
                        textDecorationLine: "none",
                        color: "#D9D9D9",
                        textAlign: "left",
                        marginBottom: 20,
                        float: "left",
                        background: "transparent",
                        border: "transparent",
                      }}
                      onClick={() => setScreen("15")}
                    >
                      <BsArrowLeftShort />
                      <p
                        style={{
                          color: "#D9D9D9",
                          fontSize: 18,
                          textDecorationLine: "none",
                          float: "right",
                        }}
                      >
                        {REGI02_Box6EN[0].label}
                      </p>
                    </button>

                    <h2 className="textSignup" style={{ marginTop: 30 }}>
                      {REGI02_Box6EN[1].label}
                    </h2>

                    <div>
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #D9D9D9",
                          marginBottom: 10,
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#D9D9D9",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #D9D9D9",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>1</p>
                        </div>
                        <div
                          style={{
                            color: "#D9D9D9",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box6EN[2].label}</p>
                        </div>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          borderBottom: "2px solid #034D82",
                          marginBottom: 10,
                          width: "75%",
                        }}
                      >
                        <div
                          style={{
                            width: 30,
                            height: 30,
                            color: "#034D82",
                            borderRadius: 100,
                            textAlign: "center",
                            border: "1px solid #034D82",
                            padding: 2,
                            float: "left",
                            fontSize: 15,
                            fontWeight: 700,
                            marginLeft: 20,
                          }}
                        >
                          <p>2</p>
                        </div>
                        <div
                          style={{
                            color: "#034D82",
                            float: "left",
                            margin: 5,
                            fontWeight: 700,
                          }}
                        >
                          <p>{REGI02_Box6EN[3].label}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box6EN[4].label}
                      </p>
                    </div>

                    <Autocomplete
                      multiple
                      id="country-select-demo"
                      sx={{ width: "100%" }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      // defaultValue={""}
                      onChange={(event, value) =>
                        setTranslators({
                          ...translators,
                          question: value,
                        })
                      }
                      popupIcon={
                        <MdArrowDropDown
                          style={{ color: "#333333", width: 30, height: 33 }}
                        />
                      }
                      renderOption={(props, option) => (
                        <Box
                          component="li"
                          sx={{ mr: 2, flexShrink: 0 }}
                          {...props}
                        >
                          {option.label}
                        </Box>
                      )}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={REGI02_Box6EN[5].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "",
                          }}
                        />
                      )}
                    />

                    <div style={{ marginBottom: 10, textAlign: "left" }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: "#333333",
                        }}
                      >
                        {REGI02_Box6EN[6].label}
                      </p>
                    </div>

                    <textarea
                      value={translators?.answer}
                      onChange={(e) =>
                        setTranslators({
                          ...translators,
                          answer: e.target.value,
                        })
                      }
                      maxLength={150}
                      style={{
                        width: "100%",
                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        boxSizing: "border-box",
                        borderRadius: 5,
                        padding: 20,
                      }}
                    />
                    <button
                      style={{
                        width: "100%",
                        borderRadius: 20,
                        background: " #001E33",
                        height: 40,
                        color: "#FFFFFF",
                        fontSize: 18,
                        borderColor: "transparent",
                        marginTop: 30,
                      }}
                      onClick={() => setOpen3(true)}
                    >
                      {REGI02_Box6EN[1].label}
                    </button>

                    <Modal
                      keepMounted
                      open={open3}
                      onClose={handleClose3}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -70%)",
                          width: 600,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 5,
                          border: "1px solid #E5E5E5",
                          textAlign: "center",
                        }}
                      >
                        <img src={logo} alt="Logo" style={{ width: 100 }} />
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{ mt: 2, fontWeight: 700 }}
                        >
                          {REGI02_box5EN[0].label}
                        </Typography>
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{
                            mt: 2,
                            textAlign: "left",
                            overflowY: "auto",
                            height: 125,
                          }}
                        >
                          {REGI02_box5EN[1].label}
                        </Typography>
                        <div
                          style={{
                            textAlign: "left",
                            borderTop: "1px solid #C4C4C4",
                          }}
                        >
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked2}
                                onChange={handleChange2}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                            label={REGI02_box5EN[2].label}
                          />
                        </div>
                        <div>
                          {checked2 === false ? (
                            <button
                              style={{
                                width: "30%",
                                borderRadius: 20,
                                background: "#E0E0E0",
                                height: 40,
                                color: "#FFFFFF",
                                fontSize: 18,
                                borderColor: "transparent",
                                position: "relative",
                                left: "35%",
                              }}
                              disabled
                              onClick={handleOpen}
                            >
                              {REGI02_box5EN[3].label}
                            </button>
                          ) : (
                            <button
                              style={{
                                width: "30%",
                                borderRadius: 20,
                                background: "#001E33",
                                height: 40,
                                color: "#FFFFFF",
                                fontSize: 18,
                                borderColor: "transparent",
                                position: "relative",
                                left: "35%",
                              }}
                              onClick={handleClose4}
                            >
                              {REGI02_box5EN[3].label}
                            </button>
                          )}
                        </div>
                      </Box>
                    </Modal>

                    <Modal
                      keepMounted
                      open={open4}
                      onClose={handleClose5}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -70%)",
                          width: 400,
                          bgcolor: "background.paper",
                          boxShadow: 24,
                          p: 4,
                          borderRadius: 5,
                          border: "1px solid #E5E5E5",
                          textAlign: "center",
                        }}
                      >
                        <AiFillCheckCircle
                          style={{ width: 100, height: 80, color: "#46BC52" }}
                        />
                        <Typography
                          id="keep-mounted-modal-description"
                          sx={{ mt: 2, fontWeight: 700 }}
                        >
                          {REGI02_box5EN[4].label}
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                </div>
              )}
            </>
          ) : null}
          <>
            {Doc === "English" ? (
              <div
                style={{ top: "95%", position: "absolute", marginLeft: "25%" }}
              >
                <div style={{ float: "right" }}>
                  <p>{REGI01_box1EN[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p>{REGI01_box1EN[13].label}</p>
                </div>
              </div>
            ) : Doc === "Thai" ? (
              <div
                style={{ top: "95%", position: "absolute", marginLeft: "25%" }}
              >
                <div style={{ float: "right" }}>
                  <p>{REGI01_box1TH[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p>{REGI01_box1TH[13].label}</p>
                </div>
              </div>
            ) : Doc === "German" ? (
              <div
                style={{ top: "95%", position: "absolute", marginLeft: "25%" }}
              >
                <div style={{ float: "right" }}>
                  <p>{REGI01_box1DE[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p>{REGI01_box1DE[13].label}</p>
                </div>
              </div>
            ) : (
              <div
                style={{ top: "95%", position: "absolute", marginLeft: "25%" }}
              >
                <div style={{ float: "right" }}>
                  <p>{REGI01_box1EN[14].label}</p>
                </div>
                <div style={{ float: "right", marginRight: 50 }}>
                  <p>{REGI01_box1EN[13].label}</p>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
};
export default Signup;
