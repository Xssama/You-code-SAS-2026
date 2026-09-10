/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * FUSION DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez groupe1 = ["A", "B"] et groupe2 = ["C", "D"]. Fusionnez-les pour obtenir ["A", "B", "C", "D"].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day05/exercices/exercice-06.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const groupe1 = ["A", "B"]
const groupe2 = ["C", "D"]
const groupeConc = [];
for (let i = 0; i < groupe1.length; i++) {
    groupeConc.push(groupe1[i])
    
}
for(let i =0; i <groupe2.length; i++)
{
    groupeConc.push(groupe2[i]);
}

groupeConc.forEach(element => {
    console.log(element);
    
});