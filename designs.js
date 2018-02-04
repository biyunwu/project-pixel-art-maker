// Global variables
var canvas = $('#pixelCanvas');

// Select color input
var color = $('#colorPicker').css("color");

canvas.on('click', 'td', function(){
  $(this).css("background-color", color);
})

$('input:submit').click(function(evt){
  // Prevent the browser to refresh automatically
  evt.preventDefault();
  // Clear the potentially existing table
  canvas.children().remove();
  // Create and insert table
  makeGrid();
});

function makeGrid() {
  // Get input size
  var height = $('#inputHeight').val();
  var width = $('#inputWidth').val();
  // Create a row template
  var row = createThs(width);
  // Create table
  var table = createTable(height, row);
  // Inset the created table to DOM
  canvas.append(table);
}

// Helper method
function createThs(width){
  var td, tds;
  td = "<td></td>";
  tds = "";
  for (var x=0; x<width; x++){
    tds += td;
  }
  return tds;
}

// Helper method
function createTable(height, tds){
  var tr, trs;
  tr = "<tr>" + tds + "</tr>";
  trs = "";
  for (var x=0; x<height; x++){
    trs += tr;
  }
  return trs;
}

