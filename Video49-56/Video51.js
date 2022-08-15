

    //Video 50. Sets 
/*
     const set = new Set([1, 2, 3, 3, 4, 5, true, true, false, false, {}, {}, "hola", "HOla"]);
    console.log(set);
    console.log(set.size);

    const set2 = new Set();
    set2.add(1);
    set2.add(2);
    set2.add(2);
    set2.add(3);
    set2.add(true);
    set2.add(false);
    set2.add(true);
    set2.add(false);


    console.log(set2);
    console.log(set2.size);

    console.log("Recorriendo set");
    for (item of set) {
      console.log(item);
    }
    console.log("Recorriendo set2");
    set2.forEach(item => console.log((item)));

    let arreglo = Array.from(set);
    console.log(arreglo);
    console.log(arreglo[0]);
    console.log(arreglo[9]);

    set.delete("HOla");
    console.log(set);

    console.log(set.has("hola"));
    console.log(set.has(19));

    set2.clear();
    console.log(set2); 

*/



    //Video 51. Maps 

    const mapa = new Map();
    mapa.set("nombre", "Lucy");
    mapa.set("apellido", "Palacios");
    mapa.set("edad", 22);

    console.log(mapa);
    console.log(mapa.size);
    console.log(mapa.has("correo"));
    console.log(mapa.has("nombre"));
    console.log(mapa.get("nombre"));
    mapa.set("nombre", "Lucy Palacios");
    console.log(mapa.get("nombre"));
    mapa.delete("apellido");

    mapa.set(12, "doce");
    mapa.set(false, "falso");
    console.log(mapa);

    for (let [key, valor] of mapa) {
      console.log(`Llave: ${key}, Valor:${valor}`);
    }

    const mapa2 = new Map([
      ["nombre", "tip"],
      ["edad", 2],
      ["animal", "gato"],
      [null, "nullo"]
    ]);

    console.log(mapa2);

    const llavesMapa2 = [...mapa2.keys()];
    const valoresMapa2 = [...mapa2.values()];

    console.log(llavesMapa2);
    console.log(valoresMapa2); 
