var htmlBlock = document.getElementById('visual-html-container');
var codeBlock = document.getElementById('code');



function handleDragStart(ev) {
	ev.dataTransfer.setData('text', this.innerHTML);
}
function handleDragOver(ev) {
	ev.preventDefault()
}
function allowDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    var el = document.createElement(data);
    el.appendChild(document.createTextNode(data));
    ev.target.appendChild(el);

    codeBlock.innerText = htmlBlock.innerHTML;
}




window.onload = function() {
	var cols = document.querySelectorAll('.draggable');
	[].forEach.call(cols, function(col) {
	  col.addEventListener('dragstart', handleDragStart, false);
	  col.addEventListener('dragover', handleDragOver, false);
	});
};