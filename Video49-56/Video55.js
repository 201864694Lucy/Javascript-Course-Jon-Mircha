
  


    //Video 55. Proxies

     const persona = {
      nombre: "",
      apellido: "",
      edad: 0
    }

    const manejador = {
      set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) {
          return console.error(`La propiedad "${prop}" no existe en el objeto persona.`);
        }

        if (
          (prop === "nombre" || prop === "apellido") &&
          !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
        ) {
          return console.error(` "${prop}"" sólo se acepta letras y espacios en blanco`);
        }
        obj[prop] = valor;
      }
    }

    const lucy = new Proxy(persona, manejador);
    lucy.nombre = "Lucy";
    lucy.apellido = "Palacios";
    lucy.edad = 22;
    console.log(lucy);

    console.log(persona);
