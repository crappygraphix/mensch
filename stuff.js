function show_button(){
    $("#not_yet").hide();
    $("#push_it_real_good").show();
}

function pad_time(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function update_time(){
    const today = new Date();
    const bday = new Date("2021-11-20T00:00:00-09:00");
    let diff = Math.trunc((bday-today) / 1000);
    let h = Math.trunc(diff / 3600);
    let m = Math.trunc((diff - (h * 3600)) / 60);
    let s = diff - ((h * 3600) + (m * 60))
    m = pad_time(m);
    s = pad_time(s);
    $("#timer").html(h + ":" + m + ":" + s);
    if (diff > 0) {
        setTimeout(update_time, 1000);
    } else {
        show_button();
    }
}

function tick_down(a){
    var s = "";
    for(var i=0; i<a; i++){
        s += ".";
    }
    $("#count_down").html(s);
    if(a > 0) {
        setTimeout(function(){tick_down(a - 1)}, 1000);
    } else {
        $("#image_start").hide();
        $("#image_a").show();
        tick_down_2(5);
    }
}

function tick_down_2(a){
    var s = "";
    for(var i=0; i<a; i++){
        s += ".";
    }
    $("#count_down_2").html(s);
    if(a > 0) {
        setTimeout(function(){tick_down_2(a - 1)}, 1000);
    } else {
        $("#image_a").hide();
        $("#image_b").show();
    }
}

$("#push_me").click(function(){
    $("#push_it_real_good").hide();
    $("#tha_bizznass").show();
    tick_down(5);
});

update_time();
