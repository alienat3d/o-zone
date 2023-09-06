import renderCart from './render-cart.js';
import postData from './post-data.js';

// import getData from './get-data.js'; // ? 0.1 - модули не обязательно всегда импортировать и запускать в точке входа.

const cart = () => {
  // 2.3.4 (начало в render-goods.js)
  // * 4.1 Займёмся вычислением общей суммы всех товаров. Для этого сперва получим элемент, в который мы станем отрисовывать эту сумму и запишем его в переменную cartTotalSum.
  // * 5.1 Нам также нужно мочь удалять товары из нашей корзины. Для этого получим контейнер, в котором они находятся в корзине товаров.
  // * 6.1 Осталось реализовать отправку всего массива "cart". Для этого получим кнопку внутри модального окна корзины "Оформить заказ".
  const cartButton = document.querySelector('#cart'),
    cartModal = document.querySelector('.cart'),
    cartCloseButton = cartModal.querySelector('.cart-close'),
    cartTotalSum = cartModal.querySelector('.cart-total > span'),
    cartWrapper = cartModal.querySelector('.cart-wrapper'),
    cartSendButton = cartModal.querySelector('.cart-confirm'),
    goodsWrapper = document.querySelector('.goods');

  // 3.2 При клике на кнопку корзины у нас отработает функция openCart() и нам необходимо получить в этой функции всю нашу корзину с добавленными товарами. Для этого получим нашу переменную cart с данными из localStorage в ней, а затем запустим функцию renderCart() для отрисовки этих товаров в корзине и передадим туда данные из cart.

  const openCart = () => {
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];

    cartModal.style.display = 'flex';

    renderCart(cart);
    // 4.2 При открытии корзины также и текстовое содержимое общей суммы цены товаров му рассчитаем и видоизменим. Для этого обратимся к массиву cart и методом reduce() переберём массив. Он примет callback-функцию, а вторым аргументом начальное значение ("0") контейнера, в котором мы будем рассчитывать конечную сумму всех товаров, полученную при переборе элементов.
    // 4.3 Он также примет такие аргументы, как sum - некий аккумулятор, который будет накапливать сумму цен товаров, а также goodItem - каждый итерируемый элемент.
    cartTotalSum.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price; // так легко считается итоговая сумма в массиве
    }, 0);
  };

  const closeCart = () => {
    cartModal.style.display = '';
  };

  cartButton.addEventListener('click', openCart);
  cartCloseButton.addEventListener('click', closeCart);
  // 2.4.1 Теперь нам необходимо отсечь все элементы кроме самой кнопки «В корзину». Для этого мы используем event.target, для обнаружения кнопки. Из вёрстки мы увидели у неё класс ".btn-primary", вот по нему мы и будем проверять нужную нам кнопку.
  // 2.4.2 По клику на кнопку нам нужно будет найти родительский тег с классом ".card" для того, чтобы с него считать наш дата-атрибут с id товара.
  // 2.4.3 Далее с помощью метода dataset.id мы считаем значение нашего дата-атрибута.
  // 2.4.4 Осталось достать из localStorage нужный объект с этим id и записать его в массив. А далее сохранить этот массив в localStorage. Получим весь массив из localStorage методом getItem() с ключом "goods". Так мы получим данные в виде строчных данных. Но для того, чтобы нам получить массив мы можем конвертировать их в массив методом JSON.parse()
  // 2.4.5 Теперь из этого массива нам нужно достать объект с нужным нам id и записать его в новый массив нашей корзинки. Для этого создадим ещё одну переменную "cart" в которой пока будет пустой массив.
  // 2.4.6 Но если у нас теперь уже будет "cart" в localStorage, то нам также нужно проверять есть ли такой ключ в localStorage с помощью тернарного оператора, который означает следующее: Если у нас в localStorage есть массив с ключом "cart", тогда мы занесём в значение ключа "cart" массив с ключом "cart", иначе вернём пустой массив. Тернарный оператор состоит из "условие" ? "первый результат, если вернётся true" : "второй результат, если вернётся false".
  // 2.4.7 Теперь нашей задачей будет достать из массива "goods" необходимый нам объект (который добавляем в корзинку), записать его в массив "cart" и сохранить массив "cart" в localStorage с ключом "cart". Для этого создадим переменную goodItem, которой присвоим массив goods с методом перебора массива find(), который будет искать совпадения с нашим массивом и возвращать первый объект из массива, который подойдёт нам под условие. У него также будет callback-функция, которая в свою очередь получает каждый итерируемый item. А возвращать мы будем значение id этого item’а равного полученному id из дата-атрибута в переменной "id". Правда он в виде строки, поэтому напишем унарный плюс перед ним, чтобы превратить в числовой вид данных.
  // 2.4.8 Добавим полученный goodItem в массив cart и перезапишем массив cart в localStorage. Для этого мы обратимся к cart методом push() и передадим ему goodItem.
  // 2.4.9 Далее всё как мы делали с массивом goods - localStorage.setItem('cart', JSON.stringify(cart))
  // 3.1 Теперь, когда у нас добавляются товары в специальный контейнер "cart" в localStorage мы можем отрисовать их в модальном окне корзины по клику на кнопку корзины. (см. render-cart.js)
  goodsWrapper.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('btn-primary')) {
      const card = evt.target.closest('.card');
      const id = card.dataset.id;
      const goods = JSON.parse(localStorage.getItem('goods'));
      const cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [];
      const goodItem = goods.find((item) => {
        return item.id === +id;
      });

      cart.push(goodItem);

      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });
  // 5.2 Также и здесь мы воспользуемся делегированием и повесим на контейнер с товарами в корзине cartWrapper обработчик события по клику и сделаем такое же условие, что только при условии нахождения у элемента класса "btn-primary" мы сперва будем находить весь массив cart.
  cartWrapper.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart')
        ? JSON.parse(localStorage.getItem('cart'))
        : [];
      // 5.3 Далее мы получаем тот элемент, который мы кликнули.
      const card = evt.target.closest('.card');
      const id = card.dataset.id;
      // 5.7 Итак, чтобы удалить какой-то элемент из массивы "cart" нам нужно узнать индекс этого элемента внутри массива. Для этого создадим переменную index. В неё поместим значение, полученное из cart с помощью метода findIndex(), который примет функцию-callback, которая вернёт индекс найденного элемента. Также мы сравним item.id cо значением переменной id.
      const index = cart.findIndex((item) => {
        return item.id === +id;
      });
      // 5.8 Теперь мы применим к массиву cart метод splice(), который примет два аргумента: 1) индекс удаляемого элемента, 2) количество элементов.
      cart.splice(index, 1);
      // 5.4 Ну и в итоге удалить из массива "cart" элемент с тем id, по которому мы кликнули и снова записать в localStorage обновлённый массив данных.
      localStorage.setItem('cart', JSON.stringify(cart));
      // 5.5 И снова вызовем функцию отрисовки товара renderCart()
      renderCart(cart);
      // 5.6 А также подсчёт итоговой стоимости
      cartTotalSum.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
    }
  });
  // 6.2 Повесим на кнопку отправки товаров из корзины также обработчик события по клику
  cartSendButton.addEventListener('click', () => {
    // 6.3 После клика по кнопке нам нужно получить массив "cart" или пустой массив.
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart'))
      : [];
    // 6.4 Вызовем функцию передачи данных на сервер postData() и передадим в неё массив cart.
    // 6.5 (см. post-data.js)
    // * 7.1 Теперь после отправки нашей корзины на сервер нам нужно её очистить и перерисовать. Здесь подойдёт метод then(), который вызовется сразу, после того как произойдёт успешная отправка данных.
    // 7.2 Сначала применим на localStorage метод removeItem() с ключом "cart", чтобы очистить память от этого массива.
    postData(cart).then(() => {
      localStorage.removeItem('cart');
      // 7.3 Перерисуем передав пустой массив...
      renderCart([]);
      // 7.4 ...и пересчитаем общую цену, точнее подставим 0, ведь корзина теперь пуста.
      cartTotalSum.textContent = 0;
    });
  });
};

export default cart;
