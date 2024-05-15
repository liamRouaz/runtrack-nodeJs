const fs = require('fs'); fs.readFile('data.txt', 'utf8', function(err, data) { 
      const content = data;   
      console.log(content); 
    });