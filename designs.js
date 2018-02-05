// Global variables
var canvas = $('#pixelCanvas');

$('input:submit').click(function(evt){
  // Prevent the browser to refresh automatically
  evt.preventDefault();
  // Clear the potentially existing table
  canvas.children().remove();
  // Create and insert table
  makeGrid();
  makeColor();
  cleanCanvas();
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

function makeColor(){
  // Select color input
  var color = $('#colorPicker').css("color");
  // Change color if its value is changed
  $('#colorPicker').on('change', function(){
    color = $(this).val();
  });
  // Change <td>'s background color if it is clicked
  canvas.on('click', 'td', function(){
    currTd = $(this);
    if (!currTd.hasClass("colored")){
      currTd.css("background-color", color);
      currTd.addClass("colored");
    } else {
      currTd.disColor();
    }
  });
}

// Helper method
$.fn.disColor = function() {
  this.removeClass("colored");
  this.css("background-color", "transparent");
};

function cleanCanvas(){
  $('button').click(function(){
    $('td').disColor();
  });
}