export const forEachTreeItem = <T extends { id: string; children?: T[] }>(
  items: T[],
  callback: (item: T) => void
) => {
  items.forEach((item) => {
    callback(item);

    if (item.children) {
      forEachTreeItem(item.children, callback);
    }
  });
};
