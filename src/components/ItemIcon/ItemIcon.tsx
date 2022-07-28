import React from "react";
import { AiFillFileText, AiFillFolderOpen, AiFillFolder } from "react-icons/ai";
import { ItemType } from "../../enums";

type Props = {
  type: ItemType;
  open: boolean;
  className?: string;
};

const ItemIcon = ({ type, open, className = "" }: Props) => {
  switch (type) {
    case ItemType.Folder: {
      return open ? (
        <AiFillFolderOpen className={className} />
      ) : (
        <AiFillFolder className={className} />
      );
    }

    case ItemType.File: {
      return <AiFillFileText className={className} />;
    }

    default: {
      return null;
    }
  }
};

export default ItemIcon;
