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
        explode_forever();
    }
}

$("#push_me").click(function(e){
    explode(e.pageX, e.pageY);
    $("#push_it_real_good").hide();
    $("#tha_bizznass").show();
    tick_down(5);
});

update_time();

function explode_forever(){
    explode(Math.random() * $("body").width(), Math.random() * $("body").height());
    setTimeout(explode_forever, 500);
}

// explosion construction
function explode(x, y) {
    var particles = 50,
        // explosion container and its reference to be able to delete it on animation end
        explosion = $('<div class="explosion"></div>');

    // put the explosion container into the body to be able to get it's size
    $('body').append(explosion);

    // position the container to be centered on click
    explosion.css('left', x - explosion.width() / 2);
    explosion.css('top', y - explosion.height() / 2);

    for (var i = 0; i < particles; i++) {
        // positioning x,y of the particle on the circle (little randomized radius)
        var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
        color = rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255),
        elm = $('<div class="particle" style="' +
            'background-color: rgb(' + color + ') ;' +
            'top: ' + y + 'px; ' +
            'left: ' + x + 'px"></div>');

        if (i == 0) {
            elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                explosion.remove();
            });
        }
        explosion.append(elm);
    }
}

// get random number between min and max value
function rand(min, max) {
    return Math.floor(Math.random() * (max + 1)) + min;
}
