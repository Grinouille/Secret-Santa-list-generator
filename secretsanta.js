var list = [
{
    pseudo: "Løvetand",
    theme: "un joli dessin hivernal, peut-être avec un motif littéraire (des livres/la littérature...)",
    contrainte: ""
},
{
    pseudo: "Cellendhyll",
    theme: "fantasy",
    contrainte: ""
},
{
    pseudo: "Rumaze",
    theme: "comfy",
    contrainte: ""
},
{
    pseudo: "Manio",
    theme: "mongolfière",
    contrainte: ""
},
{
    pseudo: "Toonuki",
    theme: "chocolat chaud et guimauve",
    contrainte: ""
},
{
    pseudo: "Sereil",
    theme: " dessin où il y a nos deux avatars dessus, à moi et mon santa. Avatar ou OC bien sûr, ça marche aussi.",
    contrainte: ""
},
{
    pseudo: "Stars-E",
    theme: "la neige avec mon avatar.",
    contrainte: ""
},
{
    pseudo: "NO°One",
    theme: "Poutine et pneus d'hiver",
    contrainte: ""
},
{
    pseudo: "Rødkløver",
    theme: "toi et moi en randonnée dans la forêt :)",
    contrainte: ""
},
{
    pseudo: "Crazyie",
    theme: "Câlin de noël",
    contrainte: ""
},
{
    pseudo: "Grumpy John",
    theme: "un cross over entre jeux vidéo et mes oc (Krom, Phil, etc)",
    contrainte: ""
},
{
    pseudo: "Cray",
    theme: "Nous, partageant une activité ensemble",
    contrainte: ""
},
{
    pseudo: "B33TLE",
    theme: "médiévale futuriste, ou sinon dans un thème soit Marvel, lego ou chevauchant un t-rex du future",
    contrainte: ""
},
{
    pseudo: "Prunelle",
    theme: "« Cluedo lubien sur fond de magie de Noël »",
    contrainte: ""
},
{
    pseudo: "Kuga",
    theme: "zombie/ univers post apo",
    contrainte: ""
},
{
    pseudo: "Perline Jolicoeur",
    theme: "les histoires",
    contrainte: ""
},
{
    pseudo: "Kyousael",
    theme: "mon avatar principal (Kyousael) en train de boire un chocolat chaud près d'une petite cheminée/un sapin (au choix de l'artiste !).",
    contrainte: ""
},
{
    pseudo: "Xee",
    theme: "Un jeu LIKO-12 (dessin ou programme, le choix est libre) ou/et D'adorables peluches géantes découvrant et jouant avec les minuscules enfants humains qu'ils viennent de s'offrir/recevoir en cadeaux.",
    contrainte: ""
},
{
    pseudo: "Ceo",
    theme: "j'aurai besoin d'un nouveau manteau bien chaud pour passer l'hiver",
    contrainte: ""
},
{
    pseudo: "Chamai",
    theme: "le nouveau Chamai en mode Kaiji (je suis très fan) avec idk un thème poker/jeux d'argents/casino ouuuuu Chamai en mode Darkest Dungeon, combattant des monstres lovecraftien",
    contrainte: ""
},
{
    pseudo: "Saeryth",
    theme: "pour le thème de mon père noel, j'aimerais : son pokémon favori, habillé pour noel !",
    contrainte: ""
},
{
    pseudo: "Cibu",
    theme: "le thème du FEU dans sa généralité, ça peut aller d'un océan de flammes à un briquet",
    contrainte: ""
},
{
    pseudo: "Hariko",
    theme: "des jeux vidéos",
    contrainte: ""
},
{
    pseudo: "Antiqua",
    theme: "je veux être dessiné dans une boule à neige.",
    contrainte: ""
},
{
    pseudo: "Moonlight",
    theme: "si mon père Noël peut faire en sorte que mon avatar passe un moment cozy/chocolats chauds avec un ou plusieurs lubiens de son choix au coin du feu, j’en serai comblée~",
    contrainte: ""
},
];



function swap(a, i, j) {
    "use strict";
    var b = a[i];
    a[i] = a[j];
    a[j] = b;
}

function secretsanta() {
    // Shuffle
    for (var i = 0; i < list.length; i += 1) {
        var j = parseInt(Math.random() * list.length);
        if (j != i) {
            swap(list, i, j);
        }
    }

    // Print
    //console.log(list);
    var str1 = "Cher lutin lubien connu sous le nom de ";
    var str2 = ", bienvenue dans cette nouvelle session du Secret Santa, <br>cette année le père Lubien te sous-traite une commande de dessin pour ";
    var str3 = "<br>Festivement,<br><br> Rødkløver et N°One."
    
    for (var i = 0; i < list.length; i += 1) {
        j = i + 1;
        if (j == list.length) {
            j = 0;
        }
        
        a = document.createElement("div");
        a.innerHTML = str1 + "<b>" + list[i].pseudo + "</b>"  + str2 + "<b>" + list[j].pseudo + "</b>"  + " avec le thème \"" + list[j].theme + "\"" + ((list[j].contrainte != "") ? " ainsi que la contrainte \"" + list[j].contrainte + "\"" : "") + str3;
        document.body.appendChild(a);
        document.body.appendChild(document.createElement("br"));
    }
    
    
}