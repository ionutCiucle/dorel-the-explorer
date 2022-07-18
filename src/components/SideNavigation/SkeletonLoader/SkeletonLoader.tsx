import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./SkeletonLoader.scss";

type Props = {
  rows?: number;
};

const SkeletonLoader = ({ rows = 3 }: Props) => {
  const renderRows = () => {
    const rowMarkup = [];

    for (let i = 0; i < rows; i++) {
      rowMarkup.push(
        <li key={i}>
          <Skeleton variant="rectangular" width={"80%"} height={20} />
          <Skeleton variant="rectangular" width={"65%"} height={20} />
          <Skeleton variant="rectangular" width={"75%"} height={20} />
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
