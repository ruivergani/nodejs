const {EventEmitter} = require('events');
const ev = new EventEmitter()  // classe na estrutura de funcao

ev.on('saySomething', () => { // escutar evento
    console.log('Eu ouvi o evento.')
})

ev.emit = ('saySomething') // emitir um evento



// How events can be the base of new functionalities
const { inherits } = require('util');
const { EventEmitter} = require('events');

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter); // Constructor

const chapolin = new Character('chapolin');