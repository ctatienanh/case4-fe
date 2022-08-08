let listuser=null;
$.ajax({
    type: "GET",
    headers: {
        //kiểu dữ liệu nhận về
        // 'Accept': 'application/json',
        // kiểu truyền đi
        'Content-Type': 'application/json'
    },
    url: "http://localhost:8180/user",
    //xử lý khi thành công
    success: function (data) {
        listuser=data;
    },
    error: function (err) {
        console.log(err)
    }
})
function register(){
    let userName = $("#userName").val();
    let passWord = $("#passWord").val();
    let address=$("#address").val();
    let phoneNumber=$("#phoneNumber").val();
    let email=$("#email").val();
    let confirm_password=$("#confirm_password").val();
    let appUser={
        userName:userName,
        passWord:passWord,
        address:address,
        phoneNumber:phoneNumber,
        email:email
    }
    let check=true;
    let messageUserName="";
    let messageConfirmPassword="";
    let messagePhoneNumber="";
    let messageEmail="";
    if (confirm_password!=passWord){messageConfirmPassword="Vui lòng xác nhận đúng mật khẩu "
        document.getElementById("messageConfirmPassword").innerText = messageConfirmPassword;
        check=false;
    }
    for (let i = 0; i < listuser.length; i++) {
        if (listuser[i].userName==userName){
            messageUserName="Tài khoản đã tồn tại"
            document.getElementById("messageUserName").innerText = messageUserName;
            check=false;
        }
        if (listuser[i].phoneNumber==phoneNumber){
            messagePhoneNumber="Số điện thoại đã có người sử dụng";
            document.getElementById("messagePhoneNumber").innerText = messagePhoneNumber;
            check=false;
        }
        if (listuser[i].email==email){
            messageEmail="Email đã có người sử dụng";
            document.getElementById("messageEmail").innerText = messageEmail;
            check=false;

        }
    }
    if (check){
        $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/register",
        data: JSON.stringify(appUser),
        //xử lý khi thành công
        success: function (data) {
            alert("Đăng ký thành công!")
            location.href = "login.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
    }



}