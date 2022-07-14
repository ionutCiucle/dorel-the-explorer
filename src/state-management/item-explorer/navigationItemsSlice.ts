import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { navItems } from "../../mockData";
import { updateTreeItem } from "./utils";
import { Item } from "../../types";

interface NavigationItemsState {
  items: Item[];
  selectedItem: Item | null;
}

const initialState: NavigationItemsState = {
  items: [],
  selectedItem: null,
};

export const fetchNavigationItems = createAsyncThunk(
  "navigationItems/fetchNavigationItems",
  () =>
    new Promise((resolve) => {
      setTimeout(resolve, 300);
    })
);

export const navigationItemsSlice = createSlice({
  name: "navigationItems",
  initialState: initialState,
  reducers: {
    openFolder: (state, action: PayloadAction<string>) => {
      updateTreeItem(state.items, action.payload, (item) => (item.open = true));
    },
    closeFolder: (state, action: PayloadAction<string>) => {
      updateTreeItem(
        state.items,
        action.payload,
        (item) => (item.open = false)
      );
    },
    fetchNavigationItems: (state) => {
      setTimeout(() => (state.items = navItems), 300);
    },
  },
});

export const { openFolder, closeFolder } = navigationItemsSlice.actions;

export default navigationItemsSlice.reducer;
