import styles from "./FolderCreationItem.module.scss";

export const FolderCreationItem = () => {
  return (
    <div className={styles.container}>
      <input placeholder="Enter a name" />
    </div>
  );
};
