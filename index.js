const slide = document.querySelectorAll(".slide");

console.log(slide);

var counter = 0;
slide.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})

const slideImage = () =>{
    slide.forEach((slide)=>{
        slide.style.transform = `trnslateX(-${counter*100}%)`
    })
}