getallCategory()
function getallCategory() {
    let token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
<<<<<<< HEAD
=======
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Bearer " + token);
            },
>>>>>>> d11e20619b8265e406a175e74a84292d5bb7006b
        url: "http://localhost:8180/category",
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
            printDataCtegpry(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function printDataCtegpry(d) {
    let data = Object.values(d);

    let contentElement = document.getElementById("idcategory");
    let content = "";
    for (let i = 0; i < data.length; i++) {
        content +=
            `   
            <option value="${data[i].id}">${data[i].name}</option>
`
    }
    document.getElementById("idcategoryedit").innerHTML = content;
    contentElement.innerHTML = content;
}

