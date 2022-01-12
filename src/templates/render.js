export default function render(personaje)
{

    const contenedor = document.getElementById("container");

    contenedor.insertAdjacentHTML("beforeend", `<div class="card__container" id="${personaje.id}"> 
        <figure class="image__container">
            <img class="image__character" src="${personaje.image}"> 
            <figcaption class="info__container">
                
                <span> <strong>ID:</strong> ${personaje.id}</span> 
                <span> <strong>Name:</strong> ${personaje.name}</span>
                <span> <strong>Origin:</strong> ${personaje.origin.name}</span>
                <span> <strong>State:</strong> ${personaje.status}</span>
                
                
        </figcaption>
        </figure>
    </div>`);

    return contenedor;



}