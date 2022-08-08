getallCategory()
function getallCategory() {
    let token = localStorage.getItem("token");
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Bearer " + token);
            },
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

