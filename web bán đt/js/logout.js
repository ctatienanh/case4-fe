

    // let token = localStorage.getItem("token");
    // $.ajax({
    //     type: "GET",
    //     headers: {
    //         'Accept': 'application/json'
    //     },
    //     beforeSend: function (xhr) {
    //         xhr.setRequestHeader ("Authorization", "Bearer " + token);
    //     },
    //     url: "http://localhost:8180/logout",
    //     success: function (data) {
    //         console.log("da dang xuat")
    //         console.log("da dang xuat")
    //         console.log("da dang xuat")
    //         // localStorage.setItem("token", "");
    //     },
    //     error: function (err) {
    //         console.log("loiiiiiii")
    //         location.href = "login.html"
    //     }
    // })

function logoutuser(){
    // localStorage.setItem("token", "");
    localStorage.clear()
    // localStorage.setItem("roleLogin","");
    location.href = "shop.html"
}