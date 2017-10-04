/* Добавление в корзину */
$(document).ready(function() {

  $(".article-to-basket").click(function() {
  let name = $(this).attr("data-name");
  let price = $(this).attr("data-price");
  let category = $(this).attr("data-category");
  let image = $(this).attr("data-image");

  shoppingCart.addItemToCart(name, price, 1, category, image);
});

/* Объект корзины */

var shoppingCart = {};
shoppingCart.cart = [];
shoppingCart.Item = function(name, price, count, category, image) {
  this.name = name;
  this.price = price;
  this.count = count;
  this.category = category;
  this.image = image;
};

//Добавление в корзину

shoppingCart.addItemToCart = function (name, price, count, category, image) {
  for (let i = 0; i < this.cart.length; i++) {
    if (this.cart[i].name === name) {
      this.cart[i].count += count;
      this.saveCart();
      return;
    }
  }
  if(name !== null || name !== undefined) {
    var item = new this.Item(name, price, count, category, image);
    this.cart.push(item);
    this.saveCart();
  }
  
};

shoppingCart.setCountForItem = function(name, count) {
  for (let i = 0; i < this.cart.length; i++) {
    if (this.cart[i].name === name) {
      this.cart[i].count = count;
      break;
    }
  }
  this.saveCart();
};

//Удалить одну единицу элемента из корзины

shoppingCart.removeItemFromCart = function(name) {
  for(let i = 0; i < this.cart.length; i++) {
    if (this.cart[i].name === name) {
      this.cart[i].count--;
      if (this.cart[i].count === 0) {
        this.cart.splice(i, 1);
      }
      break;
    }
  }
  this.saveCart();
};

//Удалить все единицы элемента

shoppingCart.removeItemFromCartAll = function (name) {
  for (let i = 0; i < this.cart.length; i++) {
    if(this.cart[i].name === name) {
      this.cart.splice(i, 1);
      break;
    }
  }
  this.saveCart();
};

//Подсчет элементов в корзине

shoppingCart.countCart = function() {
  let totalCount = 0;
  for (let i = 0; i < this.cart.length; i++) {
    totalCount += this.cart[i].count;
  }
  return totalCount;
};

//Подсчет конечной цены всех элементов корзины

shoppingCart.totalCart = function () {
  let totalCost = 0;
  for (let i = 0; i < this.cart.length; i++) {
    totalCost += this.cart[i].price * this.cart[i].count;
  }
  return totalCost.toFixed(2);
};  
shoppingCart.listCart = function () {
  var cartCopy = [];
    for (let i = 0; i < this.cart.length; i++) {
      var item =  this.cart[i];
      var itemCopy = {};
      for (let j in item) {
        itemCopy[j] = item[j];
      }
      itemCopy.total = (item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
};

//Обнуляем корзину

shoppingCart.clearCart = function () {
  this.cart = [];
  this.saveCart();
};

//Сохраняем в корзину

shoppingCart.saveCart = function () {
  localStorage.setItem('shoppingCart', JSON.stringify(this.cart));
};

shoppingCart.save = function() {
  localStorage.setItem('shoppingCart', JSON.stringify([]));
};

//Загружаем корзину

shoppingCart.loadCart = function () {
  this.cart = JSON.parse(localStorage.getItem('shoppingCart'));
} 

if (!(JSON.parse(localStorage.getItem('shoppingCart')))) {
  shoppingCart.save();
}

shoppingCart.loadCart();

/********************* Методы для отображения ************************/

  function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = '';
    for (let i = 0; i < cartArray.length; i++) {
      output += "<ul class='flex product'>"
      + "<li class='article-image'><img src='"
      + cartArray[i].image + "' alt = 'товар'/></li>" 
      + "<li class='article-title flex'>" + cartArray[i].name 
      + "</li>"
      + "<li class='article-category flex'>" + cartArray[i].category
      + "</li>"
      + "<li class='article-price flex'>" + cartArray[i].price
      + " P</li>"
      + "<li class='article-number flex'><button class='subtract-item' data-name='" 
      + cartArray[i].name + "'><i class='fa fa-chevron-left subtract-item' aria-hidden='true'></i></button>"
      + cartArray[i].count + "<button class='plus-item' data-name='" 
      + cartArray[i].name + "' data-price='" + cartArray[i].price 
      + "' data-category='" + cartArray[i].category 
      + "' data-image='" + cartArray[i].image
      + "'><i class='fa fa-chevron-right' aria-hidden='true'></i></button>" 
      + "</li>"
      + "<li class='article-sum flex'>" + cartArray[i].total
      + " P</li>"
      + "<li class='article-reset flex'><button class='delete-item' data-name='"
      + cartArray[i].name + "'>"
      + "<i class='fa fa-times' aria-hidden='true'></i></button>"
      + "</li>"
      + "</ul>"
    }
    $(".article-list").html(output); 
    $('.article-total-price').html(shoppingCart.totalCart() + " P");
  };

  $(".article-list").on("click", ".delete-item", function(event) {
    let name = $(this).attr("data-name");
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
    sendCart();
  });

  $(".article-list").on("click", ".subtract-item", function(event){
    let name = $(this).attr("data-name");
    shoppingCart.removeItemFromCart(name);
    displayCart();
    sendCart();
  });

  $('.article-list').on("click", ".plus-item", function(event) {
    let name = $(this).attr("data-name");
    
    shoppingCart.addItemToCart(name, 0, 1);
    displayCart();
    sendCart();
  });

  $(".article-clean").click(function(event) {
      shoppingCart.clearCart();
      displayCart();
      sendCart();
    });

  displayCart();

  function sendCart() {
    let inputOutput = "<input type='text' name='shoppingCart' value='" + JSON.stringify(shoppingCart.cart) + "'>"
    let totalPrice =  "<input type='text' name='totalPrice' value='" + shoppingCart.totalCart() + "'>"
    $(".product-input").html(inputOutput);
    $(".product-input").append(totalPrice);
  }
  sendCart();

});
     