// Requerido
const path = require('path'); // objeto

console.log(path.basename(__filename)); // nome base do arquivo (require.js)

// My new modules
const myModule = require('./exports');
console.log(myModule);