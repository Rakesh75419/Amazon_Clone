let slideBtnLeft = document.getElementById("slide-btn-left")

let slideBtnRight = document.getElementById("slide-btn-right")

let imgItem = document.querySelectorAll(".image-item")

console.log(imgItem.length-1)

let startSlider = 0;
let endSlider = (imgItem.length-1) *100 //1100

slideBtnLeft.addEventListener("click", handleleftBtn)

function handleleftBtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
    }
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

slideBtnRight.addEventListener("click", handRightBtn)

function handRightBtn(){
if(startSlider >= -endSlider+100){
     startSlider = startSlider - 100;
}  
    imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`;
    })
    
}

// render automatic

function renderSlideAuto(){
    if(startSlider >= -endSlider +100){
        handRightBtn()
    }
    else{
        startSlider = 0;
    } 
}
setInterval(renderSlideAuto, 5000)





// const imgItem = document.querySelectorAll('.image-item');
// const slideBtnLeft = document.querySelector('#slide-btn-left');
// const slideBtnRight = document.querySelector('#slide-btn-right');

// let n = 0;

// function changeSlide() {
//     for (let i = 0; i < imgItem.length; i++) {
//         imgItem[i].style.display = 'none'; // Hide all images
//     }
//     imgItem[n].style.display = 'block'; // Show the current image
// }
// changeSlide();


// slideBtnLeft.addEventListener('click', (e) => {
//     if (n > 0) {
//         n--;
//     } else {
//         n = imgs.length - 1;
//     }
//     changeSlide();
// });

// slideBtnRight.addEventListener("click", (e) => {
//     if (n < imgs.length - 1) {
//         n++;
//     } else {
//         n = 0;
//     }
//     changeSlide();
// });





