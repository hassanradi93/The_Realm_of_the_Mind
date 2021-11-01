// open modal for book
function openModal(){
	document.getElementById("myModal").style.display = "block";
}

function closeModal(){
	document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target ==  document.getElementById("myModal")) {
    document.getElementById("myModal").style.display = "none";
  }
}