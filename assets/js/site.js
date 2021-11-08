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


//JS for tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
 
function openRoomDetail(){
  openModal();
}

function getDateTmrw(){
  var today = new Date();
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  var tomday = tomorrow.getDate();
  var tommonth = tomorrow.getMonth() + 1;
  var tomyear = tomorrow.getFullYear();
  if(dd<10){dd='0'+dd} if(mm<10){mm='0'+mm} today = mm+'/'+dd+'/'+yyyy;
  if(tomday<10){tomday='0'+tomday} if(tommonth<10){tommonth='0'+tommonth} tomorrow = tommonth+'/'+tomday+'/'+tomyear;
  // $('#theDate').attr('value', today);
  $('#from-date').attr('value', tomorrow);
  $('#to-date').attr('value', tomorrow);
}