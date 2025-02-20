const productos = [
    { nombre: "Manzana", precio: 2 },
    { nombre: "Naranja", precio: 3 },
    { nombre: "Plátano", precio: 1 }
  ];
  
  let dineroUsuario = 10;
  
  function comprarProducto() {
    const productoElegido = prompt("¿Qué producto quieres comprar? (Manzana/Naranja/Plátano)");
    const producto = productos.find(p => p.nombre.toLowerCase() === productoElegido.toLowerCase());
  
    if (producto) {
      if (dineroUsuario >= producto.precio) {
        dineroUsuario -= producto.precio;
        alert(`Has comprado una ${producto.nombre}. Te quedan ${dineroUsuario} unidades de dinero.`);
      } else {
        alert("No tienes suficiente dinero para comprar este producto.");
      }
    } else {
      alert("Producto no disponible.");
    }
  }
  
  function verProductos() {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
      mensaje += `${productos[i].nombre} - ${productos[i].precio} unidades de dinero\n`;
    }
    alert(mensaje);
  }
  

  function ejecutarSimulador() {
    let continuar = true;
  
    while (continuar) {
      const opcion = prompt("Bienvenido a la tienda! \n1. Comprar producto\n2. Ver productos disponibles\n3. Salir");
  
      switch (opcion) {
        case "1":
          comprarProducto();
          break;
        case "2":
          verProductos();
          break;
        case "3":
          continuar = false;
          alert("Gracias por visitar la tienda. ¡Hasta luego!");
          break;
        default:
          alert("Opción no válida. Por favor, elige 1, 2 o 3.");
      }
    }
  }
  
  ejecutarSimulador();
  