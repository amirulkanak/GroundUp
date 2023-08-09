const mbtn = $("#menu_mbtn");
const mitems = $("#mobile_menu_items");

mbtn.click(navToggle);

function navToggle() {
  mbtn.toggleClass("open_mbtn");
  mitems.toggleClass("active");
}
