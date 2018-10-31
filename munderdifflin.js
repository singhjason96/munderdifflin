var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(numofpics) {
  showDivs(slideIndex += numofpics);
}

function showDivs(numofpics) {

  var show = document.getElementsByClassName("slideshow");
  if (numofpics > show.length) {slideIndex = 1}
  if (numofpics < 1) {slideIndex = show.length}
  for (i = 0; i < show.length; i++) {
     show[i].style.display = "none";
  }
  show[slideIndex-1].style.display = "block";
}


document.getElementById('Shop').addEventListener('click', function() {
  alert('We Sold Everything!!!!!');
});
