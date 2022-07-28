import { TabItem } from "../../types";
import Tab from "./Tab";
import "./Tabs.scss";

type Props = {
  items: TabItem[];
};

export const Tabs = ({ items }: Props) => {
  return (
    <ul className="dtx__tabs">
      {items.map(({ id, name, active }) => (
        <Tab id={id} name={name} key={id} active={active} />
      ))}
    </ul>
  );
};
