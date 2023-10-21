import { itemDatabase } from "./firebase.js";
import { addItemToCart } from "./cart.js";
import { clickCloseItem } from "./clickHandler.js";

let selectedItem;
let selectedAmount = 1;

const DECREASE_AMOUNT = document.getElementById("item-quantity-selector-down");
const INCREASE_AMOUNT = document.getElementById("item-quantity-selector-up");
const ADD_TO_CART = document.getElementById("btn-add-to-cart");

ADD_TO_CART.addEventListener("click", () => {
  addItemToCart(selectedItem, selectedAmount);
  clickCloseItem();
});

DECREASE_AMOUNT.addEventListener("click", () => {
  selectedAmount = selectedAmount - 1 >= 1 ? selectedAmount - 1 : 1;
  updateTotals();
});

INCREASE_AMOUNT.addEventListener("click", () => {
  selectedAmount = selectedAmount + 1 <= 20 ? selectedAmount + 1 : 20;
  updateTotals();
});

const updateTotals = () => {
  document.getElementById("item-quantity").innerText = String(selectedAmount);
  document.getElementById("price-item-total").innerText = `$${(
    selectedItem.price * selectedAmount
  ).toFixed(2)}`;

  if (selectedAmount <= 1) {
    DECREASE_AMOUNT.classList.add("unavailable");
  } else {
    DECREASE_AMOUNT.classList.remove("unavailable");
  }

  if (selectedAmount >= 20) {
    INCREASE_AMOUNT.classList.add("unavailable");
  } else {
    INCREASE_AMOUNT.classList.remove("unavailable");
  }
};

export const displayItem = (item) => {
  selectedItem = item;
  document.getElementById("item-title-header").innerText = item.name;
  document.getElementById(
    "modal-item-icon"
  ).src = `../assets/images/food/${item.image}`;

  // TODO: Create addon items
  document.getElementById("addins").classList.add("hidden");

  if (item.addons && item.addons.length > 0) {
    item.addons.forEach((addon) => {
      const addOn = itemDatabase.find((el) => el.name === addon);
      if (addOn) {
        //createAddon(addOn);
      }
    });
  } else {
    document.getElementById("addins").classList.add("hidden");
  }

  document.getElementById(
    "caloric-info"
  ).innerHTML = `Cal ${item.nutrition.calories}`;

  document.getElementById("total-fat").innerText = `${item.nutrition.fat} g`;
  document.getElementById(
    "total-carbs"
  ).innerText = `${item.nutrition.carbs} g`;
  document.getElementById(
    "total-protein"
  ).innerText = `${item.nutrition.protein} g`;
  document.getElementById("item-description").innerText = item.description;

  updateTotals();
};

const createAddon = (item) => {
  console.log(item);
  const newAddOn = document.createElement("div");
  newAddOn.classList.add("addon-card");

  const addOnImage = document.createElement("img");
  addOnImage.src = `../assets/images/food/${item.image}`;
  addOnImage.classList.add("addins-image");
  newAddOn.appendChild(addOnImage);

  const addOnName = document.createElement("p");
  addOnName.innerText = item.name;
  newAddOn.appendChild(addOnName);

  const addOnPrice = document.createElement("p");
  addOnPrice.innerText = `+ $${item.price}`;
  newAddOn.appendChild(addOnPrice);

  document.getElementById("addins-container").appendChild(newAddOn);
};
