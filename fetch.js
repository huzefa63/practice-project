let button = document.querySelector("button");
let image = document.querySelector("img");
let inputs = document.querySelector("input");
inputs.addEventListener("keydown",(event) => {
    if(event.key === "Enter"){
        click();
    }
})
function click(){
    fetchData();
}
button.addEventListener("click",click);



async function fetchData() {
    let input = document.querySelector("input").value.toLowerCase();
    try{

        let url = `https://pokeapi.co/api/v2/pokemon/${input}`;
          let response = await fetch(url);
          // console.log(response);
          let data = await response.json();
          
          console.log(data.name);
          let pokemonImages = data.sprites.front_default;
          image.src = pokemonImages;
    } catch{
        console.error("image not found");
    }
    }
