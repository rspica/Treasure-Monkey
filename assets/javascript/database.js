//---------------------------------------------------------
// -------------------- Drag and Drop ---------------------
//---------------------------------------------------------

var pImageFile;
var droppedFiles = false;
var dropZone = $("#dropZone");

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
.on("dragover dragenter", function(e) {
    dropZone.addClass('dropZoneDragover');  
    return false;
  })
.on("drop dragleave dragend", function(e) {
    dropZone.removeClass('dropZoneDragover');
    return false;
})
.on('drop', function(e) {
    var fileReader;
    droppedImageFiles = e.originalEvent.dataTransfer.files;
    var pImageFile = droppedImageFiles[0];
    

    droppedFiles = new Image();
    fileReader = new FileReader();
    fileReader.onload = function(e) {
      droppedFiles.src = e.target.result;
      $(".dzImage").html(droppedFiles);
    };
    fileReader.readAsDataURL(pImageFile); //reads data on drop
    console.log(droppedFiles);
  });


        //---------------------------------------------------------
        // ------------------- AUThENTICATION ---------------------
        //---------------------------------------------------------

        var provider = new firebase.auth.GoogleAuthProvider();




        //---------------------------------------------------------
        // ----------------------- FIREBASE -----------------------
        //---------------------------------------------------------
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyAotOXSwkXt1ZJvD34uuiQNKwV8yBHl8KU",
            authDomain: "teasuremonkey.firebaseapp.com",
            databaseURL: "https://teasuremonkey.firebaseio.com",
            projectId: "teasuremonkey",
            storageBucket: "teasuremonkey.appspot.com",
            messagingSenderId: "266280220060"
        };

        firebase.initializeApp(config);

        var database = firebase.database();

        // gets values from give input fields
        var firstName = "";
        var lastName = "";
        var zipCode = "";
        var contact = "";
        var prodDescription = "";
        var categoryName = "";

        database.ref().on("child_added", function(childSnapShot, prevChildKey) {
            // console.log(childSnapShot.val());

            var data = childSnapShot.val();
            console.log(data);


            var galleryWrapper = $(".galleryWrapper")
            var display = $("<div>");

            var prodSpec = display.html('<a href="#" class="takeItem"><img src="http://stevensegallery.com/200/300" alt=' + data.categoryName + "></a><p class='Descript'>" + data.categoryName + "<br />" + data.prodDescription + "<p class='Descript'>Date posted: ");
            // var prodSpec = display.html('<a href="#">' + droppedFiles +'alt=' + data.categoryName + "></a><p class='Descript'>" + data.categoryName + "<br />" + data.prodDescription);

            $(".itemDescript").html("<p class=''>" + data.categoryName + "<br />" + data.prodDescription + "<p>" + "<br /><p>Date posted: " );

            galleryWrapper.prepend(prodSpec);
            display.addClass("takeGalleryItem");
            console.log("image: "+droppedFiles);
        });



        // 2. Button for adding products
        $("#post-Btn").on("click", function(event) {
            event.preventDefault();

            // Grabs user input
            var firstName = $("#firstName").val().trim();
            var lastName = $("#lastName").val().trim();
            var zipCode = $("#zipCode").val().trim();
            var contact = $("#contact").val().trim();
            var prodDescription = $("#prodDescription").val().trim();
            var categoryName = $("#categoryName").val().trim();
            var droppedImage = droppedFiles

            // Creates local "temporary" object for holding product data
            // var newProduct = {
            //     firstName: firstName,
            //     lastName: lastName,
            //     zipCode: zipCode,
            //     contact: contact,
            //     prodDescription: prodDescription,
            //     categoryName: categoryName,
            // }
            console.log(pImageFile);

            var product = {
                firstName: firstName,
                lastName: lastName,
                zipCode: zipCode,
                contact: contact,
                prodDescription: prodDescription,
                categoryName: categoryName,
                droppedFiles: droppedImage
            }

            // Uploads product data to the database
            database.ref().push(product);

            // Logs everything to console
            // console.log(newProduct);


            console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
        });
