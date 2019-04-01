var events = require('events');

var eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener1()
{
    console.log('Listener 1 Executed');
}
// listener #2
var listener2 = function listener2()
{
    console.log('Listener 2 Executed');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listener1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + " Listener(s) Listening To Connection Event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', listener1);

console.log("Listener 1 Will Not Listen Now");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + " Listener(s) Listening To Connection Event");

console.log("Program Ended.");
