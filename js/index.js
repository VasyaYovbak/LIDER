import "../scss/style.scss";
import {Partners} from "./partners";
import {NavPanel} from "./nav-panel";

const partners = new Partners();
const navPanel = new NavPanel();

partners.change_partners(0);
partners.addListenerToArrow();
navPanel.addListenerToLanguage();