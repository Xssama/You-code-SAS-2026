/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FORMATAGE DE NUMÉRO DE TÉLÉPHONE (TYPE CHECK)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous attendez un numéro de téléphone sous forme de texte (ex: "0612345678"). Écrivez une logique qui vérifie que la valeur fournie est bien de type string ET que sa longueur est exactement de 10 caractères. Sinon, affichez "Numéro invalide".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day01/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let Numero_Tel = "0634343434";
if(Numero_Tel.length == 10 && typeof Numero_Tel === "string")
{
    console.log("Le numero est valide");
}
else
{
    console.log("Le numero n'est pas valide")
}
