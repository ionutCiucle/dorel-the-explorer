import { MouseEvent, useRef, useState } from "react";
import { AiOutlineMore, AiOutlineDelete } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import ItemIcon from "../../ItemIcon";
import OptionMenu from "../../OptionMenu";
import Portal from "../../Portal";
import { useMenuCoordinates } from "./hooks";
import { Item } from "../../../types";
import { ItemType } from "../../../enums";
import styles from "./NavigationItem.module.scss";

export type Props = Item & {
  highlighted?: boolean;
  onClick: (item: Item) => void;
};

const NavigationItem = ({
  id,
  name,
  type,
  open,
  highlighted,
  onClick,
}: Props) => {
  const [showOptionMenu, setShowOptionMenu] = useState(false);
  const menuSectionRef = useRef<HTMLDivElement>(null);
  const { menuX, menuY } = useMenuCoordinates(menuSectionRef);

  const handleOptionButtonClick = (event: MouseEvent) => {
    event.stopPropagation();

    if (type === ItemType.Folder) {
      setShowOptionMenu(true);
    }
  };

  const handleClickOutsideOptionMenu = () => {
    setShowOptionMenu(false);
  };

  const renderIcons = () => (
    <>
      {type === ItemType.Folder && (
        <BiDotsVerticalRounded
          className={styles.itemIcon}
          onClick={handleOptionButtonClick}
        />
      )}
      {type === ItemType.File && (
        <AiOutlineDelete className={styles.itemIcon} />
      )}
    </>
  );

  return (
    <div
      className={`${styles.container} ${highlighted ? styles.highlighted : ""}`}
      onClick={() => onClick({ id, name, type, open })}
    >
      <div className={styles.left}>
        <ItemIcon open={open} type={type} className={styles.icon} />
        <h3>{name}</h3>
      </div>
      <div ref={menuSectionRef}>
        {renderIcons()}
        {showOptionMenu && (
          <Portal>
            <div style={{ left: menuX, top: menuY, position: "absolute" }}>
              <OptionMenu
                labels={["Add File", "Remove Folder"]}
                onClickOption={(label: string) => {}}
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
