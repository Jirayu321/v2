import * as React from "react";
import {
  ListItem,
  ListItemIcon,
  Box,
  Drawer,
  Toolbar,
  List,
} from "@mui/material";
import { IoChatbubblesSharp, 
  // IoNotifications
 } from "react-icons/io5";
import { FaHome, FaLanguage, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DrawerInHome(props) {
  const pathname = window.location.pathname;
  const languages = props?.languages;
  const drawerWidth = 100;
  const navigate = useNavigate();
  console.log("languages:", languages);

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
      <Box sx={{ overflow: "hidden" }} className={"manu2"}>
        {pathname === "/In" ? (
          <List>
            {["0", "1", "2", "3", "4"].map((text, index) => (
              <ListItem button key={text} id={"button_manu"}>
                <>
                  {index === 0 ? (
                    <ListItemIcon id={"button_icons2"}>
                      <FaHome
                        className="icons"
                        onClick={() =>
                          navigate("/In", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 1 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaLanguage
                        className="icons"
                        onClick={() =>
                          navigate("/Matching", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 2 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() =>
                          navigate("/Order", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 3 ? (
                    <ListItemIcon id={"button_icons"}>
                      <IoChatbubblesSharp
                        className="icons"
                        onClick={() =>
                          navigate("/Chat", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : // : index === 4 ? (
                  //   <ListItemIcon id={"button_icons"}>
                  //     <IoNotifications
                  //       className="icons"
                  //       onClick={() =>
                  //         navigate("/Notification", {
                  //           state: {
                  //             languages: `${languages}`,
                  //             // value: `${checkValue}`,
                  //           },
                  //         })
                  //       }
                  //     />
                  //   </ListItemIcon>
                  // )
                  null}
                </>
              </ListItem>
            ))}
          </List>
        ) : pathname === "/Matching" ? (
          <List>
            {["0", "1", "2", "3", "4"].map((text, index) => (
              <ListItem button key={text} id={"button_manu"}>
                <>
                  {index === 0 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaHome
                        className="icons"
                        onClick={() =>
                          navigate("/In", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 1 ? (
                    <ListItemIcon id={"button_icons2"}>
                      <FaLanguage
                        className="icons"
                        onClick={() =>
                          navigate("/Matching", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 2 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() =>
                          navigate("/Order", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 3 ? (
                    <ListItemIcon id={"button_icons"}>
                      <IoChatbubblesSharp
                        className="icons"
                        onClick={() =>
                          navigate("/Chat", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : // : index === 4 ? (
                  //   <ListItemIcon id={"button_icons"}>
                  //     <IoNotifications
                  //       className="icons"
                  //       onClick={() =>
                  //         navigate("/Notification", {
                  //           state: {
                  //             languages: `${languages}`,
                  //             // value: `${checkValue}`,
                  //           },
                  //         })
                  //       }
                  //     />
                  //   </ListItemIcon>
                  // )
                  null}
                </>
              </ListItem>
            ))}
          </List>
        ) : pathname === "/Order" ? (
          <List>
            {["0", "1", "2", "3", "4"].map((text, index) => (
              <ListItem button key={text} id={"button_manu"}>
                <>
                  {index === 0 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaHome
                        className="icons"
                        onClick={() =>
                          navigate("/In", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 1 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaLanguage
                        className="icons"
                        onClick={() =>
                          navigate("/Matching", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 2 ? (
                    <ListItemIcon id={"button_icons2"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() =>
                          navigate("/Order", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 3 ? (
                    <ListItemIcon id={"button_icons"}>
                      <IoChatbubblesSharp
                        className="icons"
                        onClick={() =>
                          navigate("/Chat", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : // : index === 4 ? (
                  //   <ListItemIcon id={"button_icons"}>
                  //     <IoNotifications
                  //       className="icons"
                  //       onClick={() =>
                  //         navigate("/Notification", {
                  //           state: {
                  //             languages: `${languages}`,
                  //             // value: `${checkValue}`,
                  //           },
                  //         })
                  //       }
                  //     />
                  //   </ListItemIcon>
                  // )
                  null}
                </>
              </ListItem>
            ))}
          </List>
        ) : pathname === "/Chat" ? (
          <List>
            {["0", "1", "2", "3", "4"].map((text, index) => (
              <ListItem button key={text} id={"button_manu"}>
                <>
                  {index === 0 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaHome
                        className="icons"
                        onClick={() =>
                          navigate("/In", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 1 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaLanguage
                        className="icons"
                        onClick={() =>
                          navigate("/Matching", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 2 ? (
                    <ListItemIcon id={"button_icons"}>
                      <FaShoppingCart
                        className="icons"
                        onClick={() =>
                          navigate("/Order", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : index === 3 ? (
                    <ListItemIcon id={"button_icons2"}>
                      <IoChatbubblesSharp
                        className="icons"
                        onClick={() =>
                          navigate("/Chat", {
                            state: {
                              languages: `${languages}`,
                              // value: `${checkValue}`,
                            },
                          })
                        }
                      />
                    </ListItemIcon>
                  ) : // : index === 4 ? (
                  //   <ListItemIcon id={"button_icons"}>
                  //     <IoNotifications
                  //       className="icons"
                  //       onClick={() =>
                  //         navigate("/Notification", {
                  //           state: {
                  //             languages: `${languages}`,
                  //             // value: `${checkValue}`,
                  //           },
                  //         })
                  //       }
                  //     />
                  //   </ListItemIcon>
                  // )
                  null}
                </>
              </ListItem>
            ))}
          </List>
        ) : // : pathname === "/Notification" ? (
        //   <List>
        //     {["0", "1", "2", "3", "4"].map((text, index) => (
        //       <ListItem button key={text} id={"button_manu"}>
        //         <>
        //           {index === 0 ? (
        //             <ListItemIcon id={"button_icons"}>
        //               <FaHome
        //                 className="icons"
        //                 onClick={() =>
        //                   navigate("/In", {
        //                     state: {
        //                       languages: `${languages}`,
        //                       // value: `${checkValue}`,
        //                     },
        //                   })
        //                 }
        //               />
        //             </ListItemIcon>
        //           ) : index === 1 ? (
        //             <ListItemIcon id={"button_icons"}>
        //               <FaLanguage
        //                 className="icons"
        //                 onClick={() =>
        //                   navigate("/Matching", {
        //                     state: {
        //                       languages: `${languages}`,
        //                       // value: `${checkValue}`,
        //                     },
        //                   })
        //                 }
        //               />
        //             </ListItemIcon>
        //           ) : index === 2 ? (
        //             <ListItemIcon id={"button_icons"}>
        //               <FaShoppingCart
        //                 className="icons"
        //                 onClick={() =>
        //                   navigate("/Order", {
        //                     state: {
        //                       languages: `${languages}`,
        //                       // value: `${checkValue}`,
        //                     },
        //                   })
        //                 }
        //               />
        //             </ListItemIcon>
        //           ) : index === 3 ? (
        //             <ListItemIcon id={"button_icons"}>
        //               <IoChatbubblesSharp
        //                 className="icons"
        //                 onClick={() =>
        //                   navigate("/Chat", {
        //                     state: {
        //                       languages: `${languages}`,
        //                       // value: `${checkValue}`,
        //                     },
        //                   })
        //                 }
        //               />
        //             </ListItemIcon>
        //           ) : index === 4 ? (
        //             <ListItemIcon id={"button_icons2"}>
        //               <IoNotifications
        //                 className="icons"
        //                 onClick={() =>
        //                   navigate("/Notification", {
        //                     state: {
        //                       languages: `${languages}`,
        //                       // value: `${checkValue}`,
        //                     },
        //                   })
        //                 }
        //               />
        //             </ListItemIcon>
        //           ) : null}
        //         </>
        //       </ListItem>
        //     ))}
        //   </List>
        // )
        null}
      </Box>
    </Drawer>
  );
}
