import SmoothScroll from "./modules/scroll-smooth.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabs.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initAnimeNumbers from "./modules/numbers.js";
import initFuncionamento from "./modules/funcionamento.js";
import initAnimeScroll from "./modules/scroll-animation.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initDropdownMenu();
initMenuMobile();
initAnimeNumbers();
initFuncionamento();
initAnimeScroll();
