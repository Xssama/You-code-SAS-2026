/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉCHANTILLONNAGE (SLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un grand tableau de 100 éléments, utilisez .slice() pour extraire les 10 premiers (la première page).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day05/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
const elements = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
  71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
  81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
  91, 92, 93, 94, 95, 96, 97, 98, 99, 100
];
const First_10_Elements = elements.slice(0, 10);
console.log(elements);
console.log(First_10_Elements);
