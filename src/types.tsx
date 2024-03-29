import { ItemType } from "./enums";

export type Item = {
  id: string;
  name: string;
  open: boolean;
  type: ItemType;
  children?: Item[];
};

export type TabItem = {
  id: string;
  name: string;
  active?: boolean;
};
