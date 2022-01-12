const config = {
    threshold: 0.5
}

const imagen = document.getElementById("image");

export default function observar() {
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