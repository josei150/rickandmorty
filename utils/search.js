let containerSearch = document.getElementById("container-find-character");

function searchCharater(allCharacters, wordKey)
{

    containerSearch.innerHTML = "";

    let word = new RegExp(`${wordKey}.*`, "i");
    const characterFind = allCharacters.filter(character => {
        return word.test(character.name);
    });

    console.log(characterFind);
    
    // containerSearch = document.getElementById("container-search");

    characterFind.forEach(element => {
        containerSearch.insertAdjacentHTML("beforeend", `<div class="card__container"> 
            <a href="#${element.id}"> ${element.id} - ${element.name}</a> 
        </div>`);
        
        console.log("Se hizo la escucha de " + wordKey);
    });

    

    return containerSearch;
}

