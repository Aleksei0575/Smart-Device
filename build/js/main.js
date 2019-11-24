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
    userTel.focus();
  } else {
    userName.focus();
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

// Скролл страницы
var anchorPromo = document.querySelector('.promo__anchor');
var buttonPromo = document.querySelector('.promo__button');


anchorPromo.addEventListener('click', function (evt) {
  evt.preventDefault();

  var blockAdvantages = anchorPromo.getAttribute('href');

  document.querySelector(blockAdvantages).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

buttonPromo.addEventListener('click', function (evt) {
  evt.preventDefault();

  var blockFeedback = buttonPromo.getAttribute('href');

  document.querySelector(blockFeedback).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Аккордеон для мобильной версии
const accordionButtons = document.querySelectorAll('.page-footer__toggle');

accordionButtons.forEach(elem => {
  elem.addEventListener('click', evt => {
    const parentAccordion = evt.target.closest('.page-footer__accordion');

    parentAccordion.classList.toggle('page-footer__accordion--open');
  })
})

// Маска номера телефона
var phoneMask = function () {
  var telInputs = Array.prototype.slice.call(document.querySelectorAll('input[type=tel]'));
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  telInputs.forEach(function (it) {
    if (it) {
      var mask = IMask(it, maskOptions);
    }
  });
}

phoneMask();

// ================================================================================
var tooltip = function () {
  // var elemCheckbox = document.getElementById('consent');
  var txt = "";
  if (document.getElementById('consent').validity.valueMissing) {
    txt = "Установите флажок";
  }
  document.getElementById('tooltip').innerHTML = txt;
}
tooltip();

// function myFunction() {
//   var inpObj = document.getElementById("id1");
//   if (!inpObj.checkValidity()) {
//     document.getElementById("demo").innerHTML = inpObj.validationMessage;
//   }
// }
