import React from "react";
import ItemIcon from "../ItemIcon";
import { Item } from "../../types";
import { ItemType } from "../../enums";
import "./NavigationItem.scss";

export type Props = Item & {
  onClick: (item: Item) => void;
};

const NavigationItem = ({ id, name, type, open, onClick }: Props) => {
  return (
    <div
      className="dtx__navigation-item"
      onClick={() => onClick({ id, name, type, open })}
    >
      <ItemIcon open={open} type={type} />
      <h3>{name}</h3>
    </div>
  );
};

export default NavigationItem;
