export default function initModal() {
  const openModal = document.querySelector('[data-modal="abrir"]');
  const closeModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (openModal && closeModal && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }
    function clickOutsideModal(event) {
      if (event.target === this) {
        toggleModal(event);
      }
    }
    openModal.addEventListener("click", toggleModal);
    closeModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", clickOutsideModal);
  }
}
