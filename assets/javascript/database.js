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
    })
    .on("drop dragleave dragend", function(e) {
        dropZone.removeClass('dropZoneDragover');
    })
    .on('drop', function(e) {
        e.preventDefault();
        droppedImageFiles = e.originalEvent.dataTransfer.files;


            for (var i = 0; i < files.length; i++) {
                var reader = new FileReader(); 

            }
            
            reader.onloadend = function(e) {  // finished reading file data.
                var img = document.createElement('img');
                img.src = e.target.result;
                document.body.appendChild(img);
            }

            reader.readAsDataURL(file); // start reading the file data.
        

        console.log(img.scr);
    });

        //  pImageFile = droppedImageFiles[0];

        // console.log(droppedFiles);
        // console.log(pImageFile);
        // console.log(JSON.stringify(pImageFile));
        // });

        // $("#dropZone").on('dragover', function(e) {
        //     e.stopPropagation();
        //     e.preventDefault();
        //     console.log(e);
        //     e.originalEvent.dataTransfer.dropEffect = 'copy';
        // });

        // $("#dropZone").on("drop", function(e){
        //     e.preventDefault();
        //     console.log(e);
        //     var file = e.dataTransfer.files;
        //     console.log(file);
        // })
        // drop(document.getElementById("dropZone"), function(response){
        //     console.log(response);
        //     console.log(response.read);
        // });
        // function drop(zone, callback) {
        //     if (window.location.protocol === "file:")
        //         throw new Error("File cannot be accessed via the file protocol.");
        //     else if (!zone)
        //         throw new Error("Dropzone is not valid.");
        //     var fileData = {};
        //     function cancel(event) {
        //         console.log(event)
        //         event.stopPropagation();
        //         event.preventDefault();
        //     }
        //     function toggleCancel(event) {
        //         console.log(event)
        //         cancel(event);
        //         zone.classList.toggle('drop-zone');
        //     }
        //     zone.addEventListener('dragenter', toggleCancel, false);
        //     zone.addEventListener('dragover', cancel, false);
        //     zone.addEventListener('dragleave', toggleCancel, false);
        //     zone.addEventListener('drop', function(event) {
        //         console.log(event);
        //         toggleCancel(event);
        //         var files = event.dataTransfer.files;
        //         console.log(files)
        //         for (var i = 0, len = files.length; i < len; i++){
        //             fileData = {
        //                 name: files[i].name,
        //                 size: files[i].size,
        //                 date: files[i].lastModifiedDate,
        //                 type: files[i].type,
        //                 originalFile: files[i]
        //             };
        //             console.log(fileData);
        //             readFile(files[i]);
        //         }
        //     }, false);
        //     function readFile(file) {
        //         var reader = new FileReader();
        //         reader.onload = handleResult;
        //         if (file.type.indexOf('image') != -1)
        //             reader.readAsDataURL(file);
        //         else
        //             reader.readAsText(file);
        //     }
        //     function handleResult(event) {
        //         fileData.read = event.target.result;
        //         callback(fileData);
        //     }
        // }

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



            //     console.log("first: "+lastObj.firstName)
            //     console.log("last: "+lastObj.lastName);
            //     console.log("Zip: "+lastObj.zipCode);
            //     console.log("contact: "+lastObj.contact);
            //     console.log("Descript: "+lastObj.prodDescription);
            //     console.log("category: "+lastObj.categoryName)
            //     console.log("prodImage: "+lastObj.pImageFile)


            var takeContain = $("#takeContain")
            var display = $("<div>");

            var prodSpec = display.html('<a href="#"><img src="http://stevensegallery.com/200/300" alt=' + data.categoryName + '></a>' + "<p>" + data.prodDescription + "<p>");


            takeContain.prepend(prodSpec);
            takeContain.addClass("takeGallery");
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
            // var pImagefile = $("pImagefile").val().trim(); // pImageFile from drop.js

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
                pImagefile: pImagefile
            }

            // Uploads product data to the database
            database.ref().push(product);

            // Logs everything to console
            // console.log(newProduct);


            // console.log(moment().format("MMMM Do YYYY, h:mm:ss a"))
        });
