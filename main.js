$(document).ready(function () {


    $("div.districts").each(function (index) {

        $(this).attr({ "id": "district_" + (index + 1) }).append("<span class='slideAnimation'>Slide" + (index + 1) + "</span>");
        $("ul#indicatorWrapper").append("<a></a>");


    });



    $("#indicatorWrapper a").first().addClass("selected");
    //			window.location.hash=$(".districts:eq(0)").attr("id");


    var indicatorWrapperHeight = $("#indicatorWrapper").outerHeight();
    $("#indicatorWrapper").css({ "marginTop": (-indicatorWrapperHeight / 2) + "px" });



    $("ul#indicatorWrapper a").click(function () {

        var indexNumber = $(this).index();
        var districtsScrollTop = $(".districts:eq(" + indexNumber + ")").offset().top;

        $("body,html").animate({ "scrollTop": districtsScrollTop }, 1000);
        //$(this).attr({"href":"#district_"+(indexNumber+1)});//siblings().removeClass("selected").end().addClass("selected")



    });




    $(window).scroll(function () {
        $(".districts").each(function (i) {
            var heightpercentage = ($(this).outerHeight() * 25) / 100
            if (

                $(this).offset().top < window.pageYOffset + heightpercentage && window.pageYOffset + heightpercentage < $(this).offset().top + $(this).outerHeight()

            ) {
                // var districtId = $(this).attr("id");
                // window.location.hash = '#!' + districtId;
                // if ($("#indicatorWrapper a:eq(" + i + ")").hasClass("selected")) {
                // 	// window.location.hash = districtId;
                // }

                $("#indicatorWrapper a:eq(" + i + ")").siblings().removeClass("selected").end().addClass("selected");

                $(this).find("span.slideAnimation").animate(1000, function () {

                    $(this).css({ "opacity": "1", "top": "50%", "color": "#ff3" });


                });

                if (

                    $(".districts:eq(3)").offset().top < window.pageYOffset + heightpercentage && window.pageYOffset + heightpercentage < $(".districts:eq(3)").offset().top + $(".districts:eq(3)").outerHeight()

                ) {
                    $(".districts:eq(3) span").remove().end().find("div.animate4").addClass("animate-district4");
                }



                //console.log($(this).offset().top);
            }
            else {
                $(this).find("span.slideAnimation").animate(1000, function () {

                    $(this).css({ "opacity": "0", "top": "0%", "color": "#fff" });

                });

                if (

                    $(".districts:eq(3)").offset().top < window.pageYOffset + heightpercentage && window.pageYOffset + heightpercentage < $(".districts:eq(3)").offset().top + $(".districts:eq(3)").outerHeight()

                ){
                    $(".districts:eq(3) div.animate4").removeClass("animate-district4");
                }
                    
            }
        })
    });


});
