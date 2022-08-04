function checkEdit() {
    let fileImg = document.getElementById("imgEditt").files;
    console.log(fileImg.length)
    if (fileImg.length === 0){
        editNoUpFile();
    }else {
        editYesUpFile()
    }
}


function getEdit(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/product/" + id,
        //xử lý khi thành công
        success: function (data) {
            showEdit(data);
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function showEdit(product) {
    document.getElementById("id").value = product.id;
    document.getElementById("nameedit").value = product.name;
    document.getElementById("priceedit").value = product.price;
    document.getElementById("imgedit").src = product.img;
    document.getElementById("displayedit").value = product.displayy;
    document.getElementById("hedieuhanhedit").value = product.hedieuhanh;
    document.getElementById("camerasauedit").value = product.camerasau;
    document.getElementById("cameratruocedit").value = product.cameratruoc;
    document.getElementById("cpuedit").value = product.cpu;
    document.getElementById("ramedit").value = product.ram;
    document.getElementById("bonhoedit").value = product.memory;
    document.getElementById("thenhoedit").value = product.memoryStick;
    document.getElementById("pinedit").value = product.pin;

}

function editNoUpFile(){
    let id = $("#id").val();
    let name = $('#nameedit').val();
    let price = $('#priceedit').val();
    let idcategory = $('#idcategoryedit').val();
    let displayy = $('#displayedit').val();
    let hedieuhanh = $('#hedieuhanhedit').val();
    let camerasau = $('#camerasauedit').val();
    let cameratruoc = $('#cameratruocedit').val();
    let cpu = $('#cpuedit').val();
    let ram = $('#ramedit').val();
    let memory = $('#bonhoedit').val();
    let memoryStick = $('#thenhoedit').val();
    let pin = $('#pinedit').val();
    let img = document.getElementById("imgedit").src;
    let product = {
        id:id,
        name: name,
        category: {
            id: idcategory
        },
        price: price,
        img: img,
        displayy: displayy,
        hedieuhanh: hedieuhanh,
        camerasau: camerasau,
        cameratruoc: cameratruoc,
        memory: memory,
        ram: ram,
        cpu: cpu,
        memoryStick: memoryStick,
        pin: pin
    }
    callEdit(product);
}

function callEdit(product){
    $.ajax({
        type: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8180/product",
        data: JSON.stringify(product),
        //xử lý khi thành công
        success: function (data) {
            alert("sua thanh cong");
            show();
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function editYesUpFile() {
    let id = $("#id").val();
    let name = $('#nameedit').val();
    let price = $('#priceedit').val();
    let idcategory = $('#idcategoryedit').val();
    let displayy = $('#displayedit').val();
    let hedieuhanh = $('#hedieuhanhedit').val();
    let camerasau = $('#camerasauedit').val();
    let cameratruoc = $('#cameratruocedit').val();
    let cpu = $('#cpuedit').val();
    let ram = $('#ramedit').val();
    let memory = $('#bonhoedit').val();
    let memoryStick = $('#thenhoedit').val();
    let pin = $('#pinedit').val();
    let fileImg = document.getElementById("imgEditt").files;
    let formData = new FormData();
    formData.append("file", fileImg[0]);
    $.ajax({
        contentType: false,
        processData: false,
        type: "POST",
        data: formData,
        url: "http://localhost:8180/product/upImg",
        success: function (data) {
            let product = {
                id:id,
                name: name,
                category: {
                    id: idcategory
                },
                price: price,
                img: data,
                displayy: displayy,
                hedieuhanh: hedieuhanh,
                camerasau: camerasau,
                cameratruoc: cameratruoc,
                memory: memory,
                ram: ram,
                cpu: cpu,
                memoryStick: memoryStick,
                pin: pin
            }
            callEdit(product)
        }
    });
}
