'use strict';

// import getData from './get-data.js'; // ? 0.1 - модули не обязательно всегда импортировать и запускать в точке входа.

const cart = () => {
  const cartButton = document.querySelector('#cart'),
    cartModal = document.querySelector('.cart'),
    cartCloseButton = cartModal.querySelector('.cart-close');

  const openCart = () => {
    cartModal.style.display = 'flex';
  };

  const closeCart = () => {
    cartModal.style.display = '';
  };

  cartButton.addEventListener('click', openCart);
  cartCloseButton.addEventListener('click', closeCart);

  // console.log(getData()) // 0.2
};

export default cart;
