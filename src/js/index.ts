function ManipulateString() {
    let inputContainer : HTMLDivElement = <HTMLDivElement> document.getElementsByClassName("InputContainer")[0];
    let resultContainer : HTMLUListElement = <HTMLUListElement> document.getElementsByClassName("Results")[0].getElementsByTagName("ul")[0];
    let string : string = inputContainer.getElementsByTagName("input")[0].value;
    let option : string = inputContainer.getElementsByTagName("select")[0].value;

    switch (option) {
        case "UpperCase":
            string = string.toUpperCase();    
            break;
        case "LowerCase":
            string = string.toLowerCase();
            break;
    }
    
    resultContainer.appendChild(CreateResultNode(string));
}

let nextResultID : number = 0;
function CreateResultNode(result : string) {

    let newLi = document.createElement("li");
    let idDiv = document.createElement("div");
    idDiv.innerText = nextResultID.toString();
    newLi.appendChild(idDiv);
    let resultDiv = document.createElement("div");
    resultDiv.innerText = result;
    newLi.appendChild(resultDiv);

    newLi.id = nextResultID.toString();

    if (nextResultID % 2 == 0)
        newLi.setAttribute("style", "background: #3f3f3f; color: #ffffff;");

    nextResultID++;
    return newLi;
}

document.getElementsByClassName("InputContainer")[0].getElementsByTagName("input")[1].addEventListener("click", ManipulateString);