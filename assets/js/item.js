import { itemDatabase } from "./firebase.js";

export const displayItem = (item) => {
  document.getElementById("item-title-header").innerText = item.name;
  document.getElementById(
    "modal-item-icon"
  ).src = `../assets/images/food/${item.image}`;

  if (item.addons.length > 0) {
    item.addons.forEach((addon) => {
      const addOn = itemDatabase.find((el) => el.name === addon);
      if (addOn) {
        createAddon(addOn);
      }
    });
  } else {
    document.getElementById("addins").classList.add("hidden");
  }

  let caloriesTotal = document.createElement("h2");
  caloriesTotal.classList.add("h2");
  caloriesTotal.textContent = `Cal ${item.nutrition.calories}`;

  document.getElementById("total-fat").innerText = `${item.nutrition.fat} g`;
  document.getElementById(
    "total-carbs"
  ).innerText = `${item.nutrition.carbs} g`;
  document.getElementById(
    "total-protein"
  ).innerText = `${item.nutrition.protein} g`;
  document.getElementById("item-description").innerText = item.description;

  document.getElementById("nutrition-header").appendChild(caloriesTotal);
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
