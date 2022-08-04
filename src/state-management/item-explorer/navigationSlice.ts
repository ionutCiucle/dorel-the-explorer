import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateTreeItem } from "../utils/updateTreeItem";
import { fetchAllNavigationItems } from "./thunks";
import { selectTab } from "./actions";
import { Item } from "../../types";

interface NavigationState {
  items: Item[];
  selectedItem: Item | null;
  loading: boolean;
}

const initialState: NavigationState = {
  items: [],
  selectedItem: null,
  loading: false,
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    openFolder: (state, action: PayloadAction<string>) => {
      updateTreeItem(state.items, action.payload, (item) => {
        item.open = true;
      });
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
      .addCase(fetchAllNavigationItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchAllNavigationItems.fulfilled,
        (state, action: PayloadAction<Item[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchAllNavigationItems.rejected, (state) => {
        state.loading = false;
      })
      .addCase(selectTab, (state, action: PayloadAction<string>) => {
        updateTreeItem(
          state.items,
          action.payload,
          (selectedTabItem, parents) => {
            selectedTabItem.open = true;
            parents.forEach((parent) => (parent.open = true));
          }
        );
      });
  },
});

export const { openFolder, closeFolder } = navigationSlice.actions;

export default navigationSlice.reducer;
