// Exportar uma funcao JS
function getFlagValue(flag){
    const index = process.argv.indexOf(flag) + 1; // search in array argv the flag (index)
    return process.argv[index];
}
module.exports = getFlagValue;

// or could have used init to execute the function