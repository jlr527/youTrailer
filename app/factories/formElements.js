app.factory('formElements', function () {
  return {
    "header": {
        "menu": {
            "logo": "YouTrailer",
            "options": [{
                "name": "Insertar Trailer",
                "link": "#insertar"
            }]
        },
        "sideDeploy": false
    },
    "body": {
        "banner": "src",
        "carousel": {
            "images": [{
                "url": "http://www.yaske.cc/upload/images/6ae64e89d876e43a401860c90bae80a4.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/6ae64e89d876e43a401860c90bae80a4.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/6ae64e89d876e43a401860c90bae80a4.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/6ae64e89d876e43a401860c90bae80a4.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/6ae64e89d876e43a401860c90bae80a4.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/63c4b1a09c514d53b1f14fafc0f180dc.gif"
            }, {
                "url": "http://www.yaske.cc/upload/images/70bf7338a5f1fc2270f400c29148db03.gif"
            }, {
                "url": "http://www.yaske.cc/upload/images/8e2a9e414f714a370781eda1a3289b99.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/6696229a71e5334d1c55da31ce56d016.gif"
            }, {
                "url": "http://www.yaske.cc/upload/images/f4765ca8464c1d72e7e80a5a88606313.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/098e8e6e9472ce788de260aa7c4526f9.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/09ee9ab46d27aae3184059ad60856f01.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/10167d4a500bcd18f7d31cd49c507af7.gif"
            }, {
                "url": "http://www.yaske.cc/upload/images/bfe48a8fb79cac811604289141c75583.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/10167d4a500bcd18f7d31cd49c507af7.gif"
            }, {
                "url": "http://www.yaske.cc/upload/images/8e2a9e414f714a370781eda1a3289b99.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/7fe7b7e258143ff5f2e4aa43acb0b9b2.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/aa3f14bf0bedc4e5ef6cb008b33e3a2b.jpg"
            }, {
                "url": "http://www.yaske.cc/upload/images/098e8e6e9472ce788de260aa7c4526f9.jpg"
            }]

        },
        "form": {
            "title": "Ingresar Trailer nuevo",
            "deploy": true,
            "extructure": {
                "inputs": [{
                    "model": "",
                    "type": "text",
                    "label": "Título o nombre",
                    "attr": {
                        "id": "nombre",
                        "class": "validate"
                    },
                    "icon": "grade"
                }, {
                    "model": "",
                    "type": "text",
                    "label": "Id video youtube",
                    "attr": {
                        "id": "video",
                        "class": "validate"
                    },
                    "icon": "theaters"
                }, {
                    "model": "",
                    "type": "url",
                    "label": "Carátula URL",
                    "attr": {
                        "id": "caratula",
                        "class": "validate"
                    },
                    "icon": "perm_media"
                }, {
                    "model": "",
                    "type": "text",
                    "label": "autor",
                    "attr": {
                        "id": "autor",
                        "class": "validate"
                    },
                    "icon": "assignment_ind"
                }],
                "textArea": [{
                    "model": "",
                    "label": "Sinopsis",
                    "attr": {
                        "id": "sinopsis",
                        "class": "materialize-textarea"
                    },
                    "icon": "comment"
                }],
                "selects": [{
                    "model": "2016",
                    "placeholder": "",
                    "attr": {
                        "id": "anio",
                        "class": "material-select"
                    },
                    "icon": "av_timer",
                    "options": [{
                        "key": "2016",
                        "value": "2016"
                    }, {
                        "key": "2015",
                        "value": "2015"
                    }, {
                        "key": "2014",
                        "value": "2014"
                    }, {
                        "key": "2013",
                        "value": "2013"
                    }, {
                        "key": "2012",
                        "value": "2012"
                    }, {
                        "key": "2011",
                        "value": "2011"
                    }, {
                        "key": "2010",
                        "value": "2010"
                    }, {
                        "key": "2009",
                        "value": "2009"
                    }, {
                        "key": "2008",
                        "value": "2008"
                    }, {
                        "key": "2007",
                        "value": "2007"
                    }, {
                        "key": "2006",
                        "value": "2006"
                    }, {
                        "key": "2005",
                        "value": "2005"
                    }, {
                        "key": "2004",
                        "value": "2004"
                    }, {
                        "key": "2003",
                        "value": "2003"
                    }, {
                        "key": "2002",
                        "value": "2002"
                    }, {
                        "key": "2001",
                        "value": "2001"
                    }, {
                        "key": "2000",
                        "value": "2000"
                    }]
                }],
                "selectsMulti": [{
                    "model": ["Aventura"],
                    "placeholder": "",
                    "attr": {
                        "id": "genero",
                        "class": "material-select"
                    },
                    "icon": "turned_in_not",
                    "options": [{
                        "key": "Drama",
                        "value": "Drama"
                    }, {
                        "key": "Romance",
                        "value": "Romance"
                    }, {
                        "key": "Comedias",
                        "value": "Comedias"
                    }, {
                        "key": "Crimen",
                        "value": "Crimen"
                    }, {
                        "key": "Thrillers",
                        "value": "Thrillers"
                    }, {
                        "key": "Accion",
                        "value": "Accion"
                    }, {
                        "key": "Guerra",
                        "value": "Guerra"
                    }, {
                        "key": "Aventura",
                        "value": "Aventura"
                    }, {
                        "key": "Misterio",
                        "value": "Misterio"
                    }, {
                        "key": "Familiar",
                        "value": "Familiar"
                    }, {
                        "key": "Historica",
                        "value": "Historica"
                    }, {
                        "key": "Musicales",
                        "value": "Musicales"
                    }, {
                        "key": "Biografias",
                        "value": "Biografias"
                    }, {
                        "key": "Fantasia",
                        "value": "Fantasia"
                    }, {
                        "key": "Musica",
                        "value": "Musica"
                    }, {
                        "key": "Westerns",
                        "value": "Westerns"
                    }, {
                        "key": "Terror",
                        "value": "Terror"
                    }, {
                        "key": "ciencia Ficcion",
                        "value": "ciencia Ficcion"
                    }, {
                        "key": "Deporte",
                        "value": "Deporte"
                    }, {
                        "key": "Cine negro",
                        "value": "Cine negro"
                    }, {
                        "key": "Animacion",
                        "value": "Musica"
                    }, {
                        "key": "Adultos",
                        "value": "Adultos"
                    }, {
                        "key": "Noticia",
                        "value": "Noticia"
                    }, {
                        "key": "Reality-TV",
                        "value": "Reality-TV"
                    }, {
                        "key": "Espectaculos",
                        "value": "Espectaculos"
                    }, {
                        "key": "Animes",
                        "value": "Animes"
                    }, {
                        "key": "Series",
                        "value": "Series"
                    }]
                }],
                "actions": [{
                    "name": "Insertar",
                    "type": "submit",
                    "attr": {
                        "id": "insertar",
                        "style": "",
                        "class": "col s6 right btn waves-effect waves-light"
                    },
                    "icon": "send"
                }]
            }
        }
    },

    "footer": {
        "made": {
            "name": "Julian Rivera",
            "link": "www.julianrivea.com"
        },
        "column1": {
            "title": "Youtrailer",
            "description": "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        },
        "column2": {
            "title": "Aliados",
            "description": [{
                "name": "youtube",
                "link": "youtube.com"
            }]
        },
        "column3": {
            "title": "Exitos",
            "description": [{
                "name": "youtube",
                "link": "youtube.com"
            }]
        }
    }
};

});



