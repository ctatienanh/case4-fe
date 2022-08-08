let account=localStorage.getItem("userLogin");
let str="";
if (account!=null){
    str=`<li class="nav-item nav-profile dropdown" style="display: flex">
    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown" >
        <a class="text-success" id="username"></a>
    </a>
    <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
        <a class="dropdown-item">
            <i class="ti-settings text-primary"></i>
            Settings
        </a>
        <a class="dropdown-item" onclick="logout()">
            <i class="ti-power-off text-primary"></i>
            Logout
        </a>
    </div>
</li>`

}
document.getElementById("showaccount").innerHTML=str