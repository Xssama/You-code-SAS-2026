/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CHASSEUR DE NOMBRES D'ARMSTRONG
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un nombre d'Armstrong à 3 chiffres est égal à la somme des cubes de ses chiffres (ex: 153 = 1³ + 5³ + 3³). Utilisez une boucle allant de 100 à 999 pour trouver et afficher TOUS les nombres d'Armstrong.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day02/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let nb = 370;
let remain = nb;

let chiffre1 = Math.trunc(remain%10);
remain /= 10;
let chiffre2 = Math.trunc(remain % 10);
remain /= 10;
let chiffre3 = Math.trunc(remain % 10);

let sum = (Math.pow(chiffre1, 3) + Math.pow(chiffre2, 3) + Math.pow(chiffre3, 3));
if(nb == sum)
{
    console.log(nb, " est Un nombre d'Armstrong à 3 chiffres");
    
}
else
    console.log(nb, " n'est  pas un nombre d'Armstrong à 3 chiffres");


