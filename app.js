import Header from './src/components/Header.js';
import Route from './router.js';
const $app = document.querySelector('#app');
new Header({ parent: $app, props: { name: 'Dyel' } });
const $layout = document.createElement('div');
$app.appendChild($layout);
Route({ $app: $layout });
