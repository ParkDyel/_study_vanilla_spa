import MOCK from './mock.js';

const MODE_TYPE = Object.freeze({
  DEBUG: 0,
  PROD: 10,
});

const MODE = MODE_TYPE.DEBUG;

let server_url = '';

// [ ] isAbsoluteUrl: 어떤 식으로 판별하는지 확인해야함. -> 아마 라이브러리가 있겠지?

const isRelative = $__url => {
  return typeof $__url === 'string' ? $__url.startsWith('/') : false;
};

export const init = $__url => {
  if ($__url) {
    server_url = $__url;
  }
};

export const get = async ($__url, { headers, body } = {}) => {
  let $_url = '';
  if (MODE === MODE_TYPE.DEBUG) {
    const $_mockData = MOCK?.GET?.[$__url];
    return $_mockData ? $_mockData : false;
  }

  if (isRelative($__url)) {
    $_url = server_url + $__url;
  } else {
    $_url = $__url;
  }

  const resp = await fetch($_url, { headers, body });

  // resp error 처리 로직
  return resp;
};

export const getProductList = () => {
  return get('product');
};

export default {
  init,
  get,
  getProductList,
};
