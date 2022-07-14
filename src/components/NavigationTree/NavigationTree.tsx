import React from "react";
import "./NavigationTree.scss";

type Props = {
  items: any[];
  title: string;
};

const NavigationTree = ({ items, title }: Props) => {
  return (
    <div className="dtx__navigation-tree">
      <h1>{title}</h1>
    </div>
  );
};

export default NavigationTree;
