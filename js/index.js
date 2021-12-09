//Definición de variables globales


const API = 'https://rickandmortyapi.com/api/character/';
const characters = [];
// let observer = new IntersectionObserver(callback, options);

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


//Recuerda utilizar el Intersection Observer
