import * as React from "react";
import {
  Box,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  Rating,
  // Toolbar,
  // List,
  // Avatar,
  // MenuItem,
  // Select,
  // styled,
  // InputBase,
  Paper,
  Table,
  // TableBody,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  TextField,
  Autocomplete,
  IconButton,
  Modal,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosEye } from "react-icons/io";

import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarHome2.js";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import axios from "axios";

import All_online from "../../Images/All_customers.png";
import Old_customers from "../../Images//Old_customers.png";
import Country from "../../Images/Country.png";
import All_work from "../../Images/All_work.png";
import Map from "../../Images/Map.png";

import Chart from "./Chart.js";
import ProgressBar from "./ProgressBar";
import Map1 from "./Map";
import { data6 } from "../Data/data";
import "./Dashboard.css";

export default function Dashboard_freelance() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  let Doc = location?.state?.languages;
  let Value = auth?.token;
  const name = { Translator_name: auth?.name };
  const [data1, setData1] = React.useState([]);
  const [all_work, setAll_work] = React.useState(0);
  const [old_work, setOld_work] = React.useState(0);
  const [country, setCountry] = React.useState(0);
  const [data3, setData3] = React.useState();
  const [type, settype] = React.useState(null);
  const [hovering, setHovering] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const url = "https://54.244.204.59/api";
  // const url = "http://localhost:3001/api";

  const eiei = new Date();

  const goLogin = () => {
    navigate("/Login");
  };
  const checklogin = () => {
    if (Value) {
      console.log("value :", Value);
    } else {
      goLogin();
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    checklogin();
    getOrder(name);
  }, []);

  const setDataOrder = (i) => {
    let all_work = i?.length;
    console.log("i:", i);
    setAll_work(all_work);
    const ll = i?.filter((item) => item?.Customer_name);
    setOld_work(ll?.length);
    const DataOrder = i?.map((item, index) => {
      try {
        const formattedDate = moment(item?.Date).format("MM/DD/YYYY");
        let formattedDate2 = moment(item?.Deadline).format("MM/DD/YYYY");
        const dateNow = moment(eiei).format("MM/DD/YYYY");
        const checkDate = dateNow > formattedDate2;
        setCountry(1);

        return {
          index: index,
          orderID: index + 1,
          orderType: item?.Order_type,
          orderName: item?.Order_type,
          translator: item?.Translator_name,
          orderPrice: item?.Price,
          orderedDate: formattedDate,
          status: item?.Status,
          Customer: item?.Customer_name,
          orderDeadline: checkDate,
        };
      } catch (e) {
        console.error(e);
        return null;
      }
    });
    setData1(DataOrder);
  };
  const setAllUser = (i) => {
    const All = i?.filter((item) => item.type === "customer");
    console.log("All", All.length);
    // const AllUser = i?.map((item, index) => {
    //   try {
    //     const formattedDate = moment(item?.Date).format("MM/DD/YYYY");
    //     let formattedDate2 = moment(item?.Date).format("h:mm:ss a");
    //     return {
    //       All: All,
    //     };
    //   } catch (e) {
    //     console.error(e);
    //     return null;
    //   }
    // });
    setData3(All.length);
  };

  const getOrder = async (values) => {
    try {
      const token = await axios.get(`${url}/getOrder`, {
        params: { Translator_name: values.Translator_name },
      });
      const token2 = await axios.get(`${url}/getUsers`, {});
      setDataOrder(token?.data);
      setAllUser(token2?.data);
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
    }
  };
  console.log("data1", data1);
  return (
    <div className="App-body3">
      <header className="App-headerDashboard">
        {Doc === "English" ? (
          <Navbars
            navigate={navigate}
            dispatch={dispatch}
            languages="English"
          />
        ) : Doc === "Thai" ? (
          <Navbars navigate={navigate} dispatch={dispatch} languages="Thai" />
        ) : Doc === "German" ? (
          <Navbars navigate={navigate} dispatch={dispatch} languages="German" />
        ) : (
          <Navbars
            navigate={navigate}
            dispatch={dispatch}
            languages="English"
          />
        )}
      </header>

      <Box sx={{ display: "flex", width: "100% " }}>
        <Drawer languages={Doc} value={Value} />

        <Box component="main">
          <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "45%",
                transform: "translate(-50%, -70%)",
                width: 700,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 5,
                border: "1px solid #E5E5E5",
                textAlign: "center",
                paddingRight: 0,
                paddingLeft: "25px",
              }}
            >
              <Map1 />

              <div
                style={{ marginTop: 10, textAlign: "left", float: "left" }}
              ></div>
              <div
                style={{
                  marginTop: 10,
                  textAlign: "right",
                  marginRight: "20px",
                }}
              >
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                  }}
                  onClick={() => handleClose(2)}
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>
          <div className="mainDashboard">
            <div className="HeaderDashboard">
              <p className="HDashboard">Dashboard</p>
              <div className="gbutton">
                {/* <button>Default</button>
              <button>Save</button> */}
                {/* <button className="Settingbutton">Setting Dashboard</button> */}
              </div>
            </div>

            <div className="group1">
              <div className="BoxAllg1">
                <div className="box_num_1">
                  <p id="head3">All customers</p>
                  <br />
                  <div className="BoxDB">
                    <img src={All_online} alt="All_online" id="img_icons" />
                    <p id="int_count">{all_work}</p>
                  </div>
                  <br />
                </div>

                <div className="box_num">
                  <p id="head3">Old customers</p>
                  <br />
                  <div className="BoxDB">
                    <img
                      src={Old_customers}
                      alt="Old_customers"
                      id="img_icons2"
                    />
                    <p id="int_count">{old_work}</p>
                  </div>

                  <br />
                </div>

                <div className="box_num_1">
                  <p id="head3">Country</p>
                  <br />
                  <div className="BoxDB">
                    <img src={Country} alt="Country" id="img_icons2" />
                    <p id="int_count">{country}</p>
                  </div>
                  <br />
                </div>

                <div className="box_num">
                  <p id="head3">All work</p>
                  <br />
                  <div className="BoxDB">
                    <img src={All_work} alt="All_work" id="img_icons" />
                    <p id="int_count">{old_work}</p>
                  </div>
                  <br />
                </div>
              </div>

              <div className="Wallet">
                <h3>Wallet</h3>
                <div className="ChartDB1">
                  <Chart />
                </div>
              </div>

              <button
                className="box_salary"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={() => setOpen(true)}
              >
                <h3>Customer Map</h3>
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <img src={Map} alt="Map1" />
                  {hovering ? (
                    <div className="HoverText">click view map</div>
                  ) : null}
                </div>
              </button>
            </div>

            <div className="group2">
              <div className="Job_status">
                <h3>Job status</h3>
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#FBFBFB",
                    boxShadow: "none",
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterLuxon}>
                    <div style={{ float: "left" }}>
                      <div style={{ marginBottom: 10 }}>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#333333",
                          }}
                        >
                          Select date
                        </p>
                      </div>
                      <DatePicker
                        label="Select date"
                        // value={value}
                        // inputFormat="DD/MMM/YYYY"
                        mask="__/__/___"
                        onChange={(newValue) => {
                          // setValue(newValue);
                        }}
                        renderInput={(Props) => (
                          <React.Fragment>
                            <TextField {...Props} />
                          </React.Fragment>
                        )}
                      />
                    </div>
                  </LocalizationProvider>
                  <div style={{ float: "left", marginLeft: 90 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          color: "#333333",
                        }}
                      >
                        Select status
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      options={data6}
                      sx={{ width: 260 }}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => settype(value.label)}
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
                          label="Select status"
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>
                </Paper>

                <div
                  style={{
                    // textAlign: "center",
                    marginTop: 20,
                    textAlign: "left",
                    width: "60vw",
                    display: "flex",
                    overflowY: "scroll",
                    flexDirection: "column",
                    height: "65vh",
                  }}
                >
                  <div style={{}}>
                    <TableContainer
                      component={Paper}
                      style={{ width: "58vw", marginBottom: 20 }}
                    >
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align="center" className="roworderID">
                              ID
                            </TableCell>

                            <TableCell align="center" className="rowCustomer">
                              Customer
                            </TableCell>

                            <TableCell align="center" className="rowType">
                              Type
                            </TableCell>

                            <TableCell align="center" className="rowCustomer">
                              Status
                            </TableCell>

                            <TableCell align="center" className="rowCustomer">
                              Price
                            </TableCell>

                            <TableCell align="center"></TableCell>
                          </TableRow>
                        </TableHead>
                      </Table>
                    </TableContainer>
                    {data1.map((row) => (
                      <TableContainer
                        component={Paper}
                        style={{
                          width: "58vw",
                          marginBottom: 20,
                          height: "8vh",
                        }}
                      >
                        <Table>
                          <TableHead>
                            <TableRow key={row?.orderID}>
                              <TableCell align="center" className="roworderID">
                                {row?.orderID}
                              </TableCell>

                              <TableCell align="center" className="rowCustomer">
                                {row?.Customer}
                              </TableCell>

                              <TableCell align="center" className="rowType">
                                {row?.orderName}
                              </TableCell>
                              {row?.orderDeadline === true ? (
                                <TableCell
                                  align="center"
                                  className="rowCustomer"
                                  style={{ color: "#047ACF" }}
                                >
                                  late
                                </TableCell>
                              ) : (
                                <>
                                  {row?.status === "1" ? (
                                    <TableCell
                                      align="center"
                                      className="rowCustomer"
                                      style={{ color: "#FFC100" }}
                                    >
                                      In progress
                                    </TableCell>
                                  ) : (
                                    <TableCell
                                      align="center"
                                      className="rowCustomer"
                                      style={{ color: "#46BC52" }}
                                    >
                                      Succeed
                                    </TableCell>
                                  )}
                                </>
                              )}

                              <TableCell align="center" className="rowCustomer">
                                {row?.orderPrice}
                              </TableCell>

                              <TableCell align="center" className="rowType">
                                <IconButton onClick={() => navigate("/Chats")}>
                                  <IoIosEye style={{ width: 20 }} />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          </TableHead>
                        </Table>
                      </TableContainer>
                    ))}
                  </div>
                </div>
              </div>

              <div className="Review">
                <h3>Review</h3>
                <div>
                  <p style={{ color: "#333333", fontWeight: 300 }}>
                    Text something
                  </p>
                </div>
                <div>
                  <Box
                    sx={{
                      width: 200,
                      display: "grid",
                      alignItems: "center",
                      gridTemplateColumns: "20% 80%",
                    }}
                  >
                    <Box>{0}</Box>
                    <Rating
                      name="text-feedback"
                      value={0}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                  </Box>
                </div>
                <div className="boxliststars">
                  <div className="liststars">
                    <p>5 stars</p>
                    <ProgressBar progress={0} />
                  </div>
                  <div className="liststars">
                    <p>4 stars</p>
                    <ProgressBar progress={0} />
                  </div>
                  <div className="liststars">
                    <p>3 stars</p>
                    <ProgressBar progress={0} />
                  </div>
                  <div className="liststars">
                    <p>2 stars</p>
                    <ProgressBar progress={0} />
                  </div>
                  <div className="liststars">
                    <p>1 stars</p>
                    <ProgressBar progress={0} />
                  </div>
                </div>
                <h3>Comment</h3>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
}
