import { useState } from "react";
import NavigationItem from "../NavigationItem";
import FolderCreationItem from "../FolderCreationItem";
import { Item } from "../../../types";
import styles from "./NavigationTree.module.scss";
import { ItemType } from "../../../enums";

export type Props = {
  items: Item[];
  highlightedItemId?: string;
  onClickItem: (item: Item) => void;
  onAddFile: (parentId: string) => void;
  onAddFolder: (parentId: string) => void;
};

const NavigationTree = ({
  items,
  highlightedItemId,
  onClickItem,
  onAddFile,
  onAddFolder,
}: Props) => {
  const [expandedOptionsItemId, setExpandedOptionsItemId] = useState("");

  const handleItemOptionButtonClick = (itemId: string, itemType: ItemType) => {
    if (itemType === ItemType.Folder) {
      setExpandedOptionsItemId(itemId);
    }
  };

  const handleItemOptionMenuOutsideClick = (itemId: string) => {
    if (itemId === expandedOptionsItemId) {
      setExpandedOptionsItemId("");
    }
  };

  const renderItems = (items: Item[]) => {
    return items.map(({ id, type, open, name, children }) => {
      return (
        <div className={styles.itemLevel} key={id}>
          {type !== ItemType.FolderPlaceholder ? (
            <NavigationItem
              id={id}
              type={type}
              open={open}
              name={name}
              highlighted={highlightedItemId === id}
              expandedOptionsItemId={expandedOptionsItemId}
              onClick={onClickItem}
              onOptionButtonClick={handleItemOptionButtonClick}
              onOptionMenuOutsideClick={handleItemOptionMenuOutsideClick}
              onAddFile={onAddFile}
              onAddFolder={onAddFolder}
            />
          ) : (
            <FolderCreationItem />
          )}
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
