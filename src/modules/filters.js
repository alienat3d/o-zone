// ? 1.0 Этот файл не спроста называется filters во множ. числе, фильтров будет несколько. Поэтому мы экспортируем каждую функцию как обычную функцию. Также и импортировать мы будем чуточку иначе. [см. search.js] Дело в том, что когда мы экспортируем по дефолту, то экспортировать из файла мы можем лишь одну функцию.
// 1.1 Будет принимать весь массив goods и value, строку, которую мы будем вводить в строку поиска.
// 1.2.1 Итак наша задача отфильтровать весь массив данных по данному value, т.е. по значению строки введённой пользователем в поле ввода поиска, оставив только те элементы, которые нам нужно отобразить на странице. Для этой задачи воспользуемся методом filter(), который перебирает массив, тем самым возвращая новый массив, в который попадут элементы, которые соответствуют нашим требованиям.
// 1.2.2 Метод filter() будет иметь callback-функцию с параметром goodsItem, которые означает каждый итерируемый элемент. В новый массив filter() будет помещать те элементы, callback-функция которых будет возвращать true и игнорироваться те, что будут возвращать false.
// 1.2.3 Но так как нам нужно искать совпадение с вводом в поле поиска, то нам пригодится метод includes(), который будет сравнивать значение value со значением в свойстве title каждого элемента.
export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    // return goodsItem.sale === true; - если мы например пропишем так, то у нас останутся лишь те элементы массива, у который свойство sale строго равняется true, т.е. лишь товары по акции.
    return goodsItem.title.toLowerCase().includes(value.toLowerCase()); // добавим также метод toLowerCase() к названию и к введённому значению, чтобы автоматически переводить введённое значение в нижний регистр, чтобы артикли находились вне зависимости от того, в каком регистре пользователь их искал.
  });
};
// 2.1 Здесь мы возвращаем тот массив, элементы которого имеют определённое значение категорий. У каждого элемента есть свойство category и оно равно одной из категорий, по которой мы можем кликнуть в модальном окне «Каталог» [см. catalogue.js], а текст с названием категории мы передаём в value.
export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};
// 3.1 Здесь нам нужно возвращать все элементы у которых значение свойства price >=, чем minValue. Но так как minValue у нас приходит из input, а значит является строкой, то нам сперва нужно конвертировать его в числовой тип данных при помощи parseInt(). Тоже самое, только <= будет у нас с maxValue.
// 3.2 Но так как пробелы выдают нам false, то лучше нам это всё завернуть в переменные isMin & isMax и возвращать уже их.
// 3.5.2 Добавляем и сюда параметр статуса чекбокса checkValue. Также ищем к какому свойству goodsItem’а можно привязать наше условие по чекбоксу. Находим «sale», его-то мы и укажем в условии, но только при наличии акции, т.е. checkValue.
// 4.1 Теперь нам нужно также объединить два фильтра, поиска и цен, чтобы они согласовывались между собой. Для этого добавим searchStr
export const funcFilter = (
  goods,
  minValue,
  maxValue,
  checkValue,
  searchValue
) => {
  return goods.filter((goodsItem) => {
    //? Кстати ниже записанную функцию можно было упростить.
    const isMin = minValue.trim()
      ? goodsItem.price >= parseInt(minValue.trim())
      : true;
    const isMax = maxValue.trim()
      ? goodsItem.price <= parseInt(maxValue.trim())
      : true;
    const isSale = checkValue ? goodsItem.sale : true;

    return (
      isMin &&
      isMax &&
      isSale &&
      goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
};

// ? === Альтернативное решение priceFilter() функции из урока №4 ===
export const priceFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    if (min === '' && max === '') {
      return goodsItem;
    } else if (min !== '' && max !== '') {
      return goodsItem.price > +min && goodsItem.price < +max;
    } else if (min !== '' && max === '') {
      return goodsItem.price > +min;
    } else if (min === '' && max !== '') {
      return goodsItem.price < +max;
    }
  });
};

export const hotSaleFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    if (value) {
      return goodsItem.sale === true;
    } else {
      return goodsItem;
    }
  });
};
