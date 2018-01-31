var fs = require('fs');

fs.createReadStream('./dist/generate_scripts.jade').pipe(fs.createWriteStream('./views/partials/scripts.jade'));