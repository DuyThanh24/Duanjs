var contents = document.querySelectorAll('.content');
var boxs = document.querySelectorAll ('.box');
contents.forEach((content, index) => {
   
    content.onclick = () => {
        boxs.forEach((box, i) => {box.style.display = "none"});
        contents.forEach((con, ic) => {con.classList.remove("text-warning");});
        boxs[index].style.display = "block";
        content.classList.add("text-warning");
    }
})



       


   