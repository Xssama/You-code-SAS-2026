/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.
const  panier = [101, 105, 101, 102]
function ajouterAuPanier(id, tab)
{

    tab[tab.length] = id;
}

function IsDoubled(tab, element)
{
    let counter = 0;
    for (let index = 0; index < tab.length; index++) {
        
        if (element === tab[index]) {
           counter++;
            
        }
    }
    return counter >= 2 ? true:false;
}

function retirerDuPanier(id, tab)
{
    if (IsDoubled(tab, id)) {
        let indice= tab.indexOf(id);
        tab.splice(indice, 1);
    }
   
}


function IsAlreadyExists(tab, element)
{
    let already = false;
    for (let index = 0; index < tab.length; index++) {
        
        if (element === tab[index]) {
            already = true;
            break;
        }
    }
    return already;
}
function afficherQuantites(tab)
{
    const alreadycountedElements = [];
    for(let i = 0; i < tab.length; i++)
    {
        if (IsAlreadyExists(alreadycountedElements, tab[i])) {
            continue;
        }
        let counter = 0;
        for (let index = i+1; index < tab.length; index++) {
            if (tab[i] === tab[index]) {
                counter++;
            }
        }
        
        console.log("L'elements", tab[i], " apparait", counter+1, "fois");
        alreadycountedElements.push(tab[i]);
    }
    
}
retirerDuPanier(101, panier)
//ajouterAuPanier(107, panier)
console.log(panier);
//afficherQuantites(panier);
