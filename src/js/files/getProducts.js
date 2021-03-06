let json = {
  products: [
    {
      productId: 0,
      productPhoto: "./img/cat.png",
      productLink: "#",
      productSubtitle: "Сказочное заморское яство",
      productTitle: "Нямушка",
      productTaste: "с фуа-гра",
      productNumberPortions: 10,
      productNumberMices: 0,
      productWeight: "0,5",
      isCustomerHappy: false,
      selectedText: "Печень утки разварная с артишоками.",
      isDisabled: false,
    },
    {
      productId: 1,
      productPhoto: "./img/cat.png",
      productLink: "#",
      productSubtitle: "Сказочное заморское яство",
      productTitle: "Нямушка",
      productTaste: "с рыбой",
      productNumberPortions: 40,
      productNumberMices: 2,
      productWeight: 2,
      isCustomerHappy: false,
      selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      isDisabled: false,
    },
    {
      productId: 2,
      productPhoto: "./img/cat.png",
      productLink: "#",
      productSubtitle: "Сказочное заморское яство",
      productTitle: "Нямушка",
      productTaste: "с курой",
      productNumberPortions: 100,
      productNumberMices: 5,
      productWeight: 5,
      isCustomerHappy: true,
      selectedText: "Филе из цыплят с трюфелями в бульоне.",
      isDisabled: true,
    },
  ],
};

let productsContainer = document.getElementById("products");

getProducts(json);
// async
function getProducts(data) {
  // let response = await fetch("./files/products.json");
  // let data = await response.json();

  for (let product of data.products) {
    let mouses;
    product.productNumberMices <= 1
      ? (mouses = ``)
      : (mouses = product.productNumberMices);
    let happyText;
    product.isCustomerHappy
      ? (happyText = `<br>заказчик доволен`)
      : (happyText = ``);
    let hoverText = "Котэ не одобряет?";

    //Добавляем класс _disabled описанию товара
    let paramsDisabledClass;
    product.isDisabled
      ? (paramsDisabledClass = "description__wrapper_disabled")
      : (paramsDisabledClass = " ");
    //Добавляем класс _disabled весу товара
    let weightDisabledClass;
    product.isDisabled
      ? (weightDisabledClass = "description__weight_disabled")
      : (weightDisabledClass = "description__weight_default");
    //Добавляем класс _disabled весу товара
    let borderDisabledClass;
    product.isDisabled
      ? (borderDisabledClass = "description_disabled")
      : (borderDisabledClass = "description_default");
    //Скрываем первый span в тексте под карточкой товара
    let firstSpanClass;
    product.isDisabled
      ? (firstSpanClass = "class='display-none'")
      : (firstSpanClass = " ");
    //Показываем третий span в тексте под карточкой товара
    let thirdSpanDisabledClass;
    product.isDisabled
      ? (thirdSpanDisabledClass = " ")
      : (thirdSpanDisabledClass = "class='display-none'");
    //Задаем стиль для текста под карточкой товара
    let linkTextDisabled;
    product.isDisabled
      ? (linkTextDisabled = "body__product-card__link_disabled")
      : (linkTextDisabled = "");
    let template = `<div class="body__product-card">
<div class="body__product-card__description description ${borderDisabledClass}">
  <div class="description__wrapper">
  <img src="${product.productPhoto}" alt="">
  <div class="description__subtitle ${paramsDisabledClass}"><span>${product.productSubtitle}</span><span class="display-none description__subtitle_selected">${hoverText}</span></div>
  <div class="description__title ${paramsDisabledClass}">${product.productTitle}</div>
  <div class="description__taste ${paramsDisabledClass}">${product.productTaste}</div>
  <div class="description__comment ${paramsDisabledClass}"><span>${product.productNumberPortions}</span> порций<br>${mouses} мышь в подарок${happyText}</div>
  <div class="description__weight ${weightDisabledClass}">
    <div class="description__weight__number">${product.productWeight}</div>
    <div class="description__weight__units">кг</div>
  </div>
</div>
</div>
<div class="body__product-card__link link ${linkTextDisabled}">
<span ${firstSpanClass}>Чего сидишь? Порадуй котэ, <a class="link__a" href="${product.productLink}">купи.</a></span>
<span class="display-none" >${product.selectedText}</span>
<span  ${thirdSpanDisabledClass}>Печалька, ${product.productTaste} закончился.</span>
</div>
</div>`;
    productsContainer.innerHTML += template;
  }
}
