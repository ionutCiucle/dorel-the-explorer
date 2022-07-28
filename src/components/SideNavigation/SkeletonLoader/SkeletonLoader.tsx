import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./SkeletonLoader.scss";

type Props = {
  rows?: number;
  rowHeight?: number;
};

const SkeletonLoader = ({ rows = 3, rowHeight = 17 }: Props) => {
  const renderRows = () => {
    const rowMarkup = [];

    for (let i = 0; i < rows; i++) {
      rowMarkup.push(
        <li key={i}>
          <Skeleton variant="rectangular" width={"75%"} height={rowHeight} />
          <Skeleton
            className="child-item"
            variant="rectangular"
            width={"65%"}
            height={rowHeight}
          />
          <Skeleton
            className="child-item"
            variant="rectangular"
            width={"70%"}
            height={rowHeight}
          />
        </li>
      );
    }

    return rowMarkup;
  };

  return (
    <ul className="dtx__side-navigation__skeleton-loader">{renderRows()}</ul>
  );
};

export default SkeletonLoader;
