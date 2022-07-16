/*<div id="joke" class="joke">Awesome Joke is loading...</div>
        <button id="jokeBtn" class="btn">Next Joke</button>*/

//PROMISES
//GET https://api.imgflip.com/get_memes

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

/*const generateJokes = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json())
        .then((data) => {
            jokes.innerHTML = data.joke;

        }).catch((error) => {
            console.log(error);
        })
};*/


//fetching promises using async-await . 

const generateJokes = async() => {
    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com', setHeader);
        const data = await res.json();
        jokes.innerHTML = data.joke;
    } catch (error) {
        console.log('The error is ${error}');
    }
};

jokeBtn.addEventListener('click', generateJokes);
generateJokes();