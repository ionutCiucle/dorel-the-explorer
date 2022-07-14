import React from "react";
import NavigationTree from "../../components/NavigationTree";
import { Item } from "../../types";
import { ItemType } from "../../enums";
import "./AppContainer.scss";

const navItems: Item[] = [
  {
    name: "Fruit",
    type: ItemType.Folder,
    open: false,
    children: [
      {
        name: "Orange",
        type: ItemType.File,
        open: false,
        // children: [],
      },
      {
        name: "Apple",
        type: ItemType.File,
        open: false,
        // children: [],
      },
      {
        name: "Apple",
        type: ItemType.File,
        open: false,
        // children: [],
      },
    ],
  },
  {
    name: "Veggies",
    type: ItemType.Folder,
    open: false,
    children: [
      {
        name: "Carrot",
        type: ItemType.File,
        open: false,
        // children: [],
      },
      {
        name: "Potato",
        type: ItemType.File,
        open: false,
        // children: [],
      },
      {
        name: "Aubergine",
        type: ItemType.File,
        open: false,
        // children: [],
      },
    ],
  },
];

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
