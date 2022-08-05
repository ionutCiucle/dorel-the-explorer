import { forEachTreeItem } from "./forEachTreeItem";

type MockItem = {
  id: string;
  name: string;
  children?: MockItem[];
};

const items: MockItem[] = [
  {
    id: "1",
    name: "some name",
    children: [
      {
        id: "1.1",
        name: "some other name",
        children: [
          {
            id: "1.1.1",
            name: "some other other name",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "some other name",
    children: [
      {
        id: "2.1",
        name: "some differentname",
      },
    ],
  },
];

describe("state-management | utils | forEachTreeItem", () => {
  it("should iterate through the whole tree", () => {
    let ids = ["1", "1.1", "1.1.1", "2", "2.1"];

    const updater = (item: MockItem) => {
      ids = ids.filter((id) => id === item.id);
    };

    forEachTreeItem(items, updater);

    expect(ids.length).toBe(0);
  });
});
