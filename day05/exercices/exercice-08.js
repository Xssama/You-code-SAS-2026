/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function Tab_Max_Min(Tab)
{
    let Max = Tab[0];
    let Min = Tab[0];

    for (let index = 1; index < Tab.length; index++) {
        if (Tab[index] > Max) {
            Max = Tab[index];
        }        
        else if (Tab[index] < Min) {
            Min = Tab[index];
        }        
    }
    console.log("The Minimum Number in Table is: ", Min);
    console.log("The Maximum Number in Table is: ", Max);

    
}

const Tab = [12,0, 1, 3, 4, 19, -1, -10]

Tab_Max_Min(Tab)