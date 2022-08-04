show()

function create(data) {
    let name = $('#name').val();
    let price = $('#price').val();
    let idcategory = $('#idcategory').val();
    let displayy = $('#display').val();
    let hedieuhanh = $('#hedieuhanh').val();
    let camerasau = $('#camerasau').val();
    let cameratruoc = $('#cameratruoc').val();
    let cpu = $('#cpu').val();
    let ram = $('#ram').val();
    let memory = $('#bonho').val();
    let memoryStick = $('#thenho').val();
    let pin = $('#pin').val();

    let obj = {
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

    $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8180/product",
            data: JSON.stringify(obj),
            //xử lý khi thành công
            success: function (data) {
                alert("them thanh cong")
show()
            },
            error: function (err) {
                console.log(err)
            }
        }
    )
}

function uploadFile() {
    let fileImg = document.getElementById("img").files;
    if (fileImg.length === 0) {
        alert("ảnh chưa up");
        return;
    }
    let formData = new FormData();
    formData.append("file", fileImg[0]);
    $.ajax({
        contentType: false,
        processData: false,
        type: "POST",
        data: formData,
        url: "http://localhost:8180/product/upImg",
        success: function (data) {
            create(data);
        }
    });
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
            console.log( data)
            printData(data.content);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function printData(data) {
    let tc = document.getElementById("addProductAdmin");
    let s = `<table class="table-outline hideImg">`;
    for (let i = 0; i < data.length; i++) {
        s += `       <tr>
                    <td>
							<span class="custom-checkbox">
								<input type="checkbox" id="checkbox1" name="options[]" value="1">
								<label for="checkbox1"></label>
							</span>
                    </td>
                    <td>${data[i].name}</td>
                    <td>${data[i].category.name}</td>
                    <td>${data[i].price}</td>
                    <td><img src="${data[i].img}" width="200px" height="200px"  ></td>
                    <td>${data[i].star}</td>
                    <td>
                        <a href="#editEmployeeModal" class="edit" data-toggle="modal"  data-target="#myModalEdit" onclick="getEdit(${data[i].id})"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal" onclick="deleteProduct(${data[i].id})"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                </tr>`;
    }

    s += `</table>`;

    tc.innerHTML = s;
}


function deleteProduct(id) {
    confirm("bạn muốn xóa không ?") ?
        $.ajax({
            type: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8180/product/" + id,
            //xử lý khi thành công
            success: function (data) {
show()
            },
            error: function (err) {
                console.log(err)
            }
        }) : ""
}


