let inputText = document.querySelector('input');//находим и создаем переменную для поля ввода
let duplicateField = document.querySelector('#duplicateField');//находим и создаем переменную для пустого полля
let pushButton = document.querySelector('button');//находим и создаем переменную для кнопки

inputText.addEventListener('input', (event) => {//создаем метод по вводу с событием
   duplicateField.textContent = inputText.value;//меняем контент пустому полю со значение тестового поля со свойством value
})

pushButton.addEventListener('click', (event) => {//создаем метод при клике или вводе для кнопки с функуцией
   console.log(inputText.value);//передача в консоль значение введенного текста
   inputText.value = "";//замена контента в поле ввода на пустую строку
   duplicateField.textContent = "";//замена контента в дублирующе поле на пустую строку
   event.preventDefault();//сброса поведения кнопки отправки формы
})