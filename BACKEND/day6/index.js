var fs = require('fs');
const args = process.argv.slice(2);
// console.log(args);
switch(args[0]) {
    case 'createDirectory':
        fs.mkdir(args[1], (err) => {
            if(err) {
                console.log(err);
            }
        });
        break;
    case 'writeFile':
        fs.writeFile(args[1],args[2], (err) => {
            if(err) {
                console.log(err);
            }
        });
        break;
    case 'readFile':
        const data = fs.readFile(args[1],'utf-8', (err) => {
            if(err) {
                console.log(err);
            }
        });
        console.log(data);
        break;
    case 'appendFile':
        fs.appendFile(args[1],args[2], (err) => {
            if(err) {
                console.log(err);
            }
        });
        break;
    case 'deleteFolder':
        fs.rmdir(args[1], (err) => {
            if(err) {
                console.log(err);
            }
        });
        break;
    case 'deleteFile':
        fs.unlink(args[1], (err) => {
            if(err) {
                console.log(err);
            }
        });
        break;
    default:
        console.log("Wrong input or arguments not specified");
}
