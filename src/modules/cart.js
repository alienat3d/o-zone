'use strict';

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
};

export default cart;
