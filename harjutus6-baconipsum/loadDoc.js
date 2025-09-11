function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.getElementById("demo").innerHTML = processResponse(this.responseText)
    };
    xhttp.open("GET","https://baconipsum.com/api/?type=all-meat");
    xhttp.send();
}

function processResponse(jsonText) {
    const baconList = JSON.parse(jsonText);
    console.log(jsonText);
    let paragraphs = "";
    for (const bacon of baconList) {
        paragraphs += `<p>${bacon}</p>`;
    }
    return paragraphs;
}