import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
  group: string;
  avatar: string;
}

const initialState: UserState = {
  name: "Иван Иванов",
  email: "ivan@example.com",
  group: "Студент",
  avatar: "https://placekitten.com/150/150",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
});

export default userSlice.reducer;
