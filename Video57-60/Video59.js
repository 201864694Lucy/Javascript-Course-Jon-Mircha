  /* **********     Curso JavaScript: 59. JSON - #jonmircha     ********** */
    /* https://www.json.org/json-es.html */
    /* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON */
    const json = {
        cadena: "lucy",
        numero: 22,
        booleano: true,
        arreglo: ["correr", "saltar", "cocinar"],
        objeto: {
          email: "noelionerom@gmail.com"
        },
        nulo: null
      }
  
      console.log(json);
  
      console.log(JSON);
  
      console.log("*** JSON.parse ***");
      console.log(JSON.parse("{}"));
      console.log(JSON.parse("[1,2,3]"));
      console.log(JSON.parse("true"));
      console.log(JSON.parse("false"));
      console.log(JSON.parse("12"));
      console.log(JSON.parse('"Hola Mundo"'));
      console.log(JSON.parse("null"));
      //console.log(JSON.parse("undefined")); *No valido para JSON.parse
      console.log(JSON.parse('{ "x": 2, "y": 3 }'));
  
      console.log("*** JSON.stringify ***");
      console.log(JSON.stringify({}));
      console.log(JSON.stringify([1, 2, 3]));
      console.log(JSON.stringify(true));
      console.log(JSON.stringify(false));
      console.log(JSON.stringify(19));
      console.log(JSON.stringify("Hola Mundo"));
      console.log(JSON.stringify(null));
      console.log(JSON.stringify(undefined));
      console.log(JSON.stringify({ x: 2, y: 3 }));
  
      console.log("*** Ejemplo JSON ***");
      console.log(JSON.stringify(json));
      console.log(JSON.parse('{"cadena": "lucy","numero": 22, "booleano": true,"arreglo": ["correr","saltar","cocinar"],"objeto": {"twitter": "@jonmircha","email": "jonmircha@gmail.com"},"nulo": null}'));
    