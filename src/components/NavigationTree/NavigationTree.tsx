import React from "react";
import NavigationItem from "../NavigationItem";
import { Item } from "../../types";
import "./NavigationTree.scss";

type Props = {
  items: Item[];
  title: string;
};

const NavigationTree = ({ items, title }: Props) => {
  return (
    <div className="dtx__navigation-tree">
      <span>{title}</span>
      {items.map(({ type, name, open }) => (
        <NavigationItem type={type} name={name} open={open} />
      ))}
    </div>
  );
};

export default NavigationTree;
