export type UpdateFunction<T extends { id: string; children?: T[] }> = (
  item: T,
  parents: T[]
) => void;

const makeUpdateTreeItem = <T extends { id: string; children?: T[] }>() => {
  let _found = false;
  let _parents: T[] = [];

  return (() => {
    // (1)
    const _updateTreeItem = (
      items: T[],
      id: string,
      updateFn: UpdateFunction<T>
    ) => {
      for (let i = 0; i < items.length && !_found; i++) {
        const item = items[i];

        if (item.id === id) {
          updateFn(item, _parents);
          _found = true;

          continue;
        } else {
          if (item.children) {
            _parents.push(item);
            _updateTreeItem(item.children, id, updateFn);
          }

          if (!_found && _parents[_parents.length - 1] === item) {
            _parents.splice(_parents.length - 1, 1);
          }
        }
      }
    };

    return (items: T[], id: string, updateFn: UpdateFunction<T>) => {
      // (2)
      _found = false;
      _parents = [];
      _updateTreeItem(items, id, updateFn);
    };
  })();
};

export default makeUpdateTreeItem; // (3)

/* 
This recursive function system needs the "found" variable in order to short-circuit
its calls once the result has been found - the "parentTrail" property depends on this.

(1) - this level of function encapsulation is needed because we need to get fresh copies of 
the closure variables after each "makeUpdateTreeItem()" call - at each export;

(2) - another level of function encapsulation is needed because we need to reset the closure
variables after each call.

(3) - we export it like this instead of makeUpdateTreeItem() directly because we need to pass in type 
generics in the index.ts file. Otherwise, the generic "T" type isn't picked up by TS - see index.ts file
for details.
*/
