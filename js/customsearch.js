$(document).ready(function() {
  var template = $("#questionTemplate").html();
  var compiled = _.template(template);
  $("#question1").append(compiled(
    {questionText: "Mann oder Frau?", answer1: "Mann", answer2: "Frau"}
  ));
  $("#question2").append(compiled(
    {questionText: "Möchten sie ein E-Bike?", answer1: "Ja", answer2: "Nein"}
  ));
})

$(document).ready(function() {
  var template = $("#sliderbarTemplate").html();
  var compiled = _.template(template);
  $("#sliderbar1").append(compiled(
    {questionText: "Wie gross ist ihre Schrittlänge?"}
  ));
  $("#sliderbar2").append(compiled(
    {questionText: "Welche Körpergrösse besitzen sie?"}
  ));
})
