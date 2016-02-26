(function($){

    //Don't worry about this so much right now.
    // We will cover this is the JavaScript section.

    $(function(){
        $('.transition-bg').click(function(){
            $(this).toggleClass('change');
        });
        
        $('.transition-object').click(function(){
            $(this).toggleClass('reveal');
        });
        
        $('.cover').click(function(){
            $(this).toggleClass('open');
        });
    })
    
}(jQuery));