
var modal = document.querySelector('.modal');
var buttonOpen = document.querySelector('.button_open');
var buttonClose = document.querySelector(".button_close");
var overlay = document.querySelector(".overlay");

function OpenModal(){
    modal.style.display = "block";
    overlay.style.display = "block";
}
 function CloseModal(){
    modal.style.display = "none";
    overlay.style.display = "none";
}

buttonOpen.addEventListener('click', OpenModal);
buttonClose.addEventListener('click',CloseModal);