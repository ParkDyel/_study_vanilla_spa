import { routerPush } from '/router.js';

function Header({ parent, props }) {
  this.init = () => {
    this.state = {
      name: props?.name ?? '고객',
    };

    this.$node = document.createElement('header');
    parent.appendChild(this.$node);
    this.setState(this.state);

    const $_nav = this.$node.querySelector('nav');
    $_nav.addEventListener('click', $__evt => {
      const $_target = $__evt.target.closest('span.router-link');
      if ($_target) {
        const $_path = $_target.getAttribute('route');
        routerPush($_path);
      }
    });
  };

  this.setState = $__nextState => {
    this.state = $__nextState;
    this.render();
  };

  this.render = () => {
    this.$node.innerHTML = `<ul>
      <li class="left">
        <h1 class="title">불타는 소각로</h1>
        <nav>
          <li>
            <h2>
            <ul>
              <li><span><span>Dummy</span></span></li>
              <li><span class="router-link" route="/"><span>Home</span></span></li>
              <li><span class="router-link" route="/product"><span>Product</span></span></li>
            <ul>
            </h2>
          </li>
        </nav>
      </li>

      <li class="right"><h3>${this.state.name}님!</h3></li>
    </ul>`;
  };

  this.init();
}

export default Header;
