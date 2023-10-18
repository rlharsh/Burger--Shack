import { itemDatabase } from './firebase.js';

const categoryListing = [
    {
        name: "Burgers",
        icon: "Burger.svg",
        color: "#FFEF92"
    },
    {
        name: "Fries & More",
        icon: "Fries.svg",
        color: "#F5CAC3"
    },
    {
        name: "Chicken",
        icon: "Burger.svg",
        color: "#F7EDE2"
    },
    {
        name: "Desserts",
        icon: "Desserts.svg",
        color: "#A9D7DA"
    },
    {
        name: "Drinks",
        icon: "Drinks.svg",
        color: "#B6D7CF"
    },
    {
        name: "Coffee",
        icon: "Coffee.svg",
        color: "#F5F5F5"
    }
];

const loadCategories = () => {
    let itemFragment = document.createDocumentFragment();

    categoryListing.forEach(item => {
        let itemCard = document.createElement('div');
        itemCard.classList.add('category-item');
        itemCard.style.backgroundColor = item.color;

        let itemName = document.createElement('p');
        itemName.innerText = item.name;
        itemCard.appendChild(itemName);

        let itemImage = document.createElement('img');
        itemImage.src = `./assets/images/food/${item.icon}`;
        itemImage.classList.add('category-item__image');
        itemCard.appendChild(itemImage);

        itemCard.addEventListener('click', () => {
            processClickCategory(item.name);
        });

        itemFragment.appendChild(itemCard);
    });

    document.getElementById('categories').appendChild(itemFragment);
};

const processClickCategory = (category) => {
    let itemsInCategory = [];
    itemDatabase.forEach(item => {
        if (item.category === category.toLowerCase()) {
            itemsInCategory.push(item);
        }
    });
    showCategory(itemsInCategory);
};

const showCategory = (items) => {
    const categoryContainer = document.getElementById('modal-category');

    if (categoryContainer.classList.contains('hidden')) {
        categoryContainer.classList.remove('hidden');
    }

    let itemFragment = document.createDocumentFragment();
    const categoryListingContainer = document.getElementById('category-lising-container');
    items.forEach(item => {

    });
};

loadCategories();