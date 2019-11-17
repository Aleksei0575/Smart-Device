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
var footerInfo = document.querySelector('.page-footer__info');
var toggleInfoBlock = footerInfo.querySelector('.page-footer__toggle-wrapper');
var listInfo = footerInfo.querySelector('.page-footer__info-lists--close');
var buttonInfo = toggleInfoBlock.querySelector('.page-footer__toggle');
var buttonOpenInfo = buttonInfo.querySelector('.page-footer__icon--open');
var buttonCloseInfo = buttonInfo.querySelector('.page-footer__icon--close');

var footerContacts = document.querySelector('.page-footer__contacts');
var toggleContactsBlock = footerContacts.querySelector('.page-footer__toggle-wrapper');
var listContacts = footerContacts.querySelector('.page-footer__list-contacts--open');
var buttonContacts = toggleContactsBlock.querySelector('.page-footer__toggle');
var buttonOpenContacts = buttonContacts.querySelector('.page-footer__icon--open');
var buttonCloseContacts = buttonContacts.querySelector('.page-footer__icon--close');

toggleInfoBlock.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (listInfo.classList.contains('page-footer__info-lists--close')) {
    listInfo.classList.toggle('page-footer__info-lists--close');
    listContacts.classList.remove('page-footer__list-contacts--open');
    listContacts.classList.add('page-footer__list-contacts--close');

    buttonOpenInfo.style.display = 'none';
    buttonCloseInfo.style.display = 'block';
  } else if ('page-footer__info-lists--open') {
    listInfo.classList.toggle('page-footer__info-lists--close');
    listContacts.classList.remove('page-footer__list-contacts--close');
    listContacts.classList.add('page-footer__list-contacts--open');

    buttonOpenInfo.style.display = 'block';
    buttonCloseInfo.style.display = 'none';
  }
});

toggleContactsBlock.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (listContacts.classList.contains('page-footer__list-contacts--open')) {
    listContacts.classList.remove('page-footer__list-contacts--open');
    listContacts.classList.add('page-footer__list-contacts--close');
    listInfo.classList.remove('page-footer__info-lists--close');
    listInfo.classList.add('page-footer__info-lists--open');

    buttonCloseContacts.style.display = 'none';
    buttonOpenContacts.style.display = 'block';
  } else if ('page-footer__list-contacts--close') {
    listContacts.classList.remove('page-footer__list-contacts--close');
    listContacts.classList.add('page-footer__list-contacts--open');
    listInfo.classList.remove('page-footer__info-lists--open');
    listInfo.classList.add('page-footer__info-lists--close');

    buttonCloseContacts.style.display = 'block';
    buttonOpenContacts.style.display = 'none';
  }
});

// Маска номера телефона
// var phoneMask = IMask(
//   document.querySelectorAll('input[type=tel]'), {
//     mask: '+{7}(000)000-00-00'
//   })

var element = document.querySelectorAll('input[type=tel]');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(element, maskOptions);




// var phoneMask = function () {
//   var telInputs = Array.prototype.slice.call(document.querySelectorAll('input[type=tel]'));
//   var maskOptions = {
//     mask: '+{7}(000)000-00-00'
//   };
//
//   telInputs.forEach(function (it) {
//     if (it) {
//       var mask = IMask(it, maskOptions);
//     }
//   });
// }

// (function () {
//   var telInputs = Array.prototype.slice.call(document.querySelectorAll('input[type=tel]'));
//   var maskOptions = {
//     mask: '+{7}(000)000-00-00'
//   };
//
//
//   telInputs.forEach(function (it) {
//     if (it) {
//       var mask = IMask(it, maskOptions);
//     }
//   });
// })();



















// var footerInfo = document.querySelector('.page-footer__info');
// if (footerInfo) {
//   var toggleInfoBlock = footerInfo.querySelector('.page-footer__toggle-wrapper');
//   var listInfo = footerInfo.querySelector('.page-footer__info-lists--close');
// }
//
// var footerContact = document.querySelector('.page-footer__contacts');
// if (footerContact) {
//   var toggleContactBlock = footerContact.querySelector('.page-footer__toggle-wrapper');
// }
//
// var classRemove = function (el, name) {
//   if (el.classList.contains(name)) {
//     el.classList.remove(name);
//   }
// };
//
// var classToggle = function (el1, el2, name) {
//   if (el1.classList.contains(name)) {
//     el1.classList.remove(name);
//     if (el2 && !el2.classList.contains(name)) {
//       el2.classList.add(name);
//     }
//   } else {
//     el1.classList.add(name);
//   }
// };
//
// if (toggleInfoBlock) {
//   classRemove(listInfo, 'page-footer__info-lists--close');
//
//   toggleInfoBlock.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     classToggle(footerInfo, footerContact, 'page-footer__info-lists--close');
//   });
// }

// if (toggleInfoBlock) {
//   classRemove(listInfo, 'page-footer__info-lists--close');
//
//   toggleInfoBlock.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     classToggle(footerInfo, footerContact, 'page-footer__accordion--close');
//   });
// }

// if (toggleContactBlock) {
//   classRemove(footerContact, 'footer__info_nojs');
//
//   toggleContactBlock.addEventListener('click', function (evt) {
//     evt.preventDefault();
//     classToggle(footerContact, footerInfo, 'page-footer__accordion--close');
//   });
// }


// var listInfo = footerInfo.querySelector('.page-footer__info-lists--close');
// undefined
// if (footerInfo) {
//   classRemove(listInfo, 'page-footer__info-lists--close');
// }
