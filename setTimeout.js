// rodar funcao depois de milesegundos
const timeOut = 3000
const finished = () => { // function
    console.log("done");
}
let timer = setTimeout(finished, timeOut);

// ClearTimeOut cancelar um timeOut
clearTimeout(timer);

// SetInterval ira rodar uma funcao depois de N milesegundos
setInterval(finished, timeOut);

// Cancelar um intervalo
clearInterval(finished);
