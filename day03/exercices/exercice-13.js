/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR DE MOT DE PASSE FACTICE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction genererMotDePasse(longueur) qui génère et retourne une chaîne aléatoire contenant X fois la lettre "A" ou un chiffre aléatoire. (Utilisez Math.random()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day03/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function Count_A_Letters(str)
{
    let counter= 0;
    for (let index = 0; index < str.length; index++) {
        
        if (str[index] == "A") {
            counter++;
        }
    }
    return counter;
}

function genererMotDePasse(longueur)
{
    let str_mtdp = "";
    let X = 3;
    for (let index = 0; index < longueur; index++) {
        str_mtdp += String.fromCharCode(getRandomIntInclusive(48, 90));
        
    }
    let A_appearing_count = Count_A_Letters(str_mtdp)
    let arr = str_mtdp.split('');
   if (A_appearing_count < X) {
     for (let index = 0; index < X - A_appearing_count; index++) {
        let random = getRandomIntInclusive(0, longueur-1);
        if (arr[random] != "A") {
           arr[random] = 'A'
        }
        else
            index--;
    }
   }
   else if (A_appearing_count > X) {
    let counter = 0;
    while(A_appearing_count > X)
    {
        if (arr[counter] == "A") {
            arr.splice(counter, 1)
            A_appearing_count--;
        }
        counter++;
    }
   } 
    str_mtdp = arr.join('');
    return str_mtdp;
}

console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));
console.log(genererMotDePasse(10));

