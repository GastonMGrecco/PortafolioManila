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
  let contador = document.getElementById("#contador");
  let sumaTotal = document.querySelector("h5");
  let precio= document.querySelector("p");
  let articulo= document.querySelector("article");
  
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
  
section.addEventListener( "click", event =>{
      
      if( event.target.id === "agregar" ){
          contador++;
          span.textContent=contador;    
          
          }
          else if(event.target.id === "quitar" ){
            contador--;
            span.textContent= contador;
          }  if (contador < 0) {
                contador = 0;
                span.textContent= contador;
                }
  
                
      })
  function agregarCarrito(producto) {
  
      carritoDeCompra.push( producto )
      console.log( carritoDeCompra )
      contador.textContent = carritoDeCompra.length
      calcularTotal()
  
  }
  
  function calcularTotal( ){
      let total = carritoDeCompra.reduce( ( acumulador, current )=> acumulador + current.price, 0 )
  
      sumaTotal.textContent = `Total: $ ${ total }`
    
    }
    function quitarCarrito(producto){
        
        
     };
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
            for(let i=0;i<carritoDeCompra.length;i++){
                if(carritoDeCompra[i].title==contenido){
                    carritoDeCompra.splice(i,1);
                }
                
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
                    <p>${ productoCar.price }</p>
                    <button id="quitar2">Quitar</button>
                </div>`
               })
        articulo.innerHTML = fragmentoHTML;
    }
  