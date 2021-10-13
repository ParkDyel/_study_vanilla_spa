function Product({ parent, props }) {
  this.init = () => {
    this.state = {
      name: props?.name,
    };

    this.$node = document.createElement('session');
    parent.innerHTML = '';
    parent.appendChild(this.$node);
    this.setState(this.state);
  };

  this.setState = $__nextState => {
    this.state = $__nextState;
    this.render();
  };

  this.render = () => {
    this.$node.innerHTML = `<h1>Product Page 입니다.</h1>`;
  };

  this.init();
}

export default Product;
