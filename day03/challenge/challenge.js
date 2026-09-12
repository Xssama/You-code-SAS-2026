/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · CHALLENGE
 * LE GESTIONNAIRE D'INVENTAIRE DE L'AVENTURIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer l'inventaire (sac à dos) d'un héros dans un jeu vidéo, en utilisant uniquement des fonctions pour manipuler la "mémoire" globale.
 *
 * Consignes :
 * 1. Déclarez une variable globale (hors des fonctions) or = 0.
 * 2. Créez une fonction ajouterOr(montant) qui ajoute à la bourse et affiche "Vous avez ramassé [montant] or. Total: [or]".
 * 3. Créez une fonction depenserOr(montant) qui vérifie si le héros a assez d'or. Si oui, déduit l'or et affiche l'achat. Sinon, affiche "Fonds insuffisants".
 * 4. Créez une fonction combatGagne() qui appelle ajouterOr avec un montant aléatoire entre 10 et 50.
 * 5. Simulez une aventure : gagnez 3 combats, puis tentez d'acheter une épée à 100 or.
 * Bonus : Utilisez des closures pour éviter d'avoir or en variable globale vulnérable !
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day03/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

function Game()
{
    let Total = 0;

function Rand(Max, Min)
{

    return Math.floor((Math.random() * (Max - Min - 1)) + Min);
}

function ajouterOr(montant)
{
    Total += montant;
    console.log("Vous avez ramassé", montant, "or. Total: ", Total, "or.");
    
}
function depenserOr(montant)
{
    if (montant > Total) {
        console.log("Fonds insuffisants");
    }
    else
    {
        Total -= montant;
        console.log("L'achat bien passe, montant: ", montant, "or, Total:", Total, "or.");
        
    }
}
function combatGagne()
{
    let X = Rand(10, 50)
    ajouterOr(X);  

}
return {
    combatGagne,
    ajouterOr,
    depenserOr
}
}

const game = Game();

game.ajouterOr(10)
game.depenserOr(5)
game.combatGagne();
game.combatGagne()
game.combatGagne()


game.depenserOr(100);
