export default function initAnimeScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    function animeScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const positionToAnimate = sectionTop - window.innerHeight * 0.6;
        const isSectionVisible = positionToAnimate < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
        // console.log("sectionTop:", sectionTop);
      });
    }
    animeScroll();
    window.addEventListener("scroll", animeScroll);
  }
}
