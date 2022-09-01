import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { elementHasEllipsis } from "../../../utils";
import styles from "./Tab.module.scss";

type Props = {
  name: string;
  id: string;
  active?: boolean;
  onClick: (id: string) => void;
  onCloseButtonClick: (itemId: string) => void;
};

export const Tab = ({
  id,
  name,
  active,
  onClick,
  onCloseButtonClick,
}: Props) => {
  const [hasEllipsis, setHasEllipsis] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  // TODO: Move the ellipsis logic to a Text component and use it whenever you need to cover truncating text
  useEffect(() => {
    const anchorEl = elementHasEllipsis(
      containerRef.current?.querySelector("a") as HTMLElement
    );
    setHasEllipsis(anchorEl);
  }, [name]);

  const handleCloseButtonClick = () => {
    onCloseButtonClick(id);
  };

  const handleClick = () => {
    onClick(id);
  };

  const getAdditionalProps = () => (hasEllipsis ? { title: name } : {});

  return (
    <li
      className={`${styles.container} ${active ? styles.active : ""}`}
      ref={containerRef}
      onClick={handleClick}
    >
      <Link to={`/${id}`} {...getAdditionalProps()} className={styles.anchor}>
        {name}
      </Link>
      <AiOutlineClose
        className={styles.closeButton}
        onClick={handleCloseButtonClick}
      />
    </li>
  );
};
