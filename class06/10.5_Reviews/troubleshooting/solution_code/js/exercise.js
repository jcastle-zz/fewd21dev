jQuery(document).ready(function(){

    jQuery(".breedContainer .toggler").on("click",function(){
        jQuery(this).parent().toggleClass("breedContainerLG");
        if(jQuery(this).attr('src') == "img/240px-Gnome-window-close.svg.png"){
            jQuery(this).attr('src',"img/48px-Gnome-list-add.svg.png");
        }else{
            jQuery(this).attr('src',"img/240px-Gnome-window-close.svg.png");
        }
    });
});