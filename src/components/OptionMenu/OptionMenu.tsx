import { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import { EventType } from "../../enums";
import "./OptionMenu.scss";

type Props = {
  labels: string[];
  className?: string;
  onClickOption: (label: string) => void;
  onClickOutside: () => void;
};

export const OptionMenu = ({
  labels,
  className = "",
  onClickOption,
  onClickOutside,
}: Props) => {
  const containerRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = ({ target }: MouseEvent) => {
    // @ts-ignore
    if (!containerRef!.contains(target)) {
      onClickOutside();
    }
  };
  const getOptionClickHandler = (label: string) => () => {
    onClickOption(label);
  };

  useEffect(() => {
    document.addEventListener(EventType.Click, handleClickOutside);

    return () => {
      document.removeEventListener(EventType.Click, handleClickOutside);
    };
  }, []);

  return (
    <ul className={`dtx__option-menu ${className}`} ref={containerRef}>
      {labels.map((label, index) => (
        <li key={index} onClick={getOptionClickHandler(label)}>
          {label}
        </li>
      ))}
    </ul>
  );
};
