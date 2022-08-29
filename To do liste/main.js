function text() {

    var input = document.getElementById("userInput").value;
    var newelement = document.createElement('p');
    newelement.setAttribute("id","todo");
    newelement.setAttribute("onclick", "deletethis()");
    newelement.innerHTML = input;

    var container = document.getElementById("container2");
    container.appendChild(newelement);
}

function deletethis() {
    document.getElementById("todo").onclick = function () {
        this.remove ();
    }
}

