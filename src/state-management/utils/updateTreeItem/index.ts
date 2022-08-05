import makeUpdateTreeItem from "./updateTreeItem";
import { UpdateFunction } from "./updateTreeItem";

export const updateTreeItem = <T extends { id: string; children?: T[] }>(
  items: T[],
  id: string,
  updateFn: UpdateFunction<T>
) => {
  const functionInstance = makeUpdateTreeItem<T>();

  functionInstance(items, id, updateFn);
};
