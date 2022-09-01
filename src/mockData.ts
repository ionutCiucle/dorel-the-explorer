import { Item } from "./types";
import { ItemType } from "./enums";

export const navItems: Array<Item> = [
  {
    id: "XXX__0",
    name: "Fruit",
    type: ItemType.Folder,
    open: true,
    children: [
      {
        id: "xxx",
        name: "",
        type: ItemType.FolderPlaceholder,
        open: false,
      },
      {
        id: "XXX__0__0",
        name: "Orange",
        type: ItemType.Folder,
        open: true,
        children: [
          {
            id: "XXX__0__0__0",
            name: "Red",
            type: ItemType.File,
            open: true,
            children: [],
          },
          {
            id: "XXX__0__0__1",
            name: "Regular",
            type: ItemType.File,
            open: true,
            children: [],
          },
        ],
      },
      {
        id: "XXX__0__1",
        name: "Apple",
        type: ItemType.File,
        open: false,
        // children: [],
      },
      {
        id: "XXX__0__2",
        name: "Pear",
        type: ItemType.File,
        open: false,
        // children: [],
      },
    ],
  },
  {
    id: "XXX__1",
    name: "Veggies",
    type: ItemType.Folder,
    open: true,
    children: [
      {
        id: "XXX__1__0",
        name: "Carrot",
        type: ItemType.File,
        open: false,
        // children: [],
      },
      {
        id: "XXX__1__1",
        name: "Potato",
        type: ItemType.File,
        open: false,
        // children: [],
      },
      {
        id: "XXX__1__2",
        name: "Aubergine",
        type: ItemType.File,
        open: false,
        // children: [],
      },
    ],
  },
  {
    id: "XXX__2",
    name: "Snacks",
    type: ItemType.Folder,
    open: false,
    children: [
      {
        id: "XXX__2__0",
        name: "Chips",
        type: ItemType.File,
        open: false,
        // children: [],
      },
      {
        id: "XXX__2__1",
        name: "Nachos",
        type: ItemType.File,
        open: false,
        // children: [],
      },
    ],
  },
];
