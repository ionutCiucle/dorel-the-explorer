import { Item } from "../../types";

export const updateTreeItem = (
  items: Item[],
  id: string,
  updatePredicate: (item: Item) => {}
) => {
  items.forEach((item) => {
    if (item.id === id) {
      updatePredicate(item);
    } else {
      if (item.children) {
        updateTreeItem(item.children, id, updatePredicate);
      }
    }
  });
};
