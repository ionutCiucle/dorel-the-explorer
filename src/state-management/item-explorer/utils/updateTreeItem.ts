import { Item } from "../../../types";

const makeUpdateTreeItem = () => {
  let _found = false;
  let _parentTrail: string[] = [];

  const _updateTreeItem = (
    items: Item[],
    id: string,
    updateFn: (item: Item, parentTrail: string[]) => void
  ) => {
    for (let i = 0; i < items.length && !_found; i++) {
      const item = items[i];

      if (item.id === id) {
        updateFn(item, _parentTrail);
        _found = true;

        continue;
      } else {
        if (item.children) {
          _parentTrail.push(item.id);
          _updateTreeItem(item.children, id, updateFn);
        }

        if (!_found && i === items.length - 1) {
          _parentTrail.splice(i, 1);
        }
      }
    }
  };

  return _updateTreeItem;
};

export default makeUpdateTreeItem();
