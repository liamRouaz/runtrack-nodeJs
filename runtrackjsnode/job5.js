const path = require('path');

const fileName = "job5.js";
// __dirname représente le chemin absolu du répertoire où le script en cours est situé
const filePath = path.join(__dirname, fileName);

//récupération du nom du fichier
console.log('Nom du fichier:', fileName);

//récupération de l'extension du fichier
const fileExtension = path.extname(filePath);
console.log('Extension du fichier:', fileExtension);

//récupération du répertoire parent du fichier
const parentDirectory = path.dirname(filePath);
console.log('Répertoire parent du fichier:', parentDirectory);
