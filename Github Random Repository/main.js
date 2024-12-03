import { Octokit } from "https://cdn.skypack.dev/@octokit/core";


async function loadLanguages(){
    let response = await fetch("https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json")
    let langauges = await response.json();
    await langauges.forEach(lang => {
        document
        .getElementById("languages-selector")
        .innerHTML += 
        `<option id="option-${lang.title}">${lang.title}</option>`
    })
}

function loadingFinder(){
    content.textContent = "Loading, please wait...";
    content.classList = "mainMsg"
    refreshBtn.classList = "notShow"
}

async function findLanguage( lang ){
    const octokit = new Octokit({
        auth: 'YOUR TOKEN'
    })

    try{
        const response = await octokit.request('GET /search/repositories', {
            q: `language:${lang}`,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        let randomNumber = Math.floor(Math.random() * response.data.items.length)
        const repository = response.data.items[randomNumber];
        content.classList = "repositoryFinded"
        content.innerHTML = `
            <h1>${repository.name}</h1>
            <p>${repository.description}</p>
            <br>
            <div>
                <p></>${repository.language}</p>
                <img src="/assets/star.svg">
                <p>${repository.stargazers_count}</p>
                <img src="/assets/git-fork-svgrepo-com.svg">
                <p>${repository.forks}</p>
                <img src="/assets/alert-circle.svg">
                <p>${repository.open_issues}</p>
            </div>
        `
        refreshBtn.textContent = "Refresh"
        refreshBtn.classList = ""
        
    } catch{
        errorFinder()
    }
  
}

function errorFinder(){
    content.classList = "mainMsgError"
    content.textContent = "Error fetching repositories";
    refreshBtn.textContent = "Click to retry"
    refreshBtn.classList = "errorShow"
}




document.addEventListener("DOMContentLoaded", () => {
    loadLanguages()
})

const selector = document.getElementById("languages-selector");
let content = document.getElementById("repository-content");
let refreshBtn = document.getElementById("refresh-button");
selector.addEventListener("change", (element) => {
    loadingFinder()
    findLanguage(element.target.value);
})
refreshBtn.addEventListener("click", () => {
    findLanguage(selector.value)
})