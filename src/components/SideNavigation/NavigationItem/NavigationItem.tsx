import React from "react";
import ItemIcon from "../../ItemIcon";
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
  return (
    <div
      className={`dtx__navigation-item ${highlighted ? "highlighted" : ""}`}
      onClick={() => onClick({ id, name, type, open })}
    >
      <ItemIcon
        open={open}
        type={type}
        className="dtx__navigation-item__icon"
      />
      <h3>{name}</h3>
    </div>
  );
};

export default NavigationItem;
