
    /*Video 47. Promesas */

        function cuadradoPromesas(valor) {
          if (typeof valor !== "number") {
            return Promise.reject(`Error, el valor " ${valor} " ingresado no es un número`);
          }

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve({
                valor,
                resultado: valor * valor
              });
            }, 0 | Math.random() * 1000);
          });
        }

        cuadradoPromesas(0)
          .then(obj => {
            console.log(obj);
            console.log('Inicio Promesas');
            console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
            return cuadradoPromesas(1);
          })
          .then(obj => {
            console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
            return cuadradoPromesas(2);
          })
          .then(obj => {
            console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
            return cuadradoPromesas(3);
          })
          .then(obj => {
            console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
            return cuadradoPromesas("3");
          })
          .then(obj => {
            console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
            return cuadradoPromesas(5);
          })
          .then(obj => {
            console.log(`Promise: ${obj.valor}, ${obj.resultado}`);
            console.log('Fin Promesas');
          })
          .catch(err => console.error(err)); 

