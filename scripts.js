//Displays New Random Image on Window Load
let images = 10;
function changeBg() {
  let image = Math.ceil(Math.random() * images);
  document.body.style.backgroundImage = "url('images/" + image + ".jpg')";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundAttachment = "fixed";
}
changeBg();
