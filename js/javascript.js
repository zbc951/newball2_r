//上列表
$(function(){
    $('.headerlist a').hover(function(){
        $(this).toggleClass('un');
    });
});
//leftside小圖
$(function(){
    $('.left a').hover(function(){
        $(this).toggleClass('un');
    });
});
//right房間切換
$(function(){
    $('.liveroombut').click(function(){
        $(this).addClass('active');
        $('.chatroombut').removeClass('active');
        $('.livelist').addClass('open');
        $('.chatroom').removeClass('open');
    });
    $('.chatroombut').click(function(){
        $(this).addClass('active');
        $('.liveroombut').removeClass('active');
        $('.chatroom').addClass('open');
        $('.livelist').removeClass('open');
    });
    //直播賽事選單開關
    $('.liveli1').click(function(){
        $('.liveli1').toggleClass('active');
        $('.soclive').toggleClass('open');
        $('.liveli2,.liveli3').removeClass('open');
    });
    $('.liveli2').click(function(){
        $('.livelist').animate({
            scrollTop: $(".liveli2").offset().top - 425 //扣除/增加距離
        }, 0);
        $('.liveli2').toggleClass('active');
        $('.baselive').toggleClass('open');
        $('.liveli1,.liveli3').removeClass('open');
    });
    $('.liveli3').click(function(){
        $('.livelist').animate({
            scrollTop: $(".liveli3").offset().top - 425 //扣除/增加距離
        }, 0);
        $('.liveli3').toggleClass('active');
        $('.bsklive').toggleClass('open');
        $('.liveli1,.liveli2').removeClass('open');
    });
});
//專業版/新手版切換
$(function(){
    $('.turnnew').click(function(){
        $('.turnnew').addClass('un');
        $('.turnold').removeClass('un');
        $('.new,.let,.bgsm,.bettingbar').removeClass('display');
        $('.old').addClass('display');
        $('.teachbut,.bettingbut').removeClass('active');
    });
    $('.turnold').click(function(){
        $('.turnnew').removeClass('un');
        $('.turnold').addClass('un');
        $('.new').addClass('display');
        $('.old,.let,.bgsm,.bettingbar').removeClass('display');
        $('.teachbut,.bettingbut').removeClass('active');
    });
});
//選擇球種/聯盟
$(function(){
    $('.chballsbut').click(function(){
        $('.chballsbut').toggleClass('active');
        $('.chballs').toggleClass('open');
    });
    $('.chleaguebut').click(function(){
        $('.chleaguebut').toggleClass('active');
        $('.chleague').toggleClass('open');
    });
});
//串關投注
$(function(){
    $('.opbut').click(function(){
        $('.bettingbar,.bettingbox').toggleClass('open');
    });
    $('.cur').click(function(){
        $('.bettingch').addClass('display');
        $('.filter').addClass('on');
    });
    $('.chbut').click(function(){
        $('.bettingch').removeClass('display');
        $('.filter').removeClass('on');
    });
    $('.bettingbut').click(function(){
        $('.bettingbar').toggleClass('display');
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
        $('.new,.result,.teach,.resultsearch').removeClass('display');
        $('.teachbut,.sort,.old,.complex').addClass('display');
        $('.turnnew').addClass('un');
        $('.turnold').removeClass('un');
    });
});
//cube
$(function(){
    $('.cube').click(function(){
        $(this).toggleClass('active');
    });
});
//登入/註冊頁
$(function(){
    $('.loginbut').click(function(){
        $('.login').addClass('display');
        $('.filter').addClass('on');
    });
    $('.loginbar button').click(function(){
        $('.login').removeClass('display');
        $('.filter').removeClass('on');
    });
    $('.loginbox button:nth-of-type(1)').click(function(){
        $('.login').removeClass('display');
        $('.signup').addClass('display');
    })
    $('.loginbox button:nth-of-type(2)').click(function(){
        $('.lobbyact').removeClass('turn');
        $('.head_but').addClass('turn');
        $('.login').removeClass('display');
        $('.filter').removeClass('on');

        $('.middle table').removeClass('turn');
        $('.li_hot').addClass('active');
        $('.li_hot').siblings().removeClass('active');
        $('.li_soc').children('a').attr('href','./html/balls/soccer.html');
        $('.li_base').children('a').attr('href','./html/balls/baseball.html');
        $('.li_bsk').children('a').attr('href','./html/balls/basketball.html');
        $('.li_race').children('a').attr('href','./html/balls/race.html');
        $('.li_esp').children('a').attr('href','./html/balls/esp.html');
        $('.li_stock').children('a').attr('href','./html/balls/stock.html');
        $('.li_lotto').children('a').attr('href','./html/balls/lotto.html');
        $('.li_iceball').children('a').attr('href','./html/balls/iceball.html');
        $('.li_tennis').children('a').attr('href','./html/balls/tennis.html');
        $('.li_snooker').children('a').attr('href','./html/balls/snooker.html');
        $('.li_vball').children('a').attr('href','./html/balls/vball.html');
        $('.li_racecar').children('a').attr('href','./html/balls/racecar.html');
        $('.li_badminton').children('a').attr('href','./html/balls/badminton.html');
        $('.li_beachball').children('a').attr('href','./html/balls/beachball.html');
        $('.li_football').children('a').attr('href','./html/balls/football.html');
        $('.li_tableball').children('a').attr('href','./html/balls/tableball.html');
    })
    $('.signupbut').click(function(){
        $('.signup').addClass('display');
        $('.filter').addClass('on');
    });
    $('.signupbar button').click(function(){
        $('.signup').removeClass('display');
        $('.filter').removeClass('on');
    });
    $('.lobbyact .dollar button:nth-of-type(1)').click(function(){
        if(window.location.href.indexOf("index") > 0 ){
            window.location.href = "./index.html"
        }
        window.location.href = "../../index.html"
    })
});
//左列效果
$(function(){
    $('.left li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $(this).siblings().children('a').removeClass('active');
    })

    $('.li_soc').click(function(){
        $('.dsoc').siblings().addClass('turn');
        $('.dsoc').removeClass('turn');
    })
    $('.li_base').click(function(){
        $('.dbase').siblings().addClass('turn');
        $('.dbase').removeClass('turn');
    })
    $('.li_bsk').click(function(){
        $('.dbsk').siblings().addClass('turn');
        $('.dbsk').removeClass('turn');
    })
    $('.li_race').click(function(){
        $('.drace').siblings().addClass('turn');
        $('.drace').removeClass('turn');
    })
    $('.li_esp').click(function(){
        $('.desp').siblings().addClass('turn');
        $('.desp').removeClass('turn');
    })
    $('.li_stock').click(function(){
        $('.dstock').siblings().addClass('turn');
        $('.dstock').removeClass('turn');
    })
    $('.li_lotto').click(function(){
        $('.dlotto').siblings().addClass('turn');
        $('.dlotto').removeClass('turn');
    })
    $('.li_iceball').click(function(){
        $('.diceball').siblings().addClass('turn');
        $('.diceball').removeClass('turn');
    })
    $('.li_tennis').click(function(){
        $('.dten').siblings().addClass('turn');
        $('.dten').removeClass('turn');
    })
    $('.li_snooker').click(function(){
        $('.dsnooker').siblings().addClass('turn');
        $('.dsnooker').removeClass('turn');
    })
    $('.li_vball').click(function(){
        $('.dvball').siblings().addClass('turn');
        $('.dvball').removeClass('turn');
    })
    $('.li_racecar').click(function(){
        $('.dracecar').siblings().addClass('turn');
        $('.dracecar').removeClass('turn');
    })
    $('.li_badminton').click(function(){
        $('.dbad').siblings().addClass('turn');
        $('.dbad').removeClass('turn');
    })
    $('.li_beachball').click(function(){
        $('.dbeachball').siblings().addClass('turn');
        $('.dbeachball').removeClass('turn');
    })
    $('.li_football').click(function(){
        $('.dfootball').siblings().addClass('turn');
        $('.dfootball').removeClass('turn');
    })
    $('.li_tableball').click(function(){
        $('.dtableball').siblings().addClass('turn');
        $('.dtableball').removeClass('turn');
    })
})
//fixside
$(function(){
    $('.searchbut').click(function(){
        $(this).toggleClass('active');
        $('.search').toggleClass('open');
    });
    $('.box1').click(function(){
        $(this).toggleClass('active');
        $('.sbox1').toggleClass('open');
        $('.sbox1').siblings().removeClass('open active');
    });
    $('.box2').click(function(){
        $(this).toggleClass('active');
        $('.sbox2').toggleClass('open');
        $('.sbox2').siblings().removeClass('open active');
    });
    $('.box3').click(function(){
        $(this).toggleClass('active');
        $('.sbox3').toggleClass('open');
        $('.sbox3').siblings().removeClass('open active');
    });
    $('.box4').click(function(){
        $(this).toggleClass('active');
        $('.sbox4').toggleClass('open');
        $('.sbox4').siblings().removeClass('open active');
    });
    $('.box5').click(function(){
        $(this).toggleClass('active');
        $('.sbox5').toggleClass('open');
        $('.sbox5').siblings().removeClass('open active');
    });
});
//比賽結果
$(function(){
    $('.resultbut').click(function(){
        $(this).addClass('active');
        $('.bettingbut,.allgame').removeClass('active');
        $('.sort,.resultsearch,.result').addClass('display');
        $('.new,.old,.sort,.let,.bgsm,.bettingbar,.teachbut,.complex').removeClass('display');
    });
});
//盤口教程
$(function(){
    $('.teachbut').click(function(){
        $('.letbut,.teachbut').addClass('active');
        $('.bgsmbut,.bettingbut,.allgame').removeClass('active');
        $('.let').addClass('display');
        $('.bgsm,.bettingbar,.new,.old').removeClass('display');
        $('.turnnew').removeClass('un');
        $('.turnold').addClass('un');
    });
    $('.letbut').click(function(){
        $('.letbut').addClass('active');
        $('.bgsmbut').removeClass('active');
        $('.let').addClass('display');
        $('.bgsm').removeClass('display');
    });
    $('.bgsmbut').click(function(){
        $('.letbut').removeClass('active');
        $('.bgsmbut').addClass('active');
        $('.let').removeClass('display');
        $('.bgsm').addClass('display');
    });
});
//內頁出入
$(function(){
    $('.inn_soc').click(function(){
        $('.topfix,.new,.old,.bettingbar,.chleague,.complex').removeClass('display');
        $('.innertopfix,.inner').addClass('display');
        $('.hideboard').addClass('innerboard');
    });
    $('.back').click(function(){
        $('.topfix,.new,.chleague,.complex').addClass('display');
        $('.innertopfix,.inner').removeClass('display');
        $('.hideboard').removeClass('innerboard');
    });
});
//所有賽事
$(function(){
    $('.allgame').click(function(){
        $('.new,.sort,.teachbut,.complex').addClass('display');
        $('.old,.bettingbar,.teach,.result,.resultsearch').removeClass('display');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.turnnew').removeClass('un');
        $('.turnold').addClass('un');
    });
});
//即時注單
$(function(){
    $('.tbet').click(function(){
        if($(this).next().hasClass('op')){
            $(this).removeClass('display');
            $(this).next().addClass('display')
        };
    });
    $('.op').click(function(){
        $(this).prev().addClass('display');
        $(this).removeClass('display')
    });
});
//投注紀錄
$(function(){
    $('.recordbar').click(function(){
        if($(this).next().hasClass('recordbox')){
            $(this).next().toggleClass('display');
            $(this).toggleClass('open');
        };
    });
});
//交易紀錄
$(function(){
    $('.deal_li1').click(function(){
        $('.forli1').addClass('display');
        $('.forli1').siblings().removeClass('display');
    });
    $('.deal_li2').click(function(){
        $('.forli2').addClass('display');
        $('.forli2').siblings().removeClass('display');
    });
    $('.deal_li3').click(function(){
        $('.forli3').addClass('display');
        $('.forli3').siblings().removeClass('display');
    });
});
//我的錢包
$(function(){
    //無註冊信用卡彈出信息
    $('.remindbox button,.remindbar button').click(function(){
        $('.filter').removeClass('on');
        $('.cardremind').removeClass('display');
    });
    //銀行卡
    $('.creditcard').hover(function(){
        $(this).toggleClass('un');
    });
    $('.c1,.c2,.c3').click(function(){
        $(this).addClass('click');
        $(this).siblings().removeClass('click');
    });
    $('.cardbank button').click(function(){
        $('.cardbank').toggleClass('open');
    });
    $('.city button').click(function(){
        $('.city').toggleClass('open');
    });
    $('.county button').click(function(){
        $('.county').toggleClass('open');
    });
    $('.cardaddbar button').click(function(){
        $('.cardadd').removeClass('display');
        $('.filter').removeClass('on');
    });
    $('.add .creditcard').click(function(){
        $('.cardadd').addClass('display');
        $('.filter').addClass('on');
    });
});
//幫助中心
$(function(){
    $('.helpbar').click(function(){
        if($(this).next().hasClass('helpbox')){
            $(this).next().toggleClass('display');
            $(this).toggleClass('open');
        };
    });
    //頁面切換
    $('.help li:nth-of-type(1)').click(function(){
        $('.depositP').addClass('display');
        $('.depositP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(2)').click(function(){
        $('.transP').addClass('display');
        $('.transP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(3)').click(function(){
        $('.withP').addClass('display');
        $('.withP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(4)').click(function(){
        $('.betP').addClass('display');
        $('.betP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(5)').click(function(){
        $('.sportP').addClass('display');
        $('.sportP').siblings().removeClass('display');
    });
    $('.help li:nth-of-type(6)').click(function(){
        $('.skillP').addClass('display');
        $('.skillP').siblings().removeClass('display');
    });
    //sportP
    $('.sportbar button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.sportbar button:nth-of-type(1)').click(function(){
        $('.sportP table:nth-of-type(1)').addClass('display');
        $('.sportP table:nth-of-type(1)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(2)').click(function(){
        $('.sportP table:nth-of-type(2)').addClass('display');
        $('.sportP table:nth-of-type(2)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(3)').click(function(){
        $('.sportP table:nth-of-type(3)').addClass('display');
        $('.sportP table:nth-of-type(3)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(4)').click(function(){
        $('.sportP table:nth-of-type(4)').addClass('display');
        $('.sportP table:nth-of-type(4)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(5)').click(function(){
        $('.sportP table:nth-of-type(5)').addClass('display');
        $('.sportP table:nth-of-type(5)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(6)').click(function(){
        $('.sportP table:nth-of-type(6)').addClass('display');
        $('.sportP table:nth-of-type(6)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(7)').click(function(){
        $('.sportP table:nth-of-type(7)').addClass('display');
        $('.sportP table:nth-of-type(7)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(8)').click(function(){
        $('.sportP table:nth-of-type(8)').addClass('display');
        $('.sportP table:nth-of-type(8)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(9)').click(function(){
        $('.sportP table:nth-of-type(9)').addClass('display');
        $('.sportP table:nth-of-type(9)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(10)').click(function(){
        $('.sportP table:nth-of-type(10)').addClass('display');
        $('.sportP table:nth-of-type(10)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(11)').click(function(){
        $('.sportP table:nth-of-type(11)').addClass('display');
        $('.sportP table:nth-of-type(11)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(12)').click(function(){
        $('.sportP table:nth-of-type(12)').addClass('display');
        $('.sportP table:nth-of-type(12)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(13)').click(function(){
        $('.sportP table:nth-of-type(13)').addClass('display');
        $('.sportP table:nth-of-type(13)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(14)').click(function(){
        $('.sportP table:nth-of-type(14)').addClass('display');
        $('.sportP table:nth-of-type(14)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(15)').click(function(){
        $('.sportP table:nth-of-type(15)').addClass('display');
        $('.sportP table:nth-of-type(15)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(16)').click(function(){
        $('.sportP table:nth-of-type(16)').addClass('display');
        $('.sportP table:nth-of-type(16)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(17)').click(function(){
        $('.sportP table:nth-of-type(17)').addClass('display');
        $('.sportP table:nth-of-type(17)').siblings().removeClass('display');
    });
    $('.sportbar button:nth-of-type(18)').click(function(){
        $('.sportP table:nth-of-type(18)').addClass('display');
        $('.sportP table:nth-of-type(18)').siblings().removeClass('display');
    });
});
//聯絡我們
$(function(){
    $('.callus li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
    $('.callus li:nth-of-type(1)').click(function(){
        $('.contact').addClass('display');
        $('.contact').siblings().removeClass('display');
    });
    $('.callus li:nth-of-type(2)').click(function(){
        $('.suggest').addClass('display');
        $('.suggest').siblings().removeClass('display');
    });
    $('.callus li:nth-of-type(3)').click(function(){
        $('.feeback').addClass('display');
        $('.feeback').siblings().removeClass('display');
    });
    $('.callus li:nth-of-type(4)').click(function(){
        $('.online').addClass('display');
        $('.online').siblings().removeClass('display');
    });
});
//消息中心
$(function(){
    $('.mes li:nth-of-type(1)').click(function(){
        $('.notice').addClass('display');
        $('.notice').siblings().removeClass('display');
        $('.mes button').removeClass('none');
        $('.mes_rowbut').removeClass('display')
    });
    $('.mes li:nth-of-type(2)').click(function(){
        $('.activity').addClass('display');
        $('.activity').siblings().removeClass('display');
        $('.mes button').addClass('none');
        $('.mes_rowbut').removeClass('display')
    });
    $('.mes li:nth-of-type(3)').click(function(){
        $('.announcement').addClass('display');
        $('.announcement').siblings().removeClass('display');
        $('.mes button').addClass('none');
        $('.mes_rowbut').removeClass('display')
    });
    $('.mes li:nth-of-type(4)').click(function(){
        $('.competition').addClass('display');
        $('.competition').siblings().removeClass('display');
        $('.mes button').addClass('none');
        $('.mes_rowbut').addClass('display')
    });
    $('.mes_rowbut').click(function(){
        if($(this).hasClass('lside')){
            $(this).removeClass('lside');
            $(this).addClass('rside');
        } else{
            $(this).removeClass('rside');
            $(this).addClass('lside');
        };
    });
    $('.editbut').click(function(){
        $('.helpbar').addClass('edit');
        $('.helpbar').next().addClass('editing');
        $('.fixbar').addClass('edit');
    });
    $('.cancelbut').click(function(){
        $('.fixbar').removeClass('edit');
        $('.helpbar').removeClass('edit');
        $('.helpbar').next().removeClass('editing');
    });
    $('.mes li').click(function(){
        $('.fixbar').removeClass('edit');
        $('.helpbar').removeClass('edit');
        $('.helpbar').next().removeClass('editing');
    });
});
//設定
$(function(){
    $('.rowbut').click(function(){
        if($(this).hasClass('lside')){
            $(this).removeClass('lside');
            $(this).addClass('rside');
        } else{
            $(this).removeClass('rside');
            $(this).addClass('lside');
        };
    });
});
//關於我們
$(function(){
    $('.about li:nth-of-type(1)').click(function(){
        $('.aboutus').addClass('display');
        $('.aboutus').siblings().removeClass('display');
    });
    $('.about li:nth-of-type(2)').click(function(){
        $('.aboutlink').addClass('display');
        $('.aboutlink').siblings().removeClass('display');
    });
});
//取款
$(function(){
    $('.withdrawl input').focus(function(){
        $(this).addClass('focus');
        $('.withdrawl button').addClass('focus');
    });
    $('.withdrawl input').blur(function(){
        $(this).removeClass('focus');
        $('.withdrawl button').removeClass('focus');
    });
});
//轉點
$(function(){
    $('.transpoint ul button').click(function(){
        $(this).closest('ul').toggleClass('open')
    })
    $('.trans .rowbut').click(function(){
        $(this).toggleClass('turn');
    })
    $('.sword input').focus(function(){
        $(this).addClass('focus');
        $('.sword button').addClass('focus');
    });
    $('.sword input').blur(function(){
        $(this).removeClass('focus');
        $('.sword button').removeClass('focus');
    });
});
//存款
$(function(){
    $('.paybut').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.moneybut').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.tnetcard button').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
    $('.dbox input').focus(function(){
        $(this).addClass('focus');
        $('.dbox button').addClass('focus');
    });
    $('.dbox input').blur(function(){
        $(this).removeClass('focus');
        $('.dbox button').removeClass('focus');
    });
    $('.bank').click(function(){
        $('.tbank').addClass('display');
        $('.tbank').siblings().removeClass('display');
    })
    $('.num').click(function(){
        $('.tnum').addClass('display');
        $('.tnum').siblings().removeClass('display');
    })
    $('.netcard').click(function(){
        $('.tnetcard').addClass('display');
        $('.tnetcard').siblings().removeClass('display');
    })
})
//優惠頁
$(function(){
    $('.discount .window button').click(function(){
        $($(this).closest('div')).next().toggleClass('open');
        $($(this).closest('div')).next().siblings().removeClass('open');
    })
})
//共用

//修改密碼窗
$(function(){
    $('.changebut').click(function(){
        $('.filter').addClass('on');
        $('.passwordchange').addClass('display');
    });
    $('.changebar button').click(function(){
        $('.filter').removeClass('on');
        $('.passwordchange').removeClass('display');
    });
});
//日期搜尋列選單下拉效果
$(function(){
    $('.firstdate button').click(function(){
        $('.firstdate').toggleClass('open');
    });
    $('.lastdate button').click(function(){
        $('.lastdate').toggleClass('open');
    });
});
//radio單擊取消
$(function(){
    $('input:radio').click(function(){
        var $radio = $(this);
        if ($radio.data('checked')){
          $radio.prop('checked', false);
          $radio.data('checked', false);
        } else{
          $radio.prop('checked', true);
          $radio.data('checked', true);
        }
    });
});
//上fixbar選單選定效果
$(function(){
    $('.fixbar li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
})
//left自動高度
$(document).ready(function () {
    //預設高度
    var leftNav = $(".left");
    var wH = window.innerHeight;
    leftNav.css("height", (String(wH - 120) + "px"));
    //自適應高度
    $(window).resize(function () {
        var leftNav = $(".left");
        var wH = window.innerHeight;
        leftNav.css("height", (String(wH - 120) + "px"));
    });
});
// middle自動高度
$(document).ready(function () {
    var middleNav = $(".middle");
    var wH = window.innerHeight;
    middleNav.css("height", (String(wH - 120) + "px"));
    $(window).resize(function () {
        var middleNav = $(".middle");
        var wH = window.innerHeight;
        middleNav.css("height", (String(wH - 120) + "px"));
    });
});
// myself自動高度
$(document).ready(function () {
    var middleNav = $(".myself");
    var wH = window.innerHeight;
    middleNav.css("height", (String(wH - 260) + "px"));
    $(window).resize(function () {
        var middleNav = $(".myself");
        var wH = window.innerHeight;
        middleNav.css("height", (String(wH - 260) + "px"));
    });
});
// right自動高度
$(document).ready(function () {
    var rightNav = $(".right");
    var wH = window.innerHeight;
    rightNav.css("height", (String(wH - 120) + "px"));
    $(window).resize(function () {
        var rightNav = $(".right");
        var wH = window.innerHeight;
        rightNav.css("height", (String(wH - 120) + "px"));
    });
});
// rightlivelist自動高度
$(document).ready(function () {
    var livelistNav = $(".livelist");
    var wH = window.innerHeight;
    livelistNav.css("height", (String(wH - 435) + "px"));
    $(window).resize(function () {
        var livelistNav = $(".livelist");
        var wH = window.innerHeight;
        livelistNav.css("height", (String(wH - 435) + "px"));
    });
});
// rightchatroom自動高度
$(document).ready(function () {
    var chatroomNav = $(".chatroom");
    var wH = window.innerHeight;
    chatroomNav.css("height", (String(wH - 435) + "px"));
    $(window).resize(function () {
        var chatroomNav = $(".chatroom");
        var wH = window.innerHeight;
        chatroomNav.css("height", (String(wH - 435) + "px"));
    });
});