import React from "react";
import NavigationTree from "./NavigationTree";
import SkeletonLoader from "./SkeletonLoader";
import { Item } from "../../types";
import styles from "./SideNavigation.module.scss";

export type Props = {
  loading: boolean;
  items: Item[];
  highlightedItemId?: string;
  onClickNavigationItem: (item: Item) => void;
};

const SideNavigation = ({
  loading,
  items,
  highlightedItemId,
  onClickNavigationItem,
}: Props) => {
  return (
    <nav className={styles.container}>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <NavigationTree
          items={items}
          highlightedItemId={highlightedItemId}
          onClickItem={onClickNavigationItem}
        />
      )}
    </nav>
  );
};

export default SideNavigation;
