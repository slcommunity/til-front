function postArticle() {
    let data = {
        "title": $("#title").val(),
        'content': $("#contents").val()
    };
    $.ajax({
        type: "POST",
        url: "https://api.tilnew.shop/api/board",
        contentType: "application/json",
        data: JSON.stringify(data),
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
        },
        success: function (response) {
            alert('작성 완료!');
            location.href = "/boardList.html";
        },
        error: function (xqXHR) {
            let res = JSON.parse(xqXHR.responseText)
            alert(res.message)
        },
    })

}

