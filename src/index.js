/* const element = document.createElement('h1');
element.innerText = 'Hello World';

const container = document.getElementById('app');
container.append(element); */

import React from 'react';
import ReactDOM from 'react-dom';
import Badge from './components/Badge';
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

const container = document.getElementById('app')


ReactDOM.render(<Badge 
    firstName="José" 
    lastName="Robles" 
    jobTitle="Kickass senior dev" 
    avatarUrl="https://i.imgur.com/HTBd54R.jpg"
    twitter="jossrc10"
    />,
container);