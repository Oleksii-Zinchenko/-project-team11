// header.js
export function loadHeader() {
  fetch("../partials/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка загрузки");
      }
      return response.text();
    })
    .then((data) => {
      // Вставляем содержимое в элемент с id "header"
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => {
      console.error("Ошибка загрузки заголовка:", error);
    });
}
