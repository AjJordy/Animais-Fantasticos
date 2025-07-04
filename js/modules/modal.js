export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openModal = document.querySelector(openButton);
    this.closeModal = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.openModal.addEventListener("click", this.eventToggleModal);
    this.closeModal.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutsideModal);
  }

  init() {
    if (this.openModal && this.closeModal && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
