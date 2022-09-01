import { OptionMenu, Props } from "./OptionMenu";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<OptionMenu />", () => {
  const getBaseProps = (): Props => ({
    labels: ["first", "second"],
    onClickOption: jest.fn(),
    onClickOutside: jest.fn(),
  });

  it("should render a list of items", () => {
    const props = getBaseProps();

    render(
      <OptionMenu
        labels={props.labels}
        onClickOption={jest.fn()}
        onClickOutside={jest.fn()}
      />
    );

    expect(screen.getByText(props.labels[0])).toBeInTheDocument();
    expect(screen.getByText(props.labels[1])).toBeInTheDocument();
  });

  it("should call its onClickOption() prop when clicking on an item", () => {
    const props = getBaseProps();

    render(<OptionMenu {...props} />);

    fireEvent.click(screen.getByText(props.labels[0]));

    expect(props.onClickOption).toHaveBeenCalledWith(props.labels[0]);
  });

  it("should call its onClickOutside() prop when clicking somewhere outside the component", () => {
    const props = getBaseProps();
    const externalLabel = "somewhere outside";

    render(
      <>
        <div>{externalLabel}</div>
        <OptionMenu {...props} />
      </>
    );

    fireEvent.click(screen.getByText(externalLabel));

    expect(props.onClickOutside).toHaveBeenCalled();
  });

  it("should remove the event listener on document click events when unmounting", () => {
    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");
    const props = getBaseProps();
    const { unmount } = render(<OptionMenu {...props} />);

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalled();

    removeEventListenerSpy.mockClear();
  });
});
