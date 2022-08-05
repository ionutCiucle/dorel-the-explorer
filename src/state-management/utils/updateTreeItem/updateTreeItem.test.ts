import { Item } from "../../../types";
import { ItemType } from "../../../enums";
import { updateTreeItem } from "./index";

const mockItems: Item[] = [
  {
    id: "1",
    name: "First",
    type: ItemType.Folder,
    open: true,
    children: [
      {
        id: "1.1",
        name: "First.First",
        type: ItemType.Folder,
        open: true,
        children: [
          {
            id: "1.1.1",
            name: "First.First.First",
            type: ItemType.Folder,
            open: true,
          },
          {
            id: "1.1.2",
            name: "First.First.Second",
            type: ItemType.Folder,
            open: true,
          },
        ],
      },
      {
        id: "1.2",
        name: "First.Second",
        type: ItemType.Folder,
        open: true,
      },
    ],
  },
];

describe("updateTreeItem()", () => {
  it("should detect item and parent hierarchy", () => {
    const updateSpy = jest.fn();
    const itemToFind = mockItems[0].children![0].children![0];
    const parentTrail = [mockItems[0], mockItems[0].children![0]];

    updateTreeItem(mockItems, itemToFind.id, updateSpy);

    expect(updateSpy).toHaveBeenCalledWith(itemToFind, parentTrail);
  });

  it("should remove an element from the parent trail, if its children don't match the id", () => {
    const updateSpy = jest.fn();
    const itemToFind = mockItems[0].children![1];
    const parentTrail = [mockItems[0]];

    updateTreeItem(mockItems, itemToFind.id, updateSpy);

    expect(updateSpy).toHaveBeenCalledWith(itemToFind, parentTrail);
  });

  it("should handle items that have more than one element in the first level", () => {
    const updateSpy = jest.fn();
    const localMockItems = [
      ...mockItems,
      {
        id: "2",
        name: "Second",
        type: ItemType.Folder,
        open: true,
        children: [
          {
            id: "2.1",
            name: "Second.First",
            type: ItemType.Folder,
            open: true,
          },
        ],
      },
    ];

    const itemToFind = localMockItems[1].children![0];
    const parentTrail = [localMockItems[1]];

    updateTreeItem(localMockItems, itemToFind.id, updateSpy);

    expect(updateSpy).toHaveBeenCalledWith(itemToFind, parentTrail);
  });
});
