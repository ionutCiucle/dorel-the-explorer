import { style } from "@mui/system";
import { SyntheticEvent, useEffect, useRef } from "react";
import { EventType } from "../../enums";
// import "./OptionMenu.scss";
import styles from "./OptionMenu.module.scss";

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
    if (!containerRef?.current?.contains(target as Node)) {
      onClickOutside();
    }
  };
  const getOptionClickHandler =
    (label: string) => (event: SyntheticEvent<HTMLLIElement>) => {
      event.stopPropagation();
      onClickOption(label);
    };

  useEffect(() => {
    document.addEventListener(EventType.Click, handleClickOutside);

    return () => {
      document.removeEventListener(EventType.Click, handleClickOutside);
    };
  }, []);

  return (
    <ul className={styles.container} ref={containerRef}>
      {labels.map((label, index) => (
        <li
          className={styles.item}
          key={index}
          onClick={getOptionClickHandler(label)}
        >
          {label}
        </li>
      ))}
    </ul>
  );
};