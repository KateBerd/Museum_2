'use strict';

const form = document.querySelector('.subscribe__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const input = form.querySelector('input');

  input.value = '';
  console.log('JS работает');
});
