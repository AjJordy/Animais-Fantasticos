import SmoothScroll from "./modules/scroll-smooth.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tabs.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import AnimeScroll from "./modules/scroll-animation.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import DropdownMenu from "./modules/dropdown-menu.js";
import MenuMobile from "./modules/menu-mobile.js";
import Funcionamento from "./modules/funcionamento.js";

const smoothScroll = new SmoothScroll('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

initFetchAnimais("../../animaisapi.json", ".numeros-grid");

const animeScroll = new AnimeScroll('[data-anime="scroll"]');
animeScroll.init();

const dropdownMenus = new DropdownMenu("[data-dropdown]");
dropdownMenus.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento("[data-semana]");
funcionamento.init();

// fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
