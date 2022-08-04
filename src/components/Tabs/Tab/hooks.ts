import { useState } from "react";
import { elementHasEllipsis } from "../../../utils";

export const useHasEllipsis = (el: HTMLElement, cssSelector?: string) => {
  const [hasEllipsis, setHasEllipsis] = useState(false);

  if (el === null) {
    setHasEllipsis(false);
  } else {
    if (cssSelector) {
      const elementToCheck = el.querySelector(cssSelector);

      if (elementToCheck) {
        setHasEllipsis(elementHasEllipsis(elementToCheck as HTMLElement));
      } else {
        setHasEllipsis(elementHasEllipsis(el));
      }
    }
  }

  return hasEllipsis;
};
