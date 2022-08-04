import { Item } from "../../../types";
import { updateTreeItem } from "../../utils/updateTreeItem";

export const fetchNavigationItemMock = (id: string, items: Item[]) => {
  let item = null;

  updateTreeItem(items, id, (matchingItem) => (item = matchingItem));

  return item;
};
