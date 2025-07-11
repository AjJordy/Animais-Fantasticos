import debounce from "./debounce";

export default class AnimeScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.halfWindow = window.innerHeight * 0.6;

    this.checkDistance = debounce(this.checkDistance.bind(this), 200);
  }

  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.halfWindow),
      };
    });
  }

  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo");
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo");
      }
    });
  }

  // animeScroll() {
  //   this.sections.forEach((section) => {
  //     const sectionTop = section.getBoundingClientRect().top;
  //     const positionToAnimate = sectionTop - this.halfWindow;
  //     const isSectionVisible = positionToAnimate < 0;
  //     if (isSectionVisible) {
  //       section.classList.add("ativo");
  //     } else if (section.classList.contains("ativo")) {
  //       section.classList.remove("ativo");
  //     }
  //   });
  // }

  init() {
    if (this.sections.length) {
      this.getDistance();
      // this.animeScroll();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
    }
    return this;
  }

  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
