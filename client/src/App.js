import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadUser } from "./slices/auth";
import "./App.css";

import Matching from "./Components/Matching/Matching";
import Freelance from "./Components/Dashboard/Dashboard_freelance";
import Home from "./Components/Home/Home.js";
import Customer from "./Components/Home/Customer";
import Translator from "./Components/Home/Translator";
import Home2 from "./Components/Home/Home2.js";
import Login from "./Components/Login/Login";
import ForgetPassword from "./Components/Login/ForgetPassword";
import CreateNewPassword from "./Components/Login/CreateNewPassword";
import Signup from "./Components/Sign_up/Signup";
import Chat from "./Components/Chat/ChatCustomer";
import Chats from "./Components/Chat/ChatTansalat";
import Order from "./Components/Order/Order";
import Notification from "./Components/Notification/NotificaionCustomer";
import Tool from "./Components/Tool/Tool";

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadUser(null));
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <div className="App-body">
            <StyledEngineProvider injectFirst>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home/Order/Customer" element={<Customer />} />
                <Route path="/Notification" element={<Notification />} />
                <Route path="/Matching" element={<Matching />} />
                <Route
                  path="/Home/Services/Translator"
                  element={<Translator />}
                />
                <Route path="/Login" element={<Login />} />
                <Route path="/ForgetPassword" element={<ForgetPassword />} />
                <Route
                  path="/CreateNewPassword"
                  element={<CreateNewPassword />}
                />
                <Route path="/Signup" element={<Signup />} />

                <Route path="/In" element={<Home2 />} />
                <Route path="/Order" element={<Order />} />
                <Route path="/Dashboard_freelance" element={<Freelance />} />
                <Route path="/Tool" element={<Tool />} />
                <Route path="/Chat" element={<Chat />} />
                <Route path="/Chats" element={<Chats />} />
              </Routes>
            </StyledEngineProvider>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
