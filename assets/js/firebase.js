import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL: "https://chinese-restaurant-4e3f5-default-rtdb.firebaseio.com/",
};

// Initialize variables
let app, db, menuItemsRef;
export let itemDatabase = [];

export const initApp = () => {
  // Initialize the application
  app = initializeApp(appSettings);
  // Initialize the database connection
  db = getDatabase(app);
  // Set up the ref
  menuItemsRef = ref(db, "menu_items");

  onValue(menuItemsRef, (snapshot) => {
    if (snapshot.exists()) {
      itemDatabase.length = 0;

      let allMenuItems = Object.entries(snapshot.val());
      allMenuItems.forEach((item) => {
        addMenuItem(item);
      });
    } else {
      // There are no items in the database.
    }
  });
};

const addMenuItem = (item) => {
  const id = item[0];
  const itemJson = JSON.parse(item[1]);

  // Add item to our internal database
  itemJson.id = id;
  itemDatabase.push(itemJson);

  // Check if the item is on sale
  if (itemJson.sale_price < itemJson.price) {
    addSaleItem(id, itemJson);
  }
};

const addSaleItem = (id, item) => {
  const saleContainer = document.getElementById("deals-container");

  const saleItem = document.createElement("div");
  saleItem.classList.add("sale-item");

  const itemImage = document.createElement("img");
  itemImage.src = `./assets/images/food/${item.image}`;

  const itemDescription = document.createElement("div");
  itemDescription.classList.add("deal__description");
  const itemName = document.createElement("h2");
  itemName.classList.add("h2");
  itemName.innerText = item.name;
  const itemTagline = document.createElement("p");
  itemTagline.classList.add("light");
  itemTagline.innerText = item.tagline;
  itemDescription.appendChild(itemName);
  itemDescription.appendChild(itemTagline);

  saleItem.appendChild(itemImage);
  saleItem.appendChild(itemDescription);
  saleContainer.appendChild(saleItem);
};
