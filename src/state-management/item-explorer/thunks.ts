import { createAsyncThunk } from "@reduxjs/toolkit";
import { navItems } from "../../mockData";
import { Item } from "../../types";

export const fetchNavigationItems = createAsyncThunk(
  "navigationItems/fetchNavigationItems",
  () => Promise.resolve(navItems)
  // new Promise((resolve) => {
  //   setTimeout(() => resolve(navItems), 300);
  // })
);
