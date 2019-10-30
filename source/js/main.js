'use strict';

// Кнопки управления
var ESC_KEYCODE = 27;
var openModalBatton = document.querySelector('.page-header__button');
var modal = document.querySelector('.modal');
var closeModalButton = document.querySelector('.modal__close');

// Форма
var form = modal.querySelector('form');
var userName = modal.querySelector('#modal-name');
var userTel = modal.querySelector('#modal-tel');
var userMessage = modal.querySelector('textarea');
var body = document.querySelector('body');

var isStorageSupport = true;
var storageName = '';
var storageTel = '';
var storageMessage = '';

// Проверка доступности Local Storage
try {
  var storageName = localStorage.getItem('name');
  var storageTel = localStorage.getItem('tel');
  var storageMessage = localStorage.getItem('message');
} catch (err) {
  isStorageSupport = false;
};

openModalBatton.addEventListener('click', function() {
  if (modal.classList.contains('modal--close')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  } else {
    modal.classList.add('modal--opened');
    modal.classList.remove('modal--closed');
  }
});

closeModalButton.addEventListener('click', function() {
  if (modal.classList.contains('modal--opened')) {
    modal.classList.remove('modal--opened');
    modal.classList.add('modal--close');
  } else {
    modal.classList.add('modal--close');
    modal.classList.remove('modal--opened');
  }
});

openModalBatton.addEventListener('click', function (evt) {
  evt.preventDefault()
  modal.classList.toggle('modal--close');
  modal.classList.add('modal--show');
  modal.classList.remove('modal--error');
  if (storageName || storageTel || storageMessage) {
    userName.value = storageName;
    userTel.value = storageTel;
    userMessage.value = storageMessage;
    userName.focus();
  } else {
    userTel.focus();
  }
});

form.addEventListener('submit', function (evt) {
  if (!userName.value || !userTel.value || !userMessage.value) {
    evt.preventDefault();
    modal.classList.remove('modal--error');
    modal.offsetWidth = popup.offsetWidth;
    modal.classList.add('modal--error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', arrival.value);
      localStorage.setItem('tel', departure.value);
      localStorage.setItem('message', departure.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.add('modal--close');
    modal.classList.remove('modal--error');
  }
});

// body.addEventListener('click', function (evt) {
//   modal.classList.toggle('modal--show');
//   modal.classList.add('modal--close');
// })
