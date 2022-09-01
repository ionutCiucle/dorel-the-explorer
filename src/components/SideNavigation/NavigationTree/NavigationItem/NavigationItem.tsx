import { MouseEvent, useRef } from "react";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import ItemIcon from "../../../ItemIcon";
import OptionMenu from "../../../OptionMenu";
import Portal from "../../../Portal";
import { useMenuCoordinates } from "./hooks";
import { Item } from "../../../../types";
import { ItemType } from "../../../../enums";
import { ADD_FILE, ADD_FOLDER } from "./labels";
import styles from "./NavigationItem.module.scss";

export type Props = Item & {
  highlighted?: boolean;
  expandedOptionsItemId: string;
  onClick: (item: Item) => void;
  onAddFolder: (itemId: string) => void;
  onAddFile: (itemId: string) => void;
  onOptionButtonClick: (itemId: string, itemType: ItemType) => void;
  onOptionMenuOutsideClick: (itemId: string) => void;
};

const NavigationItem = ({
  id,
  name,
  type,
  open,
  highlighted,
  expandedOptionsItemId,
  onClick,
  onOptionButtonClick,
  onOptionMenuOutsideClick,
  onAddFile,
  onAddFolder,
}: Props) => {
  const menuSectionRef = useRef<HTMLDivElement>(null);
  const { menuX, menuY } = useMenuCoordinates(menuSectionRef);

  const handleOptionButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    onOptionButtonClick(id, type);
  };

  const handleClickOutsideOptionMenu = () => {
    onOptionMenuOutsideClick(id);
  };

  const handleOptionMenuClick = (label: string) => {
    switch (label) {
      case ADD_FILE: {
        onAddFile(id);
        break;
      }
      case ADD_FOLDER: {
        onAddFolder(id);
        break;
      }
      default: {
        console.warn(`NavigationItem: Unhandled option menu label: ${label}.`);
      }
    }
  };

  return (
    <div
      data-testid={`navigation-item__${name}`}
      className={`${styles.container} ${highlighted ? styles.highlighted : ""}`}
      onClick={() => onClick({ id, name, type, open })}
    >
      <div className={styles.left}>
        <ItemIcon open={open} type={type} className={styles.icon} />
        <h3>{name}</h3>
      </div>
      <div ref={menuSectionRef}>
        {type === ItemType.File ? (
          <AiOutlineDelete className={styles.itemIcon} />
        ) : (
          <AiOutlinePlus
            data-testid="plus-icon"
            className={styles.itemIcon}
            onClick={handleOptionButtonClick}
          />
        )}
        {expandedOptionsItemId === id && (
          <Portal>
            <div style={{ left: menuX, top: menuY, position: "absolute" }}>
              <OptionMenu
                labels={[ADD_FILE, ADD_FOLDER]}
                onClickOption={handleOptionMenuClick}
                onClickOutside={handleClickOutsideOptionMenu}
              />
            </div>
          </Portal>
        )}
      </div>
    </div>
  );
};

export default NavigationItem;
