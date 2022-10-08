//dom
const touches = [...document.querySelectorAll("button")];
const listKeycode = touches.map(touche => touche.dataset.key);

document.addEventListener("keydown", (e) =>{
    const valeur = e.keyCode.toString();
} )


document.addEventListener("click", (e) =>{
    const valeur = e.target.dataset.key;
    calculer(valeur)
} )

const calculer = (valeur) =>{
    if (listekeycode.includes(valeur)){
        console.log(listKeycode)
        switch (valeur){
            case'8':
               ecran.textContent = "";
               break;
            
               case'13':
                  const calcul = eval(ecran.textContent);
                  ecran.textContent = calcul;
               break;
               default:
                const indexkeycode = listekeycode.indexof(valeur);
                const touche = touches[indexkeycode];
                ecran.textContent += touche.innerHTML;
               
        }
    }
}    
    
     window.addEventListener('error', (e) => {
         alert('une erreur est survenue dans votre calcul : ' + e.message);
    })

