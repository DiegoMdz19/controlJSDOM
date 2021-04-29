const tiempo = () => {
    let comienzo = new Date();
    let sec = 0;
    let min = 0;
    let hour = 0;
    let day = 0;
    setInterval(() => {
        let tiempoActual = new Date();
        let tiempoPasado = tiempoActual - comienzo;

        sec = Math.round(tiempoPasado / 1000);

        if (sec === 60) {
            tiempoActual = new Date();
            comienzo = new Date();
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hour++;
        }
        if (hour === 24) {
            hour = 0;
            day++;
        }

        console.log(
            `Han pasado ${day} días, ${hour} horas, ${min} minutos y ${sec} segundos`
        );
    }, 5000);
};

tiempo();
