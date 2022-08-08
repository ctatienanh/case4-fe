showdoanhthu()
let arr = [];
let allprice =0;
function kiemtraSales(obj) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/sales",
        //xử lý khi thành công
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == obj.name) {
                    obj.name += ("(" + obj.ram + ")")
                }
            }
            createSales(obj)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function createSales(obj) {
    $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8180/sales",
            data: JSON.stringify(obj),
            //xử lý khi thành công
            success: function (data) {
                alert("them doanh thu thanh cong")
            },
            error: function (err) {
                console.log(err)
            }
        }
    )
}

function showdoanhthu() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/sales",
        //xử lý khi thành công
        success: function (data) {
            arr = data;
            prindoanhthu(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function prindoanhthu(data) {
    let s = ""
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].priceall
    }
    
    document.getElementById("tongdt").innerHTML =
        `<tr><td>
        <P>Tổng Doang Thu : ${sum} VNĐ</P>
        </td></tr>`


    for (let i = 0; i < data.length; i++) {
        s += `
        <tr>
           <td>${data[i].name}</td>
           <td>${data[i].price}</td>
           <td>${data[i].amount}</td>
           <td>${data[i].priceall}</td>
        </tr>
        `
    }
    document.getElementById("dt").innerHTML = s;
}


function amountgiam() {
 let aumountgiam = arr.sort(function (a,b) {
     return b.amount - a.amount
 })
    console.log(aumountgiam)
    let s = ""
    for (let i = 0; i < aumountgiam.length; i++) {
        s += `
        <tr>
           <td>${aumountgiam[i].name}</td>
           <td>${aumountgiam[i].price}</td>
           <td>${aumountgiam[i].amount}</td>
           <td>${aumountgiam[i].priceall}</td>
        </tr>
        `
    }
    document.getElementById("dt").innerHTML = s;
}

function priceallgiam() {
    let aumountgiam = arr.sort(function (a,b) {
        return b.priceall - a.priceall
    })
    console.log(aumountgiam)
    let s = ""
    for (let i = 0; i < aumountgiam.length; i++) {
        s += `
        <tr>
           <td>${aumountgiam[i].name}</td>
           <td>${aumountgiam[i].price}</td>
           <td>${aumountgiam[i].amount}</td>
           <td>${aumountgiam[i].priceall}</td>
        </tr>
        `
    }
    document.getElementById("dt").innerHTML = s;
}



function showdanhsachKH(name) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/order",
        //xử lý khi thành công
        success: function (data) {
            lichsukh(name,data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function lichsukh(name, data) {
let s = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i].name == name){
            s+=
                `
                <tr>
                <td>${data[i].nameproduct}</td>
                <td>${data[i].amount}</td>
                <td>${data[i].price}</td>
                <td>${data[i].priceAll}</td>
</tr>
            `
        }
    }
    document.getElementById("lskh").innerHTML =s;
}


function danhsachkh(data) {
    let s= ""
    for (let i = 0; i < data.length; i++) {
        s+= `
<tr>
           <td>
    <input data-target="#lichsukh" data-toggle="modal" value="${data[i].name}" style="border: none; background-color: white" onclick="showdanhsachKH('${data[i].name}')" type="button" readonly>
                        </td>
                        <td>
                            ${data[i].sumprice}
                        </td>
                        </tr>
        `
    }

    document.getElementById("dskh").innerHTML = s;
}

function priceall() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/userapi/name" ,
        //xử lý khi thành công
        success: function (data) {
            danhsachkh(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}