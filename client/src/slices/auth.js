import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { url, setHeaders } from "./api";

const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  type: "",
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        mobilePhone: values.mobilePhone,
        address: values.address,
        district: values.district,
        province: values.province,
        country: values.country,
        postalCode: values.postalCode,
        bankname: values.bankname,
        branchname: values.branchname,
        accountname: values.accountname,
        accountnumber: values.accountnumber,
        watermark: values.watermark,
        certificate: values.certificate,
        languages: values.languages,
        idcard: values.idcard,
        education: values.education,
        portfolio: values.portfolio,
        documents: values.documents,
        answer: values.answer,
        question: values.question,
        type: values.type,
      });

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, { rejectWithValue }) => {
    console.log("values :", values);
    try {
      const token = await axios.post(`${url}/login`, {
        email: values.email,
        password: values.password,
        // type: values.type,
      });

      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const token = await axios.get(`${url}/user/${id}`, setHeaders());

      localStorage.setItem("token", token.data);

      return token.data;
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateOrder = createAsyncThunk(
  "auth/updateOrder",
  async (values, { rejectWithValue }) => {
    try {
      // console.log("id:", id);
      console.log("values", values?.id);
      const token = await axios.patch(`${url}/updateOrder/${values?.id}`, {
        Date: values.Date,
        Translator_name: values.Translator_name,
        Customer_name: values.Customer_name,
        Job_description: values.Job_description,
        Customers_will_get: values.Customers_will_get,
        Deadline: values.Deadline,
        Number_of_edits: values.Number_of_edits,
        Price: values.Price,
        Order_type: values.Order_type,
        Status: values.Status,
        Send_to: values.Send_to,
        Review: values.Review,
      });
      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const createOrder = createAsyncThunk(
  "auth/createOrder",
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/createOrder`, {
        Date: values.Date,
        Translator_name: values.Translator_name,
        Customer_name: values.Customer_name,
        Job_description: values.Job_description,
        Customers_will_get: values.Customers_will_get,
        Deadline: values.Deadline,
        Number_of_edits: values.Number_of_edits,
        Price: values.Price,
        Order_type: values.Order_type,
        Status: values.Status,
        Send_to: values.Send_to,
        Review: values.Review,
      });
      return token.data;
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

// export const getOrder = async (values) => {
//   console.log("values:", values);
//   try {
//     const token = await axios.get(`${url}/getOrder`, {
//       params: { Translator_name: values.Translator_name },
//     });
//     await console.log(token?.data);
//     return token.data;
//     // setDataOrder(token?.data);
//   } catch (error) {
//     if (error.response && error.response.status === 404) {
//       throw new Error("Translator not found");
//     } else if (error.response && error.response.status === 500) {
//       throw new Error("Internal server error");
//     } else if (error.response && error.response.status === 400) {
//       throw new Error("Bad request");
//     } else {
//       throw new Error("Something went wrong");
//     }
//     // return rejectWithValue(error.response.data);
//     // console.log(error.response);
//   }
// };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          type: user.type,
          userLoaded: true,
        };
      } else return { ...state, userLoaded: true };
    },

    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        type: "",
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          type: user.type,
          registerStatus: "success",
        };
      } else return state;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });

    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          type: user.type,
          loginStatus: "success",
        };
      } else return state;
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });

    builder.addCase(getUser.pending, (state, action) => {
      return {
        ...state,
        getUserStatus: "pending",
      };
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          _id: user._id,
          type: user.type,
          getUserStatus: "success",
        };
      } else return state;
    });

    builder.addCase(getUser.rejected, (state, action) => {
      return {
        ...state,
        getUserStatus: "rejected",
        getUserError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
