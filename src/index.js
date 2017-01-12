import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Weather from './components/Weather'
import './styles/app.scss'


render(<Weather/>, document.getElementById('root'))

// import styles from './styles/styles.scss'
// import React from 'react';
// import ReactDOM from 'react-dom';
// //import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import App from './js/Components/App';
// import Weather from './js/Components/Weather';
//
// ReactDOM.render(<Weather/>, document.getElementById('root'));
