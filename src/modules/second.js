import getData from './get-data.js';

const second = () => {
  const cartButton = document.querySelector('#cart');

  getData().then((data) => {
    console.log(data);
  });
};

export default second;
