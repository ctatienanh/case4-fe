let role=localStorage.getItem("roleLogin");
console.log(role)
if(role=="ROLE_ADMIN"){
    location.href="403.html";
}