export const displayItem = (item) => {
  document.getElementById("item-title-header").innerText = item.name;
  document.getElementById(
    "modal-item-icon"
  ).src = `../assets/images/food/${item.image}`;

  if (item.addons.length > 0) {
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
