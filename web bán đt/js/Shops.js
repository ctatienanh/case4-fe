let array = [];
prinshop()
class shops {
    constructor(idname,name, price, amount, priceall) {
        this.idname = idname
        this.name = name
        this.price = price
        this.amount = amount;
        this.priceAll = priceall
    }
}

function addshop(i,n, p, a, pa) {
    array.push(new shops(i,n, p, a, pa)),
        console.log(array)
    prinshop()
}


function delletelast(name) {
    let index = checkindexProduct(name);
    array.splice(index, 1);
    prinshop()
}

function prinshop() {
    let s = ""
    for (let i = 0; i < array.length; i++) {
        s += ` <tr class="cart_item">
                            <td class="product-remove">
                                <a title="Remove this item" class="remove" onclick="delletelast('${array[i].name}')">×</a>
                            </td>

                            <td class="product-thumbnail">
                                <a href="single-product.html"><img width="145" height="145" alt="poster_1_up" class="shop_thumbnail" src="img/product-thumb-2.jpg"></a>
                            </td>

                            <td class="product-name">
                                <a href="single-product.html">${array[i].name}</a>
                            </td>

                            <td class="product-price">
                                <span class="amount">${array[i].price}</span>
                            </td>
                            <td class="product-quantity">
                                <div class="quantity buttons_added">
                                    <input type="button"  class="minus" onclick="giam('${array[i].name}')" value="-">
                                    <input type="number" id="${array[i].name+'1'}" size="4" class="input-text qty text" title="Qty" value="${array[i].amount}" min="0" step="1">
                                    <input type="button" id="${array[i].name}" onclick="tang('${array[i].name}',${array[i].idname})"  class="plus" value="+">
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
function checkProduct(ids) {

}
function kiemtrasanpham(id,n, p, a, pa) {

    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/single/" + id,
        //xử lý khi thành công
        success: function (data) {
            if (data.amounts <=0){
                let s =`                <p style="text-align: center">Sản Phẩm Hiện Tại Đã Hết</p>`
                document.getElementById("thongbaoshop").innerHTML = s;
            }else {
                let s =`                <p style="text-align: center">Thêm sản phẩm thành công</p>`
                document.getElementById("thongbaoshop").innerHTML = s;
                let check = true;
                for (let i = 0; i < array.length; i++) {
                    if (array[i].name == n) {
                        array[i].amount += 1
                        array[i].priceAll += array[i].price
                        document.getElementById("tonggia").value = sum();
                        prinshop()
                        check = false;
                        break;
                    }
                }

                if (check == true) {
                    addshop(id,n, p, a, pa)
                    document.getElementById("tonggia").value = sum();
                }
                let t = Number(document.getElementById("soluong").value)
                t += 1;
                document.getElementById("soluong").value = t;
            }
        },
        error: function (err) {
            console.log(err)
        }
    })

}




function checknameProduct(name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == name) {
            return array[i];
        }
    }
}

function checkindexProduct(name) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name == name) {
            return i;
        }
    }
}


function tang(name,id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/single/" + id,
        //xử lý khi thành công
        success: function (data) {
            if (data.amounts <= checknameProduct(name).amount){
                document.getElementById(""+name).style.display = "none"
            }else {
                checknameProduct(name).amount += 1;
                checknameProduct(name).priceAll += checknameProduct(name).price;
                document.getElementById("tonggia").value = sum();
                prinshop()
            }
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function giam(name) {
    let d = Number(document.getElementById("" + name+"1").value)
    d -= 1;
    if (d > 0) {
        checknameProduct(name).amount -= 1;
        checknameProduct(name).priceAll -= checknameProduct(name).price;
        document.getElementById("tonggia").value = hieu();
        prinshop()
    } else {
        confirm("nếu ấn giảm nữa sản phẩm của bạn sẽ bị xóa khỏi danh sách nhấn ok để xác nhận ?") ?
            delletelast(name) : ""
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
                alert("thanh toan thanh cong")
                array = []
                document.getElementById("soluong").value = 0;
                alert(array.length)
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

function hieu() {
    let t = document.getElementById("tonggia").value
    for (let i = 0; i < array.length; i++) {
        t-= array[i].priceAll
    }
    return t;
}


