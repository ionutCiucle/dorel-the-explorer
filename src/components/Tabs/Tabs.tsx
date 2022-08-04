import { TabItem } from "../../types";
import Tab from "./Tab";
import "./Tabs.scss";

type Props = {
  items: TabItem[];
  activeItemId: string;
};

export const Tabs = ({ items, activeItemId }: Props) => {
  return (
    <ul className="dtx__tabs">
      {items.map(({ id, name, active }) => (
        <Tab id={id} name={name} key={id} active={id === activeItemId} />
      ))}
    </ul>
  );
};
