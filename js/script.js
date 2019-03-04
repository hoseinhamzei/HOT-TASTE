// JavaScript Document
    var vwidth = $(window).width();

    

    ////////////////////////////////////////  PARALAX EFECTS  //////////////////////////////////////

    $('[data-paroller-factor]').paroller();
    $('.paroller').paroller();

    ////////////////////////////////////////  SUBMENU  //////////////////////////////////////
    var mclosed = true;
    
    $('.menu-link').click(function(e){
        
        e.preventDefault();
        
        if(mclosed){
            $(this).find('.sub-menu').show().addClass('animate-slide-up');
            mclosed = false;
        } else {
            $(this).find('.sub-menu').removeClass('animate-slide-up').fadeOut(150);
            mclosed = true;
        }
        
        console.log(mclosed);
        
    });
    
    $('.menu-link').focusout(function(){
        $(this).find('.sub-menu').removeClass('animate-slide-up').fadeOut(150);
        mclosed = true;
    });
    
    
    ////////////////////////////////////////  MOBILE MENUS  //////////////////////////////////////
    var leftmenuclosed = true;
    var rightmenuclosed = true;
    
    if(vwidth < 992){
    
    $('.left-menu-container').css('width',vwidth/2+'px');
    $('.right-menu-container').css('width',((vwidth/2)+15)+'px');
        
    }
    
    
    $('#lmtoggle').click(function(){
        
        if(leftmenuclosed){
            
            openMenu('left');
            closeMenu('right');
            
        } else{
            
            closeMenu('left');
        }
        
    });
    
    
    $('#rmtoggle').click(function(){
        
        if(rightmenuclosed){
            
           openMenu('right');
           closeMenu('left');
            
        } else{
            
            closeMenu('right');
            
        }
        
    });
    
    
    
    
 

// open and close menu functions

function openMenu(mname){
    if(mname === 'left'){
        $('.left-menu-container').css('transform','translateX(0%)');
            $('#lmtoggle').attr('src','assets/close.svg');
            $('#lmtoggle').css('transform','rotate(180deg)');
            leftmenuclosed = false;
    } else if(mname === 'right'){
        $('.right-menu-container').css('transform','translateX(0%)');
            $('#rmtoggle').css('transform','rotate(90deg)');
            rightmenuclosed = false;
    }
}



function closeMenu(mname){
    if(mname === 'left'){
        $('.left-menu-container').css('transform','translateX(-100%)');
            $('#lmtoggle').attr('src','assets/menu.svg');
            $('#lmtoggle').css('transform','rotate(0deg)');
            leftmenuclosed = true;
    } else if(mname === 'right'){
        $('.right-menu-container').css('transform','translateX(200%)');
            $('#rmtoggle').css('transform','rotate(0deg)');
            rightmenuclosed = true;
    }
}


////////////////////////////////////////  SCROLL BTNS  //////////////////////////////////////

$('#godown').click(function(){ 
    $("html, body").animate({ scrollTop: $('#specs').scrollTop() }, 700); 
    return false; 
});

////////////////////////////////////////  MAP //////////////////////////////////////

$('.over-shadow').click(function(){
    $(this).css('height','0px');
});

//////////////////////////////////////// RESPONSIVE  //////////////////////////////////////
if(vwidth > 992){
    new WOW().init();
    $('.featured').css('height',($(window).height()-60)+"px");
    
    $('.bests-carousel').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        variableWidth: false
    });
    
} else if(vwidth < 992 && vwidth > 768){
    $('.featured').css('height',($(window).height()-60)+"px");
    
    
    $('.bests-carousel').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        variableWidth: false
    });
}else{
    $('.bests-carousel').slick({
        dots: false,
        infinite: false,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: false
    });
}

