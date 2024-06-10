// creo un bottone che alla pressione dia un numero random all'utente e alla cpu
const button = document.getElementById("lancio");

button.addEventListener ("click",
    function () {
        let userRoll = Math.floor(Math.random() * 6) + 1;
        let cpuRoll = Math.floor(Math.random() * 6) + 1;
        console.log(userRoll, cpuRoll);

        document.getElementById("risultato-giocatore").innerHTML = userRoll;
        document.getElementById("risultato-cpu").innerHTML = cpuRoll;
        // in base al numero più alto dichiaro il vincitore

        let risultato = "PAREGGIO" ;

        if (userRoll > cpuRoll) {
            risultato = "VITTORIA";
        } else if (userRoll < cpuRoll) {
            risultato = "SCONFITTA";
        }

        document.getElementById("txt-risultato").innerHTML = risultato;
    }
    
);