/* const element = document.createElement('h1');
element.innerText = 'Hello World';

const container = document.getElementById('app');
container.append(element); */

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import './bootstrap'

const container = document.getElementById('app')


ReactDOM.render(<Badge/>, container);