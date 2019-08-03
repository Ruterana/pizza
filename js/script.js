function Pizza(size,crust,toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings=toppings;
    // this.price=price;
  }
  
  $(document).ready(function() {
    $(".addmore").click(function(){
$("#border").append('<div class="col-md-4" id="border">'+
'<div class="pizzaSize">'+
'<select class="form-control" id="Select1">'+
 '<option value="pizzaSize">Pizza size </option>'+
 '<option value="small">small price:700rwf</option>'+
 '<option value="medium">medium price:1000rwf</option>'+
 '<option value="large">large price:2000rwf</option>'+
'</select>'+
'</div><br>'+
'<div class=" cruster">'+
    '<select class="form-control form-control-s">'+
  '<option value="kind of cruster" width="300" height="300">cruster</option>'+
  '<option value="crispy">crispy price:300rwf</option>'+
  '<option value="stuffed">stuffed price:500rwf</option>'+
  '<option value="Gluten-free">Gluten-free price:700rwf</option>'+
'</select>'+
'</div><br>'+
'<div class="toppings">'+
    '<select class="form-control">'+
  '<option value="toppings">toppings</option>'+
  '<option value="extra cheese">extra cheese price:400rwf</option>'+
  '<option value="Pepperoni">Pepperoni price :600rwf</option>'+
  '<option value="Mushrooms">Mushrooms price800rwf:</option>'+
  '<option value="bacon">bacon price:100rwf</option>'+
 '</select>'+
 '<input  class ="form-control"type="number" class="form-control" id="number" placeholder="number of pizza you want"></input>'+
         '<br>'+
         '<input  class ="form-control"type="location" class="form-control" id="location" placeholder="enter your location">'+
'</div>'+
'<br>'+
'</div>')
});

$('#p1').hide();
$('#deliv').hide();
    $('#total').hide();
$('.sendOrder').click(function(){
  var inputPizzasize=$('#select1 option:selected').text();
var inputCrust=$('#select2 option:selected').text();
var inputToppings=$('#select3 option:selected').text();
var newPizzaSize=new Pizza (inputPizzasize,inputCrust,inputToppings);
  
  $('.card').show() ;
  $('#one').text(newPizzaSize.size);
  $('#two').text(newPizzaSize.crust);
  $('#three').text(newPizzaSize.toppings);
  // $('#five').number(newPizzaSize.price);
  // $('.delived').hide();
  $('.checkout').click(function(){
    
    $('.delived').show();
    $('#p1').show();
    
    $('.delived').click(function(){
    var delived=prompt('enter your location: ');
    alert('your order will be delived to ' +delived);
    $('#deliv').show();
    $('#total').show();
    })
  })
})

  
 });
  
  
