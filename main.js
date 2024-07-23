let Icon = document.querySelector('.icon');
let Icons = document.querySelector('.icons');
let Info = document.querySelector('.info');


Icon.addEventListener('click',function(){
    Icons.classList.toggle("active");
});
Icons.classList.contains(".active")? console.log("fuck"):"";