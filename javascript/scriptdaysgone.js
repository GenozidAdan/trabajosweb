var imagenes = [
    "../../img/img_daysgone/uno.gif",
    "../../img/img_daysgone/dos.gif",
    "../../img/img_daysgone/tres.gif",
    "../../img/img_daysgone/cuatro.gif",
    "../../img/img_daysgone/cinco.gif",
  ];

  var indiceActual = 0;

  function cambiarImagenSiguiente() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    cambiarImagen(indiceActual);
  }

  function cambiarImagenAnterior() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    cambiarImagen(indiceActual);
  }

  function cambiarImagen(indice) {
    var imagen = document.getElementById("imagenCambiante");
    imagen.src = imagenes[indice];
  }