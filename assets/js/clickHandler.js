import { addItemToCart } from "./cart.js";
import { processClickCategory } from "./categories.js";
import { displayItem } from "./item.js";

export const clickCategoryItem = (item) => {
  hideAllModals();
  hideMain();
  displayItem(item);
  showItemModal();
  //addItemToCart(item);
};

export const clickCategory = (item) => {
  hideAllModals();
  hideMain();
  processClickCategory(item);
  showCategoryModal();
};

export const clickCloseCategory = () => {
  hideAllModals();
  showMain();
};

export const clickCloseItem = () => {
  hideAllModals();
  showMain();
};

const showCategoryModal = () => {
  const categoryContainer = document.getElementById("modal-category");
  categoryContainer.classList.remove("hidden");
};

const showItemModal = () => {
  const itemModal = document.getElementById("modal-item");
  itemModal.classList.remove("hidden");
};

const hideAllModals = () => {
  document.getElementById("modal-category").classList.add("hidden");
  document.getElementById("modal-item").classList.add("hidden");
};

const hideMain = () => {
  const appDiv = document.getElementById("app");
  appDiv.classList.add("no-scroll");
};

const showMain = () => {
  const appDiv = document.getElementById("app");
  appDiv.classList.remove("no-scroll");
};
