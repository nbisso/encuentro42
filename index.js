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

console.log("CAMBIOOO")
console.log("CAMBIOOO")
console.log("CAMBIOOO")
console.log("CAMBIOOO")

console.log("hola mundo " + moment(new Date()).format("DD/MM/yyyy"))