import {getData} from './connection.js';

const url = ('https://jsonplaceholder.typicode.com/posts');

var container = document.createElement('div');
    container.setAttribute('class', 'container-fluid m-3 p-3 bg-dark jumbotron');

getData(url, container);

document.getElementById('main').appendChild(container);