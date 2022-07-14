import React from "react";
import "./NavigationTree.scss";

type Props = {
  items: any[];
};

export const NavigationTree = ({ items }: Props) => {
  return (
    <div className="dtx__navigation-tree">
      <h1>Navi</h1>
    </div>
  );
};

export default React.memo(NavigationTree);
