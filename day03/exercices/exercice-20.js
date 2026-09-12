/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * MÉMOÏSATION (CACHE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction qui simule un long calcul. Ajoutez-y un "cache" (un objet ou une variable externe) qui enregistre les résultats précédents. Si la fonction est rappelée avec le même paramètre, elle retourne le résultat stocké au lieu de refaire le calcul.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day03/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

const cashe = {}

function fac(num)
{
    if (num <= 1) {
        return 1;
    }
    else
        return num * fac(num-1)
}

function CalculFacX(Num)
{
    
        
        if (cashe[Num] !== undefined) {
           return cashe[Num];
        }
        else
        {
            let resultat = fac(Num);
            cashe[Num] = resultat;
            return resultat;
        }
}



console.log(CalculFacX(5));
console.log(CalculFacX(5));
console.log(CalculFacX(2));
console.log(CalculFacX(2));
console.log(CalculFacX(5));




