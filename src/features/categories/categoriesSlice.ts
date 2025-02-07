import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface Category {
  id: string;
  name: string;
}

const initialState: Category[] = [
  { id: "cat-1", name: "Смартфоны" },
  { id: "cat-2", name: "Ноутбуки" },
  { id: "cat-3", name: "Аудиотехника" },
  { id: "cat-4", name: "Носимые устройства" },
  { id: "cat-5", name: "Планшеты" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      state.push({
        id: nanoid(),
        name: action.payload,
      });
    },

    updateCategory: (state, action: PayloadAction<Category>) => {
      const { id, name } = action.payload;
      const index = state.findIndex((cat) => cat.id === id);
      if (index !== -1) {
        state[index].name = name;
      }
    },

    removeCategory: (state, action: PayloadAction<string>) => {
      return state.filter((cat) => cat.id !== action.payload);
    },
  },
});

export const { addCategory, updateCategory, removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
