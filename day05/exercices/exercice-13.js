/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPARAISON DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction sontEgaux(tab1, tab2) qui vérifie si deux tableaux contiennent exactement les mêmes éléments dans le même ordre. (Rappel: [1] == [1] donne false en JS !).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function sontEgaux(tab1, tab2)
{
    let sontegaux = true;
    if(tab1.length == tab2.length)
    {
       for (let i = 0; i < tab1.length; i++) {
         if (tab1[i] !== tab2[i]) {
            sontegaux = false;
        }
        
       }
    }
    return sontegaux;
}

const tab1 = [1,2,5,10];
const tab2 = [1,2,5,10];

console.log(sontEgaux(tab1, tab2) ? "les deux tableau sont egaux":"les deux tableau ne sont pas egaux" );
