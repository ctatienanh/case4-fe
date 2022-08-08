    show()
    let address = window.location.search
    let parameterList = new URLSearchParams(address)
    let ids = parameterList.get("id")
    findIDProductss(ids)
    showComment2()

    function findIDProductss(ids) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/product/" + ids,
        //xử lý khi thành công
        success: function (data) {
            console.log("data1111")
            console.log("data1111")
            console.log("data1111")
            console.log(data)
            showPrss(data);
            showPrss1(data);
            showPrss2(data);
            showPrss3(data);
            showPrss4(data);

        },
        error: function (err) {
            console.log(err)
        }
    })
}

    function show() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/product",
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
            showallPRSG(data.content);
            showPrss5(data.content);
            showPrss6(data.content)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

    function showComment2() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/comment",
        //xử lý khi thành công
        success: function (data) {
            console.log("vao showcc")
            console.log(data)
            showComment(data.content);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

    function showallPRSG(data) {
    let ss = "";
    for (let i = 0; i < data.length; i++) {
    ss += ` <div class="single-product">
                                <div >
                                    <img src="${data[i].img}" height="200px" width="250px" alt="">
                                    <div class="product-hover">
                                        <a href="" class="add-to-cart-link" ><i class="fa fa-shopping-cart"></i> Add to
                                            cart</a>
                                        <a href="" class="view-details-link"><i class="fa fa-link"></i> See details</a>
                                    </div>
                                </div>
                                <h2><a href="">${data[i].name}</a></h2>
                                <div class="product-carousel-price">
                                    <ins>${data[i].price} vnđ</ins>
                                </div>
                            </div>
                `
}
    document.getElementById("showProduct").innerHTML = ss;
}

    function showPrss(data) {
    let str = " ";
    str += `<tr>
            <td><p>Tên máy </p>
            </td>
            <td>: ${data.name}</td>
        </tr>
        <tr>
            <td><p>Hãng </p>
            </td>
            <td>: ${data.category.name}</td>
        </tr>
        <tr>
            <td><p>Màn hình </p>
            </td>
            <td>: ${data.displayy} </td>
        </tr>
        <tr>
            <td><p>Tên máy </p>
            </td>
            <td>: ${data.name}</td>
        </tr>
        <tr>
            <td>
                <p>Hệ điều hành </p>
            </td>
            <td>: ${data.hedieuhanh}</td>
        </tr>
        <tr>
            <td>
                <p>Camera sau </p>
            </td>
            <td>: ${data.camerasau}</td>
        </tr>
        <tr>
            <td>
                <p>Camera trước </p>
            </td>
            <td>: ${data.cameratruoc}</td>
        </tr>
        <tr>
            <td>
                <p>Bộ Nhớ </p>
            </td>
            <td>: ${data.memory}</td>
        </tr>
        <tr>
            <td>
                <p>Thẻ Nhớ </p>
            </td>
            <td>: ${data.memoryStick}</td>
        </tr>
        <tr>
            <td>
                <p>Ram </p>
            </td>
            <td>: ${data.ram}</td>
        </tr>
        <tr>
            <td>
                <p>Cpu </p>
            </td>
            <td>: ${data.cpu}</td>
        </tr>
        <tr>
            <td>
                <p>Pin </p>
            </td>
            <td>: ${data.pin}</td>
        </tr>`
    document.getElementById("showPRss").innerHTML = str;

}

    function showPrss1(data) {
    let s1 = " ";
    s1 += `<img src="${data.img}" alt="">`
    document.getElementById("showPR1").innerHTML = s1;
}

    function showPrss2(data) {
    let s2 = " ";
    s2 += `<ins>${data.price} VNĐ</ins>`
    document.getElementById("showPR2").innerHTML = s2;
}

    function showPrss3(data) {
    let s3 = " ";
    s3 += `${data.name}`
    document.getElementById("showPr3").innerHTML = s3;
}

    function showPrss4(data) {
    let s4 = "";
    s4 += `
        <a href="">Home</a>
        <a href="">Category Name</a>
        <a href="">${data.name}</a>`
    document.getElementById("showPr4").innerHTML = s4;
}

    function showPrss5(data) {
    let s5 = "";
    let b = Math.round(Math.random() * (data.length - 4))
    console.log(b)
    for (i = b; i < b + 4; i++) {
    s5 += `<div className="thubmnail-recent">
        <img src="${data[i].img}" width="200px" height="100px" alt="">
            <h2><a href="single-product.html?id=${data[i].id}">${data[i].name}</a></h2>
            <div className="product-sidebar-price">
                <ins>${data[i].price} VNĐ</ins>
            </div>
    </div>
                `
}
    document.getElementById("showPr5").innerHTML = s5;
}

    function showPrss6(data) {
    let s6 = "";
    for (i = data.length - 5; i < data.length; i++) {
    s6 += `<li><a href="single-product.html?id=${data[i].id}">${data[i].name}</a></li>
                `
}
    document.getElementById("showPr6").innerHTML = s6;
}

function showComment(data) {
    let Cm = "";
    let m = "";

    let sang = `<span class=\"fa fa-star star-active\"></span>`
    let toi = `<span class="fa fa-star star-inactive"></span>`
    for (i = 0; i < data.length; i++) {
    console.log(ids)
    let s="";
    let t="";
    if (data[i].idPhone == ids) {
    console.log("kkkk")
    console.log(data[i].starComment)
    for (j = 0; j < data[i].starComment; j++) {
    s =s+sang
}
    for (let k = 0; k < (5 - data[i].starComment); k++) {
    t=t+toi
}

    Cm += `
             <div class="container-fluid px-1 py-5 mx-auto"
                                                     style="border: 1px solid">
                                                    <div class="row justify-content-center"
                                                         style="    margin-right: -156px; margin-left: -28px;">
                                                        <div class="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                                                            <div class="card">
                                                                <div class="row d-flex">
                                                                    <div class="d-flex flex-column">
                                                                        <h3 class="mt-2 mb-0" style="margin-top: -38px">
                                                                            ${data[i].nameUser}</h3>
                                                                        <div>
                                                                            <p class="text-left"><span
                                                                                    class="text-muted"></span>
                                                                                ${s}
                                                                               ${t}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row text-left">
                                                                    <p class="content">${data[i].comment}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                             </div>
`
} else {
    Cm += ""
}
}
    document.getElementById("showComment").innerHTML = Cm;
}

