'use strict';

const showModal = function(){
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector(".overlay").classList.remove("hidden");
}

const hideModal = function(){
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector(".overlay").classList.add("hidden");
}

let myarr = document.querySelectorAll(".show-modal");

// // For every button, making it function to show modal
// for(let i=0; i<myarr.length; i++){
//     myarr[i].addEventListener(
//         "click", function(){
//             document.querySelector(".modal").style.display = "block";
//             document.querySelector(".overlay").style.display = "block";
//         }
//     );
// }


// For every button, making it function to show modal
for(let i=0; i<myarr.length; i++){
    myarr[i].addEventListener("click", showModal);
}

// For clicking on close and outside modal, close the modal
document.querySelector(".close-modal").addEventListener("click", hideModal);
document.querySelector(".overlay").addEventListener("click", hideModal);

// Closing the modal if escape key is pressed
document.addEventListener("keydown", function(e){
    console.log(e.key);
    if(e.key === "Escape" && document.querySelector(".modal").classList.contains('hidden') == false){
        hideModal();
    }
});
