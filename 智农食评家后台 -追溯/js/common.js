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