import { useEffect } from "react";
import { AiFillFolderAdd, AiFillExclamationCircle } from "react-icons/ai";
import { EventType, Key } from "../../../../enums";
import { DUPLICATE_NAME_ERROR } from "./labels";
import styles from "./FolderCreationItem.module.scss";

type Props = {
  onBlur: () => void; // TODO: Rename prop, as it refers both to keypress and blur
  externalErrorMessage?: string;
};

export const FolderCreationItem = ({ externalErrorMessage, onBlur }: Props) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === Key.Escape) {
      onBlur();
    }
  };

  // TODO: Think of why this can't be set on the input's keyDown event
  useEffect(() => {
    document.addEventListener(EventType.KeyDown, handleKeyDown);

    return () => {
      document.removeEventListener(EventType.KeyDown, handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container}>
      <AiFillFolderAdd className={styles.folderIcon} />
      <input
        autoFocus
        className={styles.input}
        placeholder="Enter name"
        onBlur={onBlur}
      />
      {externalErrorMessage && (
        <AiFillExclamationCircle
          className={styles.errorIcon}
          title={DUPLICATE_NAME_ERROR}
        />
      )}
    </div>
  );
};
