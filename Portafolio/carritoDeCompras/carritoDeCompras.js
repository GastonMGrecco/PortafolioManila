const listaProductos = [
    {
      precio: 20,
      title: "Helado",
      imgURL: "./recursos/helado.jpeg",
    },
    {
      precio: 15,
      title: "Chocolate",
      imgURL: "./recursos/chocolate.jpeg",
    },
    {
      precio: 150,
      title: "Pizza",
      imgURL: "./recursos/pizza.jpeg",
    },
    {
      precio: 75,
      title: "Yogurth",
      imgURL: "./recursos/yogurt.jpeg",
    },
    {
      precio: 35,
      title: "Caramelos",
      imgURL: "./recursos/dulce.jpeg",
    },
    {
      precio: 100,
      title: "Vino",
      imgURL: "./recursos/vino.jpeg",
    },
    {
      precio: 750,
      title: "Caja de dulces",
      imgURL: "./recursos/cajacholocate.jpeg",
    },
    {
      precio: 40,
      title: "Pan integral",
      imgURL: "./recursos/panintegral.jpeg",
    },
    {
      precio: 200,
      title: "Pastel",
      imgURL: "./recursos/pastel.jpeg",
    },
  ];

  let span= document.querySelector("span");
  let section = document.querySelector("section");
  let carritoDeCompra = [];
  let contador = document.getElementById("contador");
  let sumaTotal = document.querySelector("h5");
  let precio= document.querySelector("p");
  let articulo= document.querySelector("article");
  let botoncarrito= document.getElementById("botoncarrito");
  let carrito= document.getElementById("carrito");
  
  document.addEventListener("DOMContentLoaded", () =>{
      mostrarProductos();
    
  })
  
  function mostrarProductos(){
      let fragmentoHTML = ""
      
      listaProductos.map( producto =>{
          fragmentoHTML += `
              <div class="card">
                  <img class="imgProd" src=${ producto.imgURL } alt="">
                  <h3>${ producto.title }</h3>
                  <p>${ producto.precio }</p>
                  <button id="agregar">Agregar</button>
                  <button id="quitar">Quitar</button>
              </div>`
             })
      section.innerHTML = fragmentoHTML
  }
  

  function agregarCarrito(producto) {
  
      carritoDeCompra.push( producto )
      console.log( carritoDeCompra )
      
      calcularTotal()
  
  }
  
  function calcularTotal( ){
      let total = carritoDeCompra.reduce( ( acumulador, current )=> acumulador + current.price, 0 )
  
      sumaTotal.textContent = `Total: $ ${ total }`
    
    }
 
    section.addEventListener( "click", event =>{
    
        if( event.target.id === "agregar" ){
            const producto = event.target.parentElement;
    
            let productoObjeto = {
                title : producto.querySelector("h3").textContent,
                price: parseInt( producto.querySelector("p").textContent ),
                
            }
    
            agregarCarrito(productoObjeto)
        }
        else if( event.target.id === "quitar" ){
            let pariente=event.target.parentElement;
            let etiqueta=pariente.querySelector("h3");
            let contenido=etiqueta.innerHTML;

            let palabra=carritoDeCompra.find(element=>{return element.title===contenido});
            console.log(palabra);
            let indice=carritoDeCompra.indexOf(palabra)
            console.log(indice)
            if(indice!=-1){
              carritoDeCompra.splice(indice,1);
            } 
                   
                
                
            
            console.log(carritoDeCompra);
            calcularTotal(); 
            
        }
        mostrarCarrito();
    });

    function mostrarCarrito(){
        let fragmentoHTML = ""
        
        carritoDeCompra.map( productoCar =>{
            fragmentoHTML += `
                <div class="cardCarrito">
                    <h3>${ productoCar.title }</h3>
                    <button id="quitar2">Quitar</button>
                </div>`
               })
        articulo.innerHTML = fragmentoHTML;
    }


    section.addEventListener( "click", event =>{
      
      if( event.target.id === "agregar" ){
         
          contador.textContent=carritoDeCompra.length;    
          
          }
          else if(event.target.id === "quitar" ){
           
            contador.textContent= carritoDeCompra.length;
          
          }      
      });

   let contadorclick=0;
  botoncarrito.addEventListener("click",(evento)=>{
    contadorclick++;
    
    if(contadorclick%2!==0){
      carrito.setAttribute("style", "visibility:visible;");
    }
    else{
      carrito.setAttribute("style", "visibility:hidden;");
    }
   
    console.log(contadorclick);
  })

  carrito.addEventListener("click",(evento)=>{
    if(evento.target.id === "quitar2"){

      let pariente=evento.target.parentElement;
      let etiqueta=pariente.querySelector("h3");
      let contenido=etiqueta.innerHTML;

      let palabra=carritoDeCompra.find(element=>{return element.title===contenido});
      console.log(palabra);
      let indice=carritoDeCompra.indexOf(palabra)
      console.log(indice)
              carritoDeCompra.splice(indice,1);
          
                
              contador.textContent=carritoDeCompra.length;
            console.log(carritoDeCompra);
            calcularTotal(); 
            
        }
        mostrarCarrito();
    });