function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
  }
}
initAccordion();

function initSmoothScroll() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    // window.scrollTo(x, y);
    // or
    // window.scrollTo({
    //   top: section.offsetTop,
    //   behavior: "smooth",
    // });
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initSmoothScroll();

function initAnimeScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    function animeScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const positionToAnimate = sectionTop - window.innerHeight * 0.6;
        const isSectionVisible = positionToAnimate < 0;
        if (isSectionVisible) {
          section.classList.add("active");
        }
        // console.log("sectionTop:", sectionTop);
      });
    }
    animeScroll();
    window.addEventListener("scroll", animeScroll);
  }
}
initAnimeScroll();
