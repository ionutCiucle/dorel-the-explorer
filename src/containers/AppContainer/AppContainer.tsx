import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation";
import styles from "./AppContainer.module.scss";

export const AppContainer = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        Welcome to Dorel's File Exploring App!
      </header>
      <section className={styles.body}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path=":itemId" element={<Navigation />} />
          </Route>
        </Routes>
      </section>
    </div>
  );
};

export default AppContainer;
