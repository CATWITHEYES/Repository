$(document).ready(function () {
    //首页大图滚动
    jQuery("#slide_x").cxSlide({ plus: true, minus: true });

    $("#ContentPlaceHolder1_ZX2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_gbxs2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_ysbg2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_tzzn2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_mytzbg2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_sczlyj2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_gjfxpg2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_anli2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_hangye2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_xiangmu2").children().first().css("display", "none");
    $("#ContentPlaceHolder1_fagui2").children().first().css("display", "none");
    
    
    //图形大小
    imgZoomInit();

    //国家滚动部分
    jQuery("#slide_country").cxSlide({ plus: false, minus: false });

    //大事记
    $("#ContentPlaceHolder1_dashiji").children("li").hover(function () {
        $(this).children(".textsubject").addClass('mCon_Cutbtn');
        $(this).siblings().children(".textsubject").removeClass('mCon_Cutbtn');
         
      }, function () {
          $(this).children(".textsubject").removeClass('mCon_Cutbtn');
          
      })
    $("#ContentPlaceHolder1_dashiji").find("strong").each(function (i) {
        $(this).addClass('point'+i);
    });

    //给大事记的第一条加上下划线效果
    $("#ContentPlaceHolder1_dashiji").hover(function () {
    },function () {
        $("#ContentPlaceHolder1_dashiji").children("li.mCon_btn").first().children(".textsubject").addClass('mCon_Cutbtn');
    })

    $("#ContentPlaceHolder1_dashiji").children("li.mCon_btn").first().children(".textsubject").addClass('mCon_Cutbtn');

    //给国家加上链接
    $('#country1').find('a').each(function () {
        $(this).attr('href', 'channel2.aspx?country=' + $(this).text());
        //$(this).attr('target', '_blank');
    });
    $('#country2').find('a').each(function () {
        $(this).attr('href', 'channel2.aspx?country=' + $(this).text());
        //$(this).attr('target', '_blank');
    });
    $('#country3').find('a').each(function () {
        $(this).attr('href', 'channel2.aspx?country=' + $(this).text());
        //$(this).attr('target', '_blank');
    });
    $('#country4').find('a').each(function () {
        $(this).attr('href', 'channel2.aspx?country=' + $(this).text());
        //$(this).attr('target', '_blank');
    });

    //给省市加上链接
    $('#shengshi').find('a').each(function () {
        $(this).attr('href', 'channel2.aspx?city=' + $(this).text());
        //$(this).attr('target', '_blank');
    });
    
    
    
});


/*
*切换国家
*/
function changeCountry(c)
{
    var current = $(c);
    id = current.attr("id");
    for (i=0;i<=4;i++)
    {
        
        $("#c" + i).removeClass("region1");
        $("#c" + i).addClass("region");
        
        $("#country" + i).css("display", "none");
    }
    k = id.substr(id.length - 1, 1);
    
    $("#c" + k).removeClass("region");
    $("#c" + k).addClass("region1");

    $("#country" + k).css("display", "block");

}

/*
* 图片放大展示
* 2015-01-04
* nizilam
*/
function imgZoomInit() {
    $('.demo1 li.pic').append(function () {
        ht = $(this).find('.in').html();
        
        return "<div class='original'>" + ht + "</div>";
    });
    
    $(".demo1 li.pic .in img").each(function (i) {
        var img = $(this);
        var realWidth;//原始宽度
        var realHeight;//原始高度
        var vs;//图片宽高比

        realWidth = this.width;
        realHeight = this.height;
        vs = realWidth / realHeight;

        //缩略图比例230:142(约等于1.62)
        if (vs >= 1.62) {//横图则固定高度
            $(img).css("width", "auto").css("height", "142px").css("marginLeft", 115 - (71 * realWidth / realHeight) + "px");
        }
        else {//竖图则固定宽度
            //$(img).css("width", "230px").css("height", "auto").css("marginTop", 71 - (115 * realHeight / realWidth) + "px");
        }

        //图片放大水平垂直居中显示
        if (vs >= 1) {//横图或正方形
            $(img).parent().parent().parent().find('.original img').height(190);
            $(img).parent().parent().parent().find('.original img').width('auto');
            //$(img).parent().parent().parent().find('.original span .b1').addClass("b2");
            $(img).parent().parent().parent().find('.original span').addClass("b2");
            $(img).parent().parent().parent().find('.original').css({
                //此处需结合实际情况计算 左偏移：.original实际宽度的二分之一
                marginLeft: function () {
                    //return -(130 * realWidth / realHeight) - 6;
                    return -100;
                },
                left: '50%',
                marginTop: function () {
                    //return -(130 * realHeight / realWidth) - 36;
                    return 35;
                }
            })
        } else {//竖图
            $(img).parent().parent().parent().find('.original img').width(260);
            $(img).parent().parent().parent().find('.original img').height('auto');
            $(img).parent().parent().parent().find('.original').css({
                //此处需结合实际情况计算 上偏移：.original实际高度的二分之一
                marginTop: function () {
                    //return -(130 * realHeight / realWidth) - 36;
                    return 80;
                },
                top: '100%'
            });
            
            //$(img).parent().parent().parent().find('.original b').css('display', 'block')
        }
    });


    $('.demo1 li.pic').hover(function () {
        $(this).addClass('on');
        $(this).find(".in").hide();
    }, function () {
        $(this).removeClass('on');
        $(this).find(".in").show();
    })

    $(".demo1 ul li:nth-child(4n)").addClass('r');
}

