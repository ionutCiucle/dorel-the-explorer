import NavigationItem from "../NavigationItem";
import { Item } from "../../../types";
import styles from "./NavigationTree.module.scss";

export type Props = {
  items: Item[];
  highlightedItemId?: string;
  onClickItem: (item: Item) => void;
};

const NavigationTree = ({ items, highlightedItemId, onClickItem }: Props) => {
  const renderItems = (items: Item[]) => {
    return items.map(({ id, type, open, name, children }) => {
      return (
        <div className={styles.itemLevel} key={id}>
          <NavigationItem
            id={id}
            type={type}
            open={open}
            name={name}
            highlighted={highlightedItemId === id}
            onClick={onClickItem}
          />
          {!!children && open && (
            <div className={styles.itemLevel}>{renderItems(children)}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <div>{renderItems(items)}</div>
    </div>
  );
};

export default NavigationTree;
