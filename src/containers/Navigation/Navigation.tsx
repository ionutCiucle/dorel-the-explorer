import { useEffect } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import SideNavigation from "../../components/SideNavigation";
import { useAppSelector, useAppDispatch } from "../../state-management/hooks";
import { fetchAllNavigationItems } from "../../state-management/item-explorer/thunks";
import {
  openFolder,
  closeFolder,
} from "../../state-management/item-explorer/navigationSlice";
import { ItemType } from "../../enums";
import { Item } from "../../types";
import "./Navigation.scss";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const navigationItems = useAppSelector((state) => state.navigation.items);
  const loadingNavigationItems = useAppSelector(
    (state) => state.navigation.loading
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
    <div className="dtx__navigation">
      <SideNavigation
        items={navigationItems}
        onClickNavigationItem={handleNavigationItemClick}
        loading={loadingNavigationItems}
      />
      <aside></aside>
    </div>
  );
};
