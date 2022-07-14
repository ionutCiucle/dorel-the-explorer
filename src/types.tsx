import { ItemType } from "./enums";

export type Item = {
  name: string;
  open: boolean;
  type: ItemType;
  children?: Item[];
};
