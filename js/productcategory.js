

$(document).ready(function() {
  var template = $("#CatTemplate").html();
  var compiled = _.template(template);
  $("#Cat1").append(compiled(
    {image: "bilder/cityvelo.jpg"}
  ));
  $("#Cat2").append(compiled(
    {image: "bilder/frau.jpg"}
  ));
  $("#Cat3").append(compiled(
    {image: "bilder/mountain.jpg"}
  ));
  $("#Cat4").append(compiled(
    {image: "bilder/velo.jpg"}
  ));
})
