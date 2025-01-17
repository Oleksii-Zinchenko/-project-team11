export function loadMobileMenu() {
  fetch("../partials/mobile-menu.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Ошибка загрузки: ${response.status} - ${response.statusText}`
        );
      }
      return response.text();
    })
    .then((data) => {
      console.log("Файл успешно загружен:", data);
      const mobileMenuContainer = document.getElementById("mobile-menu");
      mobileMenuContainer.innerHTML = data;

      // Инициализируем мобильное меню после загрузки
      initializeMobileMenu();
    })
    .catch((error) => {
      console.error("Ошибка загрузки мобильного меню:", error);
    });
}

function initializeMobileMenu() {
  const menuOpenBtn = document.querySelector(".mobile-open-btn");
  const menuCloseBtn = document.querySelector(".mobile-menu-close-btn");
  const menuContainer = document.querySelector(".backdrop");
  const mobileMenuBtns = document.querySelectorAll(".mobile-menu-list-link");

  if (menuOpenBtn) {
    menuOpenBtn.addEventListener("click", () => {
      menuContainer.classList.add("is-open");
    });
  }

  if (menuCloseBtn) {
    menuCloseBtn.addEventListener("click", () => {
      menuContainer.classList.remove("is-open");
    });
  }

  mobileMenuBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      menuContainer.classList.remove("is-open");
    });
  });
}
