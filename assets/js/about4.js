// Get the modal
var modal = document.getElementById("myModal4");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img04");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = "assets/img/tin_ab.png";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
