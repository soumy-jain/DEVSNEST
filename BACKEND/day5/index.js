var fs = require('fs');
const args = process.argv.slice(2);
// console.log(args);
switch(args[0]) {
    case 'createDirectory':
        fs.mkdirSync(args[1]);
        break;
    case 'writeFile':
        fs.writeFileSync(args[1],args[2]);
        break;
    case 'readFile':
        const data = fs.readFileSync(args[1],'utf-8');
        console.log(data);
        break;
    case 'appendFile':
        fs.appendFileSync(args[1],args[2]);
        break;
    case 'deleteFolder':
        fs.rmdirSync(args[1]);
        break;
    case 'deleteFile':
        fs.unlinkSync(args[1]);
        break;
    default:
        console.log("Wrong input or arguments not specified");
}
