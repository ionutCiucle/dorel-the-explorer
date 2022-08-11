import { useLayoutEffect, useRef, useState } from "react";
import { AiOutlineMore } from "react-icons/ai";
import ItemIcon from "../../ItemIcon";
import OptionMenu from "../../OptionMenu";
import Portal from "../../Portal";
import { useMenuCoordinates } from "./hooks";
import { Item } from "../../../types";
import "./NavigationItem.scss";

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
  const [menuX, menuY] = useMenuCoordinates(menuSectionRef);

  const handleOptionButtonClick = () => {
    setShowOptionMenu(true);
  };
  const handleClickOutsideOptionMenu = () => {
    setShowOptionMenu(false);
  };

  return (
    <div
      className={`dtx__navigation-item ${highlighted ? "highlighted" : ""}`}
      onClick={() => onClick({ id, name, type, open })}
    >
      <div className="dtx__navigation-item__left">
        <ItemIcon
          open={open}
          type={type}
          className="dtx__navigation-item__icon"
        />
        <h3>{name}</h3>
      </div>
      <div className="dtx__navigation-item__menu-section" ref={menuSectionRef}>
        <AiOutlineMore
          className="dtx__navigation-item__context-menu-icon"
          onClick={handleOptionButtonClick}
        />
        {showOptionMenu && (
          <Portal>
            <div
              className="dtx__navigation-item__menu-container"
              style={{ left: menuX, top: menuY, position: "absolute" }}
            >
              <OptionMenu
                className="dtx__navigation-item__menu-section__option-menu"
                labels={["Add Item", "Remove Item"]}
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
