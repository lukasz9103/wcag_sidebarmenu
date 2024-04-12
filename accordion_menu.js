//menu sidebar
document.addEventListener("DOMContentLoaded", () => {
  const sidebarMenu = document.querySelector(".sidebarMenu ul");
  if (sidebarMenu) {
    const separatorList = sidebarMenu.querySelectorAll(".separator");
    separatorList.forEach((item, index) => {
      const panelId = `panel-${index}`;
      item.setAttribute("aria-controls", panelId);
      item.nextElementSibling.id = panelId;

      const toggleVisibility = () => {
        item.ariaExpanded = item.ariaExpanded !== "true";
        item.nextElementSibling.classList.toggle("is-visible");
      };

      item.addEventListener("click", toggleVisibility);
      item.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          toggleVisibility();
        }
      });
    });

    let currentItem = sidebarMenu.querySelector('.current-menu-ancestor');
    if (currentItem) {
      currentItem.querySelector('.sub-menu').classList.add('is-visible');
      currentItem.querySelector('button.separator').ariaExpanded = "true";

      let secondSubmenu = currentItem.querySelector('.sub-menu');
      if (secondSubmenu) {
        secondSubmenu.querySelector('.sub-menu').classList.add('is-visible');
        secondSubmenu.querySelector('button.separator').ariaExpanded = "true";
      }
    }
  }
});