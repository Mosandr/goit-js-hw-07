// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', handleOnInputChange);

function handleOnInputChange(event) {
  const fontSize = fontSizeInRange(10, 54, event.target.valueAsNumber);
  spanRef.style.fontSize = `${fontSize}px`;
}

function fontSizeInRange(min, max, currentRange) {
  return Math.round((currentRange * (max - min)) / 100) + min;
}
