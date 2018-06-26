/*
 * This file traverses all files and sub directories of the Assets directory 
 * and consolidates their import statements into asset_list.js for webpack bundling
 */

const glob = require('glob');
const fs = require('fs');
const appRoot = require('app-root-path');

const isWindows = process.platform === "win32";

function getFiles(src, callback){
	glob(src, callback);
}

getFiles('resources/assets/public/**/*.*', (err, files) => {
	if(err) throw err;
	
	// overwrite existing asset_list with blank file
	fs.writeFile('./app/webpack/asset_list.js', '', () => {
		files.forEach((file_path) => {
			// print import statement in asset_list
            let newPath = appRoot.resolve(file_path);

            if(isWindows)
                newPath = newPath.replace(/\\/g, "\\\\");

			if(file_path.slice(-3) !== ('.swp'))
				fs.appendFile('./app/webpack/asset_list.js', 'import "' + newPath + '";\n', () => {});
		});		
	});
});

