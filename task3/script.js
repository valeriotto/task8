const trafficLight = document.querySelector('#trafficLight');//находим и присваиваем значение
//!Изменил название константы, не как показано в задании, проверить чтобы не повлияло на следующие
//Создаём и описываем три функции
function makeGreen() {
   trafficLight.style.background = ('green');//смена цвета
   trafficLight.removeEventListener('click', makeGreen);//Останавливаем выполнение функции (удаляем событие)
   trafficLight.addEventListener('click', makeYellow);//Запускаем следующую
}

function makeYellow() {
   trafficLight.style.background = ('yellow');
   trafficLight.removeEventListener('click', makeYellow);
   trafficLight.addEventListener('click', makeRed);
}

function makeRed() {
   trafficLight.style.background = ('red');
   trafficLight.removeEventListener('click', makeRed);
   trafficLight.addEventListener('click', makeGreen);
}
//Запускаем обработчики событий по клику на объект
trafficLight.addEventListener('click', makeRed);
trafficLight.addEventListener('click', makeYellow);
trafficLight.addEventListener('click', makeGreen);