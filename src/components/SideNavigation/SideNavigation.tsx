import React from "react";
import NavigationTree from "./NavigationTree";
import SkeletonLoader from "./SkeletonLoader";
import { Item } from "../../types";
import "./SideNavigation.scss";

export type Props = {
  loading: boolean;
  items: Item[];
  onClickNavigationItem: (item: Item) => void;
};

const SideNavigation = ({ loading, items, onClickNavigationItem }: Props) => {
  return (
    <nav className="dtx__side-navigation">
      {loading ? (
        <SkeletonLoader />
      ) : (
        <NavigationTree items={items} onClickItem={onClickNavigationItem} />
      )}
    </nav>
  );
};

export default SideNavigation;
