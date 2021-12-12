//Definición de variables globales



const API = 'https://rickandmortyapi.com/api/character/';
const characters = [];

//Implementación del intersection observer

const config = {
    threshold: 0.5
}

const imagen = document.getElementById("image");

function observar() {
    const observador = new IntersectionObserver(handler, config);
    


    observador.observe(imagen);
    
}

function handler(entries)
{
    const entry = entries[0];
    
    let search = document.getElementById("search");
    let tittle = document.querySelector(".tittle");

    if(entry.isIntersecting)
    {
        search.classList.remove("mostrar");
        search.classList.remove("ocultar");
        search.style.top = `${imagen.height + tittle.offsetHeight + 30}px`;
    }
    else
    {
        
        search.style.top = `0`;
        
    }

}

observar();

//Petición a la API de Rick and Morty

async function fetchData(url_api)
{

    const dataOrigin = await fetch(url_api);
    const dataOriginObj = await dataOrigin.json();
    return dataOriginObj;


}

try{

    
    const requestData = async (url) => {

        const datos = await fetchData(url);

        for(let i = 0; i < datos.results.length; i++)
        {
            const personaje = await fetchData(url+datos.results[i].id)
            render(personaje);
            characters.push(personaje);
            
        }


        for(let i = 2; i <= datos.info.pages; i++)
        {

            const pages = await fetchData(`${url}?page=${i}`);
            const personajes = pages.results.map((personaje) => 
            {
                
                render(personaje);
                characters.push(personaje);
           
            });
            
        }
         
        
    
    }
    
    requestData(API);
}
catch(error)
{
    console.error(`Hubo un error: ${error}`);
}


const searching = document.getElementById("search-character");

console.log(characters);
searching.addEventListener("input", () => searchCharater(characters,searching.value));



