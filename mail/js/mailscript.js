// creo lista mail da accettare
const approvedList = ["luigi@gmail.com", "beppe@gmail.com", "lorenzo@gmail.com", "marco@gmail.com"];

console.log(approvedList);
// Chiedi all’utente la sua email 
let userButton = document.querySelector("button");
let userMail = document.querySelector(".mail")


console.log(userButton, userMail);
userButton.addEventListener("click",
    function () {
        let inputMail = userMail.value;

        console.log(inputMail);

        let result = "Accesso Negato";


        // controlla che sia nella lista di chi può accedere stampa un messaggio appropriato sull’esito del controllo.
        for (let i = 0; i < approvedList.length; i++) {
            const access = approvedList[i];
            
            if (inputMail === access) {
                result = "Accesso Consentito"
            }
        }

        console.log(result);
       
    }

);

