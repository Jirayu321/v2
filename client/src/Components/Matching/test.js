import * as React from "react";
import "./Matching.css";
import profile from "../../Images/Avatar7.png";
import Navbars from "../Navbar/navbarHome2.js";
import DrawerInHome from "../Drawer/DrawerCustomer";
import { FaUserCircle } from "react-icons/fa";
import {
  FaLanguage,
  FaFile,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";

import {
  IconButton,
  Input,
  Box,
  Autocomplete,
  TextField,
  Stack,
  Rating,
  Modal,
  Typography,
} from "@mui/material";
import { data } from "../Data/data";
import { useNavigate, useLocation } from "react-router-dom";
// import moment from "moment";
import { MdArrowDropDown } from "react-icons/md";

import {
  Translate02EN,
  Translate02DE,
  Translate02TH,
  CustomerEN,
  CustomerDE,
  CustomerTH,
  Translate01EN,
  Translate01TH,
  Translate01DE,
} from "../Data/DataLanguage";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const Matching = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [languages, setLanguages] = React.useState("");
  const [languages2, setLanguages2] = React.useState("");
  const [page, setPage] = React.useState("Text");
  const [findA_Translator, setFindA_Translator] = React.useState("Translate");
  const [textarea, setTextarea] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [imageURLs, setImageURLs] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [trantype, setTranstype] = React.useState("");
  const [translator, setTtranslator] = React.useState("");

  // logic login
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const Doc = location?.state?.name;
  let value = auth?.token;
  let Toc = location?.state?.languages;
  const url = "https://54.244.204.59/api";
  // const url = "http://localhost:3001/api";


  React.useEffect(() => {
    if (value) {
      console.log("value :", value);
    }
    else {
      navigate("/Login");
    }
  }, [value]);



  // const Time = moment(new Date()).format("h:mm:ss");
  // const Day = moment(new Date()).format("DD MMM YYYY");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };
  const switchLanguage = () => {
    setLanguages(languages2);
    setLanguages2(languages);
  };

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  const find_Translator = () => {
    setFindA_Translator("Find_ATranslator");
    // setTranstype("")
    window.scroll(0, 0);
  };

  const Cancle = () => {
    setTranstype("");
    setLanguages("");
    setLanguages2("");
    setTextarea("");
    window.scroll(0, 0);
  };

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);
  
  const fathdata = async () => {
    const token2 = await axios.get(`${url}/getUsers`, {});
    console.log("data:", token2?.data);

    const translators = token2?.data?.filter(
      (translator) => translator.type === "translators"
    );
    setTtranslator(translators);
    // setAllUser(token2?.data);

  };
  console.log("translators:", translator);
  React.useEffect(() => {
    fathdata();
  },[]);
  return (
    <div className="App-body-Order">
      <header className="App-header">
        {Toc === "English" ? (
          <Navbars navigate={navigate} languages="English" dispatch={dispatch} />
        ) : Toc === "Thai" ? (
          <Navbars navigate={navigate} languages="Thai" dispatch={dispatch} />
        ) : Toc === "German" ? (
          <Navbars navigate={navigate} languages="German" dispatch={dispatch} />
        ) : (
          <Navbars navigate={navigate} languages="English" dispatch={dispatch} />
        )}
      </header>

      <Box sx={{ display: "flex", width: "100% " }}>
        <DrawerInHome languages={Toc} value={value} />
        <>
          <Box component="main">
            {Toc === "English" ? (
              <>
                {findA_Translator === "Translate" ? (
                  <>
                    <div style={{ marginTop: 60, height: 100 }}>
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: " #034D82",
                          marginLeft: 20,
                          position: "absolute",
                          top: "13%",
                        }}
                      >
                        {Translate02EN[0].label}
                      </h4>
                    </div>
                    <div className="bodyMatching">
                      <div style={{ margin: 30 }}>
                        {Doc === undefined ? (
                          <>
                            {trantype === "" ? (
                              <Autocomplete
                                id="country-select-demo"
                                sx={{ width: 260 }}
                                options={Translate01EN}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                onChange={(event, value) =>
                                  setTranstype(value.label)
                                }
                                popupIcon={
                                  <MdArrowDropDown
                                    style={{
                                      color: "#333333",
                                      width: 30,
                                      height: 33,
                                    }}
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
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#034D82",
                                  fontWeight: 600,
                                  fontSize: 24,
                                }}
                              >
                                {trantype}
                              </p>
                            )}
                          </>
                        ) : (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {Doc}
                          </p>
                        )}

                        {page === "Text" ? (
                          <div>
                            <div style={{ textAlign: "start" }}>
                              <button
                                className="buttonMatching1"
                                onClick={() => setPage("Text")}
                              >
                                <FaLanguage className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02EN[1].label}
                                </p>
                              </button>
                              <button
                                className="buttonMatching"
                                onClick={() => setPage("File")}
                              >
                                <FaFile className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02EN[2].label}
                                </p>
                              </button>
                            </div>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02EN[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages}
                                onChange={(event, value) =>
                                  setLanguages(value?.label)
                                }
                              />
                            </div>

                            <button
                              style={{
                                float: "left",
                                width: 30,
                                top: 60,
                                position: "relative",
                                fontSize: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                background: "transparent",
                                border: "none",
                                color: "#262DBB",
                              }}
                              onClick={() => switchLanguage()}
                            >
                              <FaLongArrowAltRight
                                style={{ position: "absolute" }}
                              />

                              <FaLongArrowAltLeft
                                style={{ position: "relative" }}
                              />
                            </button>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02EN[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages2}
                                onChange={(event, value) =>
                                  setLanguages2(value?.label)
                                }
                              />
                            </div>

                            <div>
                              <textarea
                                value={textarea}
                                onChange={handleChange}
                                maxLength={350}
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: 300,
                                  background: "#FFFFFF",
                                  border: "1px solid #E5E5E5",
                                  boxSizing: "border-box",
                                  borderRadius: 5,
                                  padding: 20,
                                  top: 30,
                                  fontSize: 25,
                                }}
                                placeholder={Translate02EN[1].label}
                              />
                            </div>

                            <div style={{ marginTop: 38 }}>
                              <div style={{ float: "left" }}>
                                <button
                                  style={{
                                    width: 100,
                                    height: 40,
                                    background: "transparent",
                                    color: "#CF0202",
                                    border: "1px solid #CF0202",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => Cancle()}
                                >
                                  {Translate02EN[4].label}
                                </button>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <button
                                  style={{
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => find_Translator()}
                                >
                                  {Translate02EN[5].label}
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div style={{ textAlign: "start" }}>
                              <button
                                className="buttonMatching"
                                onClick={() => setPage("Text")}
                              >
                                <FaLanguage className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02EN[1].label}
                                </p>
                              </button>
                              <button
                                className="buttonMatching1"
                                onClick={() => setPage("File")}
                              >
                                <FaFile className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02EN[2].label}
                                </p>
                              </button>
                            </div>
                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02EN[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages}
                                onChange={(event, value) =>
                                  setLanguages(value?.label)
                                }
                              />
                            </div>

                            <button
                              style={{
                                float: "left",
                                width: 30,
                                top: 60,
                                position: "relative",
                                fontSize: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                background: "transparent",
                                border: "none",
                                color: "#262DBB",
                              }}
                              onClick={() => switchLanguage()}
                            >
                              <FaLongArrowAltRight
                                style={{ position: "absolute" }}
                              />

                              <FaLongArrowAltLeft
                                style={{ position: "relative" }}
                              />
                            </button>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02EN[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages2}
                                onChange={(event, value) =>
                                  setLanguages2(value?.label)
                                }
                              />
                            </div>

                            <div style={{ height: 50, marginTop: 200 }}>
                              <p
                                style={{
                                  fontSize: 25,
                                  fontWeight: 800,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[6].label}
                              </p>
                              <p
                                style={{
                                  fontSize: 25,
                                  fontWeight: 800,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[7].label}
                              </p>
                              {images.length < 1 ? (
                                <div
                                  style={{
                                    position: "relative",
                                    borderColor: "#0865A8",
                                    borderWidth: 2,
                                    margin: 25,
                                    left: "40%",
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                    textAlign: "center",
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
                                      <p
                                        style={{
                                          fontSize: 18,
                                          color: "#FFFF",
                                          position: "relative",
                                        }}
                                      >
                                        {Translate02EN[8].label}
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
                                    left: "30%",
                                    fontSize: 18,
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
                                        <p>{imageURLs}</p>
                                      ))}
                                    </IconButton>
                                  </label>
                                </div>
                              )}
                            </div>

                            <div style={{ marginTop: "14%" }}>
                              <div style={{ float: "left" }}>
                                <button
                                  style={{
                                    width: 100,
                                    height: 40,
                                    background: "transparent",
                                    color: "#CF0202",
                                    border: "1px solid #CF0202",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => Cancle()}
                                >
                                  {Translate02EN[4].label}
                                </button>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <button
                                  style={{
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => find_Translator()}
                                >
                                  {Translate02EN[5].label}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ marginTop: 60, height: 100 }}>
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: " #034D82",
                          marginLeft: 20,
                          position: "absolute",
                          top: "13%",
                        }}
                      >
                        {Translate02EN[5].label}
                      </h4>
                      <div className="bodyMatchingFind">
                        <div style={{ margin: 30 }}>
                          {Doc === undefined ? (
                            <p
                              style={{
                                textAlign: "start",
                                color: "#034D82",
                                fontWeight: 600,
                                fontSize: 24,
                              }}
                            >
                              {trantype}
                            </p>
                          ) : (
                            <p
                              style={{
                                textAlign: "start",
                                color: "#034D82",
                                fontWeight: 600,
                                fontSize: 24,
                              }}
                            >
                              {Doc}
                            </p>
                          )}

                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                            }}
                          >
                            {Translate02EN[3].label} :
                          </p>
                          {languages === "English" ? (
                            <p
                              style={{
                                textAlign: "start",
                                color: "#353535",
                                fontWeight: 600,
                                fontSize: 17,
                                marginTop: 10,
                                float: "left",
                                marginLeft: 25,
                              }}
                            >
                              EN
                            </p>
                          ) : languages === "German" ? (
                            <p
                              style={{
                                textAlign: "start",
                                color: "#353535",
                                fontWeight: 600,
                                fontSize: 17,
                                marginTop: 10,
                                float: "left",
                                marginLeft: 25,
                              }}
                            >
                              DE
                            </p>
                          ) : languages === "Thai" ? (
                            <p
                              style={{
                                textAlign: "start",
                                color: "#353535",
                                fontWeight: 600,
                                fontSize: 17,
                                marginTop: 10,
                                float: "left",
                                marginLeft: 25,
                              }}
                            >
                              TH
                            </p>
                          ) : null}

                          <p
                            style={{
                              float: "left",
                              width: 15,
                              top: 12,
                              position: "relative",
                              fontSize: 18,
                              marginLeft: 20,
                              marginRight: 20,
                              background: "transparent",
                              border: "none",
                              color: "#353535",
                            }}
                            onClick={() => switchLanguage()}
                          >
                            <FaLongArrowAltRight
                              style={{ position: "absolute" }}
                            />

                            <FaLongArrowAltLeft
                              style={{ position: "relative" }}
                            />
                          </p>

                          {languages2 === "English" ? (
                            <p
                              style={{
                                textAlign: "start",
                                color: "#353535",
                                fontWeight: 600,
                                fontSize: 17,
                                marginTop: 10,
                              }}
                            >
                              EN
                            </p>
                          ) : languages2 === "German" ? (
                            <p
                              style={{
                                textAlign: "start",
                                color: "#353535",
                                fontWeight: 600,
                                fontSize: 17,
                                marginTop: 10,
                              }}
                            >
                              DE
                            </p>
                          ) : languages2 === "Thai" ? (
                            <p
                              style={{
                                textAlign: "start",
                                color: "#353535",
                                fontWeight: 600,
                                fontSize: 17,
                                marginTop: 10,
                              }}
                            >
                              TH
                            </p>
                          ) : null}
                          <div
                            style={{
                              width: "7%",
                              float: "left",
                              marginRight: 20,
                            }}
                          >
                            <p
                              style={{
                                textAlign: "end",
                                color: "#034D82",
                                fontWeight: 600,
                                fontSize: 17,
                                marginTop: 10,
                              }}
                            >
                              {Translate02EN[1].label} :
                            </p>
                          </div>
                          <p
                            style={{
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              textAlign: "start",
                            }}
                          >
                            {textarea}
                          </p>
                        </div>
                      </div>
                      {/* แก้ตรงนี้ */}
                      <div
                        style={{
                          position: "relative",
                          top: "300%",
                          width: "90%",
                          marginLeft: 15,
                        }}
                      >
                        <h4
                          style={{
                            fontWeight: 500,
                            fontSize: 26,
                            color: "#034D82",
                            marginLeft: 20,
                            textAlign: "start",
                            marginLeft: 5,
                          }}
                        >
                          Translator
                        </h4>
                        {translator ? (
                          <div className="BoxcardTranslator">
                            {translator?.map((i) => (
                              <div className="cardTranslator">
                                <div
                                  style={{
                                    position: "relative",
                                    top: 30,
                                    textAlign: "center",
                                  }}
                                >
                                  {/* <img
                                    src={profile}
                                    alt="profile"
                                    className="profile"
                                  /> */}
                                  <FaUserCircle
                                    alt="avatar"
                                    className="profile"
                                    style={{ fontSize: 45, color: " #e6e6e6" }}
                                  />
                                  <p
                                    style={{
                                      marginTop: 10,
                                      fontWeight: 400,
                                      fontSize: 18,
                                    }}
                                  >
                                    {i?.name}
                                  </p>
                                  <div
                                    style={{ width: "100%", marginLeft: 60 }}
                                  >
                                    <p
                                      style={{ float: "left", marginRight: 10 }}
                                    >
                                      5.0
                                    </p>
                                    <Stack spacing={1}>
                                      <Rating
                                        name="half-rating-read"
                                        defaultValue={5}
                                        readOnly
                                      />
                                    </Stack>
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 13,
                                      marginLeft: 30,
                                      marginRight: 30,
                                      marginTop: 10,
                                    }}
                                  >
                                    <p style={{ float: "left" }}>Skills :</p>
                                    <p>
                                      Translating theses, articles, important
                                      documents, movie subtitles
                                    </p>
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 13,
                                      marginLeft: 30,
                                      marginRight: 30,
                                      marginTop: 10,
                                    }}
                                  >
                                    <p style={{ float: "left" }}>Languages :</p>
                                    <p>English,汉语 官话,粵語, ไทย,한국어</p>
                                    <button
                                      style={{
                                        width: 200,
                                        height: 40,
                                        background: "#047ACF",
                                        color: "#FFFFFF",
                                        border: "none",
                                        borderRadius: 20,
                                        marginTop: 20,
                                      }}
                                      onClick={() =>
                                        navigate("/Chat", {
                                          state: {
                                            languages: `${languages}`,
                                            value: `${value}`,
                                            name: `${i?.name}`,
                                          },
                                        })
                                      }
                                    >
                                      Deal
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 400,
                          bgcolor: "background.paper",
                          border: "2px solid #000",
                          boxShadow: 24,
                          p: 4,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          coming soon
                        </Typography>
                      </Box>
                    </Modal>
                  </>
                )}
              </>
            ) : Toc === "Thai" ? (
              <>
                {findA_Translator === "Translate" ? (
                  <>
                    <div style={{ marginTop: 60, height: 100 }}>
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: " #034D82",
                          marginLeft: 20,
                          position: "absolute",
                          top: "13%",
                        }}
                      >
                        {Translate02TH[0].label}
                      </h4>
                    </div>
                    <div className="bodyMatching">
                      <div style={{ margin: 30 }}>
                        {Doc === undefined ? (
                          <>
                            {trantype === "" ? (
                              <Autocomplete
                                id="country-select-demo"
                                sx={{ width: 260 }}
                                options={Translate01TH}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                onChange={(event, value) =>
                                  setTranstype(value.label)
                                }
                                popupIcon={
                                  <MdArrowDropDown
                                    style={{
                                      color: "#333333",
                                      width: 30,
                                      height: 33,
                                    }}
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
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#034D82",
                                  fontWeight: 600,
                                  fontSize: 24,
                                }}
                              >
                                {trantype}
                              </p>
                            )}
                          </>
                        ) : (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {Doc}
                          </p>
                        )}

                        {page === "Text" ? (
                          <div>
                            <div style={{ textAlign: "start" }}>
                              <button
                                className="buttonMatching1_Thai"
                                onClick={() => setPage("Text")}
                              >
                                <FaLanguage className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02TH[1].label}
                                </p>
                              </button>
                              <button
                                className="buttonMatching"
                                onClick={() => setPage("File")}
                              >
                                <FaFile className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02TH[2].label}
                                </p>
                              </button>
                            </div>
                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02TH[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02TH[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages}
                                onChange={(event, value) =>
                                  setLanguages(value?.label)
                                }
                              />
                            </div>

                            <button
                              style={{
                                float: "left",
                                width: 30,
                                top: 60,
                                position: "relative",
                                fontSize: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                background: "transparent",
                                border: "none",
                                color: "#262DBB",
                              }}
                              onClick={() => switchLanguage()}
                            >
                              <FaLongArrowAltRight
                                style={{ position: "absolute" }}
                              />

                              <FaLongArrowAltLeft
                                style={{ position: "relative" }}
                              />
                            </button>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02TH[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02TH[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages2}
                                onChange={(event, value) =>
                                  setLanguages2(value?.label)
                                }
                              />
                            </div>

                            <div>
                              <textarea
                                value={textarea}
                                onChange={handleChange}
                                maxLength={350}
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: 300,
                                  background: "#FFFFFF",
                                  border: "1px solid #E5E5E5",
                                  boxSizing: "border-box",
                                  borderRadius: 5,
                                  padding: 20,
                                  top: 30,
                                  fontSize: 25,
                                }}
                                placeholder={Translate02TH[1].label}
                              />
                            </div>

                            <div style={{ marginTop: 38 }}>
                              <div style={{ float: "left" }}>
                                <button
                                  style={{
                                    width: 100,
                                    height: 40,
                                    background: "transparent",
                                    color: "#CF0202",
                                    border: "1px solid #CF0202",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => Cancle()}
                                >
                                  {Translate02TH[4].label}
                                </button>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <button
                                  style={{
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => find_Translator()}
                                >
                                  {Translate02TH[5].label}
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div style={{ textAlign: "start" }}>
                              <button
                                className="buttonMatching_Thai"
                                onClick={() => setPage("Text")}
                              >
                                <FaLanguage className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02TH[1].label}
                                </p>
                              </button>
                              <button
                                className="buttonMatching1"
                                onClick={() => setPage("File")}
                              >
                                <FaFile className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02TH[2].label}
                                </p>
                              </button>
                            </div>
                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02TH[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02TH[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages}
                                onChange={(event, value) =>
                                  setLanguages(value?.label)
                                }
                              />
                            </div>

                            <button
                              style={{
                                float: "left",
                                width: 30,
                                top: 60,
                                position: "relative",
                                fontSize: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                background: "transparent",
                                border: "none",
                                color: "#262DBB",
                              }}
                              onClick={() => switchLanguage()}
                            >
                              <FaLongArrowAltRight
                                style={{ position: "absolute" }}
                              />

                              <FaLongArrowAltLeft
                                style={{ position: "relative" }}
                              />
                            </button>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02TH[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02TH[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages2}
                                onChange={(event, value) =>
                                  setLanguages2(value?.label)
                                }
                              />
                            </div>

                            <div style={{ height: 50, marginTop: 200 }}>
                              <p
                                style={{
                                  fontSize: 25,
                                  fontWeight: 800,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02TH[6].label}
                              </p>
                              <p
                                style={{
                                  fontSize: 25,
                                  fontWeight: 800,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02TH[7].label}
                              </p>
                              {images.length < 1 ? (
                                <div
                                  style={{
                                    position: "relative",
                                    borderColor: "#0865A8",
                                    borderWidth: 2,
                                    margin: 25,
                                    left: "40%",
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                    textAlign: "center",
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
                                      <p
                                        style={{
                                          fontSize: 18,
                                          color: "#FFFF",
                                          position: "relative",
                                        }}
                                      >
                                        {Translate02TH[8].label}
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
                                    left: "30%",
                                    fontSize: 18,
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
                                        <p>{imageURLs}</p>
                                      ))}
                                    </IconButton>
                                  </label>
                                </div>
                              )}
                            </div>

                            <div style={{ marginTop: "14%" }}>
                              <div style={{ float: "left" }}>
                                <button
                                  style={{
                                    width: 100,
                                    height: 40,
                                    background: "transparent",
                                    color: "#CF0202",
                                    border: "1px solid #CF0202",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => Cancle()}
                                >
                                  {Translate02TH[4].label}
                                </button>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <button
                                  style={{
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => find_Translator()}
                                >
                                  {Translate02TH[5].label}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ marginTop: 60, height: 100 }}>
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: " #034D82",
                          marginLeft: 20,
                          position: "absolute",
                          top: "13%",
                        }}
                      >
                        {Translate02TH[5].label}
                      </h4>
                    </div>
                    <div className="bodyMatchingFind">
                      <div style={{ margin: 30 }}>
                        {Doc === undefined ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {trantype}
                          </p>
                        ) : (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {Doc}
                          </p>
                        )}

                        <p
                          style={{
                            textAlign: "start",
                            color: "#034D82",
                            fontWeight: 600,
                            fontSize: 17,
                            marginTop: 10,
                            float: "left",
                          }}
                        >
                          {Translate02TH[3].label} :
                        </p>
                        {languages === "English" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            EN
                          </p>
                        ) : languages === "German" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            DE
                          </p>
                        ) : languages === "Thai" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            TH
                          </p>
                        ) : null}

                        <p
                          style={{
                            float: "left",
                            width: 15,
                            top: 12,
                            position: "relative",
                            fontSize: 18,
                            marginLeft: 20,
                            marginRight: 20,
                            background: "transparent",
                            border: "none",
                            color: "#353535",
                          }}
                          onClick={() => switchLanguage()}
                        >
                          <FaLongArrowAltRight
                            style={{ position: "absolute" }}
                          />

                          <FaLongArrowAltLeft
                            style={{ position: "relative" }}
                          />
                        </p>

                        {languages2 === "English" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            EN
                          </p>
                        ) : languages2 === "German" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            DE
                          </p>
                        ) : languages2 === "Thai" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            TH
                          </p>
                        ) : null}
                        <div
                          style={{
                            width: "7%",
                            float: "left",
                            marginRight: 20,
                          }}
                        >
                          <p
                            style={{
                              textAlign: "end",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            {Translate02TH[1].label} :
                          </p>
                        </div>
                        <p
                          style={{
                            color: "#353535",
                            fontWeight: 600,
                            fontSize: 17,
                            marginTop: 10,
                            textAlign: "start",
                          }}
                        >
                          {textarea}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        top: "215%",
                        width: "100%",
                      }}
                    >
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: "#034D82",
                          marginLeft: 20,
                          textAlign: "start",
                        }}
                      >
                        Translator
                      </h4>
                      <div className="cardTranslator">
                        <div
                          style={{
                            position: "relative",
                            top: 30,
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={profile}
                            alt="profile"
                            className="profile"
                          />
                          <p
                            style={{
                              marginTop: 10,
                              fontWeight: 400,
                              fontSize: 18,
                            }}
                          >
                            Ozone Black
                          </p>
                          <div style={{ width: "100%", marginLeft: 60 }}>
                            <p style={{ float: "left", marginRight: 10 }}>
                              5.0
                            </p>
                            <Stack spacing={1}>
                              <Rating
                                name="half-rating-read"
                                defaultValue={5}
                                readOnly
                              />
                            </Stack>
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              marginLeft: 30,
                              marginRight: 30,
                              marginTop: 10,
                            }}
                          >
                            <p style={{ float: "left" }}>Skills :</p>
                            <p>
                              Translating theses, articles, important documents,
                              movie subtitles
                            </p>
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              marginLeft: 30,
                              marginRight: 30,
                              marginTop: 10,
                            }}
                          >
                            <p style={{ float: "left" }}>Languages :</p>
                            <p>English,汉语 官话,粵語, ไทย,한국어</p>
                            <button
                              style={{
                                width: 200,
                                height: 40,
                                background: "#047ACF",
                                color: "#FFFFFF",
                                border: "none",
                                borderRadius: 20,
                                marginTop: 20,
                              }}
                              // onClick={() => handleOpen()}
                              onClick={() =>
                                navigate("/Chat", {
                                  state: {
                                    languages: `${languages}`,
                                    value: `${value}`,
                                  },
                                })
                              }
                            >
                              Deal
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 400,
                          bgcolor: "background.paper",
                          border: "2px solid #000",
                          boxShadow: 24,
                          p: 4,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          coming soon
                        </Typography>
                      </Box>
                    </Modal>
                  </>
                )}
              </>
            ) : Toc === "German" ? (
              <>
                {findA_Translator === "Translate" ? (
                  <>
                    <div style={{ marginTop: 60, height: 100 }}>
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: " #034D82",
                          marginLeft: 20,
                          position: "absolute",
                          top: "13%",
                        }}
                      >
                        {Translate02DE[0].label}
                      </h4>
                    </div>
                    <div className="bodyMatching">
                      <div style={{ margin: 30 }}>
                        {Doc === undefined ? (
                          <>
                            {trantype === "" ? (
                              <Autocomplete
                                id="country-select-demo"
                                sx={{ width: 260 }}
                                options={Translate01DE}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                onChange={(event, value) =>
                                  setTranstype(value.label)
                                }
                                popupIcon={
                                  <MdArrowDropDown
                                    style={{
                                      color: "#333333",
                                      width: 30,
                                      height: 33,
                                    }}
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
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#034D82",
                                  fontWeight: 600,
                                  fontSize: 24,
                                }}
                              >
                                {trantype}
                              </p>
                            )}
                          </>
                        ) : (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {Doc}
                          </p>
                        )}

                        {page === "Text" ? (
                          <div>
                            <div style={{ textAlign: "start" }}>
                              <button
                                className="buttonMatching1_Thai"
                                onClick={() => setPage("Text")}
                              >
                                <FaLanguage className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02DE[1].label}
                                </p>
                              </button>
                              <button
                                className="buttonMatching"
                                onClick={() => setPage("File")}
                              >
                                <FaFile className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02DE[2].label}
                                </p>
                              </button>
                            </div>
                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02DE[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02DE[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages}
                                onChange={(event, value) =>
                                  setLanguages(value?.label)
                                }
                              />
                            </div>

                            <button
                              style={{
                                float: "left",
                                width: 30,
                                top: 60,
                                position: "relative",
                                fontSize: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                background: "transparent",
                                border: "none",
                                color: "#262DBB",
                              }}
                              onClick={() => switchLanguage()}
                            >
                              <FaLongArrowAltRight
                                style={{ position: "absolute" }}
                              />

                              <FaLongArrowAltLeft
                                style={{ position: "relative" }}
                              />
                            </button>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02DE[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02DE[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages2}
                                onChange={(event, value) =>
                                  setLanguages2(value?.label)
                                }
                              />
                            </div>

                            <div>
                              <textarea
                                value={textarea}
                                onChange={handleChange}
                                maxLength={350}
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: 300,
                                  background: "#FFFFFF",
                                  border: "1px solid #E5E5E5",
                                  boxSizing: "border-box",
                                  borderRadius: 5,
                                  padding: 20,
                                  top: 30,
                                  fontSize: 25,
                                }}
                                placeholder={Translate02DE[1].label}
                              />
                            </div>

                            <div style={{ marginTop: 38 }}>
                              <div style={{ float: "left" }}>
                                <button
                                  style={{
                                    width: 100,
                                    height: 40,
                                    background: "transparent",
                                    color: "#CF0202",
                                    border: "1px solid #CF0202",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => Cancle()}
                                >
                                  {Translate02DE[4].label}
                                </button>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <button
                                  style={{
                                    width: 200,
                                    height: 50,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => find_Translator()}
                                >
                                  {Translate02DE[5].label}
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div style={{ textAlign: "start" }}>
                              <button
                                className="buttonMatching"
                                onClick={() => setPage("Text")}
                              >
                                <FaLanguage className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02DE[1].label}
                                </p>
                              </button>
                              <button
                                className="buttonMatching1"
                                onClick={() => setPage("File")}
                              >
                                <FaFile className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02DE[2].label}
                                </p>
                              </button>
                            </div>
                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02DE[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02DE[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages}
                                onChange={(event, value) =>
                                  setLanguages(value?.label)
                                }
                              />
                            </div>

                            <button
                              style={{
                                float: "left",
                                width: 30,
                                top: 60,
                                position: "relative",
                                fontSize: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                background: "transparent",
                                border: "none",
                                color: "#262DBB",
                              }}
                              onClick={() => switchLanguage()}
                            >
                              <FaLongArrowAltRight
                                style={{ position: "absolute" }}
                              />

                              <FaLongArrowAltLeft
                                style={{ position: "relative" }}
                              />
                            </button>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02DE[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02DE[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages2}
                                onChange={(event, value) =>
                                  setLanguages2(value?.label)
                                }
                              />
                            </div>

                            <div style={{ height: 50, marginTop: 200 }}>
                              <p
                                style={{
                                  fontSize: 25,
                                  fontWeight: 800,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02DE[6].label}
                              </p>
                              <p
                                style={{
                                  fontSize: 25,
                                  fontWeight: 800,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02DE[7].label}
                              </p>
                              {images.length < 1 ? (
                                <div
                                  style={{
                                    position: "relative",
                                    borderColor: "#0865A8",
                                    borderWidth: 2,
                                    margin: 25,
                                    left: "40%",
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                    textAlign: "center",
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
                                      <p
                                        style={{
                                          fontSize: 18,
                                          color: "#FFFF",
                                          position: "relative",
                                        }}
                                      >
                                        {Translate02DE[8].label}
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
                                    left: "30%",
                                    fontSize: 18,
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
                                        <p>{imageURLs}</p>
                                      ))}
                                    </IconButton>
                                  </label>
                                </div>
                              )}
                            </div>

                            <div style={{ marginTop: "14%" }}>
                              <div style={{ float: "left" }}>
                                <button
                                  style={{
                                    width: 100,
                                    height: 40,
                                    background: "transparent",
                                    color: "#CF0202",
                                    border: "1px solid #CF0202",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => Cancle()}
                                >
                                  {Translate02DE[4].label}
                                </button>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <button
                                  style={{
                                    width: 200,
                                    height: 50,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => find_Translator()}
                                >
                                  {Translate02DE[5].label}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ marginTop: 60, height: 100 }}>
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: " #034D82",
                          marginLeft: 20,
                          position: "absolute",
                          top: "13%",
                        }}
                      >
                        {Translate02DE[5].label}
                      </h4>
                    </div>
                    <div className="bodyMatchingFind">
                      <div style={{ margin: 30 }}>
                        {Doc === undefined ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {trantype}
                          </p>
                        ) : (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {Doc}
                          </p>
                        )}

                        <p
                          style={{
                            textAlign: "start",
                            color: "#034D82",
                            fontWeight: 600,
                            fontSize: 17,
                            marginTop: 10,
                            float: "left",
                          }}
                        >
                          {Translate02DE[3].label} :
                        </p>
                        {languages === "English" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            EN
                          </p>
                        ) : languages === "German" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            DE
                          </p>
                        ) : languages === "Thai" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            TH
                          </p>
                        ) : null}

                        <p
                          style={{
                            float: "left",
                            width: 15,
                            top: 12,
                            position: "relative",
                            fontSize: 18,
                            marginLeft: 20,
                            marginRight: 20,
                            background: "transparent",
                            border: "none",
                            color: "#353535",
                          }}
                          onClick={() => switchLanguage()}
                        >
                          <FaLongArrowAltRight
                            style={{ position: "absolute" }}
                          />

                          <FaLongArrowAltLeft
                            style={{ position: "relative" }}
                          />
                        </p>

                        {languages2 === "English" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            EN
                          </p>
                        ) : languages2 === "German" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            DE
                          </p>
                        ) : languages2 === "Thai" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            TH
                          </p>
                        ) : null}
                        <div
                          style={{
                            width: "7%",
                            float: "left",
                            marginRight: 20,
                          }}
                        >
                          <p
                            style={{
                              textAlign: "end",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            {Translate02DE[1].label} :
                          </p>
                        </div>
                        <p
                          style={{
                            color: "#353535",
                            fontWeight: 600,
                            fontSize: 17,
                            marginTop: 10,
                            textAlign: "start",
                          }}
                        >
                          {textarea}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        top: "215%",
                        width: "100%",
                      }}
                    >
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: "#034D82",
                          marginLeft: 20,
                          textAlign: "start",
                        }}
                      >
                        Translator
                      </h4>
                      <div className="cardTranslator">
                        <div
                          style={{
                            position: "relative",
                            top: 30,
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={profile}
                            alt="profile"
                            className="profile"
                          />
                          <p
                            style={{
                              marginTop: 10,
                              fontWeight: 400,
                              fontSize: 18,
                            }}
                          >
                            Ozone Black
                          </p>
                          <div style={{ width: "100%", marginLeft: 60 }}>
                            <p style={{ float: "left", marginRight: 10 }}>
                              5.0
                            </p>
                            <Stack spacing={1}>
                              <Rating
                                name="half-rating-read"
                                defaultValue={5}
                                readOnly
                              />
                            </Stack>
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              marginLeft: 30,
                              marginRight: 30,
                              marginTop: 10,
                            }}
                          >
                            <p style={{ float: "left" }}>Skills :</p>
                            <p>
                              Translating theses, articles, important documents,
                              movie subtitles
                            </p>
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              marginLeft: 30,
                              marginRight: 30,
                              marginTop: 10,
                            }}
                          >
                            <p style={{ float: "left" }}>Languages :</p>
                            <p>English,汉语 官话,粵語, ไทย,한국어</p>
                            <button
                              style={{
                                width: 200,
                                height: 40,
                                background: "#047ACF",
                                color: "#FFFFFF",
                                border: "none",
                                borderRadius: 20,
                                marginTop: 20,
                              }}
                              // onClick={() => handleOpen()}
                              onClick={() =>
                                navigate("/Chat", {
                                  state: {
                                    languages: `${languages}`,
                                    value: `${value}`,
                                  },
                                })
                              }
                            >
                              Deal
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 400,
                          bgcolor: "background.paper",
                          border: "2px solid #000",
                          boxShadow: 24,
                          p: 4,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          coming soon
                        </Typography>
                      </Box>
                    </Modal>
                  </>
                )}
              </>
            ) : (
              <>
                {findA_Translator === "Translate" ? (
                  <>
                    <div style={{ marginTop: 60, height: 100 }}>
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: " #034D82",
                          marginLeft: 20,
                          position: "absolute",
                          top: "13%",
                        }}
                      >
                        {Translate02EN[0].label}
                      </h4>
                    </div>
                    <div className="bodyMatching">
                      <div style={{ margin: 30 }}>
                        {Doc === undefined ? (
                          <>
                            {trantype === "" ? (
                              <Autocomplete
                                id="country-select-demo"
                                sx={{ width: 260 }}
                                options={Translate01EN}
                                autoHighlight
                                getOptionLabel={(option) => option.label}
                                onChange={(event, value) =>
                                  setTranstype(value.label)
                                }
                                popupIcon={
                                  <MdArrowDropDown
                                    style={{
                                      color: "#333333",
                                      width: 30,
                                      height: 33,
                                    }}
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
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#034D82",
                                  fontWeight: 600,
                                  fontSize: 24,
                                }}
                              >
                                {trantype}
                              </p>
                            )}
                          </>
                        ) : (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {Doc}
                          </p>
                        )}

                        {page === "Text" ? (
                          <div>
                            <div style={{ textAlign: "start" }}>
                              <button
                                className="buttonMatching1"
                                onClick={() => setPage("Text")}
                              >
                                <FaLanguage className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02EN[1].label}
                                </p>
                              </button>
                              <button
                                className="buttonMatching"
                                onClick={() => setPage("File")}
                              >
                                <FaFile className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02EN[2].label}
                                </p>
                              </button>
                            </div>
                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02EN[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages}
                                onChange={(event, value) =>
                                  setLanguages(value?.label)
                                }
                              />
                            </div>

                            <button
                              style={{
                                float: "left",
                                width: 30,
                                top: 60,
                                position: "relative",
                                fontSize: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                background: "transparent",
                                border: "none",
                                color: "#262DBB",
                              }}
                              onClick={() => switchLanguage()}
                            >
                              <FaLongArrowAltRight
                                style={{ position: "absolute" }}
                              />

                              <FaLongArrowAltLeft
                                style={{ position: "relative" }}
                              />
                            </button>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02EN[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages2}
                                onChange={(event, value) =>
                                  setLanguages2(value?.label)
                                }
                              />
                            </div>

                            <div>
                              <textarea
                                value={textarea}
                                onChange={handleChange}
                                maxLength={350}
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  height: 300,
                                  background: "#FFFFFF",
                                  border: "1px solid #E5E5E5",
                                  boxSizing: "border-box",
                                  borderRadius: 5,
                                  padding: 20,
                                  top: 30,
                                  fontSize: 25,
                                }}
                                placeholder={Translate02EN[1].label}
                              />
                            </div>

                            <div style={{ marginTop: 38 }}>
                              <div style={{ float: "left" }}>
                                <button
                                  style={{
                                    width: 100,
                                    height: 40,
                                    background: "transparent",
                                    color: "#CF0202",
                                    border: "1px solid #CF0202",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => Cancle()}
                                >
                                  {Translate02EN[4].label}
                                </button>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <button
                                  style={{
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => find_Translator()}
                                >
                                  {Translate02EN[5].label}
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div style={{ textAlign: "start" }}>
                              <button
                                className="buttonMatching"
                                onClick={() => setPage("Text")}
                              >
                                <FaLanguage className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02EN[1].label}
                                </p>
                              </button>
                              <button
                                className="buttonMatching1"
                                onClick={() => setPage("File")}
                              >
                                <FaFile className="iconsMatching" />
                                <p className="textMatching">
                                  {Translate02EN[2].label}
                                </p>
                              </button>
                            </div>
                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02EN[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages}
                                onChange={(event, value) =>
                                  setLanguages(value?.label)
                                }
                              />
                            </div>

                            <button
                              style={{
                                float: "left",
                                width: 30,
                                top: 60,
                                position: "relative",
                                fontSize: 30,
                                marginLeft: 20,
                                marginRight: 20,
                                background: "transparent",
                                border: "none",
                                color: "#262DBB",
                              }}
                              onClick={() => switchLanguage()}
                            >
                              <FaLongArrowAltRight
                                style={{ position: "absolute" }}
                              />

                              <FaLongArrowAltLeft
                                style={{ position: "relative" }}
                              />
                            </button>

                            <div style={{ float: "left" }}>
                              <p
                                style={{
                                  textAlign: "start",
                                  color: "#353535",
                                  fontSize: 18,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[3].label}
                              </p>
                              <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={data}
                                sx={{ width: 582 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label={Translate02EN[3].label}
                                  />
                                )}
                                isOptionEqualToValue={(option, value) =>
                                  option.code === value
                                }
                                value={languages2}
                                onChange={(event, value) =>
                                  setLanguages2(value?.label)
                                }
                              />
                            </div>

                            <div style={{ height: 50, marginTop: 200 }}>
                              <p
                                style={{
                                  fontSize: 25,
                                  fontWeight: 800,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[6].label}
                              </p>
                              <p
                                style={{
                                  fontSize: 25,
                                  fontWeight: 800,
                                  marginBottom: 20,
                                }}
                              >
                                {Translate02EN[7].label}
                              </p>
                              {images.length < 1 ? (
                                <div
                                  style={{
                                    position: "relative",
                                    borderColor: "#0865A8",
                                    borderWidth: 2,
                                    margin: 25,
                                    left: "40%",
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                    textAlign: "center",
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
                                      <p
                                        style={{
                                          fontSize: 18,
                                          color: "#FFFF",
                                          position: "relative",
                                        }}
                                      >
                                        {Translate02EN[8].label}
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
                                    left: "30%",
                                    fontSize: 18,
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
                                        <p>{imageURLs}</p>
                                      ))}
                                    </IconButton>
                                  </label>
                                </div>
                              )}
                            </div>

                            <div style={{ marginTop: "14%" }}>
                              <div style={{ float: "left" }}>
                                <button
                                  style={{
                                    width: 100,
                                    height: 40,
                                    background: "transparent",
                                    color: "#CF0202",
                                    border: "1px solid #CF0202",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => Cancle()}
                                >
                                  {Translate02EN[4].label}
                                </button>
                              </div>
                              <div style={{ textAlign: "end" }}>
                                <button
                                  style={{
                                    width: 200,
                                    height: 40,
                                    background: "#047ACF",
                                    color: "#FFFFFF",
                                    border: "none",
                                    borderRadius: 5,
                                  }}
                                  onClick={() => find_Translator()}
                                >
                                  {Translate02EN[5].label}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ marginTop: 60, height: 100 }}>
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: " #034D82",
                          marginLeft: 20,
                          position: "absolute",
                          top: "13%",
                        }}
                      >
                        {Translate02EN[5].label}
                      </h4>
                    </div>
                    <div className="bodyMatchingFind">
                      <div style={{ margin: 30 }}>
                        {Doc === undefined ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {trantype}
                          </p>
                        ) : (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 24,
                            }}
                          >
                            {Doc}
                          </p>
                        )}

                        <p
                          style={{
                            textAlign: "start",
                            color: "#034D82",
                            fontWeight: 600,
                            fontSize: 17,
                            marginTop: 10,
                            float: "left",
                          }}
                        >
                          {Translate02EN[3].label} :
                        </p>
                        {languages === "English" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            EN
                          </p>
                        ) : languages === "German" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            DE
                          </p>
                        ) : languages === "Thai" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                              float: "left",
                              marginLeft: 25,
                            }}
                          >
                            TH
                          </p>
                        ) : null}

                        <p
                          style={{
                            float: "left",
                            width: 15,
                            top: 12,
                            position: "relative",
                            fontSize: 18,
                            marginLeft: 20,
                            marginRight: 20,
                            background: "transparent",
                            border: "none",
                            color: "#353535",
                          }}
                          onClick={() => switchLanguage()}
                        >
                          <FaLongArrowAltRight
                            style={{ position: "absolute" }}
                          />

                          <FaLongArrowAltLeft
                            style={{ position: "relative" }}
                          />
                        </p>

                        {languages2 === "English" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            EN
                          </p>
                        ) : languages2 === "German" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            DE
                          </p>
                        ) : languages2 === "Thai" ? (
                          <p
                            style={{
                              textAlign: "start",
                              color: "#353535",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            TH
                          </p>
                        ) : null}
                        <div
                          style={{
                            width: "7%",
                            float: "left",
                            marginRight: 20,
                          }}
                        >
                          <p
                            style={{
                              textAlign: "end",
                              color: "#034D82",
                              fontWeight: 600,
                              fontSize: 17,
                              marginTop: 10,
                            }}
                          >
                            {Translate02EN[1].label} :
                          </p>
                        </div>
                        <p
                          style={{
                            color: "#353535",
                            fontWeight: 600,
                            fontSize: 17,
                            marginTop: 10,
                            textAlign: "start",
                          }}
                        >
                          {textarea}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "relative",
                        top: "215%",
                        width: "100%",
                      }}
                    >
                      <h4
                        style={{
                          fontWeight: 500,
                          fontSize: 26,
                          color: "#034D82",
                          marginLeft: 20,
                          textAlign: "start",
                        }}
                      >
                        Translator
                      </h4>

                      <div className="cardTranslator">
                        <div
                          style={{
                            position: "relative",
                            top: 30,
                            textAlign: "center",
                          }}
                        >
                          <img
                            src={profile}
                            alt="profile"
                            className="profile"
                          />
                          <p
                            style={{
                              marginTop: 10,
                              fontWeight: 400,
                              fontSize: 18,
                            }}
                          >
                            Ozone Black
                          </p>
                          <div style={{ width: "100%", marginLeft: 60 }}>
                            <p style={{ float: "left", marginRight: 10 }}>
                              5.0
                            </p>
                            <Stack spacing={1}>
                              <Rating
                                name="half-rating-read"
                                defaultValue={5}
                                readOnly
                              />
                            </Stack>
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              marginLeft: 30,
                              marginRight: 30,
                              marginTop: 10,
                            }}
                          >
                            <p style={{ float: "left" }}>Skills :</p>
                            <p>
                              Translating theses, articles, important documents,
                              movie subtitles
                            </p>
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              marginLeft: 30,
                              marginRight: 30,
                              marginTop: 10,
                            }}
                          >
                            <p style={{ float: "left" }}>Languages :</p>
                            <p>English,汉语 官话,粵語, ไทย,한국어</p>
                            <button
                              style={{
                                width: 200,
                                height: 40,
                                background: "#047ACF",
                                color: "#FFFFFF",
                                border: "none",
                                borderRadius: 20,
                                marginTop: 20,
                              }}
                              // onClick={() => handleOpen()}
                              onClick={() =>
                                navigate("/Chat", {
                                  state: {
                                    languages: `${languages}`,
                                    value: `${value}`,
                                  },
                                })
                              }
                            >
                              Deal
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          width: 400,
                          bgcolor: "background.paper",
                          border: "2px solid #000",
                          boxShadow: 24,
                          p: 4,
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          coming soon
                        </Typography>
                      </Box>
                    </Modal>
                  </>
                )}
              </>
            )}
          </Box>
        </>
      </Box>
    </div>
  );
};

export default Matching;
