function checkCookies(){
    return localStorage.getItem("cookiesAcepted")
}


const cookiesAlert = document.querySelector(".cookies");

function showCookies(){
    cookiesAlert.style.display = "block";
}

function cookiesAcepted(){
    localStorage.setItem("cookiesAcepted", "true");
    cookiesAlert.style.display = "none"
}


document
    .querySelector(".closeIcon")
    .addEventListener("click", () => {
        cookiesAlert.style.display = "none";
    })

document
    .getElementById("cookies-acepted")
    .addEventListener("click", cookiesAcepted)

if(!checkCookies()){
    showCookies();
}

// localStorage.clear()