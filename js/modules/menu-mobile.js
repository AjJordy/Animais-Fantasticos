import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuMobileButton = document.querySelector('[data-menu="button"]');
  const menuMobileList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuMobileButton && menuMobileList) {
    function openMenuMobile(event) {
      event.preventDefault();
      menuMobileList.classList.add("active");
      menuMobileButton.classList.add("active");
      outsideClick(menuMobileList, events, () => {
        menuMobileList.classList.remove("active");
        menuMobileButton.classList.remove("active");
      });
    }

    events.forEach((userEvent) => {
      menuMobileButton.addEventListener(userEvent, openMenuMobile);
    });
  }
}
