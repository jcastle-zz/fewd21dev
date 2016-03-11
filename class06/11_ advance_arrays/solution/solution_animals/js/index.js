var images=["images/animal2.jpg","images/animal3.jpg","images/animal4.jpg","images/animal5.jpg","images/animal6.jpg","images/animal7.jpg",];
var i=0;
var votes=[];

function previousImage(){
	i>0 ? changeImage(--i):0;
}// end previousImage

function nextImage(){
	i+1<images.length ? changeImage(++i):calculateVotes();
}// end nextImage

function changeImage(){
	jQuery("#image-to-vote-on").attr("src",images[i]);
	jQuery("#your-vote>option").prop("selected",false);
}// end changeImage

function calculateVotes(){
	var ave=0;
	if(votes.length!==0){
		jQuery.each(votes,function(element){
			ave+=parseInt(element);
		});
		ave=(Math.round((ave/votes.length) * 100) / 100).toFixed(2);
	}
	jQuery("#image-to-vote-on+div").text("You have reached the end. Total cuteness score was: "+ave);
}// end calculateVotes


jQuery(document).ready(function(){

	jQuery("#your-vote").on("change",function(){
		if(i<images.length){
			votes[i]=jQuery("#your-vote").val();
			nextImage();
		}
	});

	jQuery("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
	jQuery("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
});