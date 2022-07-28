import { createAsyncThunk } from "@reduxjs/toolkit";
import { navItems } from "../../mockData";
import { mockFetch } from "../../utils";
import { fetchNavigationItemMock } from "./utils";

export const fetchAllNavigationItems = createAsyncThunk(
  "navigation/fetchAllNavigationItems",
  () => mockFetch(navItems)
);

export const fetchNavigationItem = createAsyncThunk(
  "navigation/fetchNavigationItem",
  (id: string) => {
    const item = fetchNavigationItemMock(id, navItems);

    return mockFetch(item);
  }
);
