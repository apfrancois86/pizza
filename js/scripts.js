function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.priceCalc = function () {
  var addedToppings = this.toppings.length * 1;
  var totalCost = this.size + addedToppings;
  return totalCost;
}

$(function() {
  $("form#pizza").submit(function(event) {
    event.preventDefault();
    var orderName = $("#name").val();
    var orderNumber = $("#number").val();
    var sizeChoice = parseInt($(".size").val());
    var newPizza = new Pizza(sizeChoice);
    $("input[name='toppings']:checked").each(function() {
      newPizza.toppings.push($(this).val());
    });
    var finalOrder = newPizza.priceCalc();
    $("#pizzaOutput").text(orderName + ", you have orderedfinalOrder + orderNumber + );
  });
});
