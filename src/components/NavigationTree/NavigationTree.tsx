import React from "react";
import NavigationItem from "../NavigationItem";
import { Item } from "../../types";
import "./NavigationTree.scss";

type Props = {
  items: Item[];
  title: string;
};

const NavigationTree = ({ items, title }: Props) => {
  const renderItems = (items: Item[]) => {
    return items.map((item) => {
      return (
        <div className="nav-item-level" key={item.id}>
          <NavigationItem
            id={item.id}
            type={item.type}
            open={item.open}
            name={item.name}
          />
          {!!item.children && item.open && (
            <div className="nav-item-level">{renderItems(item.children)}</div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="dtx__navigation-tree">
      <h3>{title}</h3>
      <div className="nav-items">{renderItems(items)}</div>
    </div>
  );
};

export default NavigationTree;
