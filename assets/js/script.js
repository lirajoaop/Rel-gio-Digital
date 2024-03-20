const horas = window.document.getElementById('horas')
const minutos = window.document.getElementById('minutos')
const segundos = window.document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds ();

    if (h < 10) h = '0' + h;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;


    horas.textContent = h;
    minutos.textContent = min;
    segundos.textContent = sec;
})