const horas = document.getElementById("Horas");
const minutos = document.getElementById("Minutos");
const segundos = document.getElementById("Segundos");
const body = document.body;

const relogio = setInterval(function time() {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    body.className = "";

    if (hr >= 6 && hr < 8) {
        body.classList.add("early-morning");
    } else if (hr >= 8 && hr < 10) {
        body.classList.add("morning");
    } else if (hr >= 10 && hr < 12) {
        body.classList.add("late-morning");
    } else if (hr >= 12 && hr < 14) {
        body.classList.add("early-afternoon");
    } else if (hr >= 14 && hr < 16) {
        body.classList.add("afternoon");
    } else if (hr >= 16 && hr < 18) {
        body.classList.add("late-afternoon");
    } else if (hr >= 18 && hr < 20) {
        body.classList.add("early-night");
    } else if (hr >= 20 && hr < 22) {
        body.classList.add("night");
    } else {
        body.classList.add("-late-night");
    }
}, 1000)


