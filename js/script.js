
function Pizza(size, crust, toppings, sizePrice, crustPrice, toppingsPrice) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.sizePriceS = sizePrice;
  this.crustPriceS = crustPrice;
  this.toppingsPriceS = toppingsPrice;


}
Pizza.prototype.piza1 = function () {
  return this.sizePriceS + this.crustPriceS + this.toppingsPriceS;
}
var delivcost=300
Pizza.prototype.piza2=function(){
  return this.piza1()+ delivcost;
}
// this.price=0;
// this.price=price;
//Pizza.prototype.totalCost=function(){
//   if (this.size==='small'){
//     this.price +=700;

//   }
//   else if(this.size==='medium'){
//     this.price +=1000;
//   }
//   else if(this.size==='large'){
//     this.price +=2000;
//   }
//   if (this.crust==='crispy'){
//     this.price +=300;
//   }
//   else if(this.crust==='stuffed'){
//     this.price +=500;
//   }
//   else if (this.crust==='gluten-free'){
//     this.price +=700;
//   }
//   if(this.toppings==='extra cheese'){
//     this.price +=400;
//   }
// else if(this.toppings===='peperoni'){
//   this.price +=600;
//   }
//  else if(this.toppings==='mushroom'){
//    this.price +=800;
//  }

// }
//  Pizza.prototype.fullPizzaCost=function(){
//    var pizzaCrust = size+crust+toppings;
//    this.price +=pizzaCrust;
//    return pizzaCrust;
//  }
//user interface
$(document).ready(function () {
  $(".addmore").click(function () {
    $("#border").append('<div class="col-md-4" id="border">' +
      '<div class="pizzaSize">' +
      '<select class="form-control" id="Select1">' +
      '<option value="pizzaSize">Pizza size </option>' +
      '<option value="small">small price:700rwf</option>' +
      '<option value="medium">medium price:1000rwf</option>' +
      '<option value="large">large price:2000rwf</option>' +
      '</select>' +
      '</div><br>' +
      '<div class=" cruster">' +
      '<select class="form-control form-control-s">' +
      '<option value="kind of cruster" width="300" height="300">cruster</option>' +
      '<option value="crispy">crispy price:300rwf</option>' +
      '<option value="stuffed">stuffed price:500rwf</option>' +
      '<option value="Gluten-free">Gluten-free price:700rwf</option>' +
      '</select>' +
      '</div><br>' +
      '<div class="toppings">' +
      '<select class="form-control">' +
      '<option value="toppings">toppings</option>' +
      '<option value="extra cheese">extra cheese price:400rwf</option>' +
      '<option value="Pepperoni">Pepperoni price :600rwf</option>' +
      '<option value="Mushrooms">Mushrooms price800rwf:</option>' +
      '<option value="bacon">bacon price:100rwf</option>' +
      '</select>' +

      '<br>' +
      '</div>')
  });

  $('#p1').hide();
  $('#deliv').hide();
  $('#total').hide();
  $('.sendOrder').click(function () {
    var inputPizzasize = $('#select1 option:selected').text();
    var inputCrust = $('#select2 option:selected').text();
    var inputToppings = $('#select3 option:selected').text();
    var sizePrice = parseInt( $('#select1 option:selected').val());
    var crustPrice = parseInt($('#select2 option:selected').val());
    
    var toppingsPrice = parseInt( $('#select3 option:selected').val());
    var newPizzaSize = new Pizza(inputPizzasize, inputCrust, inputToppings, sizePrice, crustPrice, toppingsPrice);
    

  //  console.log(newPizzaSize.sizePriceS +'/'+newPizzaSize.crustPriceS+'/'+newPizzaSize.toppingsPriceS)
    //  var size=$('select#select1').val();
    //  var crust=$('select #select2').val();
    //  var toppings=$('select #select3').value(); 
    //  var finalprice=(size +" "+ crust +" "+ toppings );
    //  var newOrder=new Pizza(size,crust,toppings);
    // newOrder.totalCost();

    $('.card').show();
    $('#one').text(newPizzaSize.size);
    $('#two').text(newPizzaSize.crust);
    $('#three').text(newPizzaSize.toppings);
    $('#four').text(newPizzaSize.piza1());
    $('.total').text(newPizzaSize.piza2());
    $('.deliv').text('300');
    // $('#five').number(newPizzaSize.price);
    // $('.delived').hide();
    $('.checkout').click(function () {

      $('.delived').show();
      $('#p1').show();
      $('.pickup').show();
      $('.delived').click(function () {
        var delived = prompt('enter your location: ');
        alert('your order will be delived at ' + delived);
        // conconsole.log('sizePrice');
        // console.log('crustPrice');
        // console.log('inputToppings');
        $('#deliv').show();
        $('#total').show();
      })
    })
  })
  $('.pickup').click(function () {
    alert('thank you shopping with pizza madness!!!!');

  })

});


