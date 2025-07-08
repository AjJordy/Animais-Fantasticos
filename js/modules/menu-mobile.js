import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuMobileButton = document.querySelector(menuButton);
    this.menuMobileList = document.querySelector(menuList);
    this.activeClass = "active";
    this.events = ["click", "touchstart"];
    if (events !== undefined) {
      this.events = events;
    }

    this.openMenuMobile = this.openMenuMobile.bind(this);
  }

  openMenuMobile(event) {
    event.preventDefault();
    this.menuMobileList.classList.add(this.activeClass);
    this.menuMobileButton.classList.add(this.activeClass);
    outsideClick(this.menuMobileList, this.events, () => {
      this.menuMobileList.classList.remove(this.activeClass);
      this.menuMobileButton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((userEvent) => {
      this.menuMobileButton.addEventListener(userEvent, this.openMenuMobile);
    });
  }

  init() {
    if (this.menuMobileButton && this.menuMobileList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
