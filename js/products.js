$(document).ready(function() {
  var template = $("#priceTemplate").html();
  var compiled = _.template(template);
  $("#pricecityBike1").append(compiled(
    {brand: "Adventure Cycles", name: "Herren Classic", price: 500 , stock: "verfügbar", image: "bilder/bike1.jpg", quantity: 1}
  ));
  $("#pricecityBike2").append(compiled(
    {brand: "Adventure Cycles", name: "Damen Classic", price: 650 , stock: "verfügbar", image: "bilder/bike2.jpg", quantity: 1}
  ));
})

$(document).ready(function() {
  var template = $("#quantityTemplate").html();
  var compiled = _.template(template);
  $("#quantitycityBike1").append(compiled(
    {brand: "Adventure Cycles", name: "Herren Classic", price: 500 , stock: "verfügbar", image: "bilder/bike1.jpg", quantity: 1}
  ));
  $("#quantitycityBike2").append(compiled(
    {brand: "Adventure Cycles", name: "Damen Classic", price: 650 , stock: "verfügbar", image: "bilder/bike2.jpg", quantity: 1}
  ));
})

$(document).ready(function() {
  var template = $("#cartBikeTemplate").html();
  var compiled = _.template(template);
  $("#buycityBike1").append(compiled(
    {brand: "Adventure Cycles", name: "Herren Classic", price: 500 , stock: "verfügbar", image: "bilder/bike1.jpg", quantity: 1}
  ));
  $("#buycityBike2").append(compiled(
    {brand: "Adventure Cycles", name: "Damen Classic", price: 650 , stock: "verfügbar", image: "bilder/bike2.jpg", quantity: 1}
  ));
})
