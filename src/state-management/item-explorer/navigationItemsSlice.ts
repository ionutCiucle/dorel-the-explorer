import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateTreeItem } from "./utils";
import { fetchNavigationItems } from "./thunks";
import { Item } from "../../types";

interface NavigationItemsState {
  items: Item[];
  selectedItem: Item | null;
  loading: boolean;
}

const initialState: NavigationItemsState = {
  items: [],
  selectedItem: null,
  loading: false,
};

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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNavigationItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchNavigationItems.fulfilled,
        (state, action: PayloadAction<Item[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchNavigationItems.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { openFolder, closeFolder } = navigationItemsSlice.actions;

export default navigationItemsSlice.reducer;
