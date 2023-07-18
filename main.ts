// variables
let fact: string = '';

//HTML elements
const factText = document.querySelector('#fact-text') as HTMLParagraphElement;
const newFactButton = document.querySelector('#new-fact') as HTMLButtonElement;

console.log(factText, newFactButton)

// functions
const fetchData = async () => {
    let response = await fetch('https://catfact.ninja/fact?max_length=140')
    let data = await response.json();

    return data;
}

function updateText(){
    console.log("updateText starts")

    let updateTextBool: boolean = false;
    
    fetchData().then(data => {
        console.log("fetching data...")
        fact = data.fact;
        factText.innerText = fact;
        updateTextBool = false;
    })
}

// event listenery
newFactButton.addEventListener('click', () => {
    updateText();
})