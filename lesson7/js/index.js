//document ready
$(function(){
    // Name
    //文字框賦值
    $("#input_name").val('李小華');
    //文字框取值
    let name = $("#input_name").val();
    console.log("name is: " + name);

    // 年
    //文字框賦值
    $("#sel_bday").val('1983');
    //文字框取值
    let bday = $("#sel_bday").val();
    console.log("bday is: " + bday);

    // 月
    //文字框賦值
    $("#sel_bdam").val('6');
    //文字框取值
    let bdam = $("#sel_bdam").val();
    console.log("bdam is: " + bdam);
   
    // 日
    //文字框賦值
    $("#sel_bdam").val('6');
    //文字框取值
    let bdam = $("#sel_bdam").val();
    console.log("bdam is: " + bdam);

    //checkbox賦值
    $("#check_games_1").prop("checked", true);
    $("input[name='check_games'][value='2']").prop("checked", true);
    //checkbox取值
    let games = []
    $.map($("input[name='check_games']:checked"), function (el) {
    games.push($(el).val())
    })
    console.log("games is: " + games);


    //最後送出
    $("#send").click(function(e){ send(e); });
})



    function send(e)
{
   e.preventDefault();
   console.log("name is: " + name);
   console.log("bd is: " + bdy + "-" + bdm + "-" + bdd);
   console.log("gender is: " + gender);
   console.log("games is: " + games);
   console.log("note is: " + note);
}


 
