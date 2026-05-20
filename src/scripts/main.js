'use strict';

const button = document.querySelector('.subscribe__button');

button.addEventListener('click', () => {
  const input = document.querySelector('.subscribe__input');

  input.value = '';
});
