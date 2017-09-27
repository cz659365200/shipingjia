/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-12 17:47:46
 * @version $Id$
 */

$(function(){
	$('#loginBtn').click(function(){
		var username = $('.userName').val();
		var password = $('.password').val();
		if( username == '' || password == ''){
			var html = '<span class="iconfont">&#xe61c;</span><label>用户名或密码不能为空！</label>'
			$('#errorLogin').append(html);
		}else{
			location.href="index.html";
		}
	});

	$('#registerBtn').click(function(){
		var usernamenew = $('.userNameNew').val();
		var passwordnew = $('.passwordNew').val();
		if( usernamenew == '' || passwordnew == ''){
			var html = '<span class="iconfont">&#xe61c;</span><label>用户名或密码不能为空！</label>'
			$('#errorRegister').append(html);
		}else{
			location.href="index.html";
		}
	});

	$('#forgotpwdBtn').click(function(){
		var telNumNew = $('.telNumNew').val();
		if( telNumNew == ''){
			var html = '<span class="iconfont">&#xe61c;</span><label>请输入注册时的手机号！</label>'
			$('#errorForgotpwd').append(html);
		}else{
			location.href="index.html";
		}
	});

	$('#loginTab li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		$('#loginLeft > div:eq('+$(this).index()+')').show().siblings().hide();
	});

	//placeholder
	$(".formItem input").each(function(){
		if($(this).val() != '' ){
			return;
		}
		var placeholder = $(this).attr('placeholder');
		$(this).parent().append('<div class="placeholder">'+placeholder+'</div>');
	});

	$(".formItem input").blur(function(event) {
		if($(this).val() != '' ){
			return;
		}
		var placeholder = $(this).attr('placeholder');
		$(this).parent().append('<div class="placeholder">'+placeholder+'</div>');
	});

	$('.formItem').on('click','.placeholder',function(){
		$(this).parent().children('input').focus();
		$('.error').empty();
		$(this).remove();
	});

})