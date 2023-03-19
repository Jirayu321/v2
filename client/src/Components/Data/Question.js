import React, { useState, useEffect } from "react";

import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

import {
  itemDataEng,
  itemDataThai,
  itemDataGerman,
  itemDatasum,
  itemDataEngandGerman,
  itemDataEngandThai,
  itemDataGermanandThai,
} from "./data";

const Question = (props) => {
  const [test, setTest] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const { innerWidth: width } = window;
  console.log("h", props);
  const i = props?.x?.length;
  const j = props?.x;

  const testA = () => {
    const testQ = (i, j) => {
      if (i === 3) {
        setTest("");
      } else if (i === 2) {
        const x2 = j?.includes("German");
        const x = j?.includes("English");
        if (x2 === true) {
          const x = j?.includes("Thai");
          const x2 = j?.includes("English");
          if (x === true) {
            console.log("German , Thai ");
            setTest(3);
          } else if (x2 === true) {
            console.log("German , English ");
            setTest(1);
          }
        } else if (x === true) {
          const x = j?.includes("Thai");
          const x2 = j?.includes("German");
          if (x2 === true) {
            console.log("English , German ");
            setTest(1);
          } else if (x === true) {
            console.log("English , Thai ");
            setTest(2);
          }
        }
      } else if (i === 1) {
        const x = j?.includes("English");
        const x1 = j?.includes("German");
        const x2 = j?.includes("Thai");
        if (x === true) {
          setTest(4);
        } else if (x1 === true) {
          setTest(5);
        } else if (x2 === true) {
          setTest(6);
        }
      }
    };
    testQ(i, j);
  };

  useEffect(() => {
    testA();
  });

  const handleChange = (event) => {
    setTextarea2(event.target.value);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <div>
        <text>Question</text>
      </div>

      {test === "" ? (
        <div style={{ position: "relative", left: 60, top: 10 }}>
          <text style={{ color: "#242424", fontSize: 15 }}>
            Select at least one to translate
          </text>
          <ImageList sx={{ width: 550, height: 350 }}>
            {itemDatasum.map((item) => (
              <ImageListItem key={item?.img} style={{ height: 175 }}>
                <img
                  src={`${item?.img}`}
                  srcSet={`${item?.img}`}
                  alt={`${item?.title}`}
                  style={{ height: 175 }}
                />
                <ImageListItemBar
                  title={item?.title}
                  subtitle={item?.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.title}`}
                    ></IconButton>
                  }
                  style={{}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : test === 1 ? (
        <div style={{ position: "relative", left: 60, top: 10 }}>
          <text style={{ color: "#242424", fontSize: 15 }}>
            Select at least one to translate
          </text>
          <ImageList sx={{ width: 550, height: 350 }}>
            {itemDataEngandGerman.map((item) => (
              <ImageListItem key={item?.img} style={{ height: 175 }}>
                <img
                  src={`${item?.img}`}
                  srcSet={`${item?.img}`}
                  alt={`${item?.title}`}
                  style={{ height: 175 }}
                />
                <ImageListItemBar
                  title={item?.title}
                  subtitle={item?.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.title}`}
                    ></IconButton>
                  }
                  style={{}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : test === 2 ? (
        <div style={{ position: "relative", left: 60, top: 10 }}>
          <text style={{ color: "#242424", fontSize: 15 }}>
            Select at least one to translate
          </text>
          <ImageList sx={{ width: 550, height: 350 }}>
            {itemDataEngandThai.map((item) => (
              <ImageListItem key={item?.img} style={{ height: 175 }}>
                <img
                  src={`${item?.img}`}
                  srcSet={`${item?.img}`}
                  alt={`${item?.title}`}
                  style={{ height: 175 }}
                />
                <ImageListItemBar
                  title={item?.title}
                  subtitle={item?.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.title}`}
                    ></IconButton>
                  }
                  style={{}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : test === 3 ? (
        <div style={{ position: "relative", left: 60, top: 10 }}>
          <text style={{ color: "#242424", fontSize: 15 }}>
            Select at least one to translate
          </text>
          <ImageList sx={{ width: 550, height: 350 }}>
            {itemDataGermanandThai.map((item) => (
              <ImageListItem key={item?.img} style={{ height: 175 }}>
                <img
                  src={`${item?.img}`}
                  srcSet={`${item?.img}`}
                  alt={`${item?.title}`}
                  style={{ height: 175 }}
                />
                <ImageListItemBar
                  title={item?.title}
                  subtitle={item?.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.title}`}
                    ></IconButton>
                  }
                  style={{}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : test === 4 ? (
        <div style={{ position: "relative", left: 60, top: 10 }}>
          <text style={{ color: "#242424", fontSize: 15 }}>
            Select at least one to translate
          </text>
          <ImageList sx={{ width: 550, height: 350 }}>
            {itemDataEng.map((item) => (
              <ImageListItem key={item?.img} style={{ height: 175 }}>
                <img
                  src={`${item?.img}`}
                  srcSet={`${item?.img}`}
                  alt={`${item?.title}`}
                  style={{ height: 175 }}
                />
                <ImageListItemBar
                  title={item?.title}
                  subtitle={item?.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.title}`}
                    ></IconButton>
                  }
                  style={{}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : test === 5 ? (
        <div style={{ position: "relative", left: 60, top: 10 }}>
          <text style={{ color: "#242424", fontSize: 15 }}>
            Select at least one to translate
          </text>
          <ImageList sx={{ width: 550, height: 350 }}>
            {itemDataGerman.map((item) => (
              <ImageListItem key={item?.img} style={{ height: 175 }}>
                <img
                  src={`${item?.img}`}
                  srcSet={`${item?.img}`}
                  alt={`${item?.title}`}
                  style={{ height: 175 }}
                />
                <ImageListItemBar
                  title={item?.title}
                  subtitle={item?.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.title}`}
                    ></IconButton>
                  }
                  style={{}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : test === 6 ? (
        <div style={{ position: "relative", left: 60, top: 10 }}>
          <text style={{ color: "#242424", fontSize: 15 }}>
            Select at least one to translate
          </text>
          <ImageList sx={{ width: 550, height: 350 }}>
            {itemDataThai.map((item) => (
              <ImageListItem key={item?.img} style={{ height: 175 }}>
                <img
                  src={`${item?.img}`}
                  srcSet={`${item?.img}`}
                  alt={`${item?.title}`}
                  style={{ height: 175 }}
                />
                <ImageListItemBar
                  title={item?.title}
                  subtitle={item?.author}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${item?.title}`}
                    ></IconButton>
                  }
                  style={{}}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : null}
      <br />
      <text>Answer</text>
      <br />
      <textarea
        value={textarea2}
        onChange={handleChange}
        style={{
          position: "absolute",
          width: 660,
          height: 243,
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          boxSizing: "border-box",
          paddingLeft: 15,
          padding: 15,
          marginTop: 10,
          borderRadius: 30,
        }}
      />
      <button
        style={{
          width: width * 0.45,
          borderRadius: 20,
          background: "#034D82",
          height: 40,

          fontSize: 18,
          borderColor: "transparent",
          position: "absolute",
          top: 850,
        }}
      >
        <a
          href="/Dashboard_freelance"
          style={{ color: "#FFF0C1", textDecoration: "none" }}
        >
          Submit
        </a>
      </button>
    </div>
  );
};
export default Question;
