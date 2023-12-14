const nha = document.querySelector (".thanh");
const open = document.getElementById("open");

const mat = document.querySelectorAll (".conform");
const themmoi = document.getElementById ("themmoicong");
const boxs = document.querySelectorAll(".box");
console.log(boxs);


nha.onclick = () => {
    mat.forEach ((Element) =>{  
        Element.style.display = "none"  
    });   
       open.style.display = "block"
}
open.onclick = () => {
    mat.forEach ((Element) =>{
        Element.style.display = "block"
    });
   
    nha.style.display = "block";
    open.style.display = "none"
}
mat.forEach((element,index) => {

    element.onclick = () => {
       boxs.forEach((box) => box.style.display = "none");
       boxs[index].style.display = "block";
    }
})

// const dans = Array.from(document.getElementsByClassName("dan"));

//         dans.forEach((dan) => {
//             dan.style.color = "red";
//         });