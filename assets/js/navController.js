export const handleNavBar = (type) => {
  hideAllNav();
  if (type === "item") {
    showItemNavBar();
  } else if (type === "main") {
    showMainNavBar();
  }
};

const showMainNavBar = () => {
  document.getElementById("main-nav").classList.remove("hidden");
};

const showItemNavBar = () => {
  document.getElementById("secondary-nav").classList.remove("hidden");
};

const hideAllNav = () => {
  document.getElementById("main-nav").classList.add("hidden");
  document.getElementById("secondary-nav").classList.add("hidden");
};
