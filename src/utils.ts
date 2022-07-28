export const mockFetch = <T>(itemsToReturn: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsToReturn);
    }, 1000);
  });
};
