import getData from './get-data.js';
import renderGoods from './render-goods.js';

const load = () => {
  const cartButton = document.querySelector('#cart');

  getData().then((data) => {
    renderGoods(data)
  });
};

export default load;
