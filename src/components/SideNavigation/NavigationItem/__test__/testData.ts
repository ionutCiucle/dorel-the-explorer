import { Props } from "../NavigationItem";
import { ItemType } from "../../../../enums";

export const getBaseProps = (): Props =>
  Object.freeze({
    id: "some-id",
    name: "Some name",
    type: ItemType.Folder,
    open: false,
    expandedOptionsItemId: "",
    onClick: jest.fn(),
    onOptionButtonClick: jest.fn(),
    onOptionMenuOutsideClick: jest.fn(),
  });
