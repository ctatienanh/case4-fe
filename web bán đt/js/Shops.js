let array = [];
let userLogin=localStorage.getItem("userLogin")
prinshop()
class shops {
    constructor(idname,nameuser,name, price, amount, priceall) {
        this.idname = idname
        this.name = nameuser
        this.nameproduct = name
        this.price = price
        this.amount = amount;
        this.priceAll = priceall
    }
}

function addshop(i,na,n, p, a, pa) {

    array.push(new shops(i,na,n, p, a, pa)),
        localStorage.setItem(userLogin,JSON.stringify(array));
    prinshop()
}


function delletelast(id) {
    let index = checkindexProduct(id);
    array.splice(index, 1);
    prinshop()
}

function prinshop() {
    if(JSON.parse(localStorage.getItem(userLogin)) != null){
        array = JSON.parse(localStorage.getItem(userLogin))
    }
    tongsoluong(array)
    document.getElementById("tonggia").value = sum();
    let s = ""
    for (let i = 0; i < array.length; i++) {
        s += ` <tr class="cart_item">
                            <td class="product-remove">
                                <a title="Remove this item" class="remove" onclick="delletelast('${array[i].idname}')">×</a>
                            </td>

                            <td class="product-thumbnail">
                                <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="img/product-thumb-2.jpg"></a>
                            </td>

                            <td class="product-name">
                                <a href="single-product.html">${array[i].nameproduct}</a>
                            </td>

                            <td class="product-price">
                                <span class="amount">${array[i].price}</span>
                            </td>
                            <td class="product-quantity">
                                <div class="quantity buttons_added">
                                    <input type="button"  class="minus" onclick="giam('${array[i].nameproduct}',${array[i].idname})" value="-">
                                    <input type="number" id="${array[i].nameproduct+array[i].idname }" size="4" class="input-text qty text" title="Qty" value="${array[i].amount}" readonly min="0" step="1">
                                    <input type="button" id="${array[i].nameproduct}" onclick="tang('${array[i].nameproduct}',${array[i].idname})"  class="plus" value="+">
                                </div>
                            </td>
                            <td class="product-subtotal">
                                <span class="amount">${array[i].priceAll}</span>
                            </td>
                        </tr>`;
    }
    ;

    document.getElementById("shopchitiet").innerHTML = s;

}

function kiemtrasanpham(id,n, p, a, pa) {
    let user = localStorage.getItem("userLogin");
    if (user != null) {
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8180/single/" + id,
            //xử lý khi thành công
            success: function (data) {
                if (data.amounts <= 0) {
                    let s = `                <p style="text-align: center">Sản Phẩm Hiện Tại Đã Hết</p>`
                    document.getElementById("thongbaoshop").innerHTML = s;
                } else {
                    let s = `                <p style="text-align: center">Thêm sản phẩm thành công</p>`
                    document.getElementById("thongbaoshop").innerHTML = s;
                    let check = true;
                    for (let i = 0; i < array.length; i++) {
                        if (array[i].idname == id) {
                            array[i].amount += 1
                            array[i].priceAll += array[i].price
                            document.getElementById("tonggia").value = sum();
                            localStorage.setItem(userLogin, JSON.stringify(array));
                            prinshop()
                            check = false;
                            break;
                        }
                    }
                    if (check == true) {
                        addshop(id, userLogin, n, p, a, pa)
                        document.getElementById("tonggia").value = sum();
                    }

                }
            },
            error: function (err) {
                console.log(err)
            }
        })
    }else {
        alert("Ban phai dang nhap")
        location.href = "login.html"

    }
}

function tongsoluong(array) {
    let t=0;
    for (let i = 0; i < array.length; i++) {
        t += array[i].amount
    }
    document.getElementById("soluong").value = t;
}




function checknameProduct(id)
{
    for (let i = 0; i < array.length; i++) {
        if (array[i].idname == id) {
            return array[i];
        }
    }
}

function checkindexProduct(id) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].idname == id) {
            return i;
        }
    }
}


function tang(name,id) {
    console.log(name)
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/single/" + id,
        //xử lý khi thành công
        success: function (data) {
            if (data.amounts <= checknameProduct(id).amount){
                document.getElementById(""+name).style.display = "none"
            }else {
                checknameProduct(id).amount += 1;
                checknameProduct(id).priceAll += checknameProduct(id).price;
                localStorage.setItem(userLogin,JSON.stringify(array));
                document.getElementById("tonggia").value = sum();
                prinshop()
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function giam(name,id) {
    let d = Number(document.getElementById(""+name+id ).value)
    d -= 1;

    if (d > 0) {
        checknameProduct(id).amount -= 1;
        checknameProduct(id).priceAll -= checknameProduct(id).price;
        document.getElementById("tonggia").value = hieu(id);
        localStorage.setItem(userLogin,JSON.stringify(array));
        prinshop()
    } else {
        confirm("nếu ấn giảm nữa sản phẩm của bạn sẽ bị xóa khỏi danh sách nhấn ok để xác nhận ?") ?
            delletelast(id) : ""
    }
}

function createShop() {
    $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8180/order",
            data: JSON.stringify(array),
            //xử lý khi thành công
            success: function (data) {
                let s =`                <p style="text-align: center">thanh toán thành công vui lòng chuẩn bị số tiền : ${document.getElementById("tonggia").value}</p>`
                document.getElementById("thongbaoshop").innerHTML = s;
                array = []
                document.getElementById("soluong").value = 0;
                localStorage.removeItem(userLogin);
                prinshop()
            },
            error: function (err) {
                console.log(err)
            }
        }
    )
}

function sum() {
    let t = 0;
    for (let i = 0; i < array.length; i++) {
        t+= array[i].priceAll
    }
    return t;
}

function hieu(id) {
    let t = document.getElementById("tonggia").value
    for (let i = 0; i < array.length; i++) {
        if (array[i].id ==id)
        t-= array[i].price
    }
    return t;
}


