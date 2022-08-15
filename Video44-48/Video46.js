
    //Video 46. Callbacks 

     function cuadradoCallback(valor, callback) {
      setTimeout(() => {
        callback(valor, valor * valor);
      }, 0 | Math.random() * 10);
    }

    cuadradoCallback(1, (valor, resultado) => {
      console.log("Inicia Callback");
      console.log(`Callback: ${valor}, ${resultado}`);
      cuadradoCallback(2, (valor, resultado) => {
        console.log(`Callback: ${valor}, ${resultado}`);
        cuadradoCallback(3, (valor, resultado) => {
          console.log(`Callback: ${valor}, ${resultado}`);
          cuadradoCallback(4, (valor, resultado) => {
            console.log(`Callback: ${valor}, ${resultado}`);
            cuadradoCallback(5, (valor, resultado) => {
              console.log(`Callback: ${valor}, ${resultado}`);
              cuadradoCallback(6, (valor, resultado) => {
                console.log(`Callback: ${valor}, ${resultado}`);
                console.log("Fin Callback");
              });
            });
          });
        });
      });
    }); 


