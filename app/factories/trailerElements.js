app.factory('trailerElements', function ($firebaseArray) {
  var ref = firebase.database().ref();
  // download the data into a local object
  var data = $firebaseArray(ref);
  return data;
  /*
  return [{
    "nombre":"Dracula",
    "genero":["terror","acción"],
    "video":"T5aNouC0E6Y",
    "caratula":"http://www.dvdcustoms.es/Caratula_31_____00000_DRATULA_UNTOLD.jpg",
    "anio": 2014,
    "sinopsis":"En la Edad Media, Vlad el Empalador es el príncipe de Valaquia y Transilvania. Cuando era niño, fue príncipe rehén del Imperio Otomano y fue entrenado para ser un soldado de elite en el cuerpo de jenízaros del Sultán. Allí se convirtió en el guerrero más temido, y fue apodado el Empalador, después de empalar a miles en lanzas. Finalmente enfermo por sus actos, dejó de lado su pasado y volvió a gobernar sus dominios en paz.",
    "autor":"Gary Shore"
  },
  {
    "nombre":"TED",
    "genero":["terror","acción"],
    "video":"xECjE4gR5Ow",
    "caratula":"http://www.dvdcustoms.es/Caratula_31_____00000_DRATULA_UNTOLD.jpg",
    "anio": 2013,
    "sinopsis":"En la Edad Media, Vlad el Empalador es el príncipe de Valaquia y Transilvania. Cuando era niño, fue príncipe rehén del Imperio Otomano y fue entrenado para ser un soldado de elite en el cuerpo de jenízaros del Sultán. Allí se convirtió en el guerrero más temido, y fue apodado el Empalador, después de empalar a miles en lanzas. Finalmente enfermo por sus actos, dejó de lado su pasado y volvió a gobernar sus dominios en paz.",
    "autor":"Gary Shore"
  },
    {
    "nombre":"TED",
    "genero":["terror","acción"],
    "video":"T5aNouC0E6Y",
    "caratula":"http://www.dvdcustoms.es/Caratula_31_____00000_DRATULA_UNTOLD.jpg",
    "anio": 2013,
    "sinopsis":"En la Edad Media, Vlad el Empalador es el príncipe de Valaquia y Transilvania. Cuando era niño, fue príncipe rehén del Imperio Otomano y fue entrenado para ser un soldado de elite en el cuerpo de jenízaros del Sultán. Allí se convirtió en el guerrero más temido, y fue apodado el Empalador, después de empalar a miles en lanzas. Finalmente enfermo por sus actos, dejó de lado su pasado y volvió a gobernar sus dominios en paz.",
    "autor":"Gary Shore"
  },
    {
    "nombre":"TED",
    "genero":["terror","acción"],
    "video":"T5aNouC0E6Y",
    "caratula":"http://www.dvdcustoms.es/Caratula_31_____00000_DRATULA_UNTOLD.jpg",
    "anio": 2013,
    "sinopsis":"En la Edad Media, Vlad el Empalador es el príncipe de Valaquia y Transilvania. Cuando era niño, fue príncipe rehén del Imperio Otomano y fue entrenado para ser un soldado de elite en el cuerpo de jenízaros del Sultán. Allí se convirtió en el guerrero más temido, y fue apodado el Empalador, después de empalar a miles en lanzas. Finalmente enfermo por sus actos, dejó de lado su pasado y volvió a gobernar sus dominios en paz.",
    "autor":"Gary Shore"
  }

  ];*/

});