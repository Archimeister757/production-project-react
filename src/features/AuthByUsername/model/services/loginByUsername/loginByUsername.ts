import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  password: string;
  username: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps>(
  "login/loginByUsername",
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>(
        "http://localhost:8000/login",
        authData,
      );

      if (!response.data) {
        throw new Error("no data response");
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data),
      );
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error");
    }
  },
);
