

//tab 切换
		$(function(){
            var $div_li = $("div.tab_menu ul li");
            $div_li.click(function(){  // 绑定单击事件
                $(this).addClass("cur") //当前<li>元素高亮
                .siblings().removeClass("cur"); //去掉其它同辈<li>元素的高亮
            var index = $div_li.index(this); //获取当前单击的<li>元素在全部<li>元素中的索引
            $("div.tab_box>div")  // 选取子节点
                .eq(index).show()   //显示<li>元素对应的<div>元素
                .siblings().hide(); //隐藏其他几个同辈的<div>元素
            });
        });