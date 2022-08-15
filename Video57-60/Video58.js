
    // Video 58. call, apply, bind 

    console.log(this);
    this.lugar = "Este es el ontexto Global";

    function saludar(saludo, aQuien) {
      console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
    }

    saludar("Hola", "tip");

    const objeto = {
      lugar: "Contexto Objeto"
    }

    saludar.call(objeto, "Hola", "lucy");
    saludar.call(null, "Hola", "lucy");
    saludar.call(this, "Hola", "lucy");
    saludar.apply(objeto, ["Adios", "lucy"]);
    saludar.apply(null, ["Adios", "lucy"]);
    saludar.apply(this, ["Adios", "lucy"]);

    this.nombre = "Contesto global Window";

    const persona = {
      nombre: "lucy",
      saludar: function () {
        console.log(`Hola ${this.nombre}`)
      }
    }

    persona.saludar();

    const persona2 = {
      saludar: persona.saludar.bind(this)
      //saludar: persona.saludar.bind(persona)
      
    }

    persona2.saludar(); 