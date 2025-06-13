window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const mainMenuItems = document.querySelectorAll(".main-menu li");
  const submenuColumns = document.querySelectorAll(".submenu-column");
  const megaMenu = document.querySelector(".mega-menu");

  function clearActive() {
    mainMenuItems.forEach(el => el.classList.remove("active"));
    submenuColumns.forEach(el => el.classList.remove("active"));
  }

  function activateByIndex(index) {
    const mainItem = document.querySelector(`.main-menu li[data-index="${index}"]`);
    const subColumn = document.querySelector(`.submenu-column[data-index="${index}"]`);
    if (mainItem) mainItem.classList.add("active");
    if (subColumn) subColumn.classList.add("active");
  }

  mainMenuItems.forEach(item => {
    const index = item.dataset.index;
    item.addEventListener("mouseenter", () => {
      clearActive();
      activateByIndex(index);
      header.classList.add("hovering");
    });
  });

  submenuColumns.forEach(col => {
    const index = col.dataset.index;

    col.addEventListener("mouseenter", () => {
      clearActive();
      activateByIndex(index);
      header.classList.add("hovering");
    });

    col.querySelectorAll("li").forEach(li => {
      li.addEventListener("mouseenter", () => {
        clearActive();
        activateByIndex(index);
        header.classList.add("hovering");
      });
    });
  });

  megaMenu.addEventListener("mouseleave", () => {
    clearActive();
    header.classList.remove("hovering");
  });

  header.addEventListener("mouseleave", () => {
    clearActive();
    header.classList.remove("hovering");
  });
});
