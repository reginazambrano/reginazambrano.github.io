$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#quickstart-button').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.    
         $(".modal-content").toggleClass("visible");
        $(".blackout").toggleClass("visible");
        });
});

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#newgame').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.    
         $(".modal-content").toggleClass("visible");
         $(".blackout").toggleClass("visible");
        });
});

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#xout').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.    
         $(".modal-content").toggleClass("visible");
         $(".blackout").toggleClass("visible");
        });
});

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#xout').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.    
         $(".modal-content2").toggleClass("visible");
         $(".blackout").toggleClass("visible");
        });
});

$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#howplay').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.    
         $(".modal-content2").toggleClass("visible");
        $(".blackout").toggleClass("visible");
        });
});


//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#place-button-name-here').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#place-modal-name-here").toggleClass("visible");
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#place-modal_close-icon-name-here').click(function() {
        $("#place-modal-name-here").toggleClass("visible")
        });
});