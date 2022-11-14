var peticion = new XMLHttpRequest();
peticion.open("GET", "./productos.json", true);
var total = 0;
var contador = 0;

peticion.addEventListener("readystatechange", function () {
    if (this.readyState == 4 && this.status == 200) {
        var productos = JSON.parse(this.responseText);
       console.log(productos);
        var total = 0;
        var contador = 0;
    }

    productos.forEach(p => {
        var casillas = document.createElement("div");
        div.appendChild(casillas)
        var link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerText = p.nombre;
        var imagen = document.createElement("img");
        imagen.setAttribute("alt", "imagen producto");
        imagen.setAttribute("src", p.url_foto)
        var descripcion = document.createElement("p");
        descripcion.innerText = p.descripcion
        var precio = document.createElement ("p");
        precio.innerText = p.precio;
        casiilas.appendChild(link);
        casillas.appendChild(imagen);
        casillas.appendChild(descripcion);
        casillas.appendChild(precio);

        link.addEventListener("click", function() {
            contador = contador + 1; 
            var lugardelcontador = document.querySelector ("#contador");
            lugardelcontador.innerText=contador

        });

        link.addEventListener("click", function () {
            console.log(p.nombre, p.precio);
            total = total + p.precio
            console.log ("total: ",total);

            //crear fila
            var fila = document.createElement("th")
            var tdNombre = document.createElement("td")
            tdNombre.innerText = p.nombre;
            var tdPrecio = document.createElement("td")
            tdPrecio.innerText = p.precio;
            fila.appendChild(tdNombre);
            fila.appendChild(tdPrecio)

            var tdBorrar = document.createElement("th");
            var linkBorrar = document.createElement("a");
            linkBorrar.setAttribute("href","#");
            linkBorrar.innerText = "X"
            thBorrar.appendChild(linkBorrar);
            fila.appendChild(thBorrar);

    });
    document.querySelector("body").appendChild(fila)
    document.querySelector(".productos").appendChild(link);