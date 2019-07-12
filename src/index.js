import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Avatar from './Avatar';
import './index.css';
import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<Demo name="Apoorve Verma" />, document.getElementById('root'));

ReactDOM.render(<Avatar/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
