$(function(){




  /*用户轨迹TAB*/
    $("#x1").click(function(){
      $("#xq1").show();
      $(".detail_left_list_inner").slideUp();
      $("#gj1").hide();
      $("#gj2").hide();
      $("#gj3").hide();
      $("#gj4").hide();
    });
    $("#g1").click(function(){
      $("#gj1").show();
      $("#gj2").hide();
      $("#gj3").hide();
      $("#gj4").hide();
      $("#xq1").hide();
    });
    $("#g2").click(function(){
      $("#gj2").show();
      $("#gj1").hide();
      $("#gj3").hide();
      $("#gj4").hide();
      $("#xq1").hide();
    });
    $("#g3").click(function(){
      $("#gj3").show();
      $("#gj2").hide();
      $("#gj1").hide();
      $("#gj4").hide();
      $("#xq1").hide();
    });
    $("#g4").click(function(){
      $("#gj4").show();
      $("#gj2").hide();
      $("#gj3").hide();
      $("#gj1").hide();
      $("#xq1").hide();
    });


    /*LI  TAB*/
          $(".detail_left_list li").click(function(){
          $(this).addClass("cur").siblings().removeClass("cur");
        });
          $("#x2").click(function(){
          $(".detail_left_list_inner li").removeClass("cur");
          $("#g1").addClass("cur");
          $("#gj1").show();
          $("#xq1").hide();
          $("#gj2").hide();
          $("#gj3").hide();
          $("#gj4").hide();
          $("#x2").parent().find(".detail_left_list_inner").stop().slideToggle();

    });
          $("#x3").click(function(){
            $(".detail_right").hide();
            $(".detail_left_list_inner").slideUp();
          });
          $("#x4").click(function(){
            $(".detail_right").hide();
            $(".detail_left_list_inner").slideUp();
          });



});
