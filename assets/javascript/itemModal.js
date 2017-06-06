// $(document).ready(function() {
//     var giveModal = $("#giveModal");
//     var takeItem = $(".takeItem");
//     var itemModalWrapperWrapper = $("#itemModalWrapper");

//     //---------------------------------------------
//     //----- take item modal form activation ------- 
//     //---------------------------------------------

//         $(document).on("click", ".takeItem", function(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         takeItem.css({
//             display: "block"
//         });

//         itemModalWrapperWrapper.html(prodSpec);



        $(function() {
        $(".galleryWrapper").on("click", ".takeItem", function() {
            $('.imagepreview').attr('src', $(this).find('img').attr('src'));
            $('#imagemodal').modal('show');   
        });     
});