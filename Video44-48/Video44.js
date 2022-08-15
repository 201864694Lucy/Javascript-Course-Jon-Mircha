//Video 44. Temporizadores (setTimeout & setInterval)

    /* console.log("inicio");

    setTimeout(() => {
        console.log("Ejecutando un setTimeout, esto se ejecuta una sóla vez");
      }, 3000);
  
      setInterval(() => {
        console.log("Ejecutando un setInterval, esto se ejecuta indefinidaente cada cierto intervalo de tiempo");
      }, 1000); */
      console.clear();
  
      /* let temporizador = setTimeout(() => {
        console.log(new Date().toLocaleTimeString());
      }, 1000);
  
      clearTimeout(temporizador);
      console.log("después del clearTimeout"); */
  
      console.clear();
      
      let temporizador = setInterval(() => {
        console.log(new Date().toLocaleTimeString());
      }, 1000);
  
      clearInterval(temporizador);
      console.log("después del clearInterval"); 
  