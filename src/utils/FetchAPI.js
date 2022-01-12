import render from "../templates/render.js";
import searchCharater from "./Search.js";

const API = 'https://rickandmortyapi.com/api/character/';
const characters = [];


export default async function fetchData(url)
{

    const dataOrigin = await fetch(url);
    const dataOriginObj = await dataOrigin.json();
    return dataOriginObj;


}

try{

    
    const requestData = async () => {

        const datos = await fetchData(API);


        for(let i = 1; i <= datos.info.pages; i++)
        {
            
            const pages = await fetchData(`${API}?page=${i}`);
            
            const personajes = await pages.results.map((personaje) => 
            {
                
                characters.push(personaje);
                render(personaje);
           
            });
         
            
            
        }
         
        
    
    }
    
    requestData();
}
catch(error)
{
    console.error(`Hubo un error: ${error}`);
}


const searching = document.getElementById("search-character");


searching.addEventListener("input", () => searchCharater(characters,searching.value));
