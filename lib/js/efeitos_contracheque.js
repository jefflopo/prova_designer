$(document).ready( function(){
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });
    
    $("#page-up").on("click", function(event){
        
        $("body").animate({
            scrollTop:0
        }, 1000);
        
        event.preventDefault();
        
    });
    $("#btn-bars").on("click", function(){
       
        $("header").toggleClass("open-menu");
        
    });
    
    $("#menu-mobile-mask, .btn-close").on("click", function(){
        
        $("header").removeClass("open-menu");
        
    });
    
    $("#btn-close-2, #footer").on("click", function(){
        
        $(".collapse").collapse("hide");
        
    });
    
    $("#collapse1").on("hide.bs.collapse", function(){
        $("#btn-menu-2").html('<i class="fa fa-bars"></i> Menu <i class="fa fa-angle-double-down" aria-hidden="true"></i>');
    });
    $("#collapse1").on("show.bs.collapse", function(){
        $("#btn-menu-2").html('<i class="fa fa-bars"></i> Menu <i class="fa fa-angle-double-up" aria-hidden="true"></i>');
    });
    
    $("#btn-search").on("click", function(){
        
        $("header").toggleClass("open-search");
        $("header").removeClass("open-menu");
        $("#input-search-mobile").focus();
        
    });
    
    $("#btn-bars").on("click", function(){
        
        $("header").removeClass("open-search");
        
    });

});

