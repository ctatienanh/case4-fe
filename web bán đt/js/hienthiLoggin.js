hienthiaccount()
function hienthiaccount() {
    let token = localStorage.getItem("token")
    let user = localStorage.getItem("userLogin")

    if (user != null) {
        let str = ` 
   <a data-toggle="dropdown" data-hover="dropdown" class="dropdown-toggle" href="#"> <i class="fa fa-user"></i><span
                              style="padding-left: 5px"      class="key">${user} </span><b
                                    class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li ><a onclick="logout()">Đăng Xuất</a></li>
                         
                            </ul>`;
        document.getElementById("username").innerHTML = str
        document.getElementById("loginblock").style.display = "none"
    }else {
        document.getElementById("loginblock").style.display = "block"
        document.getElementById("username").style.display = "none"

    }

}