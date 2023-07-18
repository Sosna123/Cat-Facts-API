// variables
let fact: string = '';
let imgSrc: string = '';

//HTML elements
const factText = document.querySelector('#fact-text') as HTMLParagraphElement;
const catImage = document.querySelector("#cat-image") as HTMLImageElement;
const newFactButton = document.querySelector('#new-fact') as HTMLButtonElement;

// updating text
const fetchTextData = async () => {
    let responseT = await fetch('https://catfact.ninja/fact?max_length=140')
    let dataT = await responseT.json();

    return dataT;
}

function updateText(){
    fetchTextData().then(data => {
        fact = data.fact;
        factText.innerText = fact;
    })
}

// updating image
const fetchImageData = async () => {
    let responseI = await fetch('https://api.thecatapi.com/v1/images/search')
    let dataI = await responseI.json();

    return dataI;
}

function updateImage(){
    fetchImageData().then(data => {
        imgSrc = data[0].url;
        catImage.src = imgSrc;
    })
}

// event listenery
newFactButton.addEventListener('click', () => {
    updateText();
    updateImage();
})

document.addEventListener("keypress", (e) => {
    console.log(e);
    if(e.code === "Space"){
        updateText();
        updateImage();
    }
})

updateText();
updateImage();