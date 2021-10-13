function Header({ parent, props }) {
  this.init = () => {
    this.state = {
      name: props.name,
    };

    this.$node = document.createElement('header');
    parent.appendChild(this.$node);
    this.setState(this.state);
  };

  this.setState = $__nextState => {
    this.state = $__nextState;
    this.render();
  };

  this.render = () => {
    this.$node.innerHTML = `<h1>반갑습니다. 자 이제 시작이에요 ${this.state.name}님!</h1>`;
  };

  this.init();
}

export default Header;
