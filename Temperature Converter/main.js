


function convertTemperature( temp ){
    const from = fromTemperatureBtn.textContent;
    const to = toTemperatureBtn.textContent;

    const convertions = {
        "Fahrenheit-Celsius": (t) => (t - 32) * 5/9,
        "Fahrenheit-Kelvin": (t) => (t + 459.67) * 5/9,
        "Celsius-Fahrenheit": (t) => (t * 9/5) + 32,
        "Celsius-Kelvin": (t) => t + 273.15,
        "Kelvin-Celsius": (t) => t - 273.15,
        "Kelvin-Fahrenheit": (t) => ((t - 273.15) * 9/5) + 32,
    };
    const key = `${from}-${to}`;
    if(convertions[key]){
        return convertions[key](parseFloat(temp)).toFixed(2);
    }
    return temp;
}

function showConverted( tempConverted ){
    let result = document.getElementById("result")
    result.style.display = "block"
    result.innerHTML = `
            ${temperatureInput.value} ${fromTemperatureBtn.textContent} is ${tempConverted} ${toTemperatureBtn.textContent}
        `
}








const temperatureInput = document.getElementById("temperature");
const fromTemperatureBtn = document.getElementById("from-unit-btn");
const toTemperatureBtn = document.getElementById("to-unit-btn");
const converter = document.getElementById("converter-btn")
const fromOptions = document.querySelector(".fromOptions")
const toOptions = document.querySelector(".toOptions")

fromTemperatureBtn.addEventListener("click", () => {
    fromOptions.style.display = fromOptions.style.display == "block"
        ? "none"
        : "block"
})
toTemperatureBtn.addEventListener("click", () => {
    toOptions.style.display = toOptions.style.display == "block"
        ? "none"
        : "block"
})

let firstField, secondField;
fromOptions.addEventListener("click", (element) => {
    fromTemperatureBtn.textContent = element.target.textContent
    firstField = true;
    fromOptions.style.display = "none"
})
toOptions.addEventListener("click", (element) => {
    toTemperatureBtn.textContent = element.target.textContent
    secondField = true;
    toOptions.style.display = "none"
})

converter.addEventListener("click", () => {
    if(firstField && secondField && temperatureInput.value){
        showConverted(convertTemperature(temperatureInput.value))
    } else{
        alert("Please, complete all fields")
    }
})

document.addEventListener("click", (element) => {
    if(element.target != fromTemperatureBtn && element.target != toTemperatureBtn){
        fromOptions.style.display = "none";
        toOptions.style.display = "none";
    }
})