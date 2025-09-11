function loadKanye() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("ye").innerHTML = processResponse(this.responseText);
    };
    xhttp.open("GET","https://api.kanye.rest");
    xhttp.send();
}

function processResponse(jsonText) {
    const quoteFull = JSON.stringify(jsonText);
    let result = "";
    console.log(quoteFull);
    let quoteLength = quoteFull.length
    quoteLength = quoteLength - 4;
    console.log(quoteLength)
    result = quoteFull.substring(14, quoteLength)
    console.log(result);

    return result;

}
