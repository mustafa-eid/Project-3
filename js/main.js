new WOW().init();
let open = document.getElementById('open-icon');



$(document).ready(function () {
    $('.open-icon, .close-icon, .menu, .hide').click(function () {
        $('.open-icon').fadeToggle();
        $('.close-icon').fadeToggle();
        $('.menu').fadeToggle();
        $('.hide').fadeToggle();
    })
})
$(window).scroll(function () {
    x = $(window).scrollTop();
    if (x > 550) {
        $('.btn5').css("opacity", "1")
        $('.home').css("background", "#fff")
    } else {
        $('.btn5').css("opacity", "0")
        $('.home').css("background", "#ddd")
    }
    // console.log(x);
})


// var scroll = new SmoothScroll('a[href*="#"]');
// $(function () {
//     $("body").niceScroll({
//         cursorcolor: "pink"
//     });
// });

// buttons plus changer
let all_buttons = document.querySelectorAll(".accordion>.card");
console.log("all_buttons")
all_buttons.forEach(ele=>{
    ele.setAttribute("open", "no")
    ele.onclick = function() {
        if(ele.getAttribute("open") == "no") {
            ele.querySelector("button i").className = "fas fa-minus";
            ele.setAttribute("open", "yes");
        } else {
            ele.querySelector("button i").className = "fas fa-plus";
            ele.setAttribute("open", "no");
        }
    }
})