document.addEventListener("DOMContentLoaded", function(){
    var dots = document.getElementById("dots");
    var moreContent = document.getElementById("more__content");
    var readMore = document.getElementById("btn");
    var isExpanded = false;

    btn.addEventListener("click", function(){
        if (!isExpanded){
            moreContent.style.display = "inline";
            dots.style.display = "none";
            readMore.textContent = "Read Less";
        }
        else {
            moreContent.style.display = "none";
            dots.style.display = "inline";
            readMore.textContent ="Read More";
        }
        isExpanded = !isExpanded;
    });
});
