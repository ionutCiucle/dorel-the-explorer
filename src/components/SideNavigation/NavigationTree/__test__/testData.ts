import { Props } from "../NavigationTree";

export const getBaseProps = (overrides: Partial<Props> = {}): Props =>
  Object.freeze({
    items: [],
    onClickItem: jest.fn(),
    ...overrides,
  });
