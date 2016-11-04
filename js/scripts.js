//Business Logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.priceCalc = function () {
  var addedToppings = this.toppings.length;
  var totalCost = this.size + addedToppings;
  return totalCost;
}

//UI Logic
$(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var orderName = $("#name").val();
    var orderNumber = $("#number").val();
    if (orderName === "" || orderNumber === "") {
      return alert("Please enter your name and phone number")
    }
    var sizeChoice = parseInt($(".size").val());
    var newPizza = new Pizza(sizeChoice);
    $("input[name='toppings']:checked").each(function() {
      newPizza.toppings.push($(this).val());
    });
    var finalOrder = newPizza.priceCalc();
    $("form#pizza").hide();
    $("#pizzaOutput").show();
    $("#pizzaOutput h3").text(orderName + ", your order total is $" + finalOrder + ". " + "We will call you at" + " " +  orderNumber + " " + "when your pizza is ready!");

  });
});
