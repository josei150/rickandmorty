
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
        search.style.height = 0;
        return containerSearch.innerHTML = "";
    }

    search.style.height = "100px";
    

    characterFind.forEach(element => {

        let cardSelected;
        let card;
        containerSearch.insertAdjacentHTML("beforeend", `
        <a href="#${element.id}" id="${element.id}$"> ${element.id} - ${element.name}</a>`);

        

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
            
        }
        else
        {


            search.classList.remove("ocultar");
            search.classList.add("mostrar");
            

        }
    

    
        scrollY = window.scrollY;
    
    });
    

    return containerSearch;
    
}

