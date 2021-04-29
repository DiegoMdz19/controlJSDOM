window.onload = init;
function init() {
    document.querySelector('.start').addEventListener('click', cronometrar);
    document.querySelector('.stop').addEventListener('click', parar);
    document.querySelector('.reiniciar').addEventListener('click', reiniciar);
    h = 0;
    m = 0;
    s = 0;
    document.getElementById('display').innerHTML = '00:00:00';
}
function cronometrar() {
    escribir();
    id = setInterval(escribir, 1000);
    document.querySelector('.start').removeEventListener('click', cronometrar);
}
function escribir() {
    let h2, m2, s2;
    s++;
    if (s > 59) {
        m++;
        s = 0;
    }
    if (m > 59) {
        h++;
        m = 0;
    }
    if (h > 24) {
        h = 0;
    }

    if (s < 10) {
        s2 = '0' + s;
    } else {
        s2 = s;
    }
    if (m < 10) {
        m2 = '0' + m;
    } else {
        m2 = m;
    }
    if (h < 10) {
        h2 = '0' + h;
    } else {
        h2 = h;
    }

    document.getElementById('display').innerHTML = h2 + ':' + m2 + ':' + s2;
}
function parar() {
    clearInterval(id);
    document.querySelector('.start').addEventListener('click', cronometrar);
}
function reiniciar() {
    clearInterval(id);
    document.getElementById('display').innerHTML = '00:00:00';
    h = 0;
    m = 0;
    s = 0;
    document.querySelector('.start').addEventListener('click', cronometrar);
}
