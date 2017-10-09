$(function () {
  $('[data-toggle="popover"]').popover()
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

$(document).on('click', function (e) {
    $('[data-toggle="popover"],[data-original-title]').each(function () {
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {                
            (($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  
        }

    });
});