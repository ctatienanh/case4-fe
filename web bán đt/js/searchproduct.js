function search() {
    let search = document.getElementById("search").value;
    console.log(search)
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/product/search?name=/" + search,
        //xử lý khi thành công
        success: function (data) {
            printData(data);
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function showSearch(data, search) {
    let str = "";
    if (search == "") {
        str == "";
    } else {
        for (const d of data) {
            str += <tr>
                <td><img src="${d.avatar}" width="50" alt="Logo"/></td>
                <td style="width: 300px; display: flex; justify-content: center">${d.}</td>
            </tr>;
        }
    }
    document.getElementById("show").innerHTML = str;
    console.log(str)
}
