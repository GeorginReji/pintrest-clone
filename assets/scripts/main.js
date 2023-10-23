const images = Array.from(document.getElementsByClassName("image-wrapper"));
const sliderText = Array.from(document.getElementsByClassName("text-wrapper"))
const sliderBtns = Array.from(document.getElementsByClassName("image-slide-countr"))
var repeat = function() {
   console.log(images);
   let i = 0;
   var repeater = () => {
      setTimeout(() => {
      images.forEach((element, index) => {
         if(index == i) {
         element.querySelectorAll('.image-container').forEach((e) => {
            e.classList.remove("inactive");
            e.classList.add("active");
         })
         }
         else {
            element.querySelectorAll('.image-container').forEach((e) => {
               e.classList.remove("active");
               e.classList.add("inactive");
            })
         }
      })
      sliderText.forEach((element, index) => {
         if(index == i) {
            element.classList.remove("inactive");
            element.classList.add("active");
         }
         else {
            element.classList.remove("active");
            element.classList.add("inactive");
         }
      })
      i++
      if(images.length == i) {
         i = 0;
      }
      if(i>= images.length) {
         return;
      }
      repeater();
      }, 7000);
   }
   repeater();
}
repeat();