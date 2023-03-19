import * as React from "react";
import { Box, Modal, Autocomplete, TextField } from "@mui/material";
import Drawer from "../Drawer/DrawerTranslate";
import Navbars from "../Navbar/navbarHome2.js";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import Icons from "../../Images/icons_ai.png";
import { BsFileEarmarkText } from "react-icons/bs";
import { ImTextColor } from "react-icons/im";
import {
  FaRegFileImage,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { data } from "../Data/data";
import "./Tool.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Tool() {
  const [typeOpen, setTypeOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState("");
  const [languages, setLanguages] = React.useState("");
  const [languages2, setLanguages2] = React.useState("");
  const [textex, setText] = React.useState("");
  const [translateFrom, setTranslateFrom] = React.useState("");
  const [result, setResult] = React.useState("");
  const [option, setOption] = React.useState("1");

  // const [value_Text, setValue_Text] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  let Doc = location?.state?.languages;
  let Value = auth?.token;

  React.useEffect(() => {
    if (Value) {
      console.log("value :", Value);
    } else {
      navigate("/Login");
    }
  }, [navigate, Value]);

  const handleChange = (content) => {
    console.log(":::", content.trim());
    setText(content);
  };

  const handleClose = () => {
    setTypeOpen(false);
  };

  const TEXT_SCAN = () => {
    setPage("TEXT_SCAN");
    setTypeOpen(false);
  };

  const switchLanguage = () => {
    setLanguages(languages2);
    setLanguages2(languages);
  };

  const TranslateFrom = (x) => {
    setLanguages(x);
    if (x === "English") {
      setTranslateFrom("en-GB");
    } else if (x === "Thai") {
      setTranslateFrom("th-TH");
    } else if (x === "German") {
      setTranslateFrom("de-DE");
    } else {
      setTranslateFrom("en-GB");
    }
  };

  const translate = () => {
    const text = textex;
    const translateTo = languages2;
    console.log(text,translateTo);
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log("data::", data);
        const valueText = data.responseData.translatedText;
        setResult(valueText);
      })
      .catch((e) => {
        console.log(e);
      });
    setOpen(true);
  };

  return (
    <div className="AppBobyTool">
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
        <Drawer languages={Doc} value={Value} />
        <Box component="main">
          <div className="BobyTool">
            <p className="TextHTool">Tool</p>

            <div className="FormBtton">
              <button className="helper" onClick={() => setTypeOpen(true)}>
                <img alt="Icons" src={Icons} />
                <p>helper</p>
              </button>
              <button className="Submit">Submit work</button>
            </div>
            {page === "" ? (
              <div className="BoxSunEditor">
                <div className="InBoxSunEditor">
                  <BsFileEarmarkText className="BsFileEarmarkText" />
                  <div>
                    <p>NameFile</p>
                  </div>
                </div>
                <SunEditor
                  height="350px"
                  className="SunEditor"
                  onBlur={(e) => handleChange(e.target.innerText)}
                />
              </div>
            ) : (
              <div className="BoxSunEditor">
                <div className="InBoxSunEditor">
                  {/* <BsFileEarmarkText className="BsFileEarmarkText" /> */}
                  <p>TEXT SCAN</p>
                </div>
                <SunEditor
                  height="350px"
                  className="SunEditor"
                  onBlur={(e) => handleChange(e.target.innerText)}
                />
                <div className="form">
                  <div className="formIn">
                    <div style={{ float: "left" }}>
                      <p
                        style={{
                          textAlign: "start",
                          color: "#353535",
                          fontSize: 18,
                        }}
                      >
                        Translate From
                      </p>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={data}
                        className="Autocomplete"
                        renderInput={(params) => (
                          <TextField {...params} label="language" />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          option.code === value
                        }
                        value={languages}
                        onChange={(event, value) => TranslateFrom(value?.label)}
                      />
                    </div>

                    <button
                      style={{
                        float: "left",
                        width: 30,
                        top: 35,
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
                      <FaLongArrowAltRight style={{ position: "absolute" }} />

                      <FaLongArrowAltLeft style={{ position: "relative" }} />
                    </button>

                    <div style={{ float: "left" }}>
                      <p
                        style={{
                          textAlign: "start",
                          color: "#353535",
                          fontSize: 18,
                        }}
                      >
                        Translate To
                      </p>
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={data}
                        className="Autocomplete"
                        renderInput={(params) => (
                          <TextField {...params} label="language" />
                        )}
                        isOptionEqualToValue={(option, value) =>
                          option.code === value
                        }
                        value={languages2}
                        onChange={(event, value) => setLanguages2(value?.label)}
                      />
                    </div>
                  </div>

                  <div className="formIn2">
                    <button
                      style={{
                        float: "left",
                        width: 115,
                        fontSize: 18,
                        marginLeft: 20,
                        marginRight: 20,
                        background: "transparent",
                        border: " 1px solid #E5E5E5",
                        color: "#606060",
                      }}
                      onClick={() => translate()}
                    >
                      Translate
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Modal
            open={typeOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal">
              <button className="BoxModalButton" onClick={() => TEXT_SCAN()}>
                <p>TEXT SCAN</p>
                <br />
                <ImTextColor className="ImTextColor" />
              </button>

              <button
                className="BoxModalButton"
                style={{
                  color: "beige",
                  border: "1px solid",
                }}
              >
                <p>IMAGE SCAN</p>
                <br />
                <FaRegFileImage className="ImTextColor" />
              </button>
            </Box>
          </Modal>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="BoxModal2">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Result</p>
                <button
                  style={{
                    height: 40,
                    borderRadius: 5,
                    color: "#034D82",
                    fontWeight: 700,
                    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                    background: "#FFFFFF",
                    border: "1px solid #034D82",
                    marginBottom: 5,
                  }}
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              {option === "4" ? (
                <textarea
                  style={{
                    width: " 100%",
                    height: "500px",
                    background: " #F6FBFE",
                    border: "1px solid #E5E5E5",
                    borderRadius: 5,
                    textAlign: "start",
                    padding: "20px",
                  }}
                >
                  <p></p>
                </textarea>
              ) : (
                <div
                  style={{
                    width: " 100%",
                    height: "500px",
                    background: " #F6FBFE",
                    border: "1px solid #E5E5E5",
                    borderRadius: 5,
                    textAlign: "start",
                    padding: "20px",
                  }}
                >
                  <p>{result}</p>
                </div>
              )}

              {option === "1" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton2"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "2" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton2"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "3" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton2"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton"
                  >
                    Option 4
                  </button>
                </div>
              ) : option === "4" ? (
                <div className="rowbuttonTools">
                  <button
                    onClick={() => setOption("1")}
                    className="Toolsbutton"
                  >
                    Option 1
                  </button>
                  <button
                    onClick={() => setOption("2")}
                    className="Toolsbutton"
                  >
                    Option 2
                  </button>
                  <button
                    onClick={() => setOption("3")}
                    className="Toolsbutton"
                  >
                    Option 3
                  </button>
                  <button
                    onClick={() => setOption("4")}
                    className="Toolsbutton2"
                  >
                    Option 4
                  </button>
                </div>
              ) : null}
            </Box>
          </Modal>
        </Box>
      </Box>
    </div>
  );
}
export default Tool;
