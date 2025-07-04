import SmoothScroll from "./modules/scroll-smooth.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tabs.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimeNumbers from "./modules/numbers.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimeScroll from "./modules/scroll-animation.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimeNumbers();
initFuncionamento();
initAnimeScroll();
