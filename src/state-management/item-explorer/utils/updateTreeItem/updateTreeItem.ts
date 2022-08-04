import { Item } from "../../../../types";

type UpdateFunction = (item: Item, parentTrail: string[]) => void;

const makeUpdateTreeItem = () => {
  let _found = false;
  let _parentTrail: string[] = [];

  return (() => {
    // (1)
    const _updateTreeItem = (
      items: Item[],
      id: string,
      updateFn: UpdateFunction
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

    return (items: Item[], id: string, updateFn: UpdateFunction) => {
      // (2)
      _found = false;
      _parentTrail = [];
      _updateTreeItem(items, id, updateFn);
    };
  })();
};

export default makeUpdateTreeItem();

/* 
This recursive function system needs the "found" variable in order to short-circuit
its calls once the result has been found - the "parentTrail" property depends on this.

(1) - this level of function encapsulation is needed because we need to get fresh copies of 
the closure variables after each "makeUpdateTreeItem()" call - at each export;

(2) - another level of function encapsulation is needed because we need to reset the closure
variables after each call.
*/
