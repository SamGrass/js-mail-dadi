// creo un bottone che alla pressione dia un numero random all'utente e alla cpu
const button = document.getElementById("lancio");

button.addEventListener ("click",
    function () {
        let userRoll = Math.floor(Math.random() * 6) + 1;
        let cpuRoll = Math.floor(Math.random() * 6) + 1;
        console.log(userRoll, cpuRoll);

        // in base al numero più alto dichiaro il vincitore
    }
    
);