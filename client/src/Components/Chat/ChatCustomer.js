import * as React from "react";
import {
  // ListItem,
  // ListItemIcon,
  Box,
  Drawer,
  Toolbar,
  // List,
  Modal,
  TextField,
} from "@mui/material";
import "./Chat.css";
import CreditCard from "../../Images/CreditCard.png";
import Promptpay from "../../Images/Promptpay.png";
import Bank_transfer from "../../Images/Banktransfer.png";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { BsArrowLeftShort, BsX } from "react-icons/bs";
import DrawerInHome from "../Drawer/DrawerCustomer";
import Navbars from "../Navbar/navbarHome2";
import Status from "./status";
import { Paper, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { updateOrder } from "../../slices/auth";
import {
  // FaHome,
  // FaLanguage,
  // FaShoppingCart,
  FaTelegramPlane,
  FaUserCircle,
} from "react-icons/fa";

// import {
//   // IoChatbubblesSharp,
//   // IoNotifications,
//   IoDocumentText,
// } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { PaymentEN, PaymentDE, PaymentTH } from "../Data/DataLanguage";

//test
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createOrder } from "../../slices/auth";
import moment from "moment";

// const drawerWidth = 100;
export default function Chat() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [createQ, setCreateQ] = React.useState(false);
  const [payOpen, setPayOpen] = React.useState(false);
  const [scanQR, setScanQR] = React.useState(false);
  // const [step, setStep] = React.useState(0);

  const [data, setData] = React.useState([]);
  const [openChat, setOpenChat] = React.useState("");

  // const [price, setPrice] = React.useState("");

  const [order, setOrder] = React.useState({
    Date: "",
    Translator_name: "",
    Customer_name: "",
    Customers_will_get: "",
    Job_description: "",
    Deadline: "",
    Number_of_edits: "",
    Price: "",
    Status: "",
    Send_to: "",
    Review: "",
    id: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;
  let Doc2 = location?.state?.name;
  console.log(Doc2);
  let Value = auth?.token;

  React.useEffect(() => {
    if (Value) {
      console.log("value :", Value);
    }
    // else {
    //   navigate("/Login");
    // }
  }, [Value]);

  const handleClose = () => {
    setCreateQ(false);
    setPayOpen(false);
    setScanQR(false);
  };

  const Pay_Open = () => {
    dispatch(createOrder(order));
    setPayOpen(true);
    // setStep(1);
    setCreateQ(false);
  };
  const handleOpen = () => {
    setPayOpen(false);
    setCreateQ(true);
  };
  const handleOpen_ScanQR = () => {
    setOrder({
      ...order,
      Status: "2",
      Date: openChat?.Date,
      Translator_name: openChat?.Translator_name,
      Review: openChat?.Review,
      Send_to: openChat?.Send_to,
      Number_of_edits: openChat?.Number_of_edits,
      Price: openChat?.Price,
      Deadline: openChat?.Deadline,
      Job_description: openChat?.Job_description,
      Customers_will_get: openChat?.Customers_will_get,
      Customer_name: openChat?.Customer_name,
      id: openChat?.id,
    });
    setScanQR(true);
  };
  const handleClose_scanQR = () => {
    console.log("hi", order);
    dispatch(updateOrder(order));
    navigate("/Order");
    setCreateQ(false);
    setPayOpen(false);
    setScanQR(false);
  };

  const Create_Quotation = () => {
    // dispatch(getOrder());
    setCreateQ(true);
  };

  const name = { Customer_name: auth?.name };
  // const url = "http://localhost:3001/api";
  const url = "https://54.244.204.59/api";

  const setDataOrder = (i) => {
    console.log(i);
    const Day_List = i?.map((item, index) => {
      try {
        const formattedDate = moment(item?.Date).calendar();
        let formattedDate2 = moment(item?.Deadline).format("ll");
        return {
          id: item?._id,
          orderID: index,
          Translator_name: item?.Translator_name,
          orderedDate: formattedDate,
          Status: item?.Status,
          Price: item?.Price,
          Deadline: formattedDate2,
          Customer_name: item?.Customer_name,
          Customers_will_get: item?.Customers_will_get,
          Job_description: item?.Job_description,
          Number_of_edits: item?.Number_of_edits,
          Send_to: item?.Send_to,
          Review: item?.Review,
          Date: item?.Date,
        };
      } catch (e) {
        console.error(e);
        return null;
      }
    });
    setData(Day_List);
  };

  const getOrder = async (values) => {
    try {
      const token = await axios.get(`${url}/getOrder`, {
        params: { Customer_name: values?.Customer_name },
      });
      await console.log(token?.data);

      setDataOrder(token?.data);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error("Translator not found");
      } else if (error.response && error.response.status === 500) {
        throw new Error("Internal server error");
      } else if (error.response && error.response.status === 400) {
        throw new Error("Bad request");
      } else {
        throw new Error("Something went wrong");
      }
      // return rejectWithValue(error.response.data);
      // console.log(error.response);
    }
  };

  React.useEffect(() => {
    if (Value) {
      console.log("value :", Value);
    } else {
      navigate("/Login");
    }

    getOrder(name);
  }, []);
  console.log("openChat:", openChat);
  return (
    <div className="App-body">
      <header className="App-header">
        {Doc === "English" ? (
          <Navbars
            navigate={navigate}
            languages="English"
            dispatch={dispatch}
          />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" dispatch={dispatch} />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" dispatch={dispatch} />
        ) : (
          <Navbars
            navigate={navigate}
            languages="English"
            dispatch={dispatch}
          />
        )}
      </header>
      <Box sx={{ display: "flex", width: "100% " }}>
        <DrawerInHome languages={Doc} value={Value} />
        <>
          <Box component="main">
            <div
              style={{
                width: 300,
                position: "fixed",
                height: "-webkit-fill-available",
                borderRight: "1px solid rgba(0, 0, 0, 0.12)",
              }}
            >
              <div style={{ position: "absolute", top: 15, left: 25 }}>
                <p style={{ color: "#353535", fontSize: 30, fontWeight: 700 }}>
                  Chat
                </p>

                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 250,
                    borderRadius: 3,
                    backgroundColor: "#FFFFF",
                    boxShadow: "none",
                    marginTop: 2,
                    border: "1px #e5e5e5 solid",
                  }}
                >
                  <IconButton
                    type="submit"
                    sx={{ p: "10px", color: "#034D82" }}
                    aria-label="search"
                  >
                    <SearchIcon style={{ color: "#BFBFBF" }} />
                  </IconButton>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                </Paper>

                <div
                  style={{
                    color: "#353535",
                    fontWeight: 500,
                    fontSize: 18,
                    display: "flex",
                    overflowY: "scroll",
                    flexDirection: "column",
                    height: "60vh",
                  }}
                >
                  {data.map((i) => (
                    <button
                      style={{
                        background: "#FFFFFF",
                        width: 250,
                        borderRadius: 12,
                        padding: 7,
                        border: "1px #E5E5E5 solid",
                        marginTop: 15,
                      }}
                      key={i.id}
                      onClick={() => setOpenChat(i)}
                    >
                      <div style={{ float: "left" }}>
                        <FaUserCircle
                          alt="avatar"
                          style={{
                            width: 35,
                            height: "auto",
                            margin: 10,
                            display: "block",
                            color: "#3333",
                          }}
                        />
                      </div>
                      <div style={{ float: "left", paddingTop: 7 }}>
                        <p>{i?.Translator_name}</p>
                      </div>
                      <div style={{ textAlign: "end" }}>
                        <p
                          style={{
                            color: "#808080",
                            fontWeight: 0,
                            fontSize: 12,
                            marginLeft: 15,
                          }}
                        >
                          {i?.orderedDate}
                        </p>
                      </div>
                      <div
                        style={{
                          position: "relative",
                          right: 50,
                          paddingTop: 15,
                        }}
                      >
                        <p
                          style={{
                            color: "#808080",
                            fontWeight: 0,
                            fontSize: 15,
                          }}
                        >
                          You : I want to ...
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {openChat === "" ? (
              <></>
            ) : (
              <div
                style={{
                  width: "52%",
                  position: "fixed",
                  height: "-webkit-fill-available",
                  background: "#FFFFFF",
                  left: 400,
                  border: "1px #e5e5e5 solid",
                  borderLeft: "0px solid",
                }}
              >
                <div
                  style={{
                    width: "inherit",
                    position: "fixed",
                    height: 100,
                    top: 70,
                    textAlign: "left",
                    fontSize: 24,
                    fontWeight: 600,
                    borderBottom: "1px #e5e5e5 solid",
                    padding: 25,
                  }}
                >
                  <FaUserCircle
                    style={{
                      width: 35,
                      height: "auto",
                      margin: 10,
                      float: "left",
                      color: "#3333",
                    }}
                  />
                  <p style={{ marginTop: 10 }}>{openChat?.Translator_name}</p>
                </div>

                <div
                  style={{
                    padding: 15,
                    width: "100%",
                    height: "68vh",
                    overflow: "scroll",
                    position: "absolute",
                    top: 90,
                  }}
                >
                  {/* <div
                  style={{
                    margin: 20,
                    marginTop: 0,
                  }}
                >
                  <div style={{ float: "left" }}>
                    <FaUserCircle
                      alt="avatar"
                      style={{
                        width: 35,
                        height: "auto",
                        margin: 10,
                        display: "block",
                        color: "#3333",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 7,
                      background: "rgb(247 244 244)",
                      width: 200,
                      height: "auto",
                      borderRadius: 12,
                      overflow: "hidden",
                      textAlign: "initial",
                      fontSize: 15,
                    }}
                  >
                    <p>
                      Hello, I'm Ozone Black. I'm your translator. You can
                      inquire here. I will reply you as soon as possible
                    </p>
                    <div
                      style={{
                        color: "#808080",
                        fontWeight: 0,
                        fontSize: 12,
                        position: "absolute",
                        left: 300,
                        marginTop: "-10px",
                      }}
                    >
                      <p>1:08 PM</p>
                    </div>
                  </div>
                </div> */}

                  {/* <div
                  style={{
                    margin: 20,
                    marginLeft: 285,
                  }}
                >
                  <div
                    style={{
                      float: "left",
                      color: "#808080",
                      fontWeight: 0,
                      fontSize: 12,
                      marginRight: 10,
                    }}
                  >
                    <p>1:08 PM</p>
                  </div>

                  <div
                    style={{
                      padding: 7,
                      background: "#E6F2FA",
                      width: 200,
                      height: "auto",
                      borderRadius: 12,
                      overflow: "hidden",
                      textAlign: "initial",
                      fontSize: 15,
                    }}
                  >
                    <p>I want to ask more.</p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 570,
                      marginTop: "-35px",
                    }}
                  >
                    <FaUserCircle
                      alt="avatar"
                      style={{
                        // width: "98%",
                        color: "#3333",
                        width: 35,
                        height: "auto",
                        margin: 0,
                        display: "block",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    margin: 20,
                  }}
                >
                  <div
                    style={{
                      float: "left",
                      color: "#808080",
                      fontWeight: 0,
                      fontSize: 12,
                      marginRight: 10,
                    }}
                  >
                    <FaUserCircle
                      alt="avatar"
                      style={{
                        width: 35,
                        height: "auto",
                        margin: 0,
                        display: "block",
                        color: "#3333",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 7,
                      background: "rgb(247 244 244)",
                      width: 200,
                      height: "auto",
                      borderRadius: 12,
                      overflow: "hidden",
                      textAlign: "initial",
                      fontSize: 15,
                    }}
                  >
                    <p>Create a contract.</p>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 300,
                      marginTop: "-35px",
                      color: "#808080",
                      fontWeight: 0,
                      fontSize: 12,
                    }}
                  >
                    <p>1:08 PM</p>
                  </div>
                </div>

                <div
                  style={{
                    margin: 20,
                  }}
                >
                  <div
                    style={{
                      float: "left",
                      color: "#808080",
                      fontWeight: 0,
                      fontSize: 12,
                      marginRight: 10,
                    }}
                  >
                    <FaUserCircle
                      alt="avatar"
                      style={{
                        width: 35,
                        height: "auto",
                        margin: 0,
                        display: "block",
                        color: "#3333",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 7,
                      background: "rgb(247 244 244)",
                      width: 200,
                      height: "auto",
                      borderRadius: 12,
                      overflow: "hidden",
                      textAlign: "center",
                      color: "#FFC100",
                    }}
                  >
                    <div
                      style={{
                        background: "#FAFAFA",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        bordeRadius: 5,
                        fontSize: 50,
                        width: 165,
                        height: 90,
                        padding: 5,
                        margin: 10,
                        borderRadius: 10,
                        marginBottom: 11,
                      }}
                    >
                      <IoDocumentText />
                    </div>
                    <button
                      style={{
                        background: "#FAFAFA",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        borderRadius: 5,
                        width: 140,
                        height: "auto",
                        border: "none",
                        fontSize: 15,
                        color: "#FFC100",
                        padding: 5,
                        marginBottom: 10,
                      }}
                      // onClick={() => Create_Quotation()}
                    >
                      <p style={{ marginBottom: 0 }}>Create Quotation.</p>
                    </button>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 300,
                      marginTop: "-35px",
                      color: "#808080",
                      fontWeight: 0,
                      fontSize: 12,
                    }}
                  >
                    <p>1:08 PM</p>
                  </div>
                </div>

                <div
                  style={{
                    margin: 20,
                  }}
                >
                  <div
                    style={{
                      float: "left",
                      color: "#808080",
                      fontWeight: 0,
                      fontSize: 12,
                      marginRight: 10,
                    }}
                  >
                    <FaUserCircle
                      alt="avatar"
                      style={{
                        width: 35,
                        height: "auto",
                        margin: 0,
                        display: "block",
                        color: "#3333",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: 7,
                      background: "rgb(247 244 244)",
                      width: 200,
                      height: "auto",
                      borderRadius: 12,
                      overflow: "hidden",
                      textAlign: "initial",
                      fontSize: 16,
                    }}
                  >
                    <div
                      style={{
                        background: "#FAFAFA",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        bordeRadius: 5,
                        fontSize: 14,
                        width: 165,
                        padding: 10,
                        margin: 10,
                        borderRadius: 10,
                        marginBottom: 11,
                      }}
                    >
                      <p style={{ textAlign: "center" }}>Quotation</p>
                      <p>Job description</p>
                      <p style={{ color: "e5e5e5", fontSize: 13 }}>
                        Although cards can support multiple actions, UI
                        controls, and an overflow menu, use restraint and
                        remember that cards are entry points to more complex and
                        detailed information.
                      </p>
                      <p>Deadline</p>
                      <p style={{ color: "e5e5e5", fontSize: 13 }}>
                        Although cards can support multiple actions, UI
                        controls, and an overflow menu, use restraint and
                        remember that cards are entry points to more complex and
                        detailed information.
                      </p>
                      <div style={{ position: "relative", left: "35%" }}>
                        <button
                          style={{
                            color: "#FFC100",
                            background: "transparent",
                            border: "none",
                          }}
                          onClick={() => Create_Quotation()}
                        >
                          Pay
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      left: 300,
                      marginTop: "-35px",
                      color: "#808080",
                      fontWeight: 0,
                      fontSize: 12,
                    }}
                  >
                    <p>1:08 PM</p>
                  </div>
                </div> */}
                  {openChat?.Status === "1" || openChat?.Status === "2" ? (
                    <div
                      style={{
                        margin: 20,
                      }}
                    >
                      <div
                        style={{
                          float: "left",
                          color: "#808080",
                          fontWeight: 0,
                          fontSize: 12,
                          marginRight: 10,
                        }}
                      >
                        <FaUserCircle
                          alt="avatar"
                          style={{
                            width: 35,
                            height: "auto",
                            margin: 0,
                            display: "block",
                            color: "#3333",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          padding: 7,
                          background: "rgb(247 244 244)",
                          width: 200,
                          height: "auto",
                          borderRadius: 12,
                          overflow: "hidden",
                          textAlign: "initial",
                          fontSize: 16,
                        }}
                      >
                        <div
                          style={{
                            background: "#FAFAFA",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                            bordeRadius: 5,
                            fontSize: 14,
                            width: 165,
                            padding: 10,
                            margin: 10,
                            borderRadius: 10,
                            marginBottom: 11,
                          }}
                        >
                          <p
                            style={{
                              textAlign: "center",
                              fontWeight: "bold",
                              fontSize: "large",
                            }}
                          >
                            Quotation
                          </p>
                          <p style={{ fontWeight: "bold" }}>Job description</p>
                          <p style={{ color: "e5e5e5", fontSize: 13 }}>
                            {openChat?.Job_description}
                          </p>
                          <p style={{ fontWeight: "bold" }}>Deadline</p>
                          <p style={{ color: "e5e5e5", fontSize: 13 }}>
                            {openChat?.Deadline}
                          </p>
                          <div style={{ position: "relative", left: "35%" }}>
                            <button
                              style={{
                                color: "#FFC100",
                                background: "transparent",
                                border: "none",
                              }}
                              onClick={() => Create_Quotation()}
                            >
                              Pay
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          left: 300,
                          marginTop: "-35px",
                          color: "#808080",
                          fontWeight: 0,
                          fontSize: 12,
                        }}
                      >
                        <p>1:08 PM</p>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div style={{ position: "fixed", top: 700, left: 470 }}>
                  <Paper
                    component="form"
                    sx={{
                      p: "2px 4px",
                      display: "flex",
                      alignItems: "center",
                      width: 600,
                    }}
                  >
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Type something here..."
                      inputProps={{ "aria-label": "Type something here..." }}
                    />
                    <IconButton
                      // type="submit"
                      sx={{ p: "10px" }}
                      aria-label="search"
                    >
                      <FaTelegramPlane color="#047ACF" />
                    </IconButton>
                  </Paper>
                </div>
              </div>
            )}
            <>
              <Modal
                keepMounted
                open={createQ}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "75%",
                    left: "50%",
                    transform: "translate(-50%, -90%)",
                    width: 600,
                    height: "80%",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 2.9,
                    borderRadius: 5,
                    border: "1px solid #E5E5E5",
                    textAlign: "center",
                    overflow: "scroll",
                  }}
                >
                  <p
                    id="keep-mounted-modal-description"
                    style={{ mt: 2, fontWeight: 700 }}
                  >
                    Quotation 99
                  </p>

                  <div
                    id="keep-mounted-modal-description"
                    sx={{
                      mt: 2,
                      textAlign: "left",
                      overflowY: "auto",
                      height: 450,
                    }}
                  >
                    <div style={{ textAlign: "left", marginBottom: 20 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 16,
                          color: "#242424",
                          marginBottom: 0,
                        }}
                      >
                        Date
                      </p>
                      <LocalizationProvider dateAdapter={AdapterLuxon}>
                        <MobileDatePicker
                          inputFormat="dd MMM yyyy"
                          // defaultValue={openChat?.Date}
                          value={openChat?.Date}
                          onChange={(e) => setOrder({ ...order, Date: e })}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              style={{
                                border: "none",
                                borderRadius: 10,
                                width: "40%",
                                // border: "1px #E5E5E5 solid",
                              }}
                            />
                          )}
                        />
                      </LocalizationProvider>
                    </div>

                    <div
                      style={{ height: 97, borderBottom: "1px solid #C4C4C4" }}
                    >
                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          marginRight: 20,
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 16,
                            color: "#242424",
                            marginBottom: 0,
                          }}
                        >
                          Translator name
                        </p>
                        <input
                          type="text"
                          defaultValue={openChat?.Translator_name}
                          onChange={(e) =>
                            setOrder({
                              ...order,
                              Translator_name: e.target.value,
                            })
                          }
                          placeholder="Name"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1",
                            borderRadius: 10,
                            width: "110%",
                            height: 56,
                            padding: 20,
                            paddingLeft: 12,
                          }}
                        />
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          marginLeft: 60,
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 16,
                            color: "#242424",
                            marginBottom: 0,
                          }}
                        >
                          Customer name
                        </p>
                        <input
                          type="text"
                          defaultValue={openChat?.Customer_name}
                          onChange={(e) =>
                            setOrder({
                              ...order,
                              Customer_name: e.target.value,
                            })
                          }
                          placeholder="Name"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1",
                            borderRadius: 10,
                            width: "110%",
                            height: 56,
                            padding: 20,
                            paddingLeft: 12,
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: 20 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 16,
                          color: "#242424",
                          textAlign: "left",
                        }}
                      >
                        Job description
                      </p>
                      <textarea
                        defaultValue={openChat?.Job_description}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Job_description: e.target.value,
                          })
                        }
                        maxLength={800}
                        style={{
                          width: "100%",
                          height: 150,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          boxSizing: "border-box",
                          borderRadius: 5,
                          padding: 20,
                        }}
                      />
                    </div>

                    <div style={{ marginTop: 20 }}>
                      <p
                        style={{
                          fontWeight: 500,
                          fontSize: 16,
                          color: "#242424",
                          textAlign: "left",
                        }}
                      >
                        Customers will get
                      </p>
                      <textarea
                        defaultValue={openChat?.Customers_will_get}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Customers_will_get: e.target.value,
                          })
                        }
                        maxLength={800}
                        style={{
                          width: "100%",
                          height: 150,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          boxSizing: "border-box",
                          borderRadius: 5,
                          padding: 20,
                        }}
                      />
                    </div>

                    <div
                      style={{
                        textAlign: "left",
                        marginBottom: 20,
                        marginTop: 20,
                      }}
                    >
                      <div style={{ float: "left" }}>
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 16,
                            color: "#242424",
                            marginBottom: 0,
                          }}
                        >
                          Deadline
                        </p>
                        <LocalizationProvider dateAdapter={AdapterLuxon}>
                          <MobileDatePicker
                            inputFormat="dd MMM yyyy"
                            value={openChat?.Deadline}
                            onChange={(e) =>
                              setOrder({
                                ...order,
                                Deadline: e,
                              })
                            }
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                style={{
                                  // border: "1px #E5E5E5 solid",
                                  borderRadius: 10,
                                  width: "110%",
                                }}
                              />
                            )}
                          />
                        </LocalizationProvider>
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          float: "left",
                          marginLeft: 90,
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 16,
                            color: "#242424",
                            marginBottom: 0,
                          }}
                        >
                          Number of edits
                        </p>
                        <input
                          type="text"
                          defaultValue={openChat?.Number_of_edits}
                          onChange={(e) =>
                            setOrder({
                              ...order,
                              Number_of_edits: e.target.value,
                            })
                          }
                          placeholder="Name"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1",
                            borderRadius: 10,
                            width: "110%",
                            height: 56,
                            padding: 20,
                            paddingLeft: 12,
                          }}
                        />
                      </div>
                    </div>

                    <div
                      style={{
                        textAlign: "left",
                        marginBottom: 20,
                        marginTop: 20,
                      }}
                    >
                      <div style={{ float: "left" }}>
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 16,
                            color: "#242424",
                            marginBottom: 0,
                          }}
                        >
                          Price
                        </p>
                        <input
                          type="text"
                          defaultValue={openChat?.Price}
                          onChange={(e) =>
                            setOrder({
                              ...order,
                              Price: e.target.value,
                            })
                          }
                          placeholder="Price"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #F1F1F1",
                            borderRadius: 10,
                            width: "110%",
                            height: 56,
                            padding: 20,
                            paddingLeft: 12,
                          }}
                          maxLength={10}
                        />
                      </div>

                      <div
                        style={{
                          textAlign: "right",
                          float: "left",
                          marginTop: 30,
                          width: "60%",
                        }}
                      >
                        <p
                          style={{
                            fontWeight: 500,
                            fontSize: 16,
                            color: "#242424",
                            marginBottom: 0,
                          }}
                        >
                          {openChat?.Price}
                        </p>
                      </div>
                    </div>
                    <div style={{ height: 200 }}>
                      <button
                        style={{
                          width: "100%",
                          height: 40,
                          background: " #46BC52",
                          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
                          borderRadius: 3,
                          textAlign: "center",
                          border: "none",
                          color: "#FFFFFF",
                          marginTop: 12,
                        }}
                        onClick={() => Pay_Open()}
                      >
                        Pay
                      </button>
                    </div>
                  </div>
                </Box>
              </Modal>

              {Doc === "English" ? (
                <>
                  {/* Payment */}
                  <Modal
                    open={payOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -90%)",
                        width: "70%",
                        height: "40%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2.9,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                        overflow: "scroll",
                      }}
                    >
                      <div>
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
                          onClick={() => handleOpen()}
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
                            {PaymentEN[0].label}
                          </p>
                        </button>
                        <p
                          style={{
                            color: "#000000",
                            fontSize: 20,
                            textDecorationLine: "none",
                            fontWeight: 500,
                            float: "left",
                            width: "85%",
                          }}
                        >
                          {PaymentEN[1].label}
                        </p>
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
                          onClick={() => setPayOpen(false)}
                        >
                          <BsX
                            style={{
                              color: "#D9D9D9",
                              fontSize: 25,
                              textDecorationLine: "none",
                              float: "left",
                            }}
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 70,
                          top: 70,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                        }}
                      >
                        <img
                          src={CreditCard}
                          alt="CreditCard"
                          style={{ width: "60%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#E0E0E0",
                            fontSize: 23,
                          }}
                        >
                          {PaymentEN[2].label}
                        </p>
                      </div>

                      <button
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 380,
                          top: 70,
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                          background: "transparent",
                        }}
                        onClick={() => handleOpen_ScanQR()}
                      >
                        <img
                          src={Promptpay}
                          alt="Promptpay"
                          style={{ width: "40%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#333333",
                            fontSize: 23,
                          }}
                        >
                          {PaymentEN[3].label}
                        </p>
                      </button>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 700,
                          top: 70,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                        }}
                      >
                        <img
                          src={Bank_transfer}
                          alt="Bank_transfer"
                          style={{ width: "23%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#E0E0E0",
                            fontSize: 23,
                          }}
                        >
                          {PaymentEN[4].label}
                        </p>
                      </div>
                    </Box>
                  </Modal>
                  {/* Scan QR code to pay */}
                  <Modal
                    hideBackdrop
                    open={scanQR}
                    onClose={handleClose_scanQR}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "80%",
                        left: "50%",
                        transform: "translate(-50%, -90%)",
                        width: "70%",
                        height: "80%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2.9,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                        overflow: "scroll",
                      }}
                    >
                      <div>
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
                          onClick={() => setScanQR(false)}
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
                            {PaymentEN[0].label}
                          </p>
                        </button>
                        <p
                          style={{
                            color: "#000000",
                            fontSize: 20,
                            textDecorationLine: "none",
                            fontWeight: 500,
                            float: "left",
                            width: "85%",
                          }}
                        >
                          {PaymentEN[1].label}
                        </p>
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
                          onClick={() => handleClose_scanQR()}
                        >
                          <BsX
                            style={{
                              color: "#D9D9D9",
                              fontSize: 25,
                              textDecorationLine: "none",
                              float: "left",
                            }}
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: "40%",
                          height: 175,
                          left: 290,
                          top: 44,
                          borderRadius: 10,
                          padding: 22,
                          background: "transparent",
                        }}
                      >
                        <img
                          src={Promptpay}
                          alt="Promptpay"
                          style={{ width: "100%", height: "auto", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#333333",
                            fontSize: 23,
                          }}
                        >
                          {PaymentEN[5].label}
                        </p>
                      </div>
                    </Box>
                  </Modal>
                </>
              ) : Doc === "Thai" ? (
                <>
                  {/* Payment */}
                  <Modal
                    open={payOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -90%)",
                        width: "70%",
                        height: "40%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2.9,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                        overflow: "scroll",
                      }}
                    >
                      <div>
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
                          onClick={() => handleOpen()}
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
                            {PaymentTH[0].label}
                          </p>
                        </button>
                        <p
                          style={{
                            color: "#000000",
                            fontSize: 20,
                            textDecorationLine: "none",
                            fontWeight: 500,
                            float: "left",
                            width: "85%",
                          }}
                        >
                          {PaymentTH[1].label}
                        </p>
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
                          onClick={() => setPayOpen(false)}
                        >
                          <BsX
                            style={{
                              color: "#D9D9D9",
                              fontSize: 25,
                              textDecorationLine: "none",
                              float: "left",
                            }}
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 70,
                          top: 70,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                        }}
                      >
                        <img
                          src={CreditCard}
                          alt="CreditCard"
                          style={{ width: "60%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#E0E0E0",
                            fontSize: 23,
                          }}
                        >
                          {PaymentTH[2].label}
                        </p>
                      </div>

                      <button
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 380,
                          top: 70,
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                          background: "transparent",
                        }}
                        onClick={() => handleOpen_ScanQR()}
                      >
                        <img
                          src={Promptpay}
                          alt="Promptpay"
                          style={{ width: "40%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#333333",
                            fontSize: 23,
                          }}
                        >
                          {PaymentTH[3].label}
                        </p>
                      </button>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 700,
                          top: 70,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                        }}
                      >
                        <img
                          src={Bank_transfer}
                          alt="Bank_transfer"
                          style={{ width: "23%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#E0E0E0",
                            fontSize: 23,
                          }}
                        >
                          {PaymentTH[4].label}
                        </p>
                      </div>
                    </Box>
                  </Modal>
                  {/* Scan QR code to pay */}
                  <Modal
                    hideBackdrop
                    open={scanQR}
                    onClose={handleClose_scanQR}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "80%",
                        left: "50%",
                        transform: "translate(-50%, -90%)",
                        width: "70%",
                        height: "80%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2.9,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                        overflow: "scroll",
                      }}
                    >
                      <div>
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
                          onClick={() => setScanQR(false)}
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
                            {PaymentTH[0].label}
                          </p>
                        </button>
                        <p
                          style={{
                            color: "#000000",
                            fontSize: 20,
                            textDecorationLine: "none",
                            fontWeight: 500,
                            float: "left",
                            width: "85%",
                          }}
                        >
                          {PaymentTH[1].label}
                        </p>
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
                          onClick={() => handleClose_scanQR()}
                        >
                          <BsX
                            style={{
                              color: "#D9D9D9",
                              fontSize: 25,
                              textDecorationLine: "none",
                              float: "left",
                            }}
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: "40%",
                          height: 175,
                          left: 290,
                          top: 44,
                          borderRadius: 10,
                          padding: 22,
                          background: "transparent",
                        }}
                      >
                        <img
                          src={Promptpay}
                          alt="Promptpay"
                          style={{ width: "100%", height: "auto", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#333333",
                            fontSize: 23,
                          }}
                        >
                          {PaymentTH[5].label}
                        </p>
                      </div>
                    </Box>
                  </Modal>
                </>
              ) : Doc === "German" ? (
                <>
                  {/* Payment */}
                  <Modal
                    open={payOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -90%)",
                        width: "70%",
                        height: "40%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2.9,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                        overflow: "scroll",
                      }}
                    >
                      <div>
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
                          onClick={() => handleOpen()}
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
                            {PaymentDE[0].label}
                          </p>
                        </button>
                        <p
                          style={{
                            color: "#000000",
                            fontSize: 20,
                            textDecorationLine: "none",
                            fontWeight: 500,
                            float: "left",
                            width: "85%",
                          }}
                        >
                          {PaymentDE[1].label}
                        </p>
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
                          onClick={() => setPayOpen(false)}
                        >
                          <BsX
                            style={{
                              color: "#D9D9D9",
                              fontSize: 25,
                              textDecorationLine: "none",
                              float: "left",
                            }}
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 70,
                          top: 70,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                        }}
                      >
                        <img
                          src={CreditCard}
                          alt="CreditCard"
                          style={{ width: "60%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#E0E0E0",
                            fontSize: 23,
                          }}
                        >
                          {PaymentDE[2].label}
                        </p>
                      </div>

                      <button
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 380,
                          top: 70,
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                          background: "transparent",
                        }}
                        onClick={() => handleOpen_ScanQR()}
                      >
                        <img
                          src={Promptpay}
                          alt="Promptpay"
                          style={{ width: "40%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#333333",
                            fontSize: 23,
                          }}
                        >
                          {PaymentDE[3].label}
                        </p>
                      </button>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 700,
                          top: 70,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                        }}
                      >
                        <img
                          src={Bank_transfer}
                          alt="Bank_transfer"
                          style={{ width: "23%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#E0E0E0",
                            fontSize: 23,
                          }}
                        >
                          {PaymentDE[4].label}
                        </p>
                      </div>
                    </Box>
                  </Modal>
                  {/* Scan QR code to pay */}
                  <Modal
                    hideBackdrop
                    open={scanQR}
                    onClose={handleClose_scanQR}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "80%",
                        left: "50%",
                        transform: "translate(-50%, -90%)",
                        width: "70%",
                        height: "80%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2.9,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                        overflow: "scroll",
                      }}
                    >
                      <div>
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
                          onClick={() => setScanQR(false)}
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
                            {PaymentDE[0].label}
                          </p>
                        </button>
                        <p
                          style={{
                            color: "#000000",
                            fontSize: 20,
                            textDecorationLine: "none",
                            fontWeight: 500,
                            float: "left",
                            width: "85%",
                          }}
                        >
                          {PaymentDE[1].label}
                        </p>
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
                          onClick={() => handleClose_scanQR()}
                        >
                          <BsX
                            style={{
                              color: "#D9D9D9",
                              fontSize: 25,
                              textDecorationLine: "none",
                              float: "left",
                            }}
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: "40%",
                          height: 175,
                          left: 290,
                          top: 44,
                          borderRadius: 10,
                          padding: 22,
                          background: "transparent",
                        }}
                      >
                        <img
                          src={Promptpay}
                          alt="Promptpay"
                          style={{ width: "100%", height: "auto", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#333333",
                            fontSize: 23,
                          }}
                        >
                          {PaymentDE[5].label}
                        </p>
                      </div>
                    </Box>
                  </Modal>
                </>
              ) : (
                <>
                  {/* Payment */}
                  <Modal
                    open={payOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "60%",
                        left: "50%",
                        transform: "translate(-50%, -90%)",
                        width: "70%",
                        height: "40%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2.9,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                        overflow: "scroll",
                      }}
                    >
                      <div>
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
                          onClick={() => handleOpen()}
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
                            {PaymentEN[0].label}
                          </p>
                        </button>
                        <p
                          style={{
                            color: "#000000",
                            fontSize: 20,
                            textDecorationLine: "none",
                            fontWeight: 500,
                            float: "left",
                            width: "85%",
                          }}
                        >
                          {PaymentEN[1].label}
                        </p>
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
                          onClick={() => setPayOpen(false)}
                        >
                          <BsX
                            style={{
                              color: "#D9D9D9",
                              fontSize: 25,
                              textDecorationLine: "none",
                              float: "left",
                            }}
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 70,
                          top: 70,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                        }}
                      >
                        <img
                          src={CreditCard}
                          alt="CreditCard"
                          style={{ width: "60%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#E0E0E0",
                            fontSize: 23,
                          }}
                        >
                          {PaymentEN[2].label}
                        </p>
                      </div>

                      <button
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 380,
                          top: 70,
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                          background: "transparent",
                        }}
                        onClick={() => handleOpen_ScanQR()}
                      >
                        <img
                          src={Promptpay}
                          alt="Promptpay"
                          style={{ width: "40%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#333333",
                            fontSize: 23,
                          }}
                        >
                          {PaymentEN[3].label}
                        </p>
                      </button>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: 230,
                          height: 175,
                          left: 700,
                          top: 70,
                          background: "#FFFFFF",
                          border: "1px solid #E5E5E5",
                          borderRadius: 10,
                          padding: 25,
                        }}
                      >
                        <img
                          src={Bank_transfer}
                          alt="Bank_transfer"
                          style={{ width: "23%", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#E0E0E0",
                            fontSize: 23,
                          }}
                        >
                          {PaymentEN[4].label}
                        </p>
                      </div>
                    </Box>
                  </Modal>
                  {/* Scan QR code to pay */}
                  <Modal
                    hideBackdrop
                    open={scanQR}
                    onClose={handleClose_scanQR}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: "80%",
                        left: "50%",
                        transform: "translate(-50%, -90%)",
                        width: "70%",
                        height: "80%",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 2.9,
                        borderRadius: 5,
                        border: "1px solid #E5E5E5",
                        textAlign: "center",
                        overflow: "scroll",
                      }}
                    >
                      <div>
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
                          onClick={() => setScanQR(false)}
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
                            {PaymentEN[0].label}
                          </p>
                        </button>
                        <p
                          style={{
                            color: "#000000",
                            fontSize: 20,
                            textDecorationLine: "none",
                            fontWeight: 500,
                            float: "left",
                            width: "85%",
                          }}
                        >
                          {PaymentEN[1].label}
                        </p>
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
                          onClick={() => handleClose_scanQR()}
                        >
                          <BsX
                            style={{
                              color: "#D9D9D9",
                              fontSize: 25,
                              textDecorationLine: "none",
                              float: "left",
                            }}
                          />
                        </button>
                      </div>

                      <div
                        style={{
                          boxSizing: " border-box",
                          position: "absolute",
                          width: "40%",
                          height: 175,
                          left: 290,
                          top: 44,
                          borderRadius: 10,
                          padding: 22,
                          background: "transparent",
                        }}
                      >
                        <img
                          src={Promptpay}
                          alt="Promptpay"
                          style={{ width: "100%", height: "auto", margin: 10 }}
                        />
                        <p
                          style={{
                            fontWeight: 500,
                            color: "#333333",
                            fontSize: 23,
                          }}
                        >
                          {PaymentEN[5].label}
                        </p>
                      </div>
                    </Box>
                  </Modal>
                </>
              )}
            </>
          </Box>

          {openChat === "" ? (
            <></>
          ) : (
            <Drawer
              variant="permanent"
              anchor="right"
              sx={{
                width: 300,
                [`& .MuiDrawer-paper`]: {
                  width: 300,
                  boxSizing: "border-box",
                },
              }}
              style={{ zIndex: 0, height: "100%" }}
            >
              <Toolbar />
              <Box sx={{ overflow: "hidden" }}>
                <div style={{ marginTop: 50, textAlign: "center" }}>
                  <div>
                    <FaUserCircle
                      alt="avatar"
                      style={{
                        width: " 20%",
                        height: "auto",
                        margin: "auto",
                        display: "block",
                        color: "#3333",
                      }}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        fontWeight: 500,
                        fontSize: 20,
                        color: "#353535",
                        marginBottom: 0,
                      }}
                    >
                      {openChat?.Translator_name}
                    </p>
                    <p style={{ fontSize: 13, color: "#c4c4c4", margin: 0 }}>
                      Active 21m ago.
                    </p>
                    {/* <button
                    style={{
                      background: "#FAFAFA",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      borderRadius: 5,
                      width: 140,
                      height: "auto",
                      border: "none",
                      fontSize: 15,
                      color: "#FFC100",
                      padding: 5,
                      marginBottom: 10,
                    }}
                    onClick={() => Create_Quotation()}
                  >
                    <p style={{ marginBottom: 0 }}>Create Quotation.</p>
                  </button> */}
                  </div>
                  <hr style={{ width: "90%", height: 1, margin: 15 }} />
                  <div style={{ margin: 20 }}>
                    <Status
                      Status={openChat?.Status}
                      Price={openChat?.Price}
                      Deadline={openChat.Deadline}
                    />
                  </div>
                </div>
              </Box>
            </Drawer>
          )}
        </>
      </Box>
    </div>
  );
}
