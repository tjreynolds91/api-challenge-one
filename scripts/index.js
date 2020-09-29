const urlDitto = 'https://pokeapi.co/api/v2/pokemon/ditto/';
const submitBtn = document.querySelector('.submit'); 
const section = document.querySelector('section');
const div = document.getElementsByClassName('info')[0];




submitBtn.addEventListener('click', fetchDitto); //1111111111111111

let globalJson; // to be able to look at in the browser console. but delete and replace with myJson to use in vscode.

// Function fetches diito info from api
function fetchDitto(e) { //111111111111111
  e.preventDefault();
  console.log('Hi');

  // this while loop prevents countless images to 

  while(div.firstChild) {
    div.removeChild(div.firstChild)
  }

fetch(urlDitto)
  .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
        globalJson = myJson;
        console.log(globalJson);
      let i = document.createElement("img");
        i.setAttribute("src", globalJson.sprites.other["official-artwork"].front_default );
        div.appendChild(i);
        
      
      let h = document.createElement('p');
        h.innerHTML = 'Height : '+ globalJson.height;
        // h.setAttribute('class' , 'info');
        div.appendChild(h);
        
        let w = document.createElement('p');
        w.innerHTML = 'Weight : ' + globalJson.weight;
        // w.setAttribute('class' , 'info');
        div.appendChild(w);
        
      // let b = document.createElement('button');
    //     b.innerText = "Ditto's Bio Facts"
        // document.body.appendChild(b);
    
  
      
    })
} //111111111111111






















// fetch(urlName)
//   .then(function(response) {
//         return response.json();
//     })
//     .then(function(myJson) {
//         console.log(myJson)




//     })
