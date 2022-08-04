import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { elementHasEllipsis } from "../../../utils";
import "./Tab.scss";

type Props = {
  name: string;
  id: string;
  active?: boolean;
  onCloseButtonClick: (itemId: string) => void;
};

export const Tab = ({ id, name, active, onCloseButtonClick }: Props) => {
  const [hasEllipsis, setHasEllipsis] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const anchorEl = elementHasEllipsis(
      containerRef.current?.querySelector("a") as HTMLElement
    );
    setHasEllipsis(anchorEl);
  }, [name]);

  const handleCloseButtonClick = () => {
    onCloseButtonClick(id);
  };

  const getAdditionalProps = () => (hasEllipsis ? { title: name } : {});

  return (
    <li className={`dtx__tab ${active ? "active" : ""}`} ref={containerRef}>
      <Link to={`/${id}`} {...getAdditionalProps()}>
        {name}
      </Link>
      <AiOutlineClose
        className="close-button"
        onClick={handleCloseButtonClick}
      />
    </li>
  );
};
