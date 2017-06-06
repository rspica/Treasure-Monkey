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
    filereader.onload = function(e) {
      droppedFiles.src = e.target.result;
      $(".dzImage").html(droppedFiles);
    };
    filerReader = readeAsDataURL(pImageFile);
  });
}
dropZone(target)



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
