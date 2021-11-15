//Definición de variables globales

const API = 'https://rickandmortyapi.com/api/character/';


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
            const renderTarjeta = render(personaje);
            
        }


        for(let i = 2; i <= datos.info.pages; i++)
        {

            const pages = await fetchData(`${url}?page=${i}`);
            const personajes = pages.results.map((result) => 
            {
                //console.log(result.name);
                const renderTarjeta = render(result);
                
           
            
            });
            
        }
         
        
    
    }
    
    requestData(API);
}
catch(error)
{
    console.error(`Hubo un error: ${error}`);
}



