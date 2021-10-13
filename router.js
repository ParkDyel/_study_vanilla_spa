import Home from './src/views/Home.js';
import Product from './src/views/Products.js';

const routes = [
  {
    path: '/',
    name: 'home',
    components: Home,
  },
  {
    path: '/product',
    name: 'product',
    components: Product,
  },
];

let root = null;

const render = ($__path, $__parent = root) => {
  let $_childIdx = routes.findIndex(el => el.path === $__path);

  if ($_childIdx === -1) {
    $_childIdx = routes.findIndex(el => el.path === '*');
  }

  if ($_childIdx === -1) {
    console.warn('잘못된 경로입니다.');
    return;
  }

  const $_child = routes[$_childIdx];
  new $_child.components({ parent: $__parent });
};

function Route({ $app }) {
  root = $app;
  render(window.location.pathname);

  window.addEventListener('popstate', () => {
    render(window.location.pathname);
  });
}

export const routerPush = $__path => {
  window.history.pushState({}, $__path, window.location.origin + $__path);
  render($__path);
};

export default Route;
