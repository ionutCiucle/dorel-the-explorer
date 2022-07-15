import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./SkeletonLoader.scss";

const SkeletonLoader = () => (
  <div className="dtx__side-navigation__skeleton-loader">
    <Skeleton variant="rectangular" width={"80%"} height={30} />
    <Skeleton variant="rectangular" width={"65%"} height={30} />
    <Skeleton variant="rectangular" width={"75%"} height={30} />
  </div>
);

export default SkeletonLoader;
