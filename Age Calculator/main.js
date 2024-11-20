

function validInput( date ){
    btnToCalculate.setAttribute("disabled", "")
    const digitAllow = /^\d{2}\/\d{2}\/\d{4}$/;
    date.addEventListener("keypress", (event) => {
        if(event.key !== "Backspace" && event.key !== "Delete"){
            if(date.value.length == 2 || date.value.length == 5){
                date.value += "/"
            }
        }
    })
    if(date.value.length == 10 && !digitAllow.test(date.value)){
        date.style.border = "3px solid red"
    } else if(date.value.length == 10){
        date.style.border = "3px solid black";
        btnToCalculate.removeAttribute("disabled")
    }
}

function calculateAge( date ){
    let msg;
    let dateObj = {
        year: date.slice(6),
        month: date.slice(3, 5),
        day: date.slice(0, 2)
    }
    
    let nowTime = new Date();
    let allMonths = [
        [1, 31],
        [2, 29],
        [3, 30],
        [4, 31],
        [5, 30],
        [6, 31],
        [7, 30],
        [8, 31],
        [9, 30],
        [10, 31],
        [11, 30],
        [12, 31]
    ]
    if(dateObj.year > nowTime.getFullYear() || allMonths[dateObj.month-1][1] < dateObj.day || dateObj.month > 12){
        msg = "Your birth isn't correct";
    } else{
        const DateTime = luxon.DateTime;
        let timeTo = DateTime.now(nowTime).setZone("system").minus({
            year: dateObj.year,
            month: dateObj.month,
            day: dateObj.day    
        }).endOf("day").toISO();
        
        let timeLived = {
            years: parseInt(timeTo.slice(0,4)),
            months: parseInt(timeTo.slice(5, 7)),
            days: parseInt(timeTo.slice(8, 10))
        }
        msg =   `
                Your are 
                <strong>
                    ${timeLived.years} years ${timeLived.months} months and ${timeLived.days} days
                </strong>
                old
                `
    }
    
    return msg
}









const inputDate = document.getElementById("date");
inputDate.addEventListener("input", () => {
    validInput(inputDate)
})

const btnToCalculate = document.getElementById("btn-calculate");
if(!btnToCalculate.getAttribute("Disabled")){
    btnToCalculate.addEventListener("click", () => {
        document
            .getElementById("result")
            .innerHTML = calculateAge(inputDate.value)
    })
}