// ? 1.0 Этот файл не спроста называется filters во множ. числе, фильтров будет несколько. Поэтому мы экспортируем каждую функцию как обычную функцию. Также и импортировать мы будем чуточку иначе. [см. search.js] Дело в том, что когда мы экспортируем по дефолту, то экспортировать из файла мы можем лишь одну функцию.
// 1.1 Будет принимать весь массив goods и value, строку, которую мы будем вводить в строку поиска.
// 1.2.1 Итак наша задача отфильтровать весь массив данных по данному value, т.е. по значению строки введённой пользователем в поле ввода поиска, оставив только те элементы, которые нам нужно отобразить на странице. Для этой задачи воспользуемся методом filter(), который перебирает массив, тем самым возвращая новый массив, в который попадут элементы, которые соответствуют нашим требованиям.
// 1.2.2 Метод filter() будет иметь callback-функцию с параметром goodsItem, которые означает каждый итерируемый элемент. В новый массив filter() будет помещать те элементы, callback-функция которых будет возвращать true и игнорироваться те, что будут возвращать false.
// 1.2.3 Но так как нам нужно искать совпадение с вводом в поле поиска, то нам пригодится метод includes(), который будет сравнивать значение value со значением в свойстве title каждого элемента.
export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    // return goodsItem.sale === true; - если мы например пропишем так, то у нас останутся лишь те элементы массива, у который свойство sale строго равняется true, т.е. лишь товары по акции.
    return goodsItem.title.includes(value);
  });
};
