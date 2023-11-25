const bookmark = document.querySelectorAll(".bookmark");
const categoryFilters = document.querySelectorAll(
  ".freelancer-page-category-filter"
);
const messagesTitle = document.querySelector(".messages-title");
const messagesContent = document.querySelector(".messages-content");

messagesTitle.addEventListener("click", (e) => {
  messagesTitle.classList.toggle("open-messages");
  messagesContent.classList.toggle("hidden");
});

bookmark.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("bookmark-icon-fill");
  });
});

categoryFilters.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      location.href = "./search-page.html";
      event.preventDefault();
    }
  });
