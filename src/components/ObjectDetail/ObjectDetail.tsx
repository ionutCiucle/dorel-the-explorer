import styles from "./ObjectDetail.module.scss";

type Props = {
  itemId: string;
};

const ObjectDetail = ({ itemId }: Props) => {
  return <div className={styles.container}>{itemId}</div>;
};

export default ObjectDetail;
