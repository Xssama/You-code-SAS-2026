/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
function IsAlreadyCounted(tab, element)
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
function Elements_Apparait(tab)
{
    const alreadycountedElements = [];
    for(let i = 0; i < tab.length; i++)
    {
        if (IsAlreadyCounted(alreadycountedElements, tab[i])) {
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

const tab = ["pomme", "banane", "pomme", "orange", "banane", "pomme"]

Elements_Apparait(tab);
