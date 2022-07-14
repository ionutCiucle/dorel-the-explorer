import React from "react";
import NavigationTree from "../../components/NavigationTree";
import { navItems } from "../../mockData";
import "./AppContainer.scss";

export const AppContainer = () => {
  return (
    <div className="dtx__app-container">
      <header>Welcome to Dorel's File Exploring App!</header>
      <section className="dtx__app-container__body">
        <nav>
          <NavigationTree items={navItems} title="Basket explorer" />
        </nav>
        <aside>Hello again</aside>
      </section>
    </div>
  );
};

export default AppContainer;
