var index = 0;

function show_image(i){ //The parameter (i) is going to increment or decrement the index
    index += i; //If the user clicks the next button, it is going to increment it by one and vice-versa.

var images = document.getElementsByClassName("image") //Stores all images in the variable images.
var dots = document.getElementsByClassName("dot");

  // hide all the images
  for (i = 0; i < images.length; i++) 
    images[i].style.display = "none";
  
  // remove the active class from the dot
  for (i = 0; i < dots.length; i++) 
    dots[i].className = dots[i].className.replace(" active", "");
  
  // if index is greater than the amount of images (set it to zero)
  if (index > images.length - 1) 
    index = 0 ;
  
  // if index is less than zero (set it to the length of images)
  if (index < 0)
    index = images.length - 1;

  // only display the image that's next or previous
  images[index].style.display = "block";
  // only make the current dot active
  dots[index].className += " active";
}

show_image(0);