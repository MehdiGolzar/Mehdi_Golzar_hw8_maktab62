$(document).ready(function () {

    // Get the modal
    var modal = $("#myModal");

    // Get the button that opens the modal
    var btn = $("#myBtn");

    // Get the <span> element that closes the modal
    var span = $(".close");

    // When the user clicks on <span> (x), close the modal
    span.click(function () {
        modal.css("display", "none");
    })
    
    btn.click(Create);

    function Create() {
        modal.css("display", "block");
        
    }


});