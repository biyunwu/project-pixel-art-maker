$(function(){
  // Create default canvas
  makeGrid(10, 10);

  $('input:submit').click(function(evt){
    // Prevent the browser to refresh automatically
    evt.preventDefault();
    // Clear the potentially existing table
    $('#pixelCanvas').children().remove();
    // Create and insert table
    var height = $('#inputHeight').val();
    var width = $('#inputWidth').val();
    if(height>100 || width>100){
      alert("Inuts should be between 0 and 100.");
    } else {
      makeGrid(height, width);
    }
  });

  function makeGrid(height, width) {
    // Create table
    var table = createTable(height, width);
    // Inset the created table to DOM
    $('#pixelCanvas').append(table);
  }

  // Helper method
  function createTable(column, row){
    var tds = createTds(row);
    var tr = "<tr>" + tds + "</tr>";
    var trs = "";
    for (var x=0; x<column; x++){
      trs += tr;
    }
    return trs;
  }

  // Helper method
  function createTds(row){
    var td = "<td></td>";
    var tds = "";
    for (var x=0; x<row; x++){
      tds += td;
    }
    return tds;
  }

  // Change <td>'s background color if it is clicked
  $('#pixelCanvas').on('click', 'td', function(){
    if ($(this).css("background-color") === "rgba(0, 0, 0, 0)"){
      $(this).css("background-color", $('#colorPicker').val());
    } else {
      $(this).css("background-color", "rgba(0, 0, 0, 0)");
    }
  });

})




