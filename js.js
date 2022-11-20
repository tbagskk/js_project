bouton = document.addEventListener("click",citation);
var i = -1;

function citation()
{
    let texte;
    let bouton;

    texte = document.getElementById(2);
    
    i++;
    console.log(i);
    let tab=["comment ca va mon reuf"];
    tab[0]='comment ca v8 mon reuf';
    tab[1]='cyka blyat';
    texte.innerHTML = tab[i];

    
}

