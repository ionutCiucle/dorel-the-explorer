import React from "react";
import { render, screen } from "@testing-library/react";
import NavigationTree from "./NavigationTree";

const getBaseProps = () =>
  Object.freeze({
    title: "Some title",
    items: [],
  });

describe("<NavigationTree/>", () => {
  it("should render its basic state", () => {
    const props = getBaseProps();

    render(<NavigationTree {...getBaseProps()} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
