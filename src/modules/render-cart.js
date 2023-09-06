const renderCart = (goods) => {
  // 3.1 (начало в cart.js) Получаем контейнер модального окна корзины, где мы будем отрисовывать товары добавленные на покупку.
  const cartWrapper = document.querySelector('.cart-wrapper');

  cartWrapper.innerHTML = '';
  // 3.2 Однако есть ещё нюанс, который заключается в том, что когда у нас нет в корзинке товаров, то должен показываться параграф с надписью "Ваша корзина пока пуста". Поэтому нам стоит также проверять длину нашего массива.
  if (goods.length === 0) {
    cartWrapper.insertAdjacentHTML(
      'beforeend',
      `
      <div id="cart-empty">
        Ваша корзина пока пуста
      </div>
    `
    );
  } else {
    goods.forEach((goodsItem) => {
      cartWrapper.insertAdjacentHTML(
        'beforeend',
        `
          <div class="card" data-id="${goodsItem.id}">
            ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
            <div class="card-img-wrapper">
              <span class="card-img-top" style="background-image: url('${
                goodsItem.img
              }')"></span>
            </div>
            <div class="card-body justify-content-between">
              <div class="card-price">${goodsItem.price} ₽</div>
              <h5 class="card-title">${goodsItem.title}</h5>
              <button class="btn btn-primary">Удалить</button>
            </div>
          </div>
        `
      );
    });
  }
};

export default renderCart;
