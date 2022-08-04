import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TabItem } from "../../types";

interface TabState {
  tabs: TabItem[];
  selectedTabId: string;
}

const initialState: TabState = {
  tabs: [
    { id: "1111", name: "Some file" },
    { id: "222", name: "Some other file", active: true },
  ],
  selectedTabId: "",
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    addTab(state, action: PayloadAction<TabItem>) {
      state.tabs.push(action.payload);
    },
    removeTab(state, action: PayloadAction<string>) {
      state.tabs = state.tabs.filter((tab) => tab.id !== action.payload);
    },
  },
});

export default tabSlice.reducer;
