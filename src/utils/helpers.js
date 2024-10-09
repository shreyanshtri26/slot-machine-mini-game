import { items } from '../data/items';

export const getRandomItems = (count) => {
  const allItems = [...items];  // Assuming items is imported from your data file
  let selectedItems = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * allItems.length);
    selectedItems.push(allItems[randomIndex]);
  }
  return selectedItems;
};