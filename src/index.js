import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import MainScreen from './components/screens/MainScreen';
import registerServiceWorker from './registerServiceWorker';
import './utils/styles/index.css';

ReactDOM.render(<MainScreen/>, document.getElementById('root'));
registerServiceWorker();
