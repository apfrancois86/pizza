function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.priceCalc = function () {
  var addedToppings = this.toppings.length * 1;
  var totalCost = this.size + addedToppings;
  return totalCost;
}
