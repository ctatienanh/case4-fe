function logout(){
    localStorage.removeItem("userLogin")
    location.href = "shop.html"
}