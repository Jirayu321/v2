import * as React from "react";
import Navbars from "../Navbar/navbarHome";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { BsArrowRightShort } from "react-icons/bs";
import Online_document from "../../Images/Online_document.png";
import Documents from "../../Images/Documents-amico.png";
import Translator from "../../Images/Translator-bro.png";
import Selecting_team from "../../Images/Selecting_team.png";
import { useNavigate, useLocation } from "react-router-dom";
import { overviewEN, overviewTH, overviewDE } from "../Data/DataLanguage";
import { Modal, Typography, Box } from "@mui/material";

import "./Home.css";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);
  console.log("auth :", auth);

  let Doc = location?.state?.languages;
  let Aoc = location?.state?.accept;

  const [open, setOpen] = React.useState(false);

  const handleClose = (x, y) => {
    console.log("x:", x);
    if (x === 1) {
      if (y === "English") {
        navigate("/", { state: { languages: `${y}`, accept: true } });
        setOpen(false);
      } else if (y === "Thai") {
        navigate("/", { state: { languages: `${y}`, accept: true } });
        setOpen(false);
      } else if (y === "German") {
        navigate("/", { state: { languages: `${y}`, accept: true } });
        setOpen(false);
      } else {
        navigate("/", { state: { languages: `${y}`, accept: true } });
        setOpen(false);
      }
    } else {
      navigate("/", { state: { languages: `English`, accept: false } });
      setOpen(false);
    }
  };
  const check_cookei = () => {
    if (Aoc === true) {
      setOpen(false);
    } else if (Aoc === false) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  React.useEffect(() => {
    check_cookei();
  });

  const goSignup = (x) => {
    navigate("/Signup", { state: { languages: `${x}` } });
  };

  const goCustomer = (x) => {
    navigate("/Home/Services/Customer", { state: { languages: `${x}` } });
  };

  const goTranslator = (x) => {
    navigate("/Home/Services/Translator", { state: { languages: `${x}` } });
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
      {/* Modal cookei*/}
      {Doc === "English" ? (
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
              left: "16%",
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
            <Typography
              id="keep-mounted-modal-description"
              sx={{ mt: 2, fontWeight: 700 }}
            >
              {overviewEN[20].label}
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
              {overviewEN[8].label}
            </Typography>
            <div
              style={{
                textAlign: "left",
                borderTop: "1px solid #C4C4C4",
              }}
            ></div>

            <div style={{ marginTop: 10, textAlign: "left", float: "left" }}>
              <button
                style={{
                  height: 40,
                  background: " #034D82",
                  borderRadius: 5,
                  color: "#FFFFFF",
                  fontWeight: 700,
                  border: "none",
                  filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                }}
                onClick={() => handleClose(1, Doc)}
              >
                {overviewEN[9].label}
              </button>
            </div>
            <div style={{ marginTop: 10, textAlign: "right" }}>
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
                {overviewEN[10].label}
              </button>
            </div>
          </Box>
        </Modal>
      ) : Doc === "Thai" ? (
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
              left: "16%",
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
            <Typography
              id="keep-mounted-modal-description"
              sx={{ mt: 2, fontWeight: 700 }}
            >
              {overviewTH[20].label}
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
              {overviewTH[8].label}
            </Typography>
            <div
              style={{
                textAlign: "left",
                borderTop: "1px solid #C4C4C4",
              }}
            ></div>

            <div style={{ marginTop: 10, textAlign: "left", float: "left" }}>
              <button
                style={{
                  height: 40,
                  background: " #034D82",
                  borderRadius: 5,
                  color: "#FFFFFF",
                  fontWeight: 700,
                  border: "none",
                  filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                }}
                onClick={() => handleClose(1, Doc)}
              >
                {overviewTH[9].label}
              </button>
            </div>
            <div style={{ marginTop: 10, textAlign: "right" }}>
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
                {overviewTH[10].label}
              </button>
            </div>
          </Box>
        </Modal>
      ) : Doc === "German" ? (
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
              left: "16%",
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
            <Typography
              id="keep-mounted-modal-description"
              sx={{ mt: 2, fontWeight: 700 }}
            >
              {overviewDE[20].label}
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
              {overviewDE[8].label}
            </Typography>
            <div
              style={{
                textAlign: "left",
                borderTop: "1px solid #C4C4C4",
              }}
            ></div>

            <div style={{ marginTop: 10, textAlign: "left", float: "left" }}>
              <button
                style={{
                  height: 40,
                  background: " #034D82",
                  borderRadius: 5,
                  color: "#FFFFFF",
                  fontWeight: 700,
                  border: "none",
                  filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                }}
                onClick={() => handleClose(1, Doc)}
              >
                {overviewDE[9].label}
              </button>
            </div>
            <div style={{ marginTop: 10, textAlign: "right" }}>
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
                {overviewDE[10].label}
              </button>
            </div>
          </Box>
        </Modal>
      ) : (
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
              left: "16%",
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
            <Typography
              id="keep-mounted-modal-description"
              sx={{ mt: 2, fontWeight: 700 }}
            >
              {overviewEN[20].label}
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
              {overviewEN[8].label}
            </Typography>
            <div
              style={{
                textAlign: "left",
                borderTop: "1px solid #C4C4C4",
              }}
            ></div>

            <div style={{ marginTop: 10, textAlign: "left", float: "left" }}>
              <button
                style={{
                  height: 40,
                  background: " #034D82",
                  borderRadius: 5,
                  color: "#FFFFFF",
                  fontWeight: 700,
                  border: "none",
                  filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
                }}
                onClick={() => handleClose(1, Doc)}
              >
                {overviewEN[9].label}
              </button>
            </div>
            <div style={{ marginTop: 10, textAlign: "right" }}>
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
                {overviewEN[10].label}
              </button>
            </div>
          </Box>
        </Modal>
      )}

      {Doc === undefined ? (
        <>
          <div>
            <div className="boxleft_overviwe">
              <p className="textHeading1_overviwe">{overviewEN[5].label}</p>
              <p className="textDescription1_overviwe">{overviewEN[6].label}</p>
              <div className="boxleftbutton_overviwe">
                <button
                  className="buttonGetStart_overviwe "
                  onClick={() => goSignup("English")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewEN[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div className="boxBlue_overviwe" />
            <div className="boxYellow_overviwe" />
            <div className="boxImg1_overviwe">
              <img
                src={Online_document}
                alt="Online_document"
                className="img1_overviwe"
              />
            </div>
          </div>

          <div className="box2_overviwe">
            <p className="textHeading2_overviwe">{overviewEN[11].label}</p>
            <div className="Content">
              <div className="ContentBox2_1_overviwe">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Documents}
                    alt="Documents"
                    className="ContentBox2Img_overviwe"
                  />
                </div>
                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[12].label}
                </p>
              </div>

              <div className="ContentBox2_1_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Translator}
                    alt="Translator"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[13].label}
                </p>
              </div>

              <div className="ContentBox2_1_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Selecting_team}
                    alt="Selecting_team"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[14].label}
                </p>
              </div>
            </div>
          </div>

          <div className="box3_overviwe">
            <div className="ContentBox3_1_overviwe ">
              <p className="textHeading3_1_overviwe ">{overviewEN[15].label}</p>

              <p className="textDescription2_1_overviwe ">
                {overviewEN[16].label}
              </p>

              <button
                className="textLink1_overviwe "
                onClick={() => goCustomer("English")}
              >
                <p
                  style={{
                    color: "#0865A8",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewEN[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="ContentBox3_2_overviwe ">
              <p className="textHeading3_2_overviwe ">
                {" "}
                {overviewEN[18].label}
              </p>

              <p className="textDescription2_2_overviwe ">
                {overviewEN[19].label}
              </p>

              <button
                className="textLink2_overviwe "
                onClick={() => goTranslator("English")}
              >
                <p
                  style={{
                    color: "#FFC100",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewEN[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="box4_overviwe ">
              <p className="textHeading4_overviwe ">{overviewEN[5].label}</p>

              <p className="textDescription3_overviwe ">
                {overviewEN[6].label}
              </p>

              <div className="boxButtonLink_overviwe ">
                <button
                  className="buttonGetStart_overviwe "
                  style={{ display: "inline-flex", width: 200, marginTop: 20 }}
                  onClick={() => goSignup("English")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewEN[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div>
              <Footer v="English" a={Aoc} />
            </div>
          </div>
        </>
      ) : Doc === "German" ? (
        <>
          <div>
            <div className="boxleft_overviwe">
              <p className="textHeading1_overviwe">{overviewDE[5].label}</p>
              <p className="textDescription1_overviwe">{overviewDE[6].label}</p>
              <div className="boxleftbutton_overviwe">
                <button
                  className="buttonGetStart_overviwe "
                  onClick={() => goSignup("German")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewDE[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div className="boxBlue_overviwe" />
            <div className="boxYellow_overviwe" />
            <div className="boxImg1_overviwe">
              <img
                src={Online_document}
                alt="Online_document"
                className="img1_overviwe"
              />
            </div>
          </div>

          <div className="box2_overviwe">
            <p className="textHeading2_overviwe">{overviewDE[11].label}</p>
            <div className="Content">
              <div className="ContentBox2_1_overviwe">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Documents}
                    alt="Documents"
                    className="ContentBox2Img_overviwe"
                  />
                </div>
                <p className="textDescriptionBox2_overviwe ">
                  {overviewDE[12].label}
                </p>
              </div>

              <div className="ContentBox2_1_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Translator}
                    alt="Translator"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewDE[13].label}
                </p>
              </div>

              <div className="ContentBox2_1_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Selecting_team}
                    alt="Selecting_team"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewDE[14].label}
                </p>
              </div>
            </div>
          </div>

          <div className="box3_overviwe">
            <div className="ContentBox3_1_overviwe ">
              <p className="textHeading3_1_overviwe ">{overviewDE[15].label}</p>

              <p className="textDescription2_1_overviwe ">
                {overviewDE[16].label}
              </p>

              <button
                className="textLink1_overviwe"
                onClick={() => goCustomer("German")}
              >
                <p
                  style={{
                    color: "#0865A8",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewDE[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="ContentBox3_2_overviwe ">
              <p className="textHeading3_2_overviwe ">
                {" "}
                {overviewDE[18].label}
              </p>

              <p className="textDescription2_2_overviwe ">
                {overviewDE[19].label}
              </p>

              <button
                className="textLink2_overviwe "
                onClick={() => goTranslator("German")}
              >
                <p
                  style={{
                    color: "#FFC100",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewDE[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="box4_overviwe ">
              <p className="textHeading4_overviwe ">{overviewDE[5].label}</p>

              <p className="textDescription3_overviwe ">
                {overviewDE[6].label}
              </p>

              <div className="boxButtonLink_overviwe ">
                <button
                  className="buttonGetStart_overviwe "
                  style={{ display: "inline-flex", width: 200, marginTop: 20 }}
                  onClick={() => goSignup("German")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewDE[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div>
              <Footer v="German" a={Aoc} />
            </div>
          </div>
        </>
      ) : Doc === "Thai" ? (
        <>
          <div>
            <div className="boxleft_overviwe">
              <p className="textHeading1_overviwe">{overviewTH[5].label}</p>
              <p className="textDescription1_overviwe">{overviewTH[6].label}</p>
              <div className="boxleftbutton_overviwe">
                <button
                  className="buttonGetStart_overviwe "
                  onClick={() => goSignup("Thai")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewTH[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div className="boxBlue_overviwe" />
            <div className="boxYellow_overviwe" />
            <div className="boxImg1_overviwe">
              <img
                src={Online_document}
                alt="Online_document"
                className="img1_overviwe"
              />
            </div>
          </div>

          <div className="box2_overviwe">
            <p className="textHeading2_overviwe">{overviewTH[11].label}</p>
            <div className="Content">
              <div className="ContentBox2_1_overviwe">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Documents}
                    alt="Documents"
                    className="ContentBox2Img_overviwe"
                  />
                </div>
                <p className="textDescriptionBox2_overviwe ">
                  {overviewTH[12].label}
                </p>
              </div>

              <div className="ContentBox2_1_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Translator}
                    alt="Translator"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewTH[13].label}
                </p>
              </div>

              <div className="ContentBox2_1_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Selecting_team}
                    alt="Selecting_team"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewTH[14].label}
                </p>
              </div>
            </div>
          </div>

          <div className="box3_overviwe">
            <div className="ContentBox3_1_overviwe ">
              <p className="textHeading3_1_overviwe ">{overviewTH[15].label}</p>

              <p className="textDescription2_1_overviwe ">
                {overviewTH[16].label}
              </p>

              <button
                className="textLink1_overviwe"
                onClick={() => goCustomer("Thai")}
              >
                <p
                  style={{
                    color: "#0865A8",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewTH[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="ContentBox3_2_overviwe ">
              <p className="textHeading3_2_overviwe ">
                {" "}
                {overviewTH[18].label}
              </p>

              <p className="textDescription2_2_overviwe ">
                {overviewTH[19].label}
              </p>

              <button
                className="textLink2_overviwe "
                onClick={() => goTranslator("Thai")}
              >
                <p
                  style={{
                    color: "#FFC100",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewTH[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="box4_overviwe ">
              <p className="textHeading4_overviwe ">{overviewTH[5].label}</p>

              <p className="textDescription3_overviwe ">
                {overviewTH[6].label}
              </p>

              <div className="boxButtonLink_overviwe ">
                <button
                  className="buttonGetStart_overviwe "
                  style={{ display: "inline-flex", width: 200, marginTop: 20 }}
                  onClick={() => goSignup("Thai")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewTH[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div>
              <Footer v="Thai" a={Aoc} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="boxleft_overviwe">
              <p className="textHeading1_overviwe">{overviewEN[5].label}</p>
              <p className="textDescription1_overviwe">{overviewEN[6].label}</p>
              <div className="boxleftbutton_overviwe">
                <button
                  className="buttonGetStart_overviwe "
                  onClick={() => goSignup("English")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      lineHeight: 21,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewEN[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div className="boxBlue_overviwe" />
            <div className="boxYellow_overviwe" />
            <div className="boxImg1_overviwe">
              <img
                src={Online_document}
                alt="Online_document"
                className="img1_overviwe"
              />
            </div>
          </div>

          <div className="box2_overviwe">
            <p className="textHeading2_overviwe">{overviewEN[11].label}</p>

            <div className="Content">
              <div className="ContentBox2_1_overviwe">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Documents}
                    alt="Documents"
                    className="ContentBox2Img_overviwe"
                  />
                </div>
                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[12].label}
                </p>
              </div>

              <div className="ContentBox2_1_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Translator}
                    alt="Translator"
                    className="ContentBox2Img_overviwe "
                  />
                </div>

                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[13].label}
                </p>
              </div>

              <div className="ContentBox2_1_overviwe ">
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <img
                    src={Selecting_team}
                    alt="Selecting_team"
                    className="ContentBox2Img_overviwe "
                  />
                </div>
                <p className="textDescriptionBox2_overviwe ">
                  {overviewEN[14].label}
                </p>
              </div>
            </div>
          </div>

          <div className="box3_overviwe">
            <div className="ContentBox3_1_overviwe ">
              <p className="textHeading3_1_overviwe ">{overviewEN[15].label}</p>

              <p className="textDescription2_1_overviwe ">
                {overviewEN[16].label}
              </p>

              <button
                className="textLink1_overviwe"
                onClick={() => goCustomer("English")}
              >
                <p
                  style={{
                    color: "#0865A8",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewEN[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="ContentBox3_2_overviwe ">
              <p className="textHeading3_2_overviwe ">
                {" "}
                {overviewEN[18].label}
              </p>

              <p className="textDescription2_2_overviwe ">
                {overviewEN[19].label}
              </p>

              <button
                className="textLink2_overviwe "
                onClick={() => goTranslator("English")}
              >
                <p
                  style={{
                    color: "#FFC100",
                    float: "left",
                    textDecorationLine: "underline",
                  }}
                >
                  {overviewEN[17].label}
                </p>
                <BsArrowRightShort />
              </button>
            </div>

            <div className="box4_overviwe ">
              <p className="textHeading4_overviwe ">{overviewEN[5].label}</p>

              <p className="textDescription3_overviwe ">
                {overviewEN[6].label}
              </p>

              <div className="boxButtonLink_overviwe ">
                <button
                  className="buttonGetStart_overviwe "
                  style={{ display: "inline-flex", width: 200, marginTop: 20 }}
                  onClick={() => goSignup("English")}
                >
                  <p
                    style={{
                      color: "#FFFF",
                      fontSize: 18,
                      textDecorationLine: "none",
                    }}
                  >
                    {overviewEN[7].label}
                  </p>
                </button>
              </div>
            </div>

            <div>
              <Footer v="English" a={Aoc} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Home;
