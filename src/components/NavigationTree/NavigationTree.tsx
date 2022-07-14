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
    return items.map(({ id, type, open, name, children }) => {
      return (
        <div className="nav-item-level" key={id}>
          <NavigationItem id={id} type={type} open={open} name={name} />
          {!!children && open && (
            <div className="nav-item-level">{renderItems(children)}</div>
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
