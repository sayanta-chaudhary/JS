# Browser Events

https://javascript.info/events
An event is a signal that something has happened
All DOM nodes generate such signals (but events are not limited to DOM)

## Event handlers (Way to run function in case of user actions)

There are 3 ways to assign event handlers

- HTML attribute: onclick="..." 👎
- DOM property: el.onclick = function 👎
  But we can't assign more than one handler of the particular event
- Methods: `el.addEventListener(event, handler[, phase])`
  removeEventLister() - To remove the handler we need to pass exactly the function that was assigned

## Event object

- When an event happens, the browser creates an event object
  puts details into it and passes it as an argument to the handler
- `event.target` the element that originated the event
- `event.currentTarget` the current element that handles the event

## Event propagation (There's usually no real need)

## Event delegation (Event handling patterns)

Way to handle events more efficiently
Bubbling & capturing lay the foundation for event delegation

## Browser default actions

Many events automatically lead to certain actions performed by the browser
`event.preventDefault()`

## Custom events
