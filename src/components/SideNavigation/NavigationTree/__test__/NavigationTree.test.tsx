import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { navItems } from "../../../../mockData";
import NavigationTree from "../NavigationTree";
import { getBaseProps } from "./testData";
import { ItemType } from "../../../../enums";

describe("<NavigationTree/>", () => {
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

  describe("Option menu", () => {
    const setup = (renderDummy?: boolean) => {
      const props = getBaseProps({ items: navItems });

      render(
        <div>
          <NavigationTree {...props} />
          <div id="root">{renderDummy && <div>Dummy</div>}</div>
        </div>
      );
    };

    const getPlusIconButton = () => {
      const folderItem = screen.getByTestId(`navigation-item__Fruit`);

      return within(folderItem).getByTestId("plus-icon");
    };

    it("should display an OptionMenu when clicking on the + button of a folder", () => {
      setup();

      fireEvent.click(getPlusIconButton());

      expect(screen.getByText("Add Folder")).toBeInTheDocument();
      expect(screen.getByText("Add File")).toBeInTheDocument();
    });

    it("should unmount the OptionMenu portal when the user clicks outside of it", () => {
      setup(true);

      fireEvent.click(getPlusIconButton());

      expect(screen.getByText("Add Folder")).toBeInTheDocument();

      fireEvent.click(screen.getByText("Dummy"));

      expect(screen.queryByText("Add Folder")).toBeNull();
    });
  });
});
