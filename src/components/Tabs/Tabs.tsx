import { TabItem } from "../../types";
import Tab from "./Tab";
import styles from "./Tabs.module.scss";

type Props = {
  items: TabItem[];
  activeItemId: string;
  onTabClick: (itemId: string) => void;
  onTabCloseButtonClick: (id: string) => void;
};

export const Tabs = ({
  items,
  activeItemId,
  onTabClick,
  onTabCloseButtonClick,
}: Props) => {
  return (
    <ul className={styles.container}>
      {items.map(({ id, name }) => (
        <Tab
          id={id}
          name={name}
          key={id}
          active={id === activeItemId}
          onClick={onTabClick}
          onCloseButtonClick={onTabCloseButtonClick}
        />
      ))}
    </ul>
  );
};
