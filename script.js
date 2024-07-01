function uniqueClickFunction() {
    var elementName = document.getElementById("longWinded");

    if (elementName.style.fontStyle != "italic") {
        elementName.style.fontStyle = "italic";}
    else {
        elementName.style.fontStyle = "normal";
    }
}
