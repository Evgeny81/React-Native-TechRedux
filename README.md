# Project with Redux and accordion animation.

Redux.

Action -> Reducer -> State

Action - an plain JS object that tells the reducer how to change its data. 
Requirement: must have type property. Action creator - js function, that returns an action.

Reducer - a function that returns (produces) some data. In other words, returns application state.
One reducer in one file.

State - data for our app to use.

Store - an object that holds the application's data (Reducer + State).

When we create Redux Store, we should pass at least one Reducer function, which produces State.

Example:

Turn 'asdf' into array. Action contains 2 things: string + direction, command.
-> If the Action's type is 'split', Reducer'll turn it into an array. Reducer returns Array.
-> State consists ['a','s','d','f']

const reducer = (state=[], action) => {
  if (action.type === 'split_string') {
    return action.payload.split(''); //we should return completely new array always
  }
  
  return state;
};

const store = Redux.createStore(reducer);

store.getState();

const action = { 
  type: 'split_string', 
  payload: 'asdf' //data we want to communicate to Reducer
};

store.dispatch(action);//Action automatically sends to all Reducers.
store.getState();

1. Redux creates new store using LibraryReducers. It runs LibraryReducers ones and get a list of objects. 
Each object represents one library we want to show on our screen.

2. After we created store, we pass it to the Provider as a prop. Provider is a React component, that adds 
communication between React and Redux.

3. App component renders to the screen, which renders LibraryList component.

4. Connect asks Provider: "What is your state is, give me access to it?". LibraryList is about to render.
 
5. Provider gives back a state, which contained in the store.

6. Connect calls mapStateToProps and returns object.

7. Props goes to LibraryList.
 
