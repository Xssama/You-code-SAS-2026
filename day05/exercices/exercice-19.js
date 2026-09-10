/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function CalculBinaire(debut, fin, tab1, cherche_val)
{
    let Millieu = Math.floor((debut+fin)/2);
    
    if (tab1[Millieu] == cherche_val) {
        return Millieu;
    }
    if (debut == fin-1) {
        return -1;
    }
    else if (cherche_val == tab1[fin]) {
        return fin;
    }
    else if(tab1[Millieu] < cherche_val)
    {
        return CalculBinaire(Millieu, fin, tab1, cherche_val);
    }
    else if(tab1[Millieu] > cherche_val)
    {
        return CalculBinaire(debut, Millieu, tab1, cherche_val);
    }
}

function RechercheBinaire(tab, rechercheVal)
{
    return CalculBinaire(0, tab.length - 1,tab, rechercheVal)
}

const tab1 = [10, 20, 30, 40, 45, 50, 60];
let chercheelement = 99;
let indice =  RechercheBinaire(tab1, chercheelement);
console.log("the number",chercheelement, "is", (indice == -1 ? "not found":"found at indice => "+ indice) );
