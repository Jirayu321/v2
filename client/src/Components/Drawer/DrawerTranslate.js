import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  Box,
  Drawer,
  Toolbar,
  List,
} from "@mui/material";
import {
  IoChatbubblesSharp,
  //  IoNotifications
} from "react-icons/io5";
import { BsTranslate } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function DrawerTranslate(props) {
  const pathname = window.location.pathname;
  const drawerWidth = 100;
  const navigate = useNavigate();
  const checkValue = props?.value;
  const languages = props?.languages;

  // const goLogin = () => {
  //   navigate("/Login");
  // };
  // const checklogin = () => {
  //   if (checkValue) {
  //     console.log("value :", checkValue);
  //   } else {
  //     goLogin();
  //   }
  // };
  // React.useEffect(() => {
  //   checklogin();
  // });

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      style={{ zIndex: 0, height: "100%" }}
    >
      <Toolbar />
      <Box sx={{ overflow: "hidden" }} className={"manuTranslate"}>
        {pathname === "/Dashboard_freelance" ? (
          <List>
            {["0", "1", "2", "3"].map((text, index) => (
              <ListItem button key={text} id={"button_manu_Translate"}>
                {index === 0 ? (
                  <ListItemIcon id={"icons_translate2"}>
                    <MdSpaceDashboard
                      style={{ fontSize: 30 }}
                      className="icons"
                      onClick={() =>
                        navigate("/Dashboard_freelance", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : index === 1 ? (
                  <ListItemIcon id={"icons_translate"}>
                    <BsTranslate
                      className="icons"
                      onClick={() =>
                        navigate("/Tool", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : index === 2 ? (
                  <ListItemIcon id={"icons_translate"}>
                    <IoChatbubblesSharp
                      className="icons"
                      onClick={() =>
                        navigate("/Chats", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : // : index === 3 ? (
                //   <ListItemIcon id={"icons_translate"}>
                //     <IoNotifications
                //       className="icons"
                //       // onClick={() => navigate("/Notification")}
                //     />
                //   </ListItemIcon>
                // )
                null}
              </ListItem>
            ))}
          </List>
        ) : pathname === "/Tool" ? (
          <List>
            {["0", "1", "2", "3"].map((text, index) => (
              <ListItem button key={text} id={"button_manu_Translate"}>
                {index === 0 ? (
                  <ListItemIcon id={"icons_translate"}>
                    <MdSpaceDashboard
                      style={{ fontSize: 30 }}
                      className="icons"
                      onClick={() =>
                        navigate("/Dashboard_freelance", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : index === 1 ? (
                  <ListItemIcon id={"icons_translate2"}>
                    <BsTranslate
                      className="icons"
                      onClick={() =>
                        navigate("/Tool", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : index === 2 ? (
                  <ListItemIcon id={"icons_translate"}>
                    <IoChatbubblesSharp
                      className="icons"
                      onClick={() =>
                        navigate("/Chats", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : // :index === 3 ? (
                //   <ListItemIcon id={"icons_translate"}>
                //     <IoNotifications
                //       className="icons"
                //       // onClick={() => navigate("/Notification")}
                //     />
                //   </ListItemIcon>
                // )
                null}
              </ListItem>
            ))}
          </List>
        ) : (
          <List>
            {["0", "1", "2", "3"].map((text, index) => (
              <ListItem button key={text} id={"button_manu_Translate"}>
                {index === 0 ? (
                  <ListItemIcon id={"icons_translate"}>
                    <MdSpaceDashboard
                      style={{ fontSize: 30 }}
                      className="icons"
                      onClick={() =>
                        navigate("/Dashboard_freelance", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : index === 1 ? (
                  <ListItemIcon id={"icons_translate"}>
                    <BsTranslate
                      className="icons"
                      onClick={() =>
                        navigate("/Tool", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : index === 2 ? (
                  <ListItemIcon id={"icons_translate2"}>
                    <IoChatbubblesSharp
                      className="icons"
                      onClick={() =>
                        navigate("/Chats", {
                          state: {
                            languages: `${languages}`,
                            value: `${checkValue}`,
                          },
                        })
                      }
                    />
                  </ListItemIcon>
                ) : // :index === 3 ? (
                //   <ListItemIcon id={"icons_translate"}>
                //     <IoNotifications
                //       className="icons"
                //       // onClick={() => navigate("/Notification")}
                //     />
                //   </ListItemIcon>
                // )
                null}
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Drawer>
  );
}
