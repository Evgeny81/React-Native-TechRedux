# Project with Redux and accordion animation.

Redux.

Action -> Reducer -> State

Action - an plain JS object that tells the reducer how to change its data. 
Requirement: must have type property.

Reducer - a function that returns (produces) some data.

State - data for our app to use.

Store (Reducer + State) - an object that holds the application's data.

Example:

Turn 'asdf' into array. Action contains 2 things: string + direction, command.
-> If the Action's type is 'split', Reducer'll turn it into an array. Reducer returns Array.
-> State consists ['a','s','d','f']