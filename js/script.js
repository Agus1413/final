var peticion = new XMLHttpRequest ()
peticion.open("GET","./productos.json", true);

peticion.addEventListener ("readystatechange", function (){
    if (this.readyState == 4 && this.status == 200){
        //console.log (this.responseText);
      var productos = JSON.parse (this.responseText);
        //console.log (productos);

        productos.forEach(productos => {
            console.log (productos);
            var nombre= productos.nombre
            var link= document.createElement;
            link.setAttribute ("href","#")
            link.innerText= productos.nombre

            document.querySelector= (.productos).appendchild(link)
            
        });
    }
})

peticion.send () ;