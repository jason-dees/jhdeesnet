import { createStore, applyMiddleware } from 'redux';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Jhdees from './components/Jhdees.js';
import reducer from './Reducers/reducer.js';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const middleware = [ thunk ];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);
class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <Jhdees />
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

export default App;