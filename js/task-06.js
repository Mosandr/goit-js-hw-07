// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');
const inputValidLength = inputRef.dataset.length;
inputRef.placeholder = `Введите ${inputValidLength} символов`;

inputRef.addEventListener('blur', handleOnChangeInput);

function handleOnChangeInput(event) {
  const isValidInput = event.target.value.length == inputValidLength;
  event.target.classList.add(isValidInput ? 'valid' : 'invalid');
  event.target.classList.remove(isValidInput ? 'invalid' : 'valid');
}
