import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationTree, { Props } from "./NavigationTree";

const getBaseProps = (): Props =>
  Object.freeze({
    title: "Some title",
    items: [],
    onClickItem: jest.fn(),
  });

describe("<NavigationTree/>", () => {
  it("should render its basic state", () => {
    const props = getBaseProps();

    render(<NavigationTree {...getBaseProps()} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
