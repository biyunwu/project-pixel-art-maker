// Select color input
var color = $('#colorPicker').css("color");
console.log(color);
// Select size input
var height = $('#inputHeight').attr("value");
var width = $('#inputWidth').attr("value");
console.log(height + "  " + width); // Test

// When size is submitted by the user, call makeGrid()

$('#submitButton').click(function(){
  makeGrid();

  $('th').each(function(){
  if (this.data('clicked')){
    this.css('color', color);
    }
  });
});

// $('th').each(function(){
//   if (this.data('clicked')){
//     this.css('color', color);
//   }
// });

function makeGrid() {
  var tds = createThs(width); // String
  console.log("ths: " + tds); // Test
  var trs = createTrs(height, tds);
  console.log("trs: " + trs); // Test

  // var grid = $(trs);
  $('#pixelCanvas').append(trs);
}

// Helper method
function createThs(width){
  var td, tds;
  td = "<th></th>";
  tds = "";
  for (var x=0; x<width; x++){
    tds += td;
  }
  return tds;
}

// Helper method
function createTrs(height, tds){
  var tr, trs;
  tr = "<tr>" + tds + "</tr>";
  trs = "";
  for (var x=0; x<height; x++){
    trs += tr;
  }
  return trs;
}

