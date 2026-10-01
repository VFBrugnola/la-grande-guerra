// Movimenti delle truppe — frecce statiche
var MOVEMENTS = [
  {
    "id": "schlieffen_nord",
    "nome": "1ª e 2ª Armata tedesca — Ala destra",
    "mese": "1914-08",
    "colore": "#c0392b",
    "fronte": "occidentale",
    "desc": "L'ala destra del Piano Schlieffen entra in Belgio il 4 agosto e punta verso Parigi passando per la Francia settentrionale.",
    "frecce": [
      {
        "da": [
          6.1,
          51.5
        ],
        "a": [
          4.35,
          50.85
        ],
        "label": "Invasione Belgio"
      },
      {
        "da": [
          4.35,
          50.85
        ],
        "a": [
          2.9,
          50.4
        ],
        "label": "Avanzata in Francia"
      },
      {
        "da": [
          2.9,
          50.4
        ],
        "a": [
          2.4,
          49.2
        ],
        "label": "Verso Parigi"
      }
    ]
  },
  {
    "id": "marna_controffensiva",
    "nome": "Controffensiva della Marna",
    "mese": "1914-09",
    "colore": "#2980b9",
    "fronte": "occidentale",
    "desc": "Joffre lancia la controffensiva il 5 settembre. Sfrutta una lacuna tra la 1ª e 2ª Armata tedesca.",
    "frecce": [
      {
        "da": [
          2.65,
          48.85
        ],
        "a": [
          3.5,
          49.1
        ],
        "label": "6ª Armata francese"
      },
      {
        "da": [
          3.1,
          48.9
        ],
        "a": [
          3.5,
          49.2
        ],
        "label": "5ª Armata e BEF"
      }
    ]
  },
  {
    "id": "brusilov_offensiva",
    "nome": "Offensiva Brusilov",
    "mese": "1916-06",
    "colore": "#2980b9",
    "fronte": "orientale",
    "desc": "L'offensiva di Brusilov attacca su un fronte di 500 km con tattiche innovative. Maggiore successo russo della guerra.",
    "frecce": [
      {
        "da": [
          26.0,
          51.0
        ],
        "a": [
          24.0,
          50.5
        ],
        "label": "Fronte Nord"
      },
      {
        "da": [
          26.0,
          49.5
        ],
        "a": [
          24.5,
          49.0
        ],
        "label": "Fronte Centro"
      },
      {
        "da": [
          26.5,
          48.5
        ],
        "a": [
          25.0,
          48.0
        ],
        "label": "Fronte Sud"
      }
    ]
  },
  {
    "id": "caporetto_sfondamento",
    "nome": "Sfondamento di Caporetto",
    "mese": "1917-10",
    "colore": "#c0392b",
    "fronte": "italiano",
    "desc": "Le truppe austro-tedesche sfondano a Caporetto e avanzano di 150 km in 10 giorni.",
    "frecce": [
      {
        "da": [
          13.59,
          46.23
        ],
        "a": [
          12.55,
          45.7
        ],
        "label": "Sfondamento principale"
      },
      {
        "da": [
          13.3,
          46.0
        ],
        "a": [
          12.3,
          45.5
        ],
        "label": "Avanzata verso Piave"
      }
    ]
  },
  {
    "id": "kaiserschlacht",
    "nome": "Offensiva di primavera — Kaiserschlacht",
    "mese": "1918-03",
    "colore": "#c0392b",
    "fronte": "occidentale",
    "desc": "La più grande offensiva tedesca della guerra. Le Stosstruppen sfondano il fronte britannico.",
    "frecce": [
      {
        "da": [
          3.3,
          49.9
        ],
        "a": [
          2.2,
          50.0
        ],
        "label": "Operazione Michael"
      },
      {
        "da": [
          2.88,
          50.85
        ],
        "a": [
          2.3,
          50.6
        ],
        "label": "Operazione Georgette"
      }
    ]
  },
  {
    "id": "rivolta_araba",
    "nome": "Rivolta araba — Lawrence d'Arabia",
    "mese": "1916-06",
    "colore": "#f39c12",
    "fronte": "medio_oriente",
    "desc": "La rivolta araba guidata da Lawrence colpisce le linee ferroviarie ottomane verso nord.",
    "frecce": [
      {
        "da": [
          37.28,
          24.47
        ],
        "a": [
          36.0,
          27.0
        ],
        "label": "Da Mecca verso nord"
      },
      {
        "da": [
          36.5,
          29.0
        ],
        "a": [
          36.1,
          32.5
        ],
        "label": "Verso Aqaba e Damasco"
      }
    ]
  },
  {
    "id": "cento_giorni",
    "nome": "Offensiva dei Cento Giorni",
    "mese": "1918-08",
    "colore": "#27ae60",
    "fronte": "occidentale",
    "desc": "La grande controffensiva alleata che porta alla vittoria. Amiens è il 'giorno nero' tedesco.",
    "frecce": [
      {
        "da": [
          2.3,
          49.88
        ],
        "a": [
          3.8,
          49.8
        ],
        "label": "Amiens → est"
      },
      {
        "da": [
          3.0,
          50.3
        ],
        "a": [
          4.5,
          50.2
        ],
        "label": "Fiandre"
      },
      {
        "da": [
          4.5,
          49.6
        ],
        "a": [
          5.5,
          49.5
        ],
        "label": "Argonne"
      }
    ]
  }
];
