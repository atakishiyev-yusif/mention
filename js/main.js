const bookmark = document.querySelectorAll(".bookmark");

bookmark.forEach((item, i) => {
  item.addEventListener("click", () => {
    item.classList.toggle("bookmark-icon-fill");
  });
});
