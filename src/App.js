import React from 'react';
import {
    View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

// Provider works together with the store. It's communication glue.
// Provider can have only one single child. 

const App = () => {
    return (
        <Provider
            store={createStore(reducers)}
        >
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack"/>
                <LibraryList />
            </View>

        </Provider>
    )
};

export default App;