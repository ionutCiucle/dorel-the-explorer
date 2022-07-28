import { Link } from "react-router-dom";
import "./Tab.scss";

type Props = {
  name: string;
  id: string;
  active?: boolean;
};

export const Tab = ({ id, name, active }: Props) => {
  return (
    <li className={`dtx__tab ${active ? "active" : ""}`}>
      <Link to={`/?${id}`}>{name}</Link>
    </li>
  );
};
