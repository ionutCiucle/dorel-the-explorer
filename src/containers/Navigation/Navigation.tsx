import { useEffect } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import { useParams, useNavigate } from "react-router-dom";
import Tabs from "../../components/Tabs";
import ObjectDetail from "../../components/ObjectDetail";
import SideNavigation from "../../components/SideNavigation";
import { useAppSelector, useAppDispatch } from "../../state-management/hooks";
import { fetchAllNavigationItems } from "../../state-management/item-explorer/thunks";
import {
  addTab,
  removeTab,
} from "../../state-management/item-explorer/tabSlice";
import {
  openFolder,
  closeFolder,
} from "../../state-management/item-explorer/navigationSlice";
import { ItemType } from "../../enums";
import { Item } from "../../types";
import "./Navigation.scss";

export const Navigation = () => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const navigate = useNavigate();

  const navigationItems = useAppSelector((state) => state.navigation.items);
  const loadingNavigationItems = useAppSelector(
    (state) => state.navigation.loading
  );
  const tabItems = useAppSelector((state) => state.tab.tabs);

  useEffect(() => {
    dispatch(fetchAllNavigationItems() as unknown as AnyAction);
  }, [dispatch]);

  const handleNavigationItemClick = (clickedItem: Item) => {
    const { id, open, type } = clickedItem;
    const folderAction = open ? closeFolder : openFolder;

    if (type === ItemType.Folder) {
      dispatch(folderAction(id));
    }
    dispatch(addTab(clickedItem));

    navigate(`/${id}`);
  };

  const handleTabCloseButtonClick = (tabId: string) => {
    dispatch(removeTab(tabId));
  };

  return (
    <div className="dtx__navigation">
      <SideNavigation
        items={navigationItems}
        onClickNavigationItem={handleNavigationItemClick}
        loading={loadingNavigationItems}
      />
      <aside>
        <Tabs
          items={tabItems}
          activeItemId={itemId!}
          onTabCloseButtonClick={handleTabCloseButtonClick}
        />
        <ObjectDetail itemId={itemId!} />
      </aside>
    </div>
  );
};
