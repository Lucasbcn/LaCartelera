const requestURL = '../json/index.json'
    
async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
    }

    fetchMoviesJSON().then(movies => {
        console.log(movies)

    for(let index = 0; index < movies.peliculas.lenght; index++) {
       
        let title = movies.peliculas[index].nombre;
        let director = movies.peliculas[index].director
        
        moviesSection.innerHTML += `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                </div>
            </div>
        `    
       }
    })
