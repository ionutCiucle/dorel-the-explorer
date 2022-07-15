import React, { useEffect } from "react";
import ObjectDetail from "../ObjectDetail";
// import NavigationTree from "../../components/SideNavigation/NavigationTree";
import SideNavigation from "../../components/SideNavigation";
import { useAppDispatch } from "../../state-management/hooks";
import { fetchAllNavigationItems } from "../../state-management/item-explorer/thunks";
import {
  openFolder,
  closeFolder,
} from "../../state-management/item-explorer/navigationItemsSlice";
import { useAppSelector } from "../../state-management/hooks";
import { Item } from "../../types";
import { ItemType } from "../../enums";
import { AnyAction } from "@reduxjs/toolkit";
import "./AppContainer.scss";

export const AppContainer = () => {
  const dispatch = useAppDispatch();
  const navigationItems = useAppSelector(
    (state) => state.navigationItems.items
  );

  useEffect(() => {
    dispatch(fetchAllNavigationItems() as unknown as AnyAction);
  }, [dispatch]);

  const handleNavigationItemClick = ({ id, open, type }: Item) => {
    const folderAction = open ? closeFolder : openFolder;

    if (type === ItemType.Folder) {
      dispatch(folderAction(id));
    }
  };

  return (
    <div className="dtx__app-container">
      <header>Welcome to Dorel's File Exploring App!</header>
      <section className="dtx__app-container__body">
        <SideNavigation
          items={navigationItems}
          title="Basket explorer"
          onClickNavigationItem={handleNavigationItemClick}
          loading
        />
        <aside>
          <ObjectDetail />
        </aside>
      </section>
    </div>
  );
};

export default AppContainer;
