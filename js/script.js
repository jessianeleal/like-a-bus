$('.nav__panda a').click(function() {
    if ( !$(this).parent().hasClass('dropdown')) { 
       $('.navbar-collapse').collapse('hide'); 
    }
 });