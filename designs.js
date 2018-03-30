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
        const [height, width] = [$('#inputHeight').val(), $('#inputWidth').val()];
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
        let tds = ("<td></td>").repeat(row);
        return ("<tr>" + tds + "</tr>").repeat(column);
    }

    // Change <td>'s background color if it is clicked
    canvas.on('click', 'td', function(){
        ($(this).css("background-color") === "rgba(0, 0, 0, 0)")
        ? $(this).css("background-color", $('#colorPicker').val())
        : $(this).css("background-color", "rgba(0, 0, 0, 0)")
    });
})