$(document).ready(function(){
	var mySwiper = new Swiper ('.swiper-container', {
    autoplay: true,//可选选项，自动滑动
    delay:2000,
    loop: true,
    
    // 如果需要分页器
	 pagination: {
	    el: '.swiper-pagination',
	    type: 'bullets',
	    //type: 'fraction',
	    //type : 'progressbar',
	    //type : 'custom',
	 },
      // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar'
  });
  //热卖商品热评商品的show hide操作
  console.log('！11122')
  $(".firstline li").eq(0).find("i").show();
  $(".firstline li").eq(0).addClass("liclass");
  $(".firstline li").eq(0).hover(function(){
  	$(".firstline li").eq(1).removeClass("liclass");
  	$(".firstline li").eq(1).find("i").hide();
  	$(".firstline li").eq(2).removeClass("liclass");
  	$(".firstline li").eq(2).find("i").hide();
  	$(this).addClass("liclass");
  	$(this).find("i").show();
  	$(".remai").css("display",'block');
  	$(".reping").css("display",'none');
  	$(".newshop").css("display",'none');
  },function(){
  })
  $(".firstline li").eq(1).hover(function(){
  	$(this).addClass("liclass");
  	$(this).find("i").addClass("iclass");
  	$(".firstline li").eq(0).removeClass("liclass");
  	$(".firstline li").eq(0).find("i").hide();
  	$(".firstline li").eq(2).removeClass("liclass");
  	$(".firstline li").eq(2).find("i").hide();
  	$(this).addClass(".liclass");
  	$(this).find("i").show();
  	$(".remai").css("display",'none');
  	$(".reping").css("display",'block');
  	$(".newshop").css("display",'none');
  },function(){
  })
  $(".firstline li").eq(2).hover(function(){
  	$(this).addClass("liclass");
  	$(this).find("i").show();
  	$(".firstline li").eq(0).removeClass("liclass");
  	$(".firstline li").eq(0).find("i").hide();
  	$(".firstline li").eq(1).removeClass("liclass");
  	$(".firstline li").eq(1).find("i").hide();
  	$(".remai").css("display",'none');
  	$(".reping").css("display",'none');
  	$(".newshop").css("display",'block');
  },function(){
  })
  
});