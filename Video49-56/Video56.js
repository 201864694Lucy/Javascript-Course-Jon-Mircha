
  
    //Video 56. Propiedades Dinámicas
    let aleatorio = Math.round(Math.random() * 100 + 5);
    const objectUsuarios = {
      propiedad: "Valor",
      [`id_${aleatorio}`]: "Valor Aleatorio"
    };
    console.log(objectUsuarios);

    const usuarios = ["Lucy", "Dani", "Ale", "Toña"];
    usuarios.forEach((usuario, index) => objectUsuarios[`id_${index}`] = usuario);

    console.log(objectUsuarios);
