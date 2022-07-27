import { Props } from "../SideNavigation";
import { Item } from "../../../types";
import { ItemType } from "../../../enums";

export const getBaseProps = (overrides: Partial<Props> = {}): Props => ({
  loading: false,
  items: [],
  onClickNavigationItem: jest.fn(),
  ...overrides,
});

export const items: Item[] = [
  { id: "some-id", name: "My Item", type: ItemType.File, open: false },
];
