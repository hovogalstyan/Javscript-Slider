var next = document.querySelector(".right-arrow-Block");
var prev = document.querySelector(".left-arrow-Block");
var sliderImg = document.querySelector(".slider-img");
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
var i = 0;
var text = document.getElementById('text');

if (next !== null) {
  next.onclick = function () {
    if (images !== null) {
      if (i >= images.length - 1) {
        i = -1;
      }
    }
    i++;
    if(text !== null){
    text.innerHTML = i + 1;
  }
    return setImg();
  };
}

if (prev !== null) {
  prev.onclick = function () {
    if (i <= 0) {
      if (images !== null) {
        i = images.length;
      }
    }
    i--;
    if(text !== null){
    text.innerHTML = i + 1;
  }
    return setImg();
  };
}
function setImg() {
  if (sliderImg !== null) {
    return sliderImg.setAttribute("src", "img/" + images[i]);
  }
}