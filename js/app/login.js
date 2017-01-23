/**
 * Created by Administrator on 2017/1/23.
 */

$(function(){

    $(".login-1 li").click(function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    })
});