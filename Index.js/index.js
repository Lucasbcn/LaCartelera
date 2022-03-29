const requestURL = './json/peliculas.json';
    
async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const peliculas = await response.json();
    return peliculas;
    }

    fetchMoviesJSON().then(peliculas => {


    for(let index = 0; index < peliculas.peliculas.length; index++) 
      {
       
        let name = peliculas.peliculas[index].name;
        let img = peliculas.peliculas[index].img;
        let title = peliculas.peliculas[index].title;
        let clasification = peliculas.peliculas[index].clasification;
        let director= peliculas.peliculas[index].director;
        
        section.innerHTML += `
            <div class="card" style="width: 10rem; opacity-50">
                <img class="card-img-top" src="${img}" alt="Card image cap">
                <div class="card-body">         
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${director}</p>
                    <p class="card-text">${clasification}</p>  
                </div>
            </div>
        `    
       }
    })
   