import { setNavDropdown } from './dropdown.js';
import { useModal } from './modal.js';

function main() {
  useModal();
  setNavDropdown();
}

window.addEventListener('load', main);
