
// requireds

const fs = require('fs');
const colors = require('colors');
/* const fs = require('fs');
const fs = require('./fs'); */

let data = '';

let listarTabla = (base, limite = 10) => {

    console.log(`=================================`.red);
    console.log(`============== Tabla de ${ base } ===================`.green);
    console.log(`=================================`.red);

    for (let i = 0; i <= limite; i++) {
        data += `${ base } * ${ i } = ${ base * i } \n` ;
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}

let crearArchivo = ( base, limite = 10 ) =>{

    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${ base }, no es un número`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n` ;
            console.log(`${ base } * ${ i } = ${ base * i }`);
        }

        // const data = new Uint8Array(Buffer.from('Hello Node.js'));
        fs.writeFile(`tablas/tabla-${ base }-limite${ limite }.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${ base }-limite${ limite }.txt`);
            
            console.log(`El archivo tabla-${ base } ha sido creado`);
        });

    });
}


module.exports = {
    crearArchivo,
    listarTabla
};



