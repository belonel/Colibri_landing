$(document).on('ready', function() {
      
      $(".vertical-center").slick({
        dots: false,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        autoplay: false,
        prevArrow: '<img src="up.svg" style="margin-bottom: 10px;">',
        nextArrow: '<img src="down.svg" style="margin-top: 10px; ">'
      });
    $(".vertical-left").slick({
        dots: false,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        autoplay: false,
        prevArrow: '<img src="up.svg" style="margin-bottom: 10px;">',
        nextArrow: '<img src="down.svg" style="margin-top: 10px; ">'
      });
    $(".vertical-right").slick({
        dots: false,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        autoplay: false,
        prevArrow: '<img src="up.svg" style="margin-bottom: 10px;">',
        nextArrow: '<img src="down.svg" style="margin-top: 10px; ">'
      });
});

var block1 = "";
var block2 = "";
var block3 = "";

function checkPageType(str) {
    var type = "";
    
    if (str.includes("dots")) {
        type = "dots";
    }
    else if (str.includes("lines")) {
        type = "lines";
    }
    else if (str.includes("square")) {
        type = "square";
    }
    else if (str.includes("english")) {
        type = "english";
    }
    console.log("type: ", type, "\n");
    return type;
}

function chose() {
    var p1 = document.getElementsByClassName("slick-current")[0].innerHTML;
    var p2 = document.getElementsByClassName("slick-current")[1].innerHTML;
    var p3 = document.getElementsByClassName("slick-current")[2].innerHTML;
    
    block1 = checkPageType(p1);
    block2 = checkPageType(p2);
    block3 = checkPageType(p3);
}

function getName() {
    return document.getElementById('personName').value;
}

function getAddress() {
    return document.getElementById('personAddress').value;
}

function buy() {
    $.ajax({
        type: "POST",

        url: "https://hooks.zapier.com/hooks/catch/2800027/o1emugn/",            //серверный скрипт принимающий запрос
        data: {
            name: getName(),
            address: getAddress(),
            block_1: block1,
            block_2: block2,
            block_3: block3,
            upsale: "no",
            total_price: "590"
        },
        success: function(res) {      //функция выполняется при удачном заверщение
         console.log("Данные успешно отправлены на сервер");
        }
    });
}