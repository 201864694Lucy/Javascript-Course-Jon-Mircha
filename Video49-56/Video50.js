

    //Video 50. Sets 

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

