import * as React from "react";

import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";

import { FaLanguage, FaUserCheck, FaMedal } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { TranslatorEN, TranslatorDE, TranslatorTH } from "../Data/DataLanguage";
import "./Translator.css";

const Translator = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const location = useLocation();
  const navigate = useNavigate();
  let Doc = location?.state?.languages;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goSignup = () => {
    navigate("/Signup");
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
        <div>
          <div className="Translator_headtext">
            <div style={{ width: "100vw" }}>
              <div
                style={{
                  top: 100,
                  background: "#97D5FF",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  borderRadius: 200,
                }}
              ></div>

              <div
                style={{
                  top: 100,
                  background: "#FFEDB2",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 1000,
                  borderRadius: 200,
                }}
              ></div>
            </div>

            <div>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {TranslatorEN[0].label}
                </p>
              </div>
              <div>
                <p style={{ fontSize: 28, color: "#444444", width: 1000 }}>
                  {TranslatorEN[1].label}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
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
                    {TranslatorEN[2].label}
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
                  marginBottom: 30,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {TranslatorEN[3].label}
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 70,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorEN[4].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p> {TranslatorEN[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 60,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorEN[6].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorEN[7].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 60 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $56.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorEN[8].label}
                    </a>
                  </button>
                </div>

                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 70,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorEN[9].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p>{TranslatorEN[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorEN[6].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  >
                    <FaMedal size="18px" />
                    <p> {TranslatorEN[11].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorEN[6].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 35 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $156.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorEN[8].label}
                    </a>
                  </button>
                </div>

                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 0,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorEN[12].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p> {TranslatorEN[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorEN[6].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  >
                    <FaMedal size="18px" />
                    <p>{TranslatorEN[11].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorEN[7].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 35 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $146.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorEN[8].label}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ top: height * 1.2, position: "relative" }}>
            <div>
              <Footer v="English" />
            </div>
          </div>
        </div>
      ) : Doc === "German" ? (
        <div>
          <div className="Translator_headtext">
            <div style={{ width: "100vw" }}>
              <div
                style={{
                  top: 100,
                  background: "#97D5FF",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  borderRadius: 200,
                }}
              ></div>

              <div
                style={{
                  top: 100,
                  background: "#FFEDB2",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 1000,
                  borderRadius: 200,
                }}
              ></div>
            </div>

            <div>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {TranslatorDE[0].label}
                </p>
              </div>
              <div>
                <p style={{ fontSize: 28, color: "#444444", width: 1000 }}>
                  {TranslatorDE[1].label}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
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
                    {TranslatorDE[2].label}
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
                  marginBottom: 30,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {TranslatorDE[3].label}
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 70,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorDE[4].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p> {TranslatorDE[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 60,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorDE[6].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorDE[7].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 60 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $56.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorDE[8].label}
                    </a>
                  </button>
                </div>

                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 70,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorDE[9].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p>{TranslatorDE[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorDE[6].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  >
                    <FaMedal size="18px" />
                    <p> {TranslatorDE[11].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorDE[6].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 35 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $156.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorDE[8].label}
                    </a>
                  </button>
                </div>

                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 0,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorDE[12].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p> {TranslatorDE[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorDE[6].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  >
                    <FaMedal size="18px" />
                    <p>{TranslatorDE[11].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorDE[7].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 35 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $146.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorDE[8].label}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ top: height * 1.2, position: "relative" }}>
            <div>
              <Footer v="German" />
            </div>
          </div>
        </div>
      ) : Doc === "Thai" ? (
        <div>
          <div className="Translator_headtext">
            <div style={{ width: "100vw" }}>
              <div
                style={{
                  top: 100,
                  background: "#97D5FF",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  borderRadius: 200,
                }}
              ></div>

              <div
                style={{
                  top: 100,
                  background: "#FFEDB2",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 1000,
                  borderRadius: 200,
                }}
              ></div>
            </div>

            <div>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {TranslatorTH[0].label}
                </p>
              </div>
              <div>
                <p style={{ fontSize: 28, color: "#444444", width: 1000 }}>
                  {TranslatorTH[1].label}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
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
                    {TranslatorTH[2].label}
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
                  marginBottom: 30,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {TranslatorTH[3].label}
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 70,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorTH[4].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p> {TranslatorTH[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 60,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorTH[6].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorTH[7].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 60 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $56.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorTH[8].label}
                    </a>
                  </button>
                </div>

                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 70,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorTH[9].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p>{TranslatorTH[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorTH[6].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  >
                    <FaMedal size="18px" />
                    <p> {TranslatorTH[11].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorTH[6].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 35 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $156.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorTH[8].label}
                    </a>
                  </button>
                </div>

                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 0,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorTH[12].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p> {TranslatorTH[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorTH[6].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  >
                    <FaMedal size="18px" />
                    <p>{TranslatorTH[11].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorTH[7].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 35 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $146.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorTH[8].label}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ top: height * 1.2, position: "relative" }}>
            <div>
              <Footer v="Thai" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="Translator_headtext">
            <div style={{ width: "100vw" }}>
              <div
                style={{
                  top: 100,
                  background: "#97D5FF",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  borderRadius: 200,
                }}
              ></div>

              <div
                style={{
                  top: 100,
                  background: "#FFEDB2",
                  opacity: 0.3,
                  filter: "blur(20px)",
                  position: "absolute",
                  width: 400,
                  height: 400,
                  left: 1000,
                  borderRadius: 200,
                }}
              ></div>
            </div>

            <div>
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {TranslatorEN[0].label}
                </p>
              </div>
              <div>
                <p style={{ fontSize: 28, color: "#444444", width: 1000 }}>
                  {TranslatorEN[1].label}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
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
                    {TranslatorEN[2].label}
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
                  marginBottom: 30,
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: 56,
                    color: "#0097FE",
                  }}
                >
                  {TranslatorEN[3].label}
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 70,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorEN[4].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p> {TranslatorEN[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 60,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorEN[6].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorEN[7].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 60 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $56.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorEN[8].label}
                    </a>
                  </button>
                </div>

                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 70,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorEN[9].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p>{TranslatorEN[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorEN[6].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  >
                    <FaMedal size="18px" />
                    <p> {TranslatorEN[11].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorEN[6].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 35 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $156.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorEN[8].label}
                    </a>
                  </button>
                </div>

                <div
                  style={{
                    width: width * 0.25,
                    height: width * 0.35,
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    boxSizing: "border-box",
                    padding: 30,
                    textAlign: "center",
                    float: "left",
                    marginRight: 0,
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      {TranslatorEN[12].label}
                    </p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaLanguage size="18px" style={{ marginRight: 10 }} />
                    <p> {TranslatorEN[5].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                    }}
                  >
                    <FaUserCheck size="18px" />
                    <p> {TranslatorEN[6].label}</p>
                  </div>
                  <div
                    style={{
                      color: "#606060",
                      fontSize: 18,
                      marginBottom: 10,
                      marginTop: 20,
                    }}
                  >
                    <FaMedal size="18px" />
                    <p>{TranslatorEN[11].label}</p>
                  </div>
                  <div>
                    <p style={{ color: "#858585", fontSize: 14 }}>
                      {TranslatorEN[7].label}
                    </p>
                    <br />
                    <p style={{ color: "#333333", fontSize: 18 }}>
                      Tue 15 Mar 09:00 PM
                    </p>
                  </div>
                  <div style={{ marginBottom: 35, marginTop: 35 }}>
                    <p
                      style={{
                        color: "#333333",
                        fontWeight: 700,
                        fontSize: 24,
                      }}
                    >
                      $146.84
                    </p>
                  </div>

                  <button
                    style={{
                      background: "#0097FE",
                      borderRadius: 20,
                      color: "#FFFFFF",
                      borderColor: "transparent",
                      width: width * 0.2,
                    }}
                  >
                    <a
                      href="/Login"
                      style={{ color: "#FFFFFF", textDecoration: "none" }}
                    >
                      {TranslatorEN[8].label}
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div style={{ top: height * 1.2, position: "relative" }}>
            <div>
              <Footer v="English" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Translator;
