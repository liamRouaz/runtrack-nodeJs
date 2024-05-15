const fs = require('fs');
const path = require('path');

// Obtention du chemin absolu du répertoire courant
const currentDirectory = process.cwd();

// Lecture du contenu du répertoire courant
fs.readdir(currentDirectory, (err, files) => {
  if (err) {
    console.error('Une erreur s\'est produite lors de la lecture du répertoire :', err);
    return;
  }

  // Filtrer les dossiers
  const directories = files.filter(file => fs.statSync(path.join(currentDirectory, file)).isDirectory());

  // Affichage des dossiers
  console.log('Dossiers présents dans le répertoire courant :');
  directories.forEach(directory => {
    console.log(directory);
  });
});
