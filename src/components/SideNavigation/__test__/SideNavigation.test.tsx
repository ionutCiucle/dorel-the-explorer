import React from "react";
import { render, screen } from "@testing-library/react";
import SideNavigation from "../SideNavigation";
import { getBaseProps, items } from "./testData";

describe("<SideNavigation/>", () => {
  it("should indicate when its items are loading", () => {
    const { container } = render(
      <SideNavigation {...getBaseProps({ loading: true })} />
    );

    expect(
      container.querySelector(".dtx__side-navigation__skeleton-loader")
    ).toBeInTheDocument();
  });

  it("should render its items", () => {
    render(<SideNavigation {...getBaseProps({ items: items })} />);

    expect(screen.getByText(items[0].name)).toBeInTheDocument();
  });
});
