$(document).ready(function() {
    var giveModal = $("#giveModal");
    var giveModalWrapper = $("#giveModalWrapper");

    //---------------------------------------------
    //------- give modal form activation  --------- 
    //---------------------------------------------

    (function() {
        $(document).on("click", ".give-Btn", function(e) {
        e.preventDefault();
        e.stopPropagation();
        giveModalWrapper.css({
            display: "block"
        });

        giveModal.css({
            display: "block"
        });

        giveModal.addClass("animate");
        giveModalReset();
        });

        $(".xClose, #post-Btn").click(function() {
            giveModal.velocity({ translateY: ['100%'] }, { display: "none", opacity: "1" }, {
                duration: 1000,
                easing: "spring"
            });
            giveModalWrapperClear();
        });

    })();

    // function activateGive() {
    //     giveModal.velocity({translateY: ['0%', '-100%'] },{ display: "block", opacity: "1" }, {duration: 15000, easing: "spring"
    //     });
    // }

    // $("#give-Btn").on("click", function(e) {
    //     giveModal.css({
    //         display: "block",
    //         opacity: "1"
    //     });
    //     giveModal.addClass("animate");
    //     giveModalReset();
    // });

    // $(".xClose").on("click", function(e) {
    //     giveModal.velocity({
    //         top: "100%",
    //         opacity: "0"
    //     });
    //     giveModalReset();
    // });

    $("#post-Btn").on("click", function(e) {
        giveModal.velocity({ translateY: ['100%'] }, { display: "none", opacity: "0" }, {
            duration: 1000,
            easing: "spring"
        });
    });



    // giveModalReset();
    function giveModalReset() {
        giveModal.on('animationend', function() {
            giveModal.removeClass("animate");
        });
    }
    function giveModalWrapperClear() {
        setInterval(function(){ 
            giveModalWrapper.css({
                display: "none"
        }); }, 1000);
    }

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
        var subNavPostContain = $(".subNavPostContain");
        subNavPostContain.css({ visibility:"visible" });
    });
    $(".mainNav").on("scrolling", ".subNavPostContain", function(e) {
        subNavPostContain.css({ visibility:"visible" });
    });
});
