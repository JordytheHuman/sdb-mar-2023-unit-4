console.log("it works for pokemon");
/* 
FETCH API

The Fetch is an asynchronous function

- we don't know how long it is going tot take the response to come back to us.

- So we must use await or we utilize a .then()

- Wrap the fetch in a try - catch
- first variable called response
- next variable called: data, json
- use .json() after we get the response back


*/




async function fetchPokemon(){
    let url = "https://pokeapi.co/api/v2/pokemon?limit=200";

    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        // Doing Work On The Data
        let allPokemonCharacters = data.results
        displayPokemon(allPokemonCharacters);
        console.log(data.results);

        console.log(data.results[1]) // gets to the whole ivysaur object

        console.log(data.results[1].name); // gets to just the name ivysaur
      

        } catch(error){
        console.error(error);
      }
}

fetchPokemon();
/* 
The response that we get back from the API in this example is a JSON Object.

JSON = JavaScript Object Notation

*/

function displayPokemon (charactersToDisplay){
    let pokemonDisplay= document.getElementById("display-pokemon");
    charactersToDisplay.forEach((character) => {
    let pTag = document.createElement("p");
    pTag.textContent = character.name;    
    pokemonDisplay.appendChild(pTag);
    
        
    });
}
// async function fetchPokemonImage() {
//     let pokemon = "squirtle"
//     let url = `https://pokeapi.co/api/v2/pokemon/bulbasaur${pokemon}`;
    
//     try{
//         let response = await fetch(url);
//         let data = await response.json();

//         console.log(data.sprites.front_default)
//         displayPokemonImage(data.sprites.front_default);
//       }catch(error){
//         console.error(error)
//       }
//     }

// fetchPokemonImage();    

// function displayPokemonImage(imgURL) {
//     let pokemonDisplay = document.getElementById("display-pokemon");
//     let imgTag = document.createElement("img");
//     imgTag.src= imgURL;
//     pokemonDisplay.appendChild(imgTag);
// }

  