window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const mainMenuItems = document.querySelectorAll(".main-menu li");
  const submenuColumns = document.querySelectorAll(".submenu-column");
  const megaMenu = document.querySelector(".mega-menu");
  const floatingNav = document.getElementById("floatingNav");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

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

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  let scrollTimer = null;
  let lastKnownScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (scrollTimer !== null) {
      clearTimeout(scrollTimer);
    }

    scrollTimer = setTimeout(() => {
      const scrollY = window.scrollY;
      const targetTop = 380 + (scrollY - lastKnownScrollY) * 0.2;
      const clampedTop = Math.min(Math.max(200, targetTop), 600);
      floatingNav.style.top = `${clampedTop}px`;
      lastKnownScrollY = scrollY;
    }, 150);
  });
});
