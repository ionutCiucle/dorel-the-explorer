import { createAsyncThunk } from "@reduxjs/toolkit";
import { navItems } from "../../mockData";
import { mockFetch } from "../../utils";

export const fetchNavigationItems = createAsyncThunk(
  "navigationItems/fetchNavigationItems",
  () => mockFetch(navItems)
);
