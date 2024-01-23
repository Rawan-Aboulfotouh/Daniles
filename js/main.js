var Photo= Array.from(document.querySelectorAll("img"));
var overlayTag= document.querySelector(".overlay");

var count=0
var nextImg= document.querySelector(".fa-circle-right")

for (var  i=0 ; i < Photo.length ; i++){
Photo[i].addEventListener("click", function(){
    document.querySelector(".overlay").classList.replace("d-none" , "d-flex")
    overlayTag.classList.replace("d-none" , "d-flex");
     

})
}

document.getElementById("close").addEventListener("click", hideElement)


function hideElement(){
    document.querySelector(".overlay") .classList.replace("d-flex","d-none")

}




for (var  i=0 ; i < Photo.length ; i++){
    Photo[i].addEventListener("click", function( eInfo){
       overlayTag.classList.replace("d-none" , "d-flex");
       document.querySelector(".child").style.backgroundImage="url("+eInfo.target.src+")"
       
    })
    }

    document.querySelector(".overlay").addEventListener("click",hideElement)
   
