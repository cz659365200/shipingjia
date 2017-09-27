/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-12 17:47:46
 * @version $Id$
 */

$(function(){
	var flag = true;
	$('.foodmenulist').click(function(){
		if(flag){
			$('.foodheadMenu').slideDown();
			flag = false;
		}else{
			$('.foodheadMenu').slideUp();
			flag = true;
		}
	});
})


/**
		 * 第一种方案（参考网易）http://www.codeceo.com/article/font-size-web-design.html
		 * [以iPhone4/5的设计稿为例js动态设置文档 rem 值]
		 * 6.4怎么来的，当然是根据设计稿的横向分辨率/100得到的
		 * 如果是750的设计稿，应该除以7.5
		 * 当deviceWidth大于640时，则物理分辨率大于1280（这就看设备的devicePixelRatio这个值了），应该去访问pc网站 所以加上这个判断if(deviceWidth > 750) deviceWidth = 750;   
		 */
        var deviceWidth = document.documentElement.clientWidth;
        if(deviceWidth > 750) deviceWidth = 750;   
        document.documentElement.style.fontSize = deviceWidth /7.5 + 'px';  