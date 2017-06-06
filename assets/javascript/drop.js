var pImageFile;
var droppedFiles = false;
var dropZone = $("#dropZone");

  dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
    e.preventDefault();
    e.stopPropagation();
  })
.on("dragover dragenter", function(e) {
	dropZone.addClass('dropZoneDragover');	
	console.log("this: "+this);
  })
.on("drop dragleave dragend", function(e) {
	dropZone.removeClass('dropZoneDragover');
	console.log("this2: "+this);
})
.on('drop', function(e) {
    droppedImageFiles = e.originalEvent.dataTransfer.files;
    var pImageFile = droppedImageFiles[0];
    function callbackFunction(pImageFile){
      global_droppedImage = pImageFile; //pass result to global var.
}
    console.log("files: "+droppedFiles);
console.log("file: "+pImageFile);
});


console.log("file checking global scope: "+pImageFile);

// function dragDrop(event) {
// 	event.preventDefault();
// 	console.log(event.dataTransfer.files[0]);
// 	console.log(event.dataTransfer.files[0].name);
// 	console.log(event.dataTransfer.files[0].size);
// }

// function dragstart_handler(event) {
//  event.dataTransfer.setData("text", ev.target.id);
//  event.dropEffect = "copy";
// }
// function dragover_handler(event) {
//  event.preventDefault();
//  event.dataTransfer.dropEffect = "copy"
// }
// function drop_handler(event) {
//  event.preventDefault();
//  var dataElement = ev.dataTransfer.getData("text");
//  event.target.appendChild(document.getElementById(dataElement));
// }
