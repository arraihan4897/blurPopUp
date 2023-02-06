const ContainerEl= document.querySelector('.Container');
const popUpEl= document.querySelector('.popupContainer');
const gbtn= document.querySelector('.btn');
const cclose= document.querySelector('.close');

gbtn.addEventListener('click',()=>{
    ContainerEl.classList.add("active");
    popUpEl.classList.remove("active");


})
cclose.addEventListener('click',()=>{
    ContainerEl.classList.remove("active");
    popUpEl.classList.add("active");
});
