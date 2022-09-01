import { Props } from "../NavigationTree";

export const getBaseProps = (overrides: Partial<Props> = {}): Props =>
  Object.freeze({
    items: [],
    onClickItem: jest.fn(),
    onAddFile: jest.fn(),
    onAddFolder: jest.fn(),
    ...overrides,
  });
