/*

*init de la apliacion npm init ===> npm init --yes (todo pone que si)

*instalar npm install libreria (ultima) libreria@version

*remover npm remove libreria

*instalar dev npm install libreria --save-dev

*instalar mis dependencias npm install // npm i

package.json:

es el archivo de configuracion de npm, donde encontramos las depencias
y las dev dependencias

packe.lock.json //no se toca

node_moduels (contiene todo el codigo fuente de las otras librerias que 
    tenemos como dependencias)

*/

const moment = require("moment")
const coolimage = require("cool-images")
const fs = require("fs")

console.log("CAMBIOOO")
console.log("CAMBIOOO")
console.log("CAMBIOOO")
console.log("CAMBIOOO")

console.log(new Date())

console.log("hola mundo " + moment(new Date()).format("DD/MM/YYYY HH:mm:ss"))


let images = coolimage.many(800, 800, 10);
let logMessage = moment(new Date()).format("DD/MM/YYYY hh:mm:ss") + "\n"

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    console.log(image)

    logMessage += image + "\n";
}


log(logMessage)


function log(message) {
    let fileName = "logs.txt";

    let existFile = fs.existsSync(fileName)

    if (!existFile) {
        fs.writeFileSync(fileName, "")
    }

    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.error("error on get file " + fileName)
            return;
        }

        let texto = data.toString();
        texto += "\n " + message
        fs.writeFileSync(fileName, texto)
    })
}