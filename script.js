let li1 = document.getElementById('one');
let li2 = document.getElementById('two');
let li3 = document.getElementById('three');
let li4 = document.getElementById('four');
let eduone = document.querySelector('.edu1');
let edutwo = document.querySelector('.edu2');
let eehchtwo1 = document.getElementById('eehchtwo1');
let eehchtwo2 = document.getElementById('eehchtwo2');
let eemaje1 = document.getElementById('eemaje1');
let eemaje2 = document.getElementById('eemaje2');

eduone.addEventListener('mouseover' , ()=>{
    eduone.style.border = '0rem';
    eehchtwo1.style.opacity = '0';
    eemaje1.style.opacity = '0';
    li1.style.opacity = '100';
    li2.style.opacity = '100';
    li3.style.opacity = '100';
})
eduone.addEventListener('mouseleave' , ()=>{
    eduone.style.border = '0.1rem';
    eehchtwo1.style.opacity = '100';
    eemaje1.style.opacity = '100';
    li1.style.opacity = '0';
    li2.style.opacity = '0';
    li3.style.opacity = '0';
})

edutwo.addEventListener('mouseover' , ()=>{
    edutwo.style.border = '0rem';
    eehchtwo2.style.opacity = '0';
    eemaje2.style.opacity = '0';
    li4.style.opacity = '100';
})
edutwo.addEventListener('mouseleave' , ()=>{
    edutwo.style.border = '0.1rem';
    eehchtwo2.style.opacity = '100';
    eemaje2.style.opacity = '100';
    li4.style.opacity = '0';
})
