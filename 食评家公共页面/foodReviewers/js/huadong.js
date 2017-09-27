//var index_img=0;

	/*$(".a1_img img").eq(0).fadeIn("slow");

	setInterval(function(){

		var index_0=index_img;

		index_img=index_img+1;

		if(index_img>=3) index_img=0;

		$(".a1_img img").eq(index_0).fadeOut("slow");

		$(".a1_img img").eq(index_img).fadeIn("slow");

		$("#a1_a").attr("class","a_"+index_img)

	},5000);*/



	// function $en(tit){return encodeURIComponent(tit)}

	// var title="我的天啊，大家快来用下新版猎豹浏览器4.0~真的太快了！跟光速似的！";

	// //var url="http://www.liebao.cn/welcome4.html";

	// var pic="http://www.liebao.cn/css/imgs/iconpic.png";

	// $(".xinlan").click(function(){

	// 	window.open('http://v.t.sina.com.cn/share/share.php?appkey=962772401&title='+$en(title)+'&pic='+pic);

	// })

	// $(".tenxun").click(function(){

	// 	window.open('http://v.t.qq.com/share/share.php?title='+$en(title)+'&pic='+pic);

	// })



	var h=$(window).height();

	var w=$(window).width();

	//var h1=(h1-500<30?30:h-580)+"px";

	//$(".divtop").css("bottom",h1);



	$(".back").css("height",h+"px");

	$(".nag").css("top",$(window).scrollTop() + 250 +"px");



	$(".yutop").css("top",(h+150)+"px");

	$("#hjimg").css("top",(h+430)+"px");

	

	var yueAnimate={

		lbyFun:function(){

			$("#n11img").css({"width": "65px","height": "5px","top": "300px","margin-left": "-32px","opacity":"0"});

			$("#n12img").css({"opacity":"0"});

			$("#n1p").css({"opacity":"0"});

			

			var y=460;



			$("#n12img").animate({

				"opacity": 1

			},800,'easeInCubic');

			$("#n1p").animate({

				"opacity": 1

			},800,'easeInCubic',function(){

				$("#n11img").animate({

					"opacity": 0.8,

					"width":"328px",

					"height":"27px",

					"top": "275px",

					"margin-left":"-164px"

				},400,'easeInCubic',function(){

					$("#n11img").animate({

						"opacity": 1,

						"width":"273px",

						"height":"22px",

						"top": "285px",

						"margin-left":"-137px"

					},200,"easeInCubic")

				});

			});

		},

		btntop :function(){



			$("#btntop").css({"margin-top": "0px"});

			$("#btntop").animate({

				"margin-top": "30px"

			},1000,'easeOutBounce');

			

		},

		yue :function(id,left,right,time){

			$(id).animate({

				"margin-left": right

			},time,function(){

				$(id).animate({

					"margin-left": left

				},time);

			});

		},


	}

	

	//鼠标滚动事件 

	var shubiao=true;

	var wheel = function(event) {  

		var delta = 0;  

		if (!event)

			event = window.event;  

		if (event.wheelDelta) {

			delta = event.wheelDelta / 120;

		} else if (event.detail) {

			delta = -event.detail / 3;

		}

		if (delta) handle(delta);

		if (event.preventDefault) event.preventDefault();  

		event.returnValue = false;  

	}

	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);

	document.onmousewheel = wheel;

	var $f=true;

	var handle = function(delta) {

		if(!shubiao) return;

		shubiao=false;

		var random_num = Math.floor((Math.random() * 100) + 50);

		if (delta < 0) {

			PicWheelScroll(1);

			$f=false;

			 //console.log("鼠标滑轮向下滚动：" + delta + "次！"); // 1  

			return false;  

		} else {

			$f=true;

			PicWheelScroll(0);

			//console.log("鼠标滑轮向上滚动：" + delta + "次！"); // -1  

			return false;  

		}

	}

	$(".ac").each(function(i){

		$(this).click(function(){

			$(".ac").removeClass("active");

			$(".ac").eq(i).addClass("active");

			var num=i+1;

			if(num=="2") $("#btntop").hide();

			else $("#btntop").show();

			gotoAnchor($(".a"+num));

			getAnchroFun(num);

		})

	})

	var PicWheelScroll = function(n){

		

		var num=$("#pic1").attr("num");

		

		if((num===2&&n===1) || (num===1&&n===0)) return;

		if(n==1){

			if(num<2) num++;

		}else{

			if(num>1) num--;

		}



		$(".ac").removeClass("active");

		$(".ac").eq(num-1).addClass("active");



		if(num=="2") $("#btntop").hide();

		else $("#btntop").show();

		gotoAnchor($(".a"+num));

		getAnchroFun(num);

	}



	setInterval(yueAnimate.btntop,2000);

	var getAnchroFun=function(num){

		var h=$(window).height();

		var h=(h-500<30?30:h-580)+"px";

		$(".divtop").css("bottom","0px");

		var n=$("#pic1").attr("num");

		switch(parseInt(num)){

			case 1:

				if(n==1&&$f) return false;

				yueAnimate.lbyFun();

				break;

			case 2:

				yueAnimate.yuFun();

				break;

			case 3:

				yueAnimate.n5imgFun();

				break;

			case 4:

				break;

		}

		$("#pic1").attr("num",num);

	}

	var gotoAnchor = function(selector,isauto){

		var anchor = $(selector);

		if (anchor.length < 0) return;

		var $win=$(window);

		var $body = $(window.document.documentElement);

		var ua = navigator.userAgent.toLowerCase();

		if (ua.indexOf("webkit") > -1) {

			$body = $(window.document.body)

		}

		var pos=anchor.offset();

		if (isauto) {

			var t = pos.top - $win.scrollTop(); //相对于屏幕显示区

			var t2 = $win.height() - t;

			if (t2 < anchor.outerHeight()) {

				$body.animate({"scrollTop": pos.top}, "normal");

			}

			return;

		}

		$body.animate({"scrollTop": pos.top},{queue :false,complete: function(){shubiao=true;}});

	}

	gotoAnchor($(".a1"));

	yueAnimate.lbyFun();

	$(window).resize(function(){

		var h=$(window).height();

		$(".back").css("height",h+"px");

		var n=$("#pic1").attr("num");

		var h1=(h-500<30?30:h-580)+"px";

		//if(n==1) $(".divtop").css("bottom",h1);

		//else 

		$(".divtop").css("bottom","0px");

		gotoAnchor($(".a"+n));

	});

	$(".divtop").click(function(){

		var n=$("#pic1").attr("num");

		if(n=="1") $("#btntop").hide();

		n=parseInt(n)+1;

		if(n==5) {return;}

		$(".ac").removeClass("active");

		$(".ac").eq(n-1).addClass("active");

		gotoAnchor($(".a"+n));

		getAnchroFun(n);

		$("#pic1").attr("num",n);

	})