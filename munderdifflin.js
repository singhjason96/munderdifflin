var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {

  var show = document.getElementsByClassName("slideshow");
  if (n > show.length) {slideIndex = 1}
  if (n < 1) {slideIndex = show.length}
  for (i = 0; i < show.length; i++) {
     show[i].style.display = "none";
  }
  show[slideIndex-1].style.display = "block";
}
