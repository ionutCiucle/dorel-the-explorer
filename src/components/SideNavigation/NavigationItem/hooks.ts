import { RefObject, useLayoutEffect, useState } from "react";

export const useMenuCoordinates = (menuRef: RefObject<HTMLElement>) => {
  const [menuX, setMenuX] = useState(0);
  const [menuY, setMenuY] = useState(0);

  useLayoutEffect(() => {
    if (menuRef?.current) {
      const { x, y } = menuRef.current.getBoundingClientRect();

      setMenuX(x);
      setMenuY(y);
    }
  });

  return [menuX, menuY];
};
