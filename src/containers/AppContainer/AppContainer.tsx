import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation";
import "./AppContainer.scss";

export const AppContainer = () => {
  return (
    <div className="dtx__app-container">
      <header>Welcome to Dorel's File Exploring App!</header>
      <section className="dtx__app-container__body">
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
