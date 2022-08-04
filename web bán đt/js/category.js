getallCategory()
function getallCategory() {

    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/category",
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