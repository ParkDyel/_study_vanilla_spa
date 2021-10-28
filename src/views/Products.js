import { getProductList } from '/src/api/index.js';

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

  this.render = async () => {
    let $_textHTML = '<h1>Product Page 입니다.</h1>';
    $_textHTML += '<div class="product-list">';
    const $_productList = await getProductList();
    for (const $_product of $_productList) {
      $_textHTML += `<figure data-id='${$_product.id}'>
        <img src='${$_product.path}' alt='${$_product.title}'></img>
        <figcaption>${$_product.id} - ${$_product.title}</figcaption>
      </figure>`;
    }
    $_textHTML += '</div>';
    this.$node.innerHTML = $_textHTML;

    const $_elProductList = this.$node.querySelector('.product-list');

    $_elProductList.addEventListener('click', $__evt => {
      const $_target = $__evt.target.closest('figure');
      if ($_target) {
        $_target.classList.contains('select')
          ? $_target.classList.remove('select')
          : $_target.classList.add('select');
      }
    });
  };

  this.init();
}

export default Product;
