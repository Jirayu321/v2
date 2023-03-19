import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TextField,
} from "@mui/material";
import Navbars from "../Navbar/navbarHome2.js";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

import DrawerInHome from "../Drawer/DrawerCustomer";

import { useNavigate, useLocation } from "react-router-dom";
import { ORDE01EN, ORDE01DE, ORDE01TH } from "../Data/DataLanguage";

import All from "../../Images/All.png";
import All2 from "../../Images/All2.png";
import Cancle from "../../Images/Cancle.png";
import Cancle2 from "../../Images/Cancle2.png";
import Inprocess from "../../Images/Inprocess.png";
import Inprocess2 from "../../Images/Inprocess2.png";
import Succeed from "../../Images/Succeed.png";
import Succeed2 from "../../Images/Succeed2.png";

//test
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";

export default function Order() {
  //test
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // console.log("auth:",auth.name)

  const [type, setType] = React.useState(0);
  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  let Doc = location?.state?.languages;

  let Value = auth?.token;

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

  // function createData(
  //   orderID,
  //   orderType,
  //   orderName,
  //   translator,
  //   orderPrice,
  //   orderedDate,
  //   status
  // ) {
  //   return {
  //     orderID,
  //     orderType,
  //     orderName,
  //     translator,
  //     orderPrice,
  //     orderedDate,
  //     status,
  //   };
  // }

  // const rows1 = [
  //   createData(
  //     "098",
  //     "General Document",
  //     "Novel",
  //     "Michael Lee",
  //     "$25",
  //     "05 June 2022",
  //     "00:21:35"
  //   ),
  // ];
  const name = { Customer_name: auth?.name };
  const url = "https://54.244.204.59/api";
  // const url = "http://localhost:3001/api";


  const setDataOrder = (i) => {
    console.log(i);
    const Day_List = i?.map((item, index) => {
      try {
        const formattedDate = moment(item?.Date).format("MM/DD/YYYY");
        let formattedDate2 = moment(item?.Date).format("h:mm:ss a");
        return {
          index: index,
          orderID: index,
          orderType: item?.Order_type,
          orderName: item?.Order_type,
          translator: item?.Translator_name,
          orderPrice: item?.Price,
          orderedDate: formattedDate,
          status: formattedDate2,
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
        params: { Customer_name: values.Customer_name },
      });
      await console.log(token?.data);
      // await localStorage.setItem("order", JSON.stringify(token.data));
      // console.log(localStorage.getItem("order"));
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
    checklogin();
    getOrder(name);
  }, []);
  // let xc = dataOrder;

  // const rows3 = xc?.map((item) => {
  //   return [
  //     {
  //       orderID: `${item}`,
  //       orderType: "General Document",
  //       orderName: `${location.state.Doc}`,
  //       translator: "Michael Lee",
  //       orderPrice: "$25",
  //       orderedDate: `${location.state.Day}`,
  //       status: `${location.state.Time}`,
  //     },
  //   ];
  // });
  // console.log("sss:", rows3);

  return (
    <div className="App-body-Order">
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
        {Doc === "English" ? (
          <>
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
                {ORDE01EN[0].label}
              </h4>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 330,
                  position: "absolute",
                  left: "70%",
                  top: "13%",
                  backgroundColor: "#FBFBFB",
                  boxShadow: "none",
                }}
              >
                <LocalizationProvider
                  dateAdapter={AdapterLuxon}
                  //   localeText={{ start: "Check-in", end: "Check-out" }}
                >
                  <DatePicker
                    label={ORDE01EN[1].label}
                    value={value}
                    // inputFormat="DD/MMM/YYYY"
                    mask="__/__/___"
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(Props) => (
                      <React.Fragment>
                        <TextField {...Props} />
                        <Box sx={{ mx: 2 }}> {ORDE01EN[2].label} </Box>
                      </React.Fragment>
                    )}
                  />
                  <DatePicker
                    label={ORDE01EN[3].label}
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

            <div style={{ position: "absolute", left: 175, top: 180 }}>
              {type === 1 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#FFC100",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess2}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.map((row) => (
                            <TableRow
                              key={row.orderID}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                              >
                                {row.orderID}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderType}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderName}
                              </TableCell>
                              <TableCell align="center">
                                {row.translator}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderPrice}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderedDate}
                              </TableCell>
                              {row.status === "Succeed" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#46BC52" }}
                                >
                                  {row.status}
                                </TableCell>
                              ) : row.status === "Cancle" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#CF0202" }}
                                >
                                  {row.status}
                                </TableCell>
                              ) : (
                                <TableCell align="center">
                                  {row.status}
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 2 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#46BC52",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed2}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                   {rows2.map((row) => (
                     <TableRow
                       key={row.orderID}
                       sx={{
                         "&:last-child td, &:last-child th": { border: 0 },
                       }}
                     >
                       <TableCell component="th" scope="row">
                         {row.orderID}
                       </TableCell>
                       <TableCell align="center">{row.orderType}</TableCell>
                       <TableCell align="center">{row.orderName}</TableCell>
                       <TableCell align="center">{row.translator}</TableCell>
                       <TableCell align="center">{row.orderPrice}</TableCell>
                       <TableCell align="center">
                         {row.orderedDate}
                       </TableCell>
                       {row.status === "Succeed" ? (
                         <TableCell
                           align="center"
                           style={{ color: "#46BC52" }}
                         >
                           {row.status}
                         </TableCell>
                       ) : row.status === "Cancle" ? (
                         <TableCell
                           align="center"
                           style={{ color: "#CF0202" }}
                         >
                           {row.status}
                         </TableCell>
                       ) : (
                         <TableCell align="center">{row.status}</TableCell>
                       )}
                     </TableRow>
                   ))}
                 </TableBody> */}
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 3 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#CF0202",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle2}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                   {rows3.map((row) => (
                     <TableRow
                       key={row.orderID}
                       sx={{
                         "&:last-child td, &:last-child th": { border: 0 },
                       }}
                     >
                       <TableCell component="th" scope="row">
                         {row.orderID}
                       </TableCell>
                       <TableCell align="center">{row.orderType}</TableCell>
                       <TableCell align="center">{row.orderName}</TableCell>
                       <TableCell align="center">{row.translator}</TableCell>
                       <TableCell align="center">{row.orderPrice}</TableCell>
                       <TableCell align="center">
                         {row.orderedDate}
                       </TableCell>
                       {row.status === "Succeed" ? (
                         <TableCell
                           align="center"
                           style={{ color: "#46BC52" }}
                         >
                           {row.status}
                         </TableCell>
                       ) : row.status === "Cancle" ? (
                         <TableCell
                           align="center"
                           style={{ color: "#CF0202" }}
                         >
                           {row.status}
                         </TableCell>
                       ) : (
                         <TableCell align="center">{row.status}</TableCell>
                       )}
                     </TableRow>
                   ))}
                 </TableBody> */}
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 0 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#0082E0",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All2}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p> {ORDE01EN[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data?.map((row, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row?.orderID}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderType}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderName}
                              </TableCell>
                              <TableCell align="center">
                                {row?.translator}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderPrice}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderedDate}
                              </TableCell>
                              {row?.status === "Succeed" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#46BC52" }}
                                >
                                  {row?.status}
                                </TableCell>
                              ) : row?.status === "Cancle" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#CF0202" }}
                                >
                                  {row?.status}
                                </TableCell>
                              ) : (
                                <TableCell align="center">
                                  {row?.status}
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : Doc === "Thai" ? (
          <>
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
                {ORDE01TH[0].label}
              </h4>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 330,
                  position: "absolute",
                  left: "70%",
                  top: "13%",
                  backgroundColor: "#FBFBFB",
                  boxShadow: "none",
                }}
              >
                <LocalizationProvider
                  dateAdapter={AdapterLuxon}
                  //   localeText={{ start: "Check-in", end: "Check-out" }}
                >
                  <DatePicker
                    label={ORDE01TH[1].label}
                    value={value}
                    // inputFormat="DD/MMM/YYYY"
                    mask="__/__/___"
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(Props) => (
                      <React.Fragment>
                        <TextField {...Props} />
                        <Box sx={{ mx: 2 }}> {ORDE01TH[2].label} </Box>
                      </React.Fragment>
                    )}
                  />
                  <DatePicker
                    label={ORDE01TH[3].label}
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

            <div style={{ position: "absolute", left: 175, top: 180 }}>
              {type === 1 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#FFC100",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess2}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.map((row) => (
                            <TableRow
                              key={row.orderID}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                              >
                                {row.orderID}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderType}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderName}
                              </TableCell>
                              <TableCell align="center">
                                {row.translator}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderPrice}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderedDate}
                              </TableCell>
                              {row.status === "Succeed" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#46BC52" }}
                                >
                                  {row.status}
                                </TableCell>
                              ) : row.status === "Cancle" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#CF0202" }}
                                >
                                  {row.status}
                                </TableCell>
                              ) : (
                                <TableCell align="center">
                                  {row.status}
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 2 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#46BC52",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed2}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                    {rows2.map((row) => (
                      <TableRow
                        key={row.orderID}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.orderID}
                        </TableCell>
                        <TableCell align="center">{row.orderType}</TableCell>
                        <TableCell align="center">{row.orderName}</TableCell>
                        <TableCell align="center">{row.translator}</TableCell>
                        <TableCell align="center">{row.orderPrice}</TableCell>
                        <TableCell align="center">
                          {row.orderedDate}
                        </TableCell>
                        {row.status === "Succeed" ? (
                          <TableCell
                            align="center"
                            style={{ color: "#46BC52" }}
                          >
                            {row.status}
                          </TableCell>
                        ) : row.status === "Cancle" ? (
                          <TableCell
                            align="center"
                            style={{ color: "#CF0202" }}
                          >
                            {row.status}
                          </TableCell>
                        ) : (
                          <TableCell align="center">{row.status}</TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody> */}
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 3 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#CF0202",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle2}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                    {rows3.map((row) => (
                      <TableRow
                        key={row.orderID}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.orderID}
                        </TableCell>
                        <TableCell align="center">{row.orderType}</TableCell>
                        <TableCell align="center">{row.orderName}</TableCell>
                        <TableCell align="center">{row.translator}</TableCell>
                        <TableCell align="center">{row.orderPrice}</TableCell>
                        <TableCell align="center">
                          {row.orderedDate}
                        </TableCell>
                        {row.status === "Succeed" ? (
                          <TableCell
                            align="center"
                            style={{ color: "#46BC52" }}
                          >
                            {row.status}
                          </TableCell>
                        ) : row.status === "Cancle" ? (
                          <TableCell
                            align="center"
                            style={{ color: "#CF0202" }}
                          >
                            {row.status}
                          </TableCell>
                        ) : (
                          <TableCell align="center">{row.status}</TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody> */}
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 0 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#0082E0",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All2}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p> {ORDE01TH[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01TH[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01TH[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data?.map((row, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row?.orderID}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderType}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderName}
                              </TableCell>
                              <TableCell align="center">
                                {row?.translator}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderPrice}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderedDate}
                              </TableCell>
                              {row?.status === "Succeed" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#46BC52" }}
                                >
                                  {row?.status}
                                </TableCell>
                              ) : row?.status === "Cancle" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#CF0202" }}
                                >
                                  {row?.status}
                                </TableCell>
                              ) : (
                                <TableCell align="center">
                                  {row?.status}
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : Doc === "German" ? (
          <>
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
                {ORDE01DE[0].label}
              </h4>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 330,
                  position: "absolute",
                  left: "70%",
                  top: "13%",
                  backgroundColor: "#FBFBFB",
                  boxShadow: "none",
                }}
              >
                <LocalizationProvider
                  dateAdapter={AdapterLuxon}
                  //   localeText={{ start: "Check-in", end: "Check-out" }}
                >
                  <DatePicker
                    label={ORDE01DE[1].label}
                    value={value}
                    // inputFormat="DD/MMM/YYYY"
                    mask="__/__/___"
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(Props) => (
                      <React.Fragment>
                        <TextField {...Props} />
                        <Box sx={{ mx: 2 }}> {ORDE01DE[2].label} </Box>
                      </React.Fragment>
                    )}
                  />
                  <DatePicker
                    label={ORDE01DE[3].label}
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

            <div style={{ position: "absolute", left: 175, top: 180 }}>
              {type === 1 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#FFC100",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess2}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.map((row) => (
                            <TableRow
                              key={row.orderID}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                              >
                                {row.orderID}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderType}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderName}
                              </TableCell>
                              <TableCell align="center">
                                {row.translator}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderPrice}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderedDate}
                              </TableCell>
                              {row.status === "Succeed" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#46BC52" }}
                                >
                                  {row.status}
                                </TableCell>
                              ) : row.status === "Cancle" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#CF0202" }}
                                >
                                  {row.status}
                                </TableCell>
                              ) : (
                                <TableCell align="center">
                                  {row.status}
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 2 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#46BC52",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed2}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                      {rows2.map((row) => (
                        <TableRow
                          key={row.orderID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderID}
                          </TableCell>
                          <TableCell align="center">{row.orderType}</TableCell>
                          <TableCell align="center">{row.orderName}</TableCell>
                          <TableCell align="center">{row.translator}</TableCell>
                          <TableCell align="center">{row.orderPrice}</TableCell>
                          <TableCell align="center">
                            {row.orderedDate}
                          </TableCell>
                          {row.status === "Succeed" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#46BC52" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : row.status === "Cancle" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#CF0202" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : (
                            <TableCell align="center">{row.status}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody> */}
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 3 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#CF0202",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle2}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                      {rows3.map((row) => (
                        <TableRow
                          key={row.orderID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderID}
                          </TableCell>
                          <TableCell align="center">{row.orderType}</TableCell>
                          <TableCell align="center">{row.orderName}</TableCell>
                          <TableCell align="center">{row.translator}</TableCell>
                          <TableCell align="center">{row.orderPrice}</TableCell>
                          <TableCell align="center">
                            {row.orderedDate}
                          </TableCell>
                          {row.status === "Succeed" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#46BC52" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : row.status === "Cancle" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#CF0202" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : (
                            <TableCell align="center">{row.status}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody> */}
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 0 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#0082E0",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All2}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p> {ORDE01DE[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01DE[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01DE[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data?.map((row, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row?.orderID}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderType}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderName}
                              </TableCell>
                              <TableCell align="center">
                                {row?.translator}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderPrice}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderedDate}
                              </TableCell>
                              {row?.status === "Succeed" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#46BC52" }}
                                >
                                  {row?.status}
                                </TableCell>
                              ) : row?.status === "Cancle" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#CF0202" }}
                                >
                                  {row?.status}
                                </TableCell>
                              ) : (
                                <TableCell align="center">
                                  {row?.status}
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : null}
            </div>
          </>
        ) : (
          <>
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
                {ORDE01EN[0].label}
              </h4>
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 330,
                  position: "absolute",
                  left: "70%",
                  top: "13%",
                  backgroundColor: "#FBFBFB",
                  boxShadow: "none",
                }}
              >
                <LocalizationProvider
                  dateAdapter={AdapterLuxon}
                  //   localeText={{ start: "Check-in", end: "Check-out" }}
                >
                  <DatePicker
                    label={ORDE01EN[1].label}
                    value={value}
                    // inputFormat="DD/MMM/YYYY"
                    mask="__/__/___"
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(Props) => (
                      <React.Fragment>
                        <TextField {...Props} />
                        <Box sx={{ mx: 2 }}> {ORDE01EN[2].label} </Box>
                      </React.Fragment>
                    )}
                  />
                  <DatePicker
                    label={ORDE01EN[3].label}
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

            <div style={{ position: "absolute", left: 175, top: 180 }}>
              {type === 1 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#FFC100",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess2}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.map((row) => (
                            <TableRow
                              key={row.orderID}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                              >
                                {row.orderID}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderType}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderName}
                              </TableCell>
                              <TableCell align="center">
                                {row.translator}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderPrice}
                              </TableCell>
                              <TableCell align="center">
                                {row.orderedDate}
                              </TableCell>
                              {row.status === "Succeed" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#46BC52" }}
                                >
                                  {row.status}
                                </TableCell>
                              ) : row.status === "Cancle" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#CF0202" }}
                                >
                                  {row.status}
                                </TableCell>
                              ) : (
                                <TableCell align="center">
                                  {row.status}
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 2 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#46BC52",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed2}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                      {rows2.map((row) => (
                        <TableRow
                          key={row.orderID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderID}
                          </TableCell>
                          <TableCell align="center">{row.orderType}</TableCell>
                          <TableCell align="center">{row.orderName}</TableCell>
                          <TableCell align="center">{row.translator}</TableCell>
                          <TableCell align="center">{row.orderPrice}</TableCell>
                          <TableCell align="center">
                            {row.orderedDate}
                          </TableCell>
                          {row.status === "Succeed" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#46BC52" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : row.status === "Cancle" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#CF0202" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : (
                            <TableCell align="center">{row.status}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody> */}
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 3 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#CF0202",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle2}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        {/* <TableBody>
                      {rows3.map((row) => (
                        <TableRow
                          key={row.orderID}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.orderID}
                          </TableCell>
                          <TableCell align="center">{row.orderType}</TableCell>
                          <TableCell align="center">{row.orderName}</TableCell>
                          <TableCell align="center">{row.translator}</TableCell>
                          <TableCell align="center">{row.orderPrice}</TableCell>
                          <TableCell align="center">
                            {row.orderedDate}
                          </TableCell>
                          {row.status === "Succeed" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#46BC52" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : row.status === "Cancle" ? (
                            <TableCell
                              align="center"
                              style={{ color: "#CF0202" }}
                            >
                              {row.status}
                            </TableCell>
                          ) : (
                            <TableCell align="center">{row.status}</TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody> */}
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : type === 0 ? (
                <>
                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#0082E0",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(0)}
                  >
                    <img
                      src={All2}
                      alt="ALL"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p> {ORDE01EN[4].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(1)}
                  >
                    <img
                      src={Inprocess}
                      alt="Inprocess"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[5].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                      padding: 20,
                    }}
                    onClick={() => setType(2)}
                  >
                    <img
                      src={Succeed}
                      alt="Succeed"
                      style={{ width: "60%", height: "50%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[6].label}</p>
                  </button>

                  <button
                    style={{
                      width: 215,
                      background: "#FFFFFF",
                      color: "#606060",
                      height: 210,
                      border: "1px solid #E5E5E5",
                      borderRadius: 20,
                      fontSize: 24,
                      fontWeight: 600,
                      marginRight: 80,
                    }}
                    onClick={() => setType(3)}
                  >
                    <img
                      src={Cancle}
                      alt="Cancle"
                      style={{ width: "50%", height: "40%" }}
                    />
                    <br />
                    <br />
                    <p>{ORDE01EN[7].label}</p>
                  </button>

                  <div
                    style={{
                      textAlign: "left",
                      position: "absolute",
                      top: 245,
                      width: "fit-content",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 1090 }}>
                        <TableHead style={{ background: "#263238" }}>
                          <TableRow>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[8].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[9].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[10].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[11].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[12].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[13].label}
                            </TableCell>
                            <TableCell
                              align="center"
                              style={{ color: "#FFFFFF" }}
                            >
                              {ORDE01EN[14].label}
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data?.map((row, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row?.orderID}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderType}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderName}
                              </TableCell>
                              <TableCell align="center">
                                {row?.translator}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderPrice}
                              </TableCell>
                              <TableCell align="center">
                                {row?.orderedDate}
                              </TableCell>
                              {row?.status === "Succeed" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#46BC52" }}
                                >
                                  {row?.status}
                                </TableCell>
                              ) : row?.status === "Cancle" ? (
                                <TableCell
                                  align="center"
                                  style={{ color: "#CF0202" }}
                                >
                                  {row?.status}
                                </TableCell>
                              ) : (
                                <TableCell align="center">
                                  {row?.status}
                                </TableCell>
                              )}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </>
              ) : null}
            </div>
          </>
        )}
      </Box>
    </div>
  );
}
