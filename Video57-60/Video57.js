   //Video 57

        console.log(this);
        console.log(window);
        console.log(this === window);

        this.nombre = "Contexto Global";
        console.log(this.nombre);

        function imprimirNombre() {
          console.log(this.nombre);
        }

        imprimirNombre();

        const objeto = {
          nombre: "Contexto Objeto",
          imprimirNombre: function () {
            console.log(this.nombre);
          }
        }

        objeto.imprimirNombre();

        const objeto2 = {
          nombre: "Contexto Objeto 2",
          imprimirNombre
        }

        objeto2.imprimirNombre();

        const objeto3 = {
          nombre: "Contexto Objeto 3",
          imprimirNombre: () => {
            console.log(this.nombre);
          }
        }

        objeto3.imprimirNombre();

        function Persona(nombre) {
          const that = this;
          //this.nombre = nombre;
          that.nombre = nombre;

          //return console.log(this.nombre);

          //***crea un nuevo contexto global******
          //return function () {
          //console.log(this.nombre);
          //}

          //return () => console.log(this.nombre);

          return function () {
            console.log(that.nombre);
          }
        }

        let lucy = new Persona("Lucy");
        lucy();
