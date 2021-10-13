import Header from './Header.js';

const $app = document.querySelector('#app');

new Header({ parent: $app, props: { name: 'Dyel' } });
