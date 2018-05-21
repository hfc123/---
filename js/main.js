$(function(){
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
  })  
});