const buttonMoreElements = document.querySelectorAll('.more');
const modalWindow = document.querySelector('.modal');

const openModal = () => {
  modalWindow.classList.remove('hidden');
};

const closeModal = () => {
  modalWindow.classList.add('hidden');
};

buttonMoreElements.forEach( (button) => {
  button.addEventListener( 'click', openModal);
});

modalWindow.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('overlay') ||
      target.classList.contains('modal__close')) {
    closeModal();
  }
})

window.addEventListener( 'keydown', function (event) {
  if ((event.keyCode === 27) && !(modalWindow.classList.contains('hidden'))) {
    event.preventDefault();
    closeModal();
  }
});
