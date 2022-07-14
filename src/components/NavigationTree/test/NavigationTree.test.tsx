import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { navItems } from "../../../mockData";
import NavigationTree from "../NavigationTree";
import { getBaseProps } from "./testData";
import { ItemType } from "../../../enums";

describe("<NavigationTree/>", () => {
  it("should render its title", () => {
    const props = getBaseProps();

    render(<NavigationTree {...getBaseProps()} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it("should be able to render a list item hierarchy", () => {
    const props = getBaseProps({ items: navItems });

    render(<NavigationTree {...props} />);

    expect(screen.getByText(props.items[0].name)).toBeInTheDocument();

    expect(screen.getByText("Fruit")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
    expect(screen.getByText("Red")).toBeInTheDocument();
  });

  it('should only render children if their parent has the "open" prop true', () => {
    const props = getBaseProps({ items: navItems });

    render(<NavigationTree {...props} />);

    expect(screen.queryByText("Chips")).not.toBeInTheDocument();
    expect(screen.queryByText("Nachos")).not.toBeInTheDocument();
  });

  it("should handle click events on its child items", () => {
    const props = getBaseProps({ items: navItems });

    render(<NavigationTree {...props} />);

    fireEvent.click(screen.getByText("Aubergine"));

    expect(props.onClickItem).toHaveBeenCalledWith({
      id: "XXX__1__2",
      name: "Aubergine",
      type: ItemType.File,
      open: false,
    });
  });
});
