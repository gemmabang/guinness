$(document).ready(function(){
    $('#header02').hide();
    
    $('.con05_01 img').hover(function(){
        $(this).attr('src','img/main/con05Img02.png')
    },function(){
         $(this).attr('src','img/main/con05Img02_bw.png')
    });
    
    $('.con05_02 img').hover(function(){
        $(this).attr('src','img/main/con05Img03.png')
    },function(){
         $(this).attr('src','img/main/con05Img03_bw.png')
    });
    
    $('.con05_03 img').hover(function(){
        $(this).attr('src','img/main/con05Img04.png')
    },function(){
         $(this).attr('src','img/main/con05Img04_bw.png')
    });
    
    
    
    
    //con03타임라인
    $('.con03Txt').removeClass('con03Txt-active');
    $('.big').removeClass('big-active');
    $('.big1').addClass('big-active');
    
    
    $('.circle1').on('click',function(){
        $('.circle1').css("background-color","white");
        $('.con03Txt1').addClass('con03Txt-active');
        $('.lineBox').css("width","0");
        $('.big1').removeClass('big-active');
        $('.big2').addClass('big-active');
        $('.lineBox').css("width","280");
    });	
    
    
    $('.circle2').on('click',function(){
        $('.circle1').css("background-color","white");
        $('.circle2').css("background-color","white");
        $('.con03Txt1').css('color','#525252');
        $('.con03Txt2').addClass('con03Txt-active');
        $('.big2').removeClass('big-active');
        $('.big3').addClass('big-active');
        $('.lineBox').css("width","560");
    });	
    
    
    $('.circle3').on('click',function(){
        $('.circle1').css("background-color","white");
        $('.circle2').css("background-color","white");
        $('.circle3').css("background-color","white");
        $('.con03Txt2').css('color','#525252');
        $('.con03Txt3').addClass('con03Txt-active');
        $('.big3').removeClass('big-active');
        $('.big4').addClass('big-active');
        $('.lineBox').css("width","840");
    });	
    
    
    $('.circle4').on('click',function(){
        $('.circle1').css("background-color","white");
        $('.circle2').css("background-color","white");
        $('.circle3').css("background-color","white");
        $('.circle4').css("background-color","white");
        $('.con03Txt3').css('color','#525252');
        $('.con03Txt4').addClass('con03Txt-active');
        $('.big4').removeClass('big-active');
        $('.big5').addClass('big-active');
        $('.lineBox').css("width","1120");
    });
    
    $('.circle5').on('click',function(){
        $('.circle1').css("background-color","white");
        $('.circle2').css("background-color","white");
        $('.circle3').css("background-color","white");
        $('.circle4').css("background-color","white");
        $('.circle5').css("background-color","white");
        $('.con03Txt4').css('color','#525252');
        $('.con03Txt5').addClass('con03Txt-active');
        //$('.big4').removeClass('big-active');
        //$('.big5').addClass('big-active');
        //$('.lineBox').css("width","800");
    });
    
    
    
    $('.beers').slick({
        arrows:true,
        slidesToShow: 1,
        slidesToScroll:1,
        prevArrow:'<div class="prev mainArrow"><img src="img/main/con01ArrowL.png"></div>',
        nextArrow:'<div class="next mainArrow"><img src="img/main/con01ArrowR.png"></div>',
    });
    
    
    
    $('.booking').hover(function(){
        $(this).css('background','#f1c761')
        $('.booking a').css('color','#333')
    },function(){
         $(this).css('background','none')
         $('.booking a').css('color','#f1c761')
    });
        
    
    
    //풀페이지 
    
    $('#fullpage').fullpage({
            navigation: false,
            navigationTooltips: ['Home', 'Beer','Craft','History','Recipe','StoreHouse'],
            anchors:['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
	        menu:'.gnb',
            
        
//        onLeave: function(origin, destination, direction){
//            var leavingSection = this;
//            //after leaving section 2
//            if(origin.index == 0 ){
//                $('#header').show();
//
//            }
//
//            else if(origin.index == 1 && direction == 'down' && 'up'){
//                $('#header02').show();
//                $('#header').hide();
//            }
//        }
        
        /*afterLoad: function(origin, destination, direction){
            var loadedSection = this;

            //using index
            if(destination.index >= 1){
                $('#header02').show();
                $('#header').hide();  
            }else if(destination.index == 0){
                $('#header02').hide();
                $('#header').show();  
            }
        }
    */
        onLeave: function(origin, destination, direction){
		var leavingSection = this;

		//after leaving section 2
		if(destination.index >= 1){
			$('#header02').show();
            $('#header').hide();  
		}else if(destination.index == 0){
                $('#header02').hide();
                $('#header').show(300);  
        }
	}
        
        
        
        
        
        
        
        
        
        
        
        
        
        

     
	}); 
    
    
    
    
    
    
});
