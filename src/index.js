import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from './state';

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

console.log(1);
store.dispatch({
    type: 'INCREASE_COUNTER'
});

console.log(2);
store.dispatch({
    type: 'INCREASE_COUNTER'
});

