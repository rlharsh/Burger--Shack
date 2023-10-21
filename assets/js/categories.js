import { itemDatabase } from "./firebase.js";
import {
  clickCategoryItem,
  clickCategory,
  clickCloseCategory,
  clickCloseItem,
} from "./clickHandler.js";

const categoryListing = [
  {
    name: "Burgers",
    icon: "Burger.png",
    color: "#FFEF92",
  },
  {
    name: "Fries",
    icon: "Fries.png",
    color: "#F5CAC3",
  },
  {
    name: "Chicken",
    icon: "Chicken.png",
    color: "#F7EDE2",
  },
  {
    name: "Desserts",
    icon: "Desserts.png",
    color: "#A9D7DA",
  },
  {
    name: "Drinks",
    icon: "Drinks.png",
    color: "#B6D7CF",
  },
  {
    name: "Coffee",
    icon: "Coffee.png",
    color: "#F5F5F5",
  },
];

const CLOSE_CATEGORY_BUTTON = document.getElementById("close-button");
CLOSE_CATEGORY_BUTTON.addEventListener("click", (event) => {
  clickCloseCategory();
});

const CLOSE_ITEM_BUTTON = document.getElementById("item-close-button");
CLOSE_ITEM_BUTTON.addEventListener("click", (event) => {
  clickCloseItem();
});

const loadCategories = () => {
  let itemFragment = document.createDocumentFragment();

  categoryListing.forEach((item) => {
    let itemCard = document.createElement("div");
    itemCard.classList.add("category-item");
    itemCard.style.backgroundColor = item.color;

    let itemName = document.createElement("p");
    itemName.innerText = item.name;
    itemCard.appendChild(itemName);

    let itemImage = document.createElement("img");
    itemImage.src = `./assets/images/food/${item.icon}`;
    itemImage.classList.add("category-item__image");
    itemCard.appendChild(itemImage);

    itemCard.addEventListener("click", () => {
      clickCategory(item.name);
    });

    itemFragment.appendChild(itemCard);
  });

  document.getElementById("categories").appendChild(itemFragment);
};

export const processClickCategory = (category) => {
  let itemsInCategory = [];
  itemDatabase.forEach((item) => {
    if (item.category.toLowerCase() === category.toLowerCase()) {
      itemsInCategory.push(item);
    }
  });
  showCategory(category, itemsInCategory);
};

const showCategory = (category, items) => {
  document.getElementById("category-title-header").textContent = category;
  const categorySelect = categoryListing.find((cat) => cat.name === category);
  document.getElementById(
    "modal-category-icon"
  ).src = `../assets/images/food/${categorySelect.icon}`;
  document.getElementById(
    "category-descriptive-text"
  ).textContent = `All of our ${category.toLowerCase()}!`;
  document.getElementById("modal-category__header").style.backgroundColor =
    categorySelect.color;

  const categoryListingContainer = document.getElementById(
    "category-lising-container"
  );
  categoryListingContainer.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("item");
    const price = document.createElement("p");
    price.classList.add("price");
    price.innerText = `$${item.price}`;
    card.appendChild(price);

    const imageDiv = document.createElement("div");
    imageDiv.classList.add("item__image");
    const itemImage = document.createElement("img");
    itemImage.src = `../assets/images/food/${item.image}`;
    itemImage.classList.add("item__image__image");
    imageDiv.appendChild(itemImage);
    card.appendChild(imageDiv);

    const itemDescriptionContainer = document.createElement("div");
    itemDescriptionContainer.classList.add("item__description");
    const itemName = document.createElement("h2");
    itemName.classList.add("h2");
    itemName.textContent = item.name;
    itemDescriptionContainer.appendChild(itemName);
    const itemTagline = document.createElement("p");
    itemTagline.classList.add("h2-item");
    itemTagline.classList.add("light");
    itemTagline.textContent = item.tagline;
    itemDescriptionContainer.appendChild(itemTagline);
    card.addEventListener("click", () => {
      clickCategoryItem(item);
    });

    card.appendChild(itemDescriptionContainer);
    categoryListingContainer.appendChild(card);
  });
};

loadCategories();
