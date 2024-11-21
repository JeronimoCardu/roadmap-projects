


function addMarker( opt ){

    let arrOptions = Array.from(document.getElementsByClassName("optionValue"));
    arrOptions.forEach(element => {
        if(element == opt){
            opt.innerHTML += `
                <span class="material-symbols-outlined check">check</span>
            `
        }else{
            let nameOption = element.getAttribute("value");
            element.innerHTML = `${nameOption.slice(0,1).toUpperCase()}${nameOption.slice(1)} Item`
        }
    })
}
function changeState( opt ){
    let nameOption = opt.getAttribute("value");
    buttonSelector.innerHTML = `
        ${nameOption.slice(0,1).toUpperCase()}${nameOption.slice(1)} Item
        <span class="material-symbols-outlined arrow" style="transform: rotate(180deg)">arrow_drop_down</span>
    `
}




const buttonSelector = document.getElementById("selector");
const options = document.getElementById("options")

let turnAndShow = [0, "none"]
buttonSelector.addEventListener("click", () => {
    turnAndShow = turnAndShow[0] == 180 && turnAndShow[1] == "block"
        ? [0, "none"]
        : [180, "block"]
    buttonSelector.querySelector(".arrow").style.transform = `rotate(${turnAndShow[0]}deg)`;
    options.style.display = turnAndShow[1];
})

options.addEventListener("click", ( element ) => {
    addMarker(element.target)
    changeState(element.target)
})