/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-12 17:47:46
 * @version $Id$
 */

$(function(){

	jQuery("#slideBox").slide({
		titCell:".hd ul",
		mainCell:".bd ul",
		effect:"leftLoop",
		vis:"auto",
		scroll:1,
		autoPlay:true,
		autoPage:true,
		trigger:"click"
	});


	/*slideDevice();
	$(window).resize(function(){
		slideDevice();
	})
	//slide 移动设备 和 pc设备 图片路径更换
	function slideDevice(){
		$('#slideBox li').each(function(){
			var thisId = $(this).attr('id');
			if($(window).width() <= 1003){
				$(this).find('> img').attr('src', 'images/slideMobile/'+ thisId +'.jpg');
			}else{
				$(this).find('> img').attr('src', 'images/banner/'+ thisId +'.jpg');
			}
		});
	}*/
})