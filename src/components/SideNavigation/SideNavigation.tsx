import NavigationTree from "./NavigationTree";
import SkeletonLoader from "./SkeletonLoader";
import { Item } from "../../types";
import styles from "./SideNavigation.module.scss";

export type Props = {
  className?: string;
  loading: boolean;
  items: Item[];
  highlightedItemId?: string;
  onClickNavigationItem: (item: Item) => void;
};

const SideNavigation = ({
  className = "",
  loading,
  items,
  highlightedItemId,
  onClickNavigationItem,
}: Props) => {
  return (
    <nav className={`${styles.container} ${className}`}>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <NavigationTree
          items={items}
          highlightedItemId={highlightedItemId}
          onClickItem={onClickNavigationItem}
          onAddFile={(parentId: string) => {}}
          onAddFolder={(parendId: string) => {}}
        />
      )}
    </nav>
  );
};

export default SideNavigation;
