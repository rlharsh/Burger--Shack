import { addItemToCart } from "./cart.js";
import { processClickCategory } from "./categories.js";
import { displayItem } from "./item.js";
import { handleNavBar } from "./navController.js";

export const clickCategoryItem = (item) => {
  hideAllModals();
  hideMain();
  displayItem(item);
  handleNavBar("item");
  showItemModal();
};

export const clickCart = () => {
  hideAllModals();
  hideMain();
  showCart();
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
  handleNavBar("main");
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
  document.getElementById("modal-cart").classList.add("hidden");
};

const hideMain = () => {
  const appDiv = document.getElementById("app");
  appDiv.classList.add("no-scroll");
};

const showMain = () => {
  const appDiv = document.getElementById("app");
  appDiv.classList.remove("no-scroll");
};

const showCart = () => {
  document.getElementById("modal-cart").classList.remove("hidden");
};
