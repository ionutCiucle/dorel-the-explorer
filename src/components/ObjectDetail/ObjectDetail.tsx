import React from "react";
import "./ObjectDetail.scss";

type Props = {
  itemId: string;
};

const ObjectDetail = ({ itemId }: Props) => {
  return <div className="dtx__object-detail">{itemId}</div>;
};

export default ObjectDetail;
