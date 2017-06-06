dropIn = false


dropZone = $("#dropZone")
dropZone.dragOver(highLight);
dropZone.dragleave(noHighLight);
dropZone.drop(noHighLight, fileDropped);
var dataElement = ev.dataTransfer.getData("text");

function highLight() {
	dropZone.style('border: 2px dotted black')
}

function fileDropped() {
	var dropZone = document.getElementById("dropZone");


	dropZone.ondragover = function() {
		this.classname = "dropZone dragover";
		return: false;
	}

	dropZone.ondragleave = function() {
		this.className = "dropZone";
		return: false;
	}


}



// function dragDrop(event) {
// 	event.preventDefault();
// 	console.log(event.dataTransfer.files[0]);
// 	console.log(event.dataTransfer.files[0].name);
// 	console.log(event.dataTransfer.files[0].size);
// }

function dragstart_handler(event) {
 event.dataTransfer.setData("text", ev.target.id);
 event.dropEffect = "copy";
}
function dragover_handler(event) {
 event.preventDefault();
 event.dataTransfer.dropEffect = "copy"
}
function drop_handler(event) {
 event.preventDefault();
 var dataElement = ev.dataTransfer.getData("text");
 event.target.appendChild(document.getElementById(dataElement));
}
<body>
 <p id="p1" draggable="true" ondragstart="dragstart_handler(event);">This element is draggable.</p>
 <div id="target" ondrop="drop_handler(event);" ondragover="dragover_handler(event);">Drop Zone</div>
</body>