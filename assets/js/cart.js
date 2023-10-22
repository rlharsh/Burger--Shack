import { clickCart } from "./clickHandler.js";

export const ITEMS_IN_CART = [];

const CART_BUTTON = document.getElementById("nav-cart");
CART_BUTTON.addEventListener("click", () => {
  clickCart();
});

export const addItemToCart = (item, quantity) => {
  for (let i = 0; i < quantity; i++) {
    ITEMS_IN_CART.push({ ...item });
  }
  processCart();
};

const processCart = () => {
  const itemCounts = {};
  const cartListing = document.getElementById("cart-listing");
  cartListing.innerHTML = ""; // Clear previous listings

  if (ITEMS_IN_CART.length > 0) {
    document.getElementById("cart-total").classList.remove("hidden");
    document.getElementById("cart-total").textContent = ITEMS_IN_CART.length;

    ITEMS_IN_CART.forEach((item) => {
      const itemName = item.name;
      if (!itemCounts[itemName]) {
        itemCounts[itemName] = { count: 1, item: item };
      } else {
        itemCounts[itemName].count++;
      }
    });

    Object.keys(itemCounts).forEach((itemName) => {
      const count = itemCounts[itemName].count;
      const item = itemCounts[itemName].item;
      cartListing.innerHTML += `<div>${item.name}: ${count}</div>`;
    });
  } else {
    document.getElementById("cart-total").classList.add("hidden");
  }
};
