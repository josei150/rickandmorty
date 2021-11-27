let containerSearch = document.getElementById("container-find-character");
let cards = [];

function searchCharater(allCharacters, wordKey)
{

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
    containerSearch.insertAdjacentHTML("beforeend", `
        <a href="#${element.id}" id="${element.id}$"> ${element.id} - ${element.name}</a><br> 
    `);
    
    cards.push(document.getElementById(`${element.id}$`));

    });

    let cardsListen = cards.map(currentCard => {

        currentCard.addEventListener("click", () => {

            cardSelected = document.getElementById(`${element.id}`);
            cardSelected.classList.add("select__character");
        });

    });

    return containerSearch;
    
}

