/**
 * Created by Administrator on 2016/11/13.
 */
$(document).ready(function () {
    $(".bhuoshao").click(function () {
        $(".hele").hide(1000);
        $(".huoshoa").hide(1000);
        $(".chao").hide(1000);
        $(".huoshao").show(1000);
        $('#ball').removeClass('active');
    });
    $(".bhele").click(function () {
        $(".hele").show(1000);
        $(".huoshoa").hide(1000);
        $(".chao").hide(1000);
        $(".huoshao").hide(1000);
        $('#ball').removeClass('active');
    });
    $(".bhuoshoa").click(function () {
        $(".hele").hide(1000);
        $(".huoshoa").show(1000);
        $(".chao").hide(1000);
        $(".huoshao").hide(1000);
        $('#ball').removeClass('active');
    });
    $(".bchao").click(function () {
        $(".hele").hide(1000);
        $(".huoshoa").hide(1000);
        $(".chao").show(1000);
        $(".huoshao").hide(1000);
        $('#ball').removeClass('active');
    });
    $("#ball").click(function () {
        $(".hele").show(1000);
        $(".huoshoa").show(1000);
        $(".chao").show(1000);
        $(".huoshao").show(1000);
        $('#ball').removeClass('active');
    });


    //ע��


        //��ȡemailֵ
    function checkUsername(){
        var username = $('#username');

        if(username.val() == ""){
            //Ϊ�˷�ֹ�����ʽ��Ӱ�죬��������е���ʽ,Ȼ�������ʽ
            username.parent().parent()
                .removeClass().addClass("form-group has-error has-feedback");
            username.next()
                .removeClass().addClass("glyphicon glyphicon-remove form-control-feedback");
        }else{
            username.parent().parent()
                .removeClass().addClass("form-group has-success has-feedback");
            username.next()
                .removeClass().addClass("glyphicon glyphicon-ok form-control-feedback")
        }
    }
    $(function(){
        $('#btnSubmit').click(function(){
//                                alert(2);
            /*
             *   ���ڵ���: һ����Ҫ��˼��[���ַ�]
             *       alert()���Ƕ��ַ���һ��������ʽ���ܹ����ٵĶ�λ����
             *   �ϵ���ԣ��ܹ���ȷ�Ķ�λ����λ�ã�ȱ����ǣ�ֻ�ܵ������ԣ�Ч�ʻ��е�����
             * */
            /*
             *   ͳһУ���������������ʵ�֣�
             *   ������ͨ������ύ��ťʵ�ֵ�У�飬��ôʵ�ֵ���ʧȥ�����ʱ���ȥУ�飿change
             *   ��ôȥ�����ύ��ť��ֻ�е����б�Ԫ�ض�����Ϸ���ʱ����ύ
             * */
            checkUsername();
        });
    });
    //�Ҳർ�����й�

    $(".tooltip-side-nav").click(function(){

        $(this).addClass("select").parent().siblings().children().removeClass("select");
       console.log($(".tooltip-side-nav"));
        $(this).removeClass("default").parent().siblings().children().addClass("default");//$('html, body').animate({
//            scrollTop: $( $.attr(this, 'href') ).offset().top
//        }, 500);
//        return false;
    })


    console.log($(".onepage").height());

    $(function(){
        var two = $(".twopage").offset().top;
        var three = $(".threepage").offset().top;
        var four = $(".fourpage").offset().top;
        var five = $(".fivepage").offset().top;


        $(window).scroll(function() {
            var this_scrollTop = $(this).scrollTop();
            if(this_scrollTop<two){
                $(".one").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".one").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>=two&& this_scrollTop<three){
                $(".two").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".two").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>=three&& this_scrollTop<four){
                $(".three").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".three").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>=four&& this_scrollTop<five){
                $(".four").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".four").removeClass("default").parent().siblings().children().addClass("default");
            }else if(this_scrollTop>=five){
                $(".five").addClass("select").parent().siblings().children().removeClass("select");
                console.log($(".tooltip-side-nav"));
                $(".five").removeClass("default").parent().siblings().children().addClass("default");
            }
        });
    });




});