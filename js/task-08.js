// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const inputRef = document.querySelector('#controls > input');
const renderBtnRef = document.querySelector('button[data-action="render"]');
const destroyBtnRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let amount = 0;
let boxWidth = 30;
let boxHeight = 30;

renderBtnRef.addEventListener('click', handleOnRenderBtn);
destroyBtnRef.addEventListener('click', handleOnDestroyBtn);

function handleOnRenderBtn(event) {
  amount = Number(inputRef.value);
  boxesRef.append(...createBoxes(amount));
  inputRef.value = '';
}

function handleOnDestroyBtn(event) {
  destroyBoxes();
  inputRef.value = '';
}

function createBoxes(amount) {
  const boxesRefsArray = [];

  for (let i = 1; i <= amount; i += 1) {
    const boxRef = document.createElement('div');
    boxRef.style.width = `${boxWidth}px`;
    boxRef.style.height = `${boxHeight}px`;
    boxRef.style.margin = `10px`;
    boxRef.style.backgroundColor = `rgb${getRandomRgb()}`;
    boxWidth += 10;
    boxHeight += 10;
    boxesRefsArray.push(boxRef);
  }
  return boxesRefsArray;
}

function destroyBoxes() {
  while (boxesRef.hasChildNodes()) {
    boxesRef.removeChild(boxesRef.firstChild);
  }
  boxWidth = 30;
  boxHeight = 30;
}

function getRandomRgb() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `(${r},${g},${b})`;
}
