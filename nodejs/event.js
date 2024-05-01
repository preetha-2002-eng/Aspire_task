// Title: event module of nodejs
// Author: Preetha I
// created date: 28/04/2024


const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const eventHandler = () => {
  console.log('An event occurred!');
};

myEmitter.on('myEvent', eventHandler);
myEmitter.emit('myEvent');
myEmitter.off('myEvent',eventHandler);
