// Get the modal
var modal = document.getElementById('myModal');
 
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
 
 
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
}

document.addEventListener("DOMContentLoaded", function(){
    let includes = document.getElementsByTagName('include');
    for(var i=0; i<includes.length; i++){
        let include = includes[i];
        load_file(includes[i].attributes.src.value, function(text){
            include.insertAdjacentHTML('afterend', text);
            include.remove();
        });
    }
    function load_file(filename, callback) {
        fetch(filename).then(response => response.text()).then(text => callback(text));
    }
});

1
document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByTagName("include");for(var t=0;t<e.length;t++){let a=e[t];n(e[t].attributes.src.value,function(e){a.insertAdjacentHTML("afterend",e),a.remove()})}function n(e,t){fetch(e).then(e=>e.text()).then(e=>t(e))}});