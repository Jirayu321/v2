import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";

import { data, data2, data3, data4, data5 } from "../Data/data";
import { IconButton, Input, TextField, Autocomplete, Box } from "@mui/material";

import { MdArrowDropDown } from "react-icons/md";

import { CustomerEN, CustomerDE, CustomerTH } from "../Data/DataLanguage";

const Customer = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;

  const [type, settype] = React.useState(null);
  const [trantype, setTranstype] = React.useState("");
  const [textarea, setTextarea] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [tranfrom, setTranfrom] = React.useState("");
  const [tranto, setTranto] = React.useState("");
  const [file, setFile] = React.useState("");
  const [promo, setPromo] = React.useState("");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const set_price = (trantype) => {
    // console.log("trantype :", typeof trantype);
    if (trantype === "Article") {
      setPrice("15 $");
    } else if (trantype === "Identification Card") {
      setPrice("20 $");
    } else if (trantype === "Family Status Registration") {
      setPrice("25 $");
    } else if (trantype === "Personal information") {
      setPrice("35 $");
    } else if (trantype === "Civil Registration Certificate") {
      setPrice("45 $");
    } else if (trantype === "Certificate of use (the noun prefix") {
      setPrice("55 $");
    } else if (trantype === "") {
      setPrice("0 $");
    } else {
      setPrice("100 $");
    }
  };

  const promotion = (x) => {
    setPromo(x);
    window.scrollTo(0, 1500);
    set_price(trantype);
  };

  const goSignup = () => {
    navigate("/Signup");
  };

  const cutsting = (x) => {
    console.log(x);
    return x.slice(0, 30);
  };

  return (
    <>
      <header className="App-header">
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
      {Doc === undefined ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <div
                style={{
                  top: 100,
                  background: "#97D5FF",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 400,
                  borderRadius: 200,
                }}
              />
              <div
                style={{
                  top: 100,
                  background: "#FFEDB2",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 700,
                  borderRadius: 200,
                }}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                justifyItems: "center",
                // width: 1100,
                display: "inline-grid",
                marginTop: 50,
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {CustomerEN[0].label}
                </p>
              </div>
              <div className="textCustomerH">
                <p style={{ fontSize: 23, color: "#444444", width: "80vw" }}>
                  {CustomerEN[1].label}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 380,
                }}
              >
                <button
                  className="box5"
                  style={{ width: 220, height: 50, borderRadius: 40 }}
                  onClick={() => goSignup()}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {CustomerEN[2].label}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: height * 0.7,
              width: width,
              height: 800,
            }}
          >
            <div>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {CustomerEN[3].label}
                </p>
              </div>

              <div>
                {file === "" ? (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.08,
                      width: width * 0.35,
                      height: 670,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      float: "left",
                      borderRadius: 20,
                      boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.value)}
                        multiple
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            lineHeight: 24,
                            color: "#B5B5B5",
                          }}
                        >
                          {CustomerEN[13].label}
                        </p>
                      </IconButton>
                    </label>
                  </div>
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.08,
                      width: width * 0.35,
                      height: 670,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      float: "left",
                      borderRadius: 20,
                      boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.value)}
                        multiple
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#B5B5B5",
                          }}
                        >
                          {cutsting(file)}
                        </p>
                      </IconButton>
                    </label>
                  </div>
                )}

                <div
                  style={{
                    position: "absolute",
                    width: width * 0.55,
                    height: 670,
                    border: "1px solid #E5E5E5",
                    boxSizing: " border-box",
                    borderRadius: 20,
                    left: width * 0.42,
                    padding: 10,
                    textAlign: "left",
                    borderLeft: "none",
                    borderBottomLeftRadius: "unset",
                    borderTopLeftRadius: "unset",
                  }}
                >
                  <div style={{ float: "left", marginLeft: 90 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[5].label}
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data2}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => settype(value?.label)}
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
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div style={{ float: "left", marginLeft: 60 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[4].label}
                      </p>
                    </div>
                    {type === null ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data5}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value.label)}
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
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : type === "Official Document" ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data4}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value?.label)}
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
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : type === "General Document" ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data3}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value?.label)}
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
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data5}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => console.log(value?.label)}
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
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      float: "left",
                      margin: 30,
                      marginLeft: 90,
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[6].label}
                      </p>
                    </div>

                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranfrom(value?.label)}
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
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div style={{ float: "left", margin: 30, marginBottom: 20 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[7].label}
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranto(value?.label)}
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
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div
                    style={{
                      float: "left",
                      marginRight: 50,
                      marginLeft: 50,
                      marginBottom: 0,
                      position: "absolute",
                      top: 290,
                      left: 50,
                    }}
                  >
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[8].label}
                      </p>
                    </div>
                    <textarea
                      value={textarea}
                      onChange={handleChange}
                      maxLength={150}
                      style={{
                        position: "absolute",
                        width: 620,
                        height: 243,
                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        boxSizing: "border-box",
                        borderRadius: 5,
                        padding: 20,
                      }}
                    />
                  </div>

                  <button
                    style={{
                      float: "left",
                      marginRight: 50,
                      marginLeft: 50,
                      position: "absolute",
                      top: 600,
                      left: width * 0.42,
                      background: "#0097FE",
                      width: 110,
                      padding: 10,
                      borderRadius: 30,
                      textAlign: "center",
                      borderColor: "transparent",
                    }}
                    onClick={() => promotion(1)}
                  >
                    <p style={{ color: "#FFFFFF", fontSize: 18 }}>
                      {CustomerEN[11].label}
                    </p>
                  </button>
                </div>
              </div>

              <div
                style={{
                  height: height,
                  width: width,
                }}
              >
                {promo === 1 ? (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.06,
                      width: width * 0.91,
                      height: 500,
                      background: "#FFF9E5",
                      boxSizing: "border-box",
                      textAlign: "left",
                      padding: 50,
                      top: height * 1.1,
                    }}
                  >
                    <div
                      style={{
                        float: "left",
                        // margin: 30,
                        marginRight: 400,
                        // marginBottom: 20,
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[5].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {type}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[6].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {tranfrom}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[8].label}
                        </p>
                        <div style={{ width: 400, wordWrap: "break-word" }}>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 18,
                              color: "#888888",
                            }}
                          >
                            {textarea}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[12].label}
                        </p>

                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#CF0202",
                          }}
                        >
                          {price}
                        </p>
                      </div>
                    </div>

                    <div style={{ float: "left" }}>
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[4].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {trantype}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[7].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {tranto}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {promo === 1 ? (
            <div style={{ top: height * 2.5, position: "relative" }}>
              <div>
                <Footer v="English" />
              </div>
            </div>
          ) : (
            <div style={{ top: height * 1.56, position: "relative" }}>
              <div>
                <Footer v="English" />
              </div>
            </div>
          )}
        </>
      ) : Doc === "German" ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <div
                style={{
                  top: 100,
                  background: "#97D5FF",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 400,
                  borderRadius: 200,
                }}
              />
              <div
                style={{
                  top: 100,
                  background: "#FFEDB2",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 700,
                  borderRadius: 200,
                }}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                justifyItems: "center",
                // width: 1100,
                display: "inline-grid",
                marginTop: 50,
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {CustomerDE[0].label}
                </p>
              </div>
              <div className="textCustomerH">
                <p style={{ fontSize: 23, color: "#444444", width: "80vw" }}>
                  {CustomerDE[1].label}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 380,
                }}
              >
                <button
                  className="box5"
                  style={{ width: 220, height: 50, borderRadius: 40 }}
                  onClick={() => goSignup()}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {CustomerDE[2].label}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: height * 0.7,
              width: width,
              height: 800,
            }}
          >
            <div>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {CustomerDE[3].label}
                </p>
              </div>

              <div>
                {file === "" ? (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.08,
                      width: width * 0.35,
                      height: 670,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      float: "left",
                      borderRadius: 20,
                      boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.value)}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            lineHeight: 24,
                            color: "#B5B5B5",
                          }}
                        >
                          {CustomerDE[13].label}
                        </p>
                      </IconButton>
                    </label>
                  </div>
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.08,
                      width: width * 0.35,
                      height: 670,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      float: "left",
                      borderRadius: 20,
                      boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.value)}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#B5B5B5",
                          }}
                        >
                          {file}
                        </p>
                      </IconButton>
                    </label>
                  </div>
                )}

                <div
                  style={{
                    position: "absolute",
                    width: width * 0.55,
                    height: 670,
                    border: "1px solid #E5E5E5",
                    boxSizing: " border-box",
                    borderRadius: 20,
                    left: width * 0.42,
                    padding: 10,
                    textAlign: "left",
                    borderLeft: "none",
                    borderBottomLeftRadius: "unset",
                    borderTopLeftRadius: "unset",
                  }}
                >
                  <div style={{ float: "left", marginLeft: 90 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerDE[5].label}
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data2}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => settype(value?.label)}
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
                          label={CustomerDE[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div style={{ float: "left", marginLeft: 60 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerDE[4].label}
                      </p>
                    </div>
                    {type === null ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data5}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value.label)}
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
                            label={CustomerDE[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : type === "Official Document" ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data4}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value?.label)}
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
                            label={CustomerDE[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : type === "General Document" ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data3}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value?.label)}
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
                            label={CustomerDE[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data5}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => console.log(value?.label)}
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
                            label={CustomerDE[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      float: "left",
                      margin: 30,
                      marginLeft: 90,
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerDE[6].label}
                      </p>
                    </div>

                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranfrom(value?.label)}
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
                          label={CustomerDE[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div style={{ float: "left", margin: 30, marginBottom: 20 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerDE[7].label}
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranto(value?.label)}
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
                          label={CustomerDE[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div
                    style={{
                      float: "left",
                      marginRight: 50,
                      marginLeft: 50,
                      marginBottom: 0,
                      position: "absolute",
                      top: 290,
                      left: 50,
                    }}
                  >
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerDE[8].label}
                      </p>
                    </div>
                    <textarea
                      value={textarea}
                      onChange={handleChange}
                      maxLength={150}
                      style={{
                        position: "absolute",
                        width: 620,
                        height: 243,
                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        boxSizing: "border-box",
                        borderRadius: 5,
                        padding: 20,
                      }}
                    />
                  </div>

                  <button
                    style={{
                      float: "left",
                      marginRight: 50,
                      marginLeft: 50,
                      position: "absolute",
                      top: 600,
                      left: width * 0.37,
                      background: "#0097FE",
                      width: 180,
                      padding: 10,
                      borderRadius: 30,
                      textAlign: "center",
                      borderColor: "transparent",
                    }}
                    onClick={() => promotion(1)}
                  >
                    <p style={{ color: "#FFFFFF", fontSize: 18 }}>
                      {CustomerDE[11].label}
                    </p>
                  </button>
                </div>
              </div>

              <div
                style={{
                  height: height,
                  width: width,
                }}
              >
                {promo === 1 ? (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.06,
                      width: width * 0.91,
                      height: 500,
                      background: "#FFF9E5",
                      boxSizing: "border-box",
                      textAlign: "left",
                      padding: 50,
                      top: height * 1.1,
                    }}
                  >
                    <div
                      style={{
                        float: "left",
                        // margin: 30,
                        marginRight: 400,
                        // marginBottom: 20,
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerDE[5].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {type}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerDE[6].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {tranfrom}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerDE[8].label}
                        </p>
                        <div style={{ width: 400, wordWrap: "break-word" }}>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 18,
                              color: "#888888",
                            }}
                          >
                            {textarea}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerDE[12].label}
                        </p>

                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#CF0202",
                          }}
                        >
                          {price}
                        </p>
                      </div>
                    </div>

                    <div style={{ float: "left" }}>
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerDE[4].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {trantype}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerDE[7].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {tranto}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {promo === 1 ? (
            <div style={{ top: height * 2.5, position: "relative" }}>
              <div>
                <Footer v="German" />
              </div>
            </div>
          ) : (
            <div style={{ top: height * 1.56, position: "relative" }}>
              <div>
                <Footer v="German" />
              </div>
            </div>
          )}
        </>
      ) : Doc === "Thai" ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <div
                style={{
                  top: 100,
                  background: "#97D5FF",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 400,
                  borderRadius: 200,
                }}
              />
              <div
                style={{
                  top: 100,
                  background: "#FFEDB2",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 700,
                  borderRadius: 200,
                }}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                justifyItems: "center",
                // width: 1100,
                display: "inline-grid",
                marginTop: 50,
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {CustomerTH[0].label}
                </p>
              </div>
              <div className="textCustomerH">
                <p style={{ fontSize: 23, color: "#444444", width: "80vw" }}>
                  {CustomerTH[1].label}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 380,
                }}
              >
                <button
                  className="box5"
                  style={{ width: 220, height: 50, borderRadius: 40 }}
                  onClick={() => goSignup()}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {CustomerTH[2].label}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: height * 0.7,
              width: width,
              height: 800,
            }}
          >
            <div>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {CustomerTH[3].label}
                </p>
              </div>

              <div>
                {file === "" ? (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.08,
                      width: width * 0.35,
                      height: 670,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      float: "left",
                      borderRadius: 20,
                      boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.value)}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            lineHeight: 24,
                            color: "#B5B5B5",
                          }}
                        >
                          {CustomerTH[13].label}
                        </p>
                      </IconButton>
                    </label>
                  </div>
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.08,
                      width: width * 0.35,
                      height: 670,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      float: "left",
                      borderRadius: 20,
                      boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.value)}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#B5B5B5",
                          }}
                        >
                          {file}
                        </p>
                      </IconButton>
                    </label>
                  </div>
                )}

                <div
                  style={{
                    position: "absolute",
                    width: width * 0.55,
                    height: 670,
                    border: "1px solid #E5E5E5",
                    boxSizing: " border-box",
                    borderRadius: 20,
                    left: width * 0.42,
                    padding: 10,
                    textAlign: "left",
                    borderLeft: "none",
                    borderBottomLeftRadius: "unset",
                    borderTopLeftRadius: "unset",
                  }}
                >
                  <div style={{ float: "left", marginLeft: 90 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerTH[5].label}
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data2}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => settype(value?.label)}
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
                          label={CustomerTH[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div style={{ float: "left", marginLeft: 60 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerTH[4].label}
                      </p>
                    </div>
                    {type === null ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data5}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value.label)}
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
                            label={CustomerTH[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : type === "Official Document" ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data4}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value?.label)}
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
                            label={CustomerTH[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : type === "General Document" ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data3}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value?.label)}
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
                            label={CustomerTH[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data5}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => console.log(value?.label)}
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
                            label={CustomerTH[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      float: "left",
                      margin: 30,
                      marginLeft: 90,
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerTH[6].label}
                      </p>
                    </div>

                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranfrom(value?.label)}
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
                          label={CustomerTH[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div style={{ float: "left", margin: 30, marginBottom: 20 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerTH[7].label}
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranto(value?.label)}
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
                          label={CustomerTH[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div
                    style={{
                      float: "left",
                      marginRight: 50,
                      marginLeft: 50,
                      marginBottom: 0,
                      position: "absolute",
                      top: 290,
                      left: 50,
                    }}
                  >
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerTH[8].label}
                      </p>
                    </div>
                    <textarea
                      value={textarea}
                      onChange={handleChange}
                      maxLength={150}
                      style={{
                        position: "absolute",
                        width: 620,
                        height: 243,
                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        boxSizing: "border-box",
                        borderRadius: 5,
                        padding: 20,
                      }}
                    />
                  </div>

                  <button
                    style={{
                      float: "left",
                      marginRight: 50,
                      marginLeft: 50,
                      position: "absolute",
                      top: 600,
                      left: width * 0.37,
                      background: "#0097FE",
                      width: 180,
                      padding: 10,
                      borderRadius: 30,
                      textAlign: "center",
                      borderColor: "transparent",
                    }}
                    onClick={() => promotion(1)}
                  >
                    <p style={{ color: "#FFFFFF", fontSize: 18 }}>
                      {CustomerTH[11].label}
                    </p>
                  </button>
                </div>
              </div>

              <div
                style={{
                  height: height,
                  width: width,
                }}
              >
                {promo === 1 ? (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.06,
                      width: width * 0.91,
                      height: 500,
                      background: "#FFF9E5",
                      boxSizing: "border-box",
                      textAlign: "left",
                      padding: 50,
                      top: height * 1.1,
                    }}
                  >
                    <div
                      style={{
                        float: "left",
                        // margin: 30,
                        marginRight: 400,
                        // marginBottom: 20,
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerTH[5].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {type}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerTH[6].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {tranfrom}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerTH[8].label}
                        </p>
                        <div style={{ width: 400, wordWrap: "break-word" }}>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 18,
                              color: "#888888",
                            }}
                          >
                            {textarea}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerTH[12].label}
                        </p>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#CF0202",
                          }}
                        >
                          {price}
                        </p>
                      </div>
                    </div>

                    <div style={{ float: "left" }}>
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerTH[4].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {trantype}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerTH[7].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {tranto}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {promo === 1 ? (
            <div style={{ top: height * 2.5, position: "relative" }}>
              <div>
                <Footer v="Thai" />
              </div>
            </div>
          ) : (
            <div style={{ top: height * 1.56, position: "relative" }}>
              <div>
                <Footer v="Thai" />
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <div
                style={{
                  top: 100,
                  background: "#97D5FF",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 400,
                  borderRadius: 200,
                }}
              />
              <div
                style={{
                  top: 100,
                  background: "#FFEDB2",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 700,
                  borderRadius: 200,
                }}
              />
            </div>

            <div
              style={{
                textAlign: "center",
                justifyItems: "center",
                // width: 1100,
                display: "inline-grid",
                marginTop: 50,
              }}
            >
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {CustomerEN[0].label}
                </p>
              </div>
              <div className="textCustomerH">
                <p style={{ fontSize: 23, color: "#444444", width: "80vw" }}>
                  {CustomerEN[1].label}
                </p>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 380,
                }}
              >
                <button
                  className="box5"
                  style={{ width: 220, height: 50, borderRadius: 40 }}
                  onClick={() => goSignup()}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {CustomerEN[2].label}
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: height * 0.7,
              width: width,
              height: 800,
            }}
          >
            <div>
              <div
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {CustomerEN[3].label}
                </p>
              </div>

              <div>
                {file === "" ? (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.08,
                      width: width * 0.35,
                      height: 670,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      float: "left",
                      borderRadius: 20,
                      boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.value)}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            lineHeight: 24,
                            color: "#B5B5B5",
                          }}
                        >
                          {CustomerEN[13].label}
                        </p>
                      </IconButton>
                    </label>
                  </div>
                ) : (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.08,
                      width: width * 0.35,
                      height: 670,
                      background: "#FFFFFF",
                      border: "1px solid #E5E5E5",
                      boxSizing: "border-box",
                      float: "left",
                      borderRadius: 20,
                      boxShadow: " 0px 4px 5px rgba(0, 0, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <label htmlFor="icon-button-file">
                      <Input
                        accept="image/*"
                        id="icon-button-file"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.value)}
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                      >
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#B5B5B5",
                          }}
                        >
                          {cutsting(file)}
                        </p>
                      </IconButton>
                    </label>
                  </div>
                )}

                <div
                  style={{
                    position: "absolute",
                    width: width * 0.55,
                    height: 670,
                    border: "1px solid #E5E5E5",
                    boxSizing: " border-box",
                    borderRadius: 20,
                    left: width * 0.42,
                    padding: 10,
                    textAlign: "left",
                    borderLeft: "none",
                    borderBottomLeftRadius: "unset",
                    borderTopLeftRadius: "unset",
                  }}
                >
                  <div style={{ float: "left", marginLeft: 90 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[5].label}
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data2}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => settype(value?.label)}
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
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div style={{ float: "left", marginLeft: 60 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[4].label}
                      </p>
                    </div>
                    {type === null ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data5}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value.label)}
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
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : type === "Official Document" ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data4}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value?.label)}
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
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : type === "General Document" ? (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data3}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => setTranstype(value?.label)}
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
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    ) : (
                      <Autocomplete
                        id="country-select-demo"
                        sx={{ width: 260 }}
                        options={data5}
                        autoHighlight
                        getOptionLabel={(option) => option.label}
                        onChange={(event, value) => console.log(value?.label)}
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
                            label={CustomerEN[9].label}
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: "new-password",
                            }}
                          />
                        )}
                      />
                    )}
                  </div>

                  <div
                    style={{
                      float: "left",
                      margin: 30,
                      marginLeft: 90,
                      marginBottom: 20,
                    }}
                  >
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[6].label}
                      </p>
                    </div>

                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranfrom(value?.label)}
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
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div style={{ float: "left", margin: 30, marginBottom: 20 }}>
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[7].label}
                      </p>
                    </div>
                    <Autocomplete
                      id="country-select-demo"
                      sx={{ width: 260 }}
                      options={data}
                      autoHighlight
                      getOptionLabel={(option) => option.label}
                      onChange={(event, value) => setTranto(value?.label)}
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
                          label={CustomerEN[9].label}
                          inputProps={{
                            ...params.inputProps,
                            autoComplete: "new-password",
                          }}
                        />
                      )}
                    />
                  </div>

                  <div
                    style={{
                      float: "left",
                      marginRight: 50,
                      marginLeft: 50,
                      marginBottom: 0,
                      position: "absolute",
                      top: 290,
                      left: 50,
                    }}
                  >
                    <div style={{ marginBottom: 10 }}>
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 24,
                          color: "#333333",
                        }}
                      >
                        {CustomerEN[8].label}
                      </p>
                    </div>
                    <textarea
                      value={textarea}
                      onChange={handleChange}
                      maxLength={150}
                      style={{
                        position: "absolute",
                        width: 620,
                        height: 243,
                        background: "#FFFFFF",
                        border: "1px solid #E5E5E5",
                        boxSizing: "border-box",
                        borderRadius: 5,
                        padding: 20,
                      }}
                    />
                  </div>

                  <button
                    style={{
                      float: "left",
                      marginRight: 50,
                      marginLeft: 50,
                      position: "absolute",
                      top: 600,
                      left: width * 0.42,
                      background: "#0097FE",
                      width: 110,
                      padding: 10,
                      borderRadius: 30,
                      textAlign: "center",
                      borderColor: "transparent",
                    }}
                    onClick={() => promotion(1)}
                  >
                    <p style={{ color: "#FFFFFF", fontSize: 18 }}>
                      {CustomerEN[11].label}
                    </p>
                  </button>
                </div>
              </div>

              <div
                style={{
                  height: height,
                  width: width,
                }}
              >
                {promo === 1 ? (
                  <div
                    style={{
                      position: "absolute",
                      left: width * 0.06,
                      width: width * 0.91,
                      height: 500,
                      background: "#FFF9E5",
                      boxSizing: "border-box",
                      textAlign: "left",
                      padding: 50,
                      top: height * 1.1,
                    }}
                  >
                    <div
                      style={{
                        float: "left",
                        // margin: 30,
                        marginRight: 400,
                        // marginBottom: 20,
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[5].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {type}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[6].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {tranfrom}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[8].label}
                        </p>
                        <div style={{ width: 400, wordWrap: "break-word" }}>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: 18,
                              color: "#888888",
                            }}
                          >
                            {textarea}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[12].label}
                        </p>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#CF0202",
                          }}
                        >
                          {price}
                        </p>
                      </div>
                    </div>

                    <div style={{ float: "left" }}>
                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[4].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {trantype}
                        </p>
                      </div>

                      <div>
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 24,
                            color: "#333333",
                          }}
                        >
                          {CustomerEN[7].label}
                        </p>
                        <br />
                        <p
                          style={{
                            fontWeight: "bold",
                            fontSize: 18,
                            color: "#888888",
                          }}
                        >
                          {tranto}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {promo === 1 ? (
            <div style={{ top: height * 2.5, position: "relative" }}>
              <div>
                <Footer v="English" />
              </div>
            </div>
          ) : (
            <div style={{ top: height * 1.56, position: "relative" }}>
              <div>
                <Footer v="English" />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Customer;
