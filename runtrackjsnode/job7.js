const fs = require('fs').promises;

async function job7() {
  try {
    const data = await fs.readFile('data.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.error('Une erreur s\'est produite lors de la lecture du fichier :', error);
  }
}

job7();
