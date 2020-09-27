let url = ' https://pokeapi.co/api/v2/pokemon';
fetch(' https://pokeapi.co/api/v2/pokemon')
  .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
    
    
      {var r = document.createElement("IMG");
        r.setAttribute("src", 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png');
        r.setAttribute("width", "150");
        r.setAttribute("height", "150");
        r.setAttribute('class','image1')
        // r.setAttribute("border-radius", "");
        // r.setAttribute("border", "");
        // r.setAttribute("align", "");
        document.body.appendChild(r);
      }
       
  
      
    })