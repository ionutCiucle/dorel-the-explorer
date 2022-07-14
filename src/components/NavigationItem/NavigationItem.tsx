import React from "react";
import { AiFillFileText, AiFillFolderOpen, AiFillFolder } from "react-icons/ai";
import { Item } from "../../types";
import { ItemType } from "../../enums";
import "./NavigationItem.scss";

type Props = Item & {
  onClick: (item: Item) => void;
};

const NavigationItem = ({ id, name, type, open, onClick }: Props) => {
  const renderIcon = (type: ItemType) => {
    let IconMarkup;

    switch (type) {
      case ItemType.Folder: {
        IconMarkup = open ? AiFillFolderOpen : AiFillFolder;
        break;
      }

      case ItemType.File: {
        IconMarkup = AiFillFileText;
        break;
      }

      default: {
        return null;
      }
    }

    return <IconMarkup className="dtx__navigation-item__icon" />;
  };

  return (
    <div
      className="dtx__navigation-item"
      onClick={() => onClick({ id, name, type, open })}
    >
      {renderIcon(type)}
      <h3>{name}</h3>
    </div>
  );
};

export default NavigationItem;
