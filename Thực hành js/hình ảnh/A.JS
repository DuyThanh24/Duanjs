var dangky = document.getElementById ('dangky');
dangky.addEventListener ('submit',(e) =>{
    e.preventDefault ();
    var user = document.getElementById ('ten').value;
    var email = document.getElementById ('Email1').value;
    var pass = document.getElementById ('Password1').value;
    var enpass = document.getElementById ('enPassword1').value;

    if (pass !== enpass) {
        alert ('mat khau xac nhan khong dung');
        return;
    }
 // lưu đối tượng
 const userData = {
    username : user,
    mail : email,
    pass : pass
 }
 const hungthongtin = JSON.stringify (userData);
 localStorage.setItem ('1', hungthongtin );
 alert ('Ban da dang ky thanh cong');
 window.location.href = 'A.HTML';
});





