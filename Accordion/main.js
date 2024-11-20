
function showAnswer( question ){
    let idx = questions.findIndex(quest => quest == question);
    console.log(idx)
    answers[idx].style.display = answers[idx].style.display == "block"
        ? "none"
        : answers.forEach((ans, index) => {
            if(index == idx){
                ans.style.display = "block";
            } else{
                ans.style.display = "none";
            }
        })
}




const questions = Array.from(document.querySelectorAll(".btnQuestion"))
const answers = Array.from(document.querySelectorAll(".answer"))

document    
    .getElementById("question-container")
    .addEventListener("click", ( element ) => {
        if(questions.includes(element.target)) showAnswer(element.target);
    })