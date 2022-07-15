import { createAsyncThunk } from "@reduxjs/toolkit";
import { navItems } from "../../mockData";
import { mockFetch } from "../../utils";
import { fetchNavigationItemMock } from "./utils";

export const fetchNavigationItems = createAsyncThunk(
  "navigationItems/fetchNavigationItems",
  () => mockFetch(navItems)
);

export const fetchNavigationItem = createAsyncThunk(
  "navigationItems/fetchNavigationItem",
  (id: string) => {
    const item = fetchNavigationItemMock(id, navItems);

    return mockFetch(item);
  }
);
