
function searchCharater(allCharacters, wordKey)
{
    let containerSearch = document.getElementById("container-find-character");
    let cards = [];
    let search = document.getElementById("search");
    let scrollY = window.scrollY;


    containerSearch.innerHTML = "";

    let word = new RegExp(`${wordKey}.*`, "i");
    const characterFind = allCharacters.filter(character => {
        return word.test(character.name);
    });

    console.log(characterFind);
    
    
    if(wordKey === "")
    {
        return containerSearch.innerHTML = "";
    }


    characterFind.forEach(element => {

        let cardSelected;
        let card;
        containerSearch.insertAdjacentHTML("beforeend", `
        <a href="#${element.id}" id="${element.id}$"> ${element.id} - ${element.name}</a><br>`);

        card = document.getElementById(`${element.id}$`);
    
        card.addEventListener("click", () => {
            
            search.classList.remove("mostrar");
            search.classList.add("ocultar");
        });


 

    });


    window.addEventListener("scroll", (event) => {



        if(scrollY < window.scrollY)
        {
            search.classList.remove("mostrar");
            search.classList.add("ocultar");
            document.getElementById("search-character").focus();
        }
        else
        {


            search.classList.remove("ocultar");
            search.classList.add("mostrar");
            document.getElementById("search-character").focus();

        }
    
    
        scrollY = window.scrollY;
    
    });
    

    return containerSearch;
    
}

