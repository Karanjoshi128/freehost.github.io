let li1 = document.getElementById('one');
let li2 = document.getElementById('two');
let li3 = document.getElementById('three');
let li4 = document.getElementById('four');
let eduone = document.querySelector('.edu1');
let edutwo = document.querySelector('.edu2');

eduone.addEventListener('mouseover' , ()=>{
    eduone.style.opacity = '0';
    li1.style.opacity = '100';
    li2.style.opacity = '100';
    li3.style.opacity = '100';
})
eduone.addEventListener('mouseleave' , ()=>{
    eduone.style.opacity = '100';
    li1.style.opacity = '0';
    li2.style.opacity = '0';
    li3.style.opacity = '0';
})

edutwo.addEventListener('mouseover' , ()=>{
    edutwo.style.opacity = '0';
    li4.style.opacity = '100';
})
edutwo.addEventListener('mouseleave' , ()=>{
    edutwo.style.opacity = '100';
    li4.style.opacity = '0';
})
