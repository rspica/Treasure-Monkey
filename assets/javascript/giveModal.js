$(document).ready(function() {
    var giveModal = $("#giveModal");
    var modalWrapper = $(".modalWrapper");

    // giveModalReset();
    function giveModalReset() {
        giveModal.on('animationend', function() {
            giveModal.removeClass("animate");
        });
    }
    function xSubmitReset() {
        giveModal.on('animationend', function() {
            giveModal.removeClass("modalAnime");
            modalWrapper.css("display", "none");
        });
    }

    // function modalWrapperClear() {
    //     // setTimeout(function(){ 
    //         modalWrapper.css({
    //             display: "none"
    //     }); // }, 100);




    //---------------------------------------------
    //------- give modal form activation  --------- 
    //---------------------------------------------

    $(document).on("click", ".give-Btn", function(e) {
        e.preventDefault();
        e.stopPropagation();
console.log("event1: "+e);
        modalWrapper.css("display", "block");
        giveModal.addClass("animate");
        giveModalReset();
        });

    modalWrapper.on("click",".xClose, #post-Btn", function(e) {
        e.preventDefault();
        e.stopPropagation();
        giveModal.addClass("modalAnime");
        xSubmitReset();
            // modalWrapperClear();
     });



    modalWrapper.on("click", "#post-Btn", function(e) {
        e.preventDefault();
        e.stopPropagation();
        giveModal.velocity({ translateY: ['100%'] }, { display: "none", opacity: "0" }, {
            duration: 1000,
            easing: "spring"
        });
        giveModalReset();
    });


    //---------------------------------------------
    //-------------  nav pulse  ------------------- 
    //---------------------------------------------

    $(".mainNav").on("mouseenter", ".title", function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).addClass("navPulse");
    }).on("mouseleave", ".title", function() {
        $(this).removeClass("navPulse");
    });

    //---------------------------------------------
    //---- smooth page scrolling with easing  ----- 
    //---------------------------------------------


    $('a[href*="#takeContain"]').on("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // $(document).onscroll = function() {appear()};

        // function appear() {
        //     if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        //         subNavPostContain.addClass("slideIn");
        //     }
        // }

        var target = $(this).attr("href");
        console.log('this; ' + this);
        $(target).velocity("scroll", {
            duration: 1500,
            offset: -50,
            easing: "spring"
        });
        setTimeout(function() {
            var subNavPostContain = $(".subNavPostContain");
            // subNavPostContain.css("visibility", "visible");
            subNavPostContain.velocity({ translatex: ['-110%'] }, { visibility: "visible", opacity: "1" }, {
            duration: 2000,
            easing: "spring"
        }, 1000);
        });

        $(".mainNav").on("scroll", ".subNavPostContain", function(e) {
            e.preventDefault();
            e.stopPropagation();
            subNavPostContain.css("visibility", "hidden");
        });
    });
});
