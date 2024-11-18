const tabs = Array.from(document.getElementsByClassName("content"));
const buttonsTab = document.querySelector(".buttons");
const buttons = Array.from(buttonsTab.getElementsByTagName("button"))



buttonsTab.addEventListener("click", ( element ) => {
    buttons.forEach(btn => {
        let idxButton = buttons.indexOf(btn);
        if(btn == element.target){
            btn.style.borderBottom = "3px solid black";
            tabs[idxButton].style.display = "block"
        } else{
            btn.style.borderBottom = "none"
            tabs[idxButton].style.display = "none"
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    tabs[0].style.display = "block";
    buttons[0].style.borderBottom = "3px solid black"
})