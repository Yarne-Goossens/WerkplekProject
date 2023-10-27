const matrix = [
    ["Vacuum cleaner isn't working", "It smells bad", "Cord doesn't coil", "It isn't charging", "It broke down", "Suction isn't working properly", "Wheels aren't roling well", "Connection problems with the app"],
    ["Zit de stekker goed in het stopcontact?", "Is de batterij opgeladen?", "Zitten stofzak/stofbak/filters goed in de stofzuiger?", "Zit klepje op de buis van de stofzuiger goed / is hij op de juiste manier gesloten?", "Is het snoer nog intact / geen brandblekken of beschadigd?", "Werkt het stopcontact wel?", "Probleem ligt niet bij snoer of stopcontact?", "Werkt niet of laadt niet goed op?", "Laadstation aangesloten aan werkend stopcontact?"],
    ["Zit er iets vast in de voet, zuigbuis of slang?", "Is de stofzuigerzak of het reservoir geleegd?", "Zijn de filters schoongemaakt of vervangen?", "Merk je verbrande lucht op?"],
    ["Rolt het snoer niet meer goed op?", "Draait het oprolmechanisme niet goed?"],
    ["Werkt het toestl met een nieuwe batterij?", "Is het laadstation aangesloten op een wekend stopcontact?", "Kan je een andere batterij opladen aan dit laadstation?"],
    ["Zit er een voorwerp vast?", "Zie je niets dat vastzit? Vervang de zak of ledig het reservoir", "Helpt niets tot nu toe? Maak de filters schoon of vervang ze", "Merk je een verbrande lucht op?", "Niets doorgebrand bij stopcontact, stekker, snoer?"],
    ["Is de zuigkrachtregeling veranderd?", "Is er minder zuigkracht?", "Voel je zuigkracht?", "Voel je geen zuigkracht?", "Zit er een lek in de plastic slang?", "Zit er een rubberen afsluiting los of is er een afsluting kapot?", "Is de plastic slang kapot dicht bij een uiteinde?"],
    ["Draaien de wieltjes niet meer goed?", "Draaien de wieltjes nog steeds niet goed na schoonmaken?"],
    ["Heb je de juiste app gedownload?", "Is er wifibereik tot aan het laadstation?", "Zijn smartphone en robot op hetzelfde wifinetwerk én -frequentie aangesloten?", "Heb je de stofzuiger al eens uitgeschakeld en na vijf minuten weer aangeschakeld?", "Lukt het helemaal niet om een verbinding met de robotstofzuiger te maken?"]
]

const solution_matrix = [
    ["Controleer aansluiting en stofzuigerzak", "Controleer aansluiting en stofzuigerzak", "Controleer aansluiting en stofzuigerzak", "Controleer aansluiting en stofzuigerzak", "Controleer aansluiting en stofzuigerzak", "Controleer aansluiting en stofzuigerzak", "Vervang de aan/uit schakelaar", "Vervang de batterij van de stofzuiger", "Controleer laadstation", "Laat de motor en elektronica van je stofzuiger herstellen"],
    ["Verwijder stinkend voorwerp uit de stofzuigerzak", "Verwijder stinkend voorwerp uit de stofzuigerzak", "Verwijder stinkend voorwerp uit de stofzuigerzak", "vervang verband onderdeel van je stofzuiger"],
    ["Maak het snoer van je stofzuiger schoon", "Smeer het oprolmechanisme van je stofzuiger"],
    ["Vervang de batterij van de stofzuiger", "Vervang het laadstation van je robotstofzuiger", "Vervang het laadstation van je robotstofzuiger"],
    ["Verwijder de verstopping uit je stofzuiger", "Verwijder de verstopping uit je stofzuiger", "Verwijder de verstopping uit je stofzuiger", "Vervang verbrand onderdeel van je stofzuiger", "Vervang verbrand onderdeel van je stofzuiger"],
    ["Pas de zuigkrachtregeling van je stofzuiger aan", "Vervang stofzuigerzak", "Verwijder de verstopping uit je stofzuiger", "Verwijder de verstopping uit je stofzuiger", "Herstel een lek", "Herstel een lek", "Verwijder de stofzuigerslang"],
    ["Maak de wieltjes van je stofzuiger schoon.", "Vervang de wieltjes van je stofzuiger."],
    ["Controleer het netwerk.", "Controleer het netwerk.", "Controleer het netwerk.", "Controleer het netwerk.", "Laat de elektronica van je stofzuiger herstellen"]
]



