const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
   alert('Служит для вывода в консоль');
}
)

const alertLog = document.querySelector('#alertLog');

alertLog.addEventListener('click', () => {
   alert('Служит для вывода уведомления');
}
)

const promtLog = document.querySelector('#promtLog');

promtLog.addEventListener('click', () => {
   alert('Служит для ввода текста');
}
)