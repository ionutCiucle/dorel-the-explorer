import { Props } from "../NavigationTree";

export const getBaseProps = (overrides: Partial<Props> = {}): Props =>
  Object.freeze({
    title: "Some title",
    items: [],
    onClickItem: jest.fn(),
    ...overrides,
  });
