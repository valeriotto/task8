const linkText = document.querySelector('.linkText');//Находим текст ссылки

linkText.addEventListener('click', function (event) {//Создаем метод по клику с функцией
   event.preventDefault();//метод возврата //?при нажатии на кнопку отмена ссылка пропадает
   const userText = prompt('Введите текст'); //выводим всплывашку и записываем в константу введеный текст
   linkText.textContent = userText; //заменяем текст ссылки на введеный текст
})