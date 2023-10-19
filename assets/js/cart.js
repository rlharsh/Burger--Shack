export const ITEMS_IN_CART = [];

export const addItemToCart = (item) => {
  ITEMS_IN_CART.push(item);
  processCart();
};

const processCart = () => {
  if (ITEMS_IN_CART.length > 0) {
    document.getElementById("cart-total").classList.remove("hidden");
    document.getElementById("cart-total").textContent = ITEMS_IN_CART.length;
  } else {
    document.getElementById("cart-total").classList.add("hidden");
  }
};
