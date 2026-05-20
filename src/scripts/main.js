'use strict';

const form = document.querySelector('.subscribe__form');
const button = document.querySelector('.subscribe__button');

if (form && button) {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const input = form.querySelector('.subscribe__input');

    if (input.value) {
      input.value = '';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}
