import * as React from "react";
import "./notificaion.css";
import { Box, Paper, TextField } from "@mui/material";
import Navbars from "../Navbar/navbarHome2.js";
import DrawerInHome from "../Drawer/DrawerCustomer";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Notification_CustomerEN,
  Notification_CustomerDE,
  Notification_CustomerTH,
} from "../Data/DataLanguage";

const Notificaion = () => {
  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());
  const [type, setType] = React.useState("View All");

  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;
  let Value = location?.state?.value;

  // React.useEffect(() => {
  //   if (Value) {
  //     console.log("value :", Value);
  //   } else {
  //     navigate("/Login");
  //   }
  // }, [navigate,Value]);
  return (
    <div className="App-body-Order">
      <header className="App-header">
        {Doc === "English" ? (
          <Navbars navigate={navigate} languages="English" />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} languages="German" />
        ) : (
          <Navbars navigate={navigate} languages="English" />
        )}
      </header>
      {Doc === "English" ? (
        <Box sx={{ display: "flex", width: "100% " }}>
          <DrawerInHome languages={Doc}  value={Value}/>

          <div style={{ marginTop: 60, height: 100 }}>
            <h4
              style={{
                fontWeight: 500,
                fontSize: 36,
                color: " #333333",
                marginLeft: 20,
                position: "absolute",
                top: "13%",
              }}
            >
              {Notification_CustomerEN[0].label}
            </h4>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 410,
                position: "absolute",
                left: "70%",
                top: "13%",
                backgroundColor: "#FBFBFB",
                boxShadow: "none",
                //   borderRadius: 10,
              }}
            >
              <LocalizationProvider
                dateAdapter={AdapterLuxon}
                //   localeText={{ start: "Check-in", end: "Check-out" }}
              >
                <DatePicker
                  label={Notification_CustomerEN[1].label}
                  value={value}
                  // inputFormat="DD/MMM/YYYY"
                  mask="__/__/___"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(Props) => (
                    <React.Fragment>
                      <TextField {...Props} />
                      <Box sx={{ mx: 2 }}>
                        {Notification_CustomerEN[2].label}{" "}
                      </Box>
                    </React.Fragment>
                  )}
                />
                <DatePicker
                  label={Notification_CustomerEN[3].label}
                  value={value2}
                  // inputFormat="DD/MMM/YYYY"
                  mask="__/__/____"
                  onChange={(newValue) => {
                    setValue2(newValue);
                  }}
                  renderInput={(Props) => (
                    <React.Fragment>
                      <TextField {...Props} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Paper>
          </div>

          <div className="bodyNotificaion">
            <div style={{ margin: 30 }}>
              {type === "View All" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Chat" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Money" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Work" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="inmocontent">
              {type === "View All" ? (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              ) : type === "Chat" ? (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              ) : type === "Money" ? (
                <></>
              ) : type === "Work" ? (
                <></>
              ) : (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Box>
      ) : Doc === "Thai" ? (
        <Box sx={{ display: "flex", width: "100% " }}>
           <DrawerInHome languages={Doc}  value={Value}/>

          <div style={{ marginTop: 60, height: 100 }}>
            <h4
              style={{
                fontWeight: 500,
                fontSize: 36,
                color: " #333333",
                marginLeft: 20,
                position: "absolute",
                top: "13%",
              }}
            >
              {Notification_CustomerTH[0].label}
            </h4>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 4100,
                position: "absolute",
                left: "70%",
                top: "13%",
                backgroundColor: "#FBFBFB",
                boxShadow: "none",
                //   borderRadius: 10,
              }}
            >
              <LocalizationProvider
                dateAdapter={AdapterLuxon}
                //   localeText={{ start: "Check-in", end: "Check-out" }}
              >
                <DatePicker
                  label={Notification_CustomerTH[1].label}
                  value={value}
                  // inputFormat="DD/MMM/YYYY"
                  mask="__/__/___"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(Props) => (
                    <React.Fragment>
                      <TextField {...Props} />
                      <Box sx={{ mx: 2 }}>
                        {Notification_CustomerTH[2].label}{" "}
                      </Box>
                    </React.Fragment>
                  )}
                />
                <DatePicker
                  label={Notification_CustomerTH[3].label}
                  value={value2}
                  // inputFormat="DD/MMM/YYYY"
                  mask="__/__/____"
                  onChange={(newValue) => {
                    setValue2(newValue);
                  }}
                  renderInput={(Props) => (
                    <React.Fragment>
                      <TextField {...Props} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Paper>
          </div>

          <div className="bodyNotificaion">
            <div style={{ margin: 30 }}>
              {type === "View All" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Chat" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Money" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Work" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerTH[7].label}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="inmocontent">
              {type === "View All" ? (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              ) : type === "Chat" ? (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              ) : type === "Money" ? (
                <></>
              ) : type === "Work" ? (
                <></>
              ) : (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Box>
      ) : Doc === "German" ? (
        <Box sx={{ display: "flex", width: "100% " }}>
           <DrawerInHome languages={Doc}  value={Value}/>

          <div style={{ marginTop: 60, height: 100 }}>
            <h4
              style={{
                fontWeight: 500,
                fontSize: 36,
                color: " #333333",
                marginLeft: 20,
                position: "absolute",
                top: "13%",
              }}
            >
              {Notification_CustomerDE[0].label}
            </h4>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 410,
                position: "absolute",
                left: "70%",
                top: "13%",
                backgroundColor: "#FBFBFB",
                boxShadow: "none",
                //   borderRadius: 10,
              }}
            >
              <LocalizationProvider
                dateAdapter={AdapterLuxon}
                //   localeText={{ start: "Check-in", end: "Check-out" }}
              >
                <DatePicker
                  label={Notification_CustomerDE[1].label}
                  value={value}
                  // inputFormat="DD/MMM/YYYY"
                  mask="__/__/___"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(Props) => (
                    <React.Fragment>
                      <TextField {...Props} />
                      <Box sx={{ mx: 2 }}>
                        {Notification_CustomerDE[2].label}{" "}
                      </Box>
                    </React.Fragment>
                  )}
                />
                <DatePicker
                  label={Notification_CustomerDE[3].label}
                  value={value2}
                  // inputFormat="DD/MMM/YYYY"
                  mask="__/__/____"
                  onChange={(newValue) => {
                    setValue2(newValue);
                  }}
                  renderInput={(Props) => (
                    <React.Fragment>
                      <TextField {...Props} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Paper>
          </div>

          <div className="bodyNotificaion">
            <div style={{ margin: 30 }}>
              {type === "View All" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Chat" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Money" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Work" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerDE[7].label}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="inmocontent">
              {type === "View All" ? (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              ) : type === "Chat" ? (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              ) : type === "Money" ? (
                <></>
              ) : type === "Work" ? (
                <></>
              ) : (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Box>
      ) : (
        <Box sx={{ display: "flex", width: "100% " }}>
           <DrawerInHome languages={Doc}  value={Value}/>

          <div style={{ marginTop: 60, height: 100 }}>
            <h4
              style={{
                fontWeight: 500,
                fontSize: 36,
                color: " #333333",
                marginLeft: 20,
                position: "absolute",
                top: "13%",
              }}
            >
              {Notification_CustomerEN[0].label}
            </h4>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 410,
                position: "absolute",
                left: "70%",
                top: "13%",
                backgroundColor: "#FBFBFB",
                boxShadow: "none",
                //   borderRadius: 10,
              }}
            >
              <LocalizationProvider
                dateAdapter={AdapterLuxon}
                //   localeText={{ start: "Check-in", end: "Check-out" }}
              >
                <DatePicker
                  label={Notification_CustomerEN[1].label}
                  value={value}
                  // inputFormat="DD/MMM/YYYY"
                  mask="__/__/___"
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(Props) => (
                    <React.Fragment>
                      <TextField {...Props} />
                      <Box sx={{ mx: 2 }}>
                        {Notification_CustomerEN[2].label}{" "}
                      </Box>
                    </React.Fragment>
                  )}
                />
                <DatePicker
                  label={Notification_CustomerEN[3].label}
                  value={value2}
                  // inputFormat="DD/MMM/YYYY"
                  mask="__/__/____"
                  onChange={(newValue) => {
                    setValue2(newValue);
                  }}
                  renderInput={(Props) => (
                    <React.Fragment>
                      <TextField {...Props} />
                    </React.Fragment>
                  )}
                />
              </LocalizationProvider>
            </Paper>
          </div>

          <div className="bodyNotificaion">
            <div style={{ margin: 30 }}>
              {type === "View All" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Chat" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Money" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : type === "Work" ? (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #FFC100",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("View All")}
                  >
                    <div
                      style={{
                        color: "#FFC100",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[4].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Chat")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[5].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "25%",
                    }}
                    onClick={() => setType("Money")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[6].label}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      textAlign: "left",
                      float: "left",
                      borderBottom: "2px solid #8B8B8B",
                      marginBottom: 10,
                      width: "21%",
                    }}
                    onClick={() => setType("Work")}
                  >
                    <div
                      style={{
                        color: "#8B8B8B",
                        float: "left",
                        margin: 5,
                        fontWeight: 700,
                      }}
                    >
                      <p className="headerNotificaion">
                        {Notification_CustomerEN[7].label}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="inmocontent">
              {type === "View All" ? (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              ) : type === "Chat" ? (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              ) : type === "Money" ? (
                <></>
              ) : type === "Work" ? (
                <></>
              ) : (
                <>
                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has created a quote for you.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>

                  <div className="content">
                    <div className="boxcontent">
                      <p className="textleft">
                        Tanny Graey has sent you a new message.
                      </p>
                      <p className="textright">Chat</p>
                      <p className="textleft2">11.50 am</p>
                      <p className="textleft2">05 June 2022</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Box>
      )}
    </div>
  );
};

export default Notificaion;
