const textarea = document.getElementById("my-textarea");
const letters = document.getElementById("count-letters");


function sumLetter(){
    let count = textarea.value.length;
    letters.textContent = `${count} / 250`
    if(count >= 250){
        textarea.classList = "limitText";
        letters.style.color = "red";
    } else{
        textarea.classList = ""
        letters.style.color = "black"
    }
}


textarea.addEventListener("input", () => {
    sumLetter();
})