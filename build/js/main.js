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

// Нашел в сети этот код с кучей функций, но это все не заработало
// var accordion = (function (element) {
//   debugger;
//   var getItem = function (elements, className) {
//     var element = undefined;
//     elements.forEach(function (item) {
//       if (item.classList.contains(className)) {
//         element = item;
//       }
//     });
//     return element;
//   };
//   return function () {
//     var mainElement = {},
//       items = {},
//       contents = {};
//
//     var actionClick = function (evt) {
//         if (!evt.target.classList.contains('page-footer__toggle-wrapper')) {
//           return;
//         }
//         evt.preventDefault(); // отменям стандартное действие
//         // получаем необходимые данные
//         var blockButtons = evt.target,
//           item = blockButtons.parentElement,
//           itemActive = getItem(items, 'page-footer__lists--open');
//         if (itemActive === undefined) {
//           item.classList.add('page-footer__lists--open');
//         } else {
//           itemActive.classList.remove('page-footer__lists--open');
//           // если следующая вкладка не равна активной
//           if (itemActive !== item) {
//             item.classList.add('page-footer__lists--open');
//           }
//         }
//       },
//
//       setupListeners = function () {
//         mainElement.addEventListener('click', actionClick);
//       };
//
//     return {
//       init: function (element) {
//         // mainElement = (typeof element === 'string' ? document.querySelectorAll(element) : element);
//         mainElement = document.querySelectorAll('..page-footer__toggle-wrapper');
//         // items = mainElement.querySelectorAll('.page-footer__toggle-wrapper');
//         items = document.querySelectorAll('.page-footer__lists');
//         setupListeners();
//       }
//     }
//   }
// })();

//=====================================================================================

// Нашел в сети, попытался переделать под свою вестку. Один блок открывает, второй нет
// var panelItem = document.querySelectorAll('.page-footer__toggle-wrapper'),
//   bodyItem = document.querySelectorAll('.page-footer__lists');
// panelItem.__proto__.forEach = [].__proto__.forEach;
//
// var activePanel;
// panelItem.forEach(function(item, i, panelItem) {
//   item.addEventListener('click', function(evt) {
//     debugger;
//     //show new thingy;
//     this.classList.toggle('page-footer__lists--open');
//     this.nextElementSibling.classList.toggle('page-footer__lists--open');
//     //hide old thingy
//     if (activePanel) {
//       activePanel.classList.toggle('page-footer__lists--open');
//       activePanel.nextElementSibling.classList.toggle('page-footer__lists--open');
//     }
//     //update thingy
//     activePanel = (activePanel === this) ? 0 : this;
//   });
// });

//========================================================================================

// С примера который ты мне скинул изначально - работает но не совсем так как нужно
var acc = document.querySelectorAll('.page-footer__toggle-wrapper');
var i;
var panel = document.querySelectorAll('.page-footer__lists');
var buttonBlock = document.querySelectorAll('.page-footer__toggle');
var buttonOpen = document.querySelector('.page-footer__icon--open');
var buttonClose = document.querySelector('.page-footer__icon--close');

for (i = 0; i < acc.length; i++) {
  debugger;
  acc[i].addEventListener('click', function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle('page-footer__lists--open');

    if (buttonBlock[i]) {
      if (this.classList.contains('page-footer__lists--open')) {
        buttonOpen.style.display = 'none';
        buttonClose.style.display = 'block';
      } else {
        buttonOpen.style.display = 'block';
        buttonClose.style.display = 'none';
      }
    };

    /* Toggle between hiding and showing the active panel */
    panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

//======================================================================================

// МОЙ СТАРЫЙ КОД - СТРАШНО НА НЕГО СМОТРЕТЬ((
// var footerInfo = document.querySelector('.page-footer__info');
// var toggleInfoBlock = footerInfo.querySelector('.page-footer__toggle-wrapper');
// var listInfo = footerInfo.querySelector('.page-footer__info-lists--close');
// var buttonInfo = toggleInfoBlock.querySelector('.page-footer__toggle');
// var buttonOpenInfo = buttonInfo.querySelector('.page-footer__icon--open');
// var buttonCloseInfo = buttonInfo.querySelector('.page-footer__icon--close');
//
// var footerContacts = document.querySelector('.page-footer__contacts');
// var toggleContactsBlock = footerContacts.querySelector('.page-footer__toggle-wrapper');
// var listContacts = footerContacts.querySelector('.page-footer__list-contacts--open');
// var buttonContacts = toggleContactsBlock.querySelector('.page-footer__toggle');
// var buttonOpenContacts = buttonContacts.querySelector('.page-footer__icon--open');
// var buttonCloseContacts = buttonContacts.querySelector('.page-footer__icon--close');
//
// toggleInfoBlock.addEventListener('click', function(evt) {
//   evt.preventDefault();
//   if (listInfo.classList.contains('page-footer__info-lists--close')) {
//     listInfo.classList.toggle('page-footer__info-lists--close');
//     listContacts.classList.remove('page-footer__list-contacts--open');
//     listContacts.classList.add('page-footer__list-contacts--close');
//
//     buttonOpenInfo.style.display = 'none';
//     buttonCloseInfo.style.display = 'block';
//   } else if ('page-footer__info-lists--open') {
//     listInfo.classList.toggle('page-footer__info-lists--close');
//     listContacts.classList.remove('page-footer__list-contacts--close');
//     listContacts.classList.add('page-footer__list-contacts--open');
//
//     buttonOpenInfo.style.display = 'block';
//     buttonCloseInfo.style.display = 'none';
//   }
// });
//
// toggleContactsBlock.addEventListener('click', function (evt) {
//   evt.preventDefault();
//   if (listContacts.classList.contains('page-footer__list-contacts--open')) {
//     listContacts.classList.remove('page-footer__list-contacts--open');
//     listContacts.classList.add('page-footer__list-contacts--close');
//     listInfo.classList.remove('page-footer__info-lists--close');
//     listInfo.classList.add('page-footer__info-lists--open');
//
//     buttonCloseContacts.style.display = 'none';
//     buttonOpenContacts.style.display = 'block';
//   } else if ('page-footer__list-contacts--close') {
//     listContacts.classList.remove('page-footer__list-contacts--close');
//     listContacts.classList.add('page-footer__list-contacts--open');
//     listInfo.classList.remove('page-footer__info-lists--open');
//     listInfo.classList.add('page-footer__info-lists--close');
//
//     buttonCloseContacts.style.display = 'block';
//     buttonOpenContacts.style.display = 'none';
//   }
// });

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

