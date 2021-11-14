const render = (personaje) => {

    const contenedor = document.getElementById("container");

    contenedor.insertAdjacentHTML("beforeend", `<div> <figure><img src="${personaje.image}"> 
    <figcaption>
    ${personaje.id} - 
    ${personaje.name}
    </figcaption>
    </figure></div>`);

    return contenedor;



}