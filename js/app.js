const hamburger=document.querySelector('#hamburger');
const closee=document.querySelector('#close');
const navbar=document.querySelector('.navbar');
const menu=document.querySelector('.menu');
hamburger.addEventListener('click', changeIconHam);
closee.addEventListener('click', changeIconClose);
function changeIconHam(){
    hamburger.style.display="none";
    closee.style.display="block"
    navbar.style.backgroundColor="black";
    menu.style.backgroundColor="black";
} 
function changeIconClose(){
    closee.style.display="none";
    hamburger.style.display="block"
    navbar.style.backgroundColor="transparent";
    menu.style.backgroundColor="transparent";
}