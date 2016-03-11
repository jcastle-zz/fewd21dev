var images = ["images/animal2.jpg","images/animal3.jpg","images/animal4.jpg","images/animal5.jpg","images/animal6.jpg","images/animal7.jpg"];
var i = 0;
var maxImages = images.length-1;

//Function for back button
function previousImage() {
    //If increment variable is greater than 0, increment back, else stay at max images, else increment image.
    if(i > 0) {
        i--;
    } else {
        i = maxImages;
    }
    changeImage(i);
}

//Function for next button
function nextImage() {
    //If increment var is less than maxImages, increment, else start at 0, else change image.
    if(i < maxImages) {
        i++;
    } else {
        i = 0;
    }
    changeImage(i);
}

//Function to change image
function changeImage() {
	//Update img src to current image.
	$("#carousel-image").attr("src", images[i]);
}

//Event listeners
$(document).ready(function() {
    //Next image click
    $("#next").on("click",nextImage);
    //Previous image click
    $("#back").on("click",previousImage);
});