$(function(){
    // Global variable
    let canvas = $('table');
  
    // Create default canvas
    makeGrid(10, 10);

    $('form').submit(function(evt){
        // Prevent the browser to refresh automatically
        evt.preventDefault();
        // Clear the potentially existing table
        canvas.children().remove();
        // Create and insert table
        const height = $('#inputHeight').val();
        const width = $('#inputWidth').val();
        makeGrid(height, width);
    });

    function makeGrid(height, width) {
        // Create table
        let table = createTable(height, width);
        // Inset the created table to DOM
        canvas.append(table);
    }

    // Helper method
    function createTable(column, row){
        let tds, trs;
        tds = ("<td></td>").repeat(row);
        trs = ("<tr>" + tds + "</tr>").repeat(column);
        return trs;
    }

    // Change <td>'s background color if it is clicked
    canvas.on('click', 'td', function(){
        if ($(this).css("background-color") === "rgba(0, 0, 0, 0)"){
          $(this).css("background-color", $('#colorPicker').val());
        } else {
          $(this).css("background-color", "rgba(0, 0, 0, 0)");
        }
    });
})
