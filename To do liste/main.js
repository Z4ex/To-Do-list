function text() {
    var input = document.getElementById("userInput").value;
    var newelement = document.createElement('p')
    newelement.color = "white";
    newelement.innerHTML = input;

    var container = document.getElementById("container2");
    container.appendChild(newelement);

}