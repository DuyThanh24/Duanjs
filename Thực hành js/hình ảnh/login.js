
var dangnhap = document.getElementById ('dangnhap');
dangnhap.addEventListener ('submit',(e) => {
    e.preventDefault ();
 var name = document.getElementById ('dangnhaplai').value;
 var passstar = document.getElementById ('mk').value;
// lấy về kiểm tra

const hung = localStorage.getItem ('1' );
const hung_2 = JSON.parse (hung);

if (name !==  hung_2.mail || passstar !== hung_2.pass ) {
     alert (' ten dang nhap hoac mat khau khong chinh xac');
     return;
}
alert("ban dang nhap thanh cong !!!");
window.location.href = "Home.html";
} )



