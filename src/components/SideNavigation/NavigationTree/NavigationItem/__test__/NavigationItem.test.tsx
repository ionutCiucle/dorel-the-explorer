import NavigationItem from "../NavigationItem";
import { render, screen, fireEvent } from "@testing-library/react";
import { getBaseProps } from "./testData";

describe("<NavigationItem/>", () => {
  it("should render the item label", () => {
    const props = getBaseProps();

    render(<NavigationItem {...props} />);

    expect(screen.getByText(props.name)).toBeInTheDocument();
  });

  it("should call its onClick prop when being clicked on", () => {
    const props = getBaseProps();

    render(<NavigationItem {...props} />);

    fireEvent.click(screen.getByText(props.name));

    expect(props.onClick).toHaveBeenCalled();
  });
});
