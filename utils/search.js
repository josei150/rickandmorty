function searchCharater(allCharacters, wordKey)
{

    allCharacters.filter(character => {
        character.name === `\*${wordKey}\*`;
    });

}