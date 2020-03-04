$(document).ready(function(){
    $('.burger-toggle-button').click(function(){
        $('.navigation-container-div').toggleClass('active');
        $('.burger-toggle-button').toggleClass('toggle');
    });
});