function register(){
    let userName = $("#userName").val();
    let passWord = $("#passWord").val();
    let address=$("#address").val();
    let phoneNumber=$("#phoneNumber").val();
    let email=$("#email").val();
    let appUser={
        userName:userName,
        passWord:passWord,
        address:address,
        phoneNumber:phoneNumber,
        email:email
    }
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