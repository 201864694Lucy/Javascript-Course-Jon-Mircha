

    //Video 48. Asincrona - Await 

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
  
      async function funcionAsincronaDeclarada() {
        try {
          console.log('Inicio Async Function');
  
          let obj = await cuadradoPromesas(0);
          console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
  
          obj = await cuadradoPromesas(1);
          console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
  
          obj = await cuadradoPromesas(2);
          console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
  
          obj = await cuadradoPromesas("3");
          console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
  
          obj = await cuadradoPromesas(4);
          console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
  
          obj = await cuadradoPromesas(5);
          console.log(`Async Function: ${obj.valor}, ${obj.resultado}`);
  
          console.log('Fin Async Function');
        } catch (err) {
          console.error(err)
        }
      }
  
      funcionAsincronaDeclarada();
  
      const funcionAsincronaExpresada = async () => {
        try {
          console.log('Inicio Async Function');
  
          let obj = await cuadradoPromesas(6);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
  
          obj = await cuadradoPromesas(7);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
  
          obj = await cuadradoPromesas(8);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
  
          obj = await cuadradoPromesas("9");
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
  
          obj = await cuadradoPromesas(10);
          console.log(`Async Function: ${obj.value}, ${obj.result}`);
  
          console.log('Fin Async Function');
        } catch (err) {
          console.error(err)
        }
      }
  
      funcionAsincronaExpresada(); 
  