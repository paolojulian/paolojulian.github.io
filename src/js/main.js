import { openModal, closeModal } from './modal';
import './navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppButton from './components/app-button';
// import axios from 'axios';

// Initialize Animate on scroll
AOS.init();

customElements.define('app-button', AppButton, { extends: 'button' });

window.closeModal = closeModal;

// Projects
// (async () => {
// const projects = await axios.get()
const projectCards = document.querySelectorAll('.js__project__card');
projectCards.forEach((card) => {
  card.addEventListener('click', () => {
    openModal('project-info');
    // closeModal('#project-info');
  });
});
// });