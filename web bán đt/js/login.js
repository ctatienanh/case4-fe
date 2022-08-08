function login() {

    let userName = $("#username").val();
    let passWord = $("#password").val();

    let appUser = {
        userName: userName,
        passWord: passWord
    }

    $.ajax({
        type: "POST",
        headers: {
            //kiểu dữ liệu nhận về
            // 'Accept': 'application/json',
            // kiểu truyền đi
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/login",
        data: JSON.stringify(appUser),
        //xử lý khi thành công
        success: function (data) {
            localStorage.setItem("token", data);
            location.href = "shop.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}