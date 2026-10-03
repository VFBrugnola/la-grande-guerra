// Linee dei fronti per fase — coordinate: [lng, lat]
// Fronti: occidentale, orientale, italiano, balcanico
var FRONTS = [
  {
    "id": "occ_ago14",
    "mese": "1914-08",
    "fronte": "occidentale",
    "colore": "#c0392b",
    "label": "Avanzata tedesca — Piano Schlieffen",
    "coordinates": [
      [
        2.75,
        51.13
      ],
      [
        3.2,
        50.5
      ],
      [
        4.0,
        50.0
      ],
      [
        4.5,
        49.5
      ],
      [
        5.0,
        49.2
      ],
      [
        5.5,
        48.9
      ],
      [
        6.18,
        48.69
      ],
      [
        7.0,
        47.55
      ]
    ]
  },
  {
    "id": "occ_set14",
    "mese": "1914-09",
    "fronte": "occidentale",
    "colore": "#c0392b",
    "label": "Dopo la Marna — Arretramento tedesco",
    "coordinates": [
      [
        2.75,
        51.13
      ],
      [
        2.87,
        50.85
      ],
      [
        3.1,
        50.5
      ],
      [
        3.5,
        50.0
      ],
      [
        3.9,
        49.7
      ],
      [
        4.2,
        49.3
      ],
      [
        5.0,
        49.0
      ],
      [
        5.38,
        49.16
      ],
      [
        5.54,
        48.89
      ],
      [
        6.06,
        48.9
      ],
      [
        6.18,
        48.69
      ],
      [
        7.0,
        47.55
      ]
    ]
  },
  {
    "id": "occ_dic14",
    "mese": "1914-12",
    "fronte": "occidentale",
    "colore": "#8B0000",
    "label": "Trincee stabilizzate — Fronte immobile",
    "coordinates": [
      [
        2.75,
        51.13
      ],
      [
        2.87,
        50.85
      ],
      [
        2.88,
        50.69
      ],
      [
        2.83,
        50.43
      ],
      [
        2.77,
        50.29
      ],
      [
        2.65,
        50.0
      ],
      [
        2.93,
        49.93
      ],
      [
        3.29,
        49.85
      ],
      [
        3.62,
        49.56
      ],
      [
        4.03,
        49.26
      ],
      [
        5.38,
        49.16
      ],
      [
        5.54,
        48.89
      ],
      [
        6.06,
        48.9
      ],
      [
        6.18,
        48.69
      ],
      [
        7.0,
        47.55
      ]
    ]
  },
  {
    "id": "occ_nov16",
    "mese": "1916-11",
    "fronte": "occidentale",
    "colore": "#8B0000",
    "label": "Dopo Verdun e Somme — Leggera avanzata alleata",
    "coordinates": [
      [
        2.75,
        51.13
      ],
      [
        2.87,
        50.85
      ],
      [
        2.88,
        50.69
      ],
      [
        2.83,
        50.43
      ],
      [
        2.77,
        50.29
      ],
      [
        2.45,
        50.05
      ],
      [
        2.7,
        49.93
      ],
      [
        3.0,
        49.85
      ],
      [
        3.62,
        49.56
      ],
      [
        4.03,
        49.26
      ],
      [
        5.38,
        49.16
      ],
      [
        5.54,
        48.89
      ],
      [
        6.06,
        48.9
      ],
      [
        6.18,
        48.69
      ],
      [
        7.0,
        47.55
      ]
    ]
  },
  {
    "id": "occ_mar18",
    "mese": "1918-03",
    "fronte": "occidentale",
    "colore": "#e74c3c",
    "label": "Kaiserschlacht — Avanzata tedesca di primavera",
    "coordinates": [
      [
        2.75,
        51.13
      ],
      [
        2.87,
        50.85
      ],
      [
        2.88,
        50.69
      ],
      [
        2.83,
        50.43
      ],
      [
        2.5,
        50.3
      ],
      [
        2.2,
        50.1
      ],
      [
        2.0,
        49.9
      ],
      [
        2.5,
        49.7
      ],
      [
        3.1,
        49.6
      ],
      [
        3.62,
        49.56
      ],
      [
        4.03,
        49.26
      ],
      [
        5.38,
        49.16
      ],
      [
        5.54,
        48.89
      ],
      [
        6.06,
        48.9
      ],
      [
        6.18,
        48.69
      ],
      [
        7.0,
        47.55
      ]
    ]
  },
  {
    "id": "occ_ago18",
    "mese": "1918-08",
    "fronte": "occidentale",
    "colore": "#27ae60",
    "label": "Offensiva dei Cento Giorni — Avanzata alleata",
    "coordinates": [
      [
        2.75,
        51.13
      ],
      [
        3.5,
        50.85
      ],
      [
        4.0,
        50.69
      ],
      [
        4.5,
        50.43
      ],
      [
        4.8,
        50.1
      ],
      [
        5.0,
        49.85
      ],
      [
        5.2,
        49.56
      ],
      [
        5.5,
        49.26
      ],
      [
        5.6,
        49.16
      ],
      [
        5.7,
        48.89
      ],
      [
        6.06,
        48.9
      ],
      [
        6.18,
        48.69
      ],
      [
        7.0,
        47.55
      ]
    ]
  },
  {
    "id": "occ_nov18",
    "mese": "1918-11",
    "fronte": "occidentale",
    "colore": "#2ecc71",
    "label": "Armistizio 11 novembre 1918",
    "coordinates": [
      [
        2.75,
        51.13
      ],
      [
        3.8,
        50.85
      ],
      [
        4.5,
        50.6
      ],
      [
        5.0,
        50.3
      ],
      [
        5.3,
        49.9
      ],
      [
        5.6,
        49.56
      ],
      [
        5.9,
        49.26
      ],
      [
        6.1,
        49.16
      ],
      [
        6.3,
        48.89
      ],
      [
        6.5,
        48.7
      ],
      [
        7.0,
        47.55
      ]
    ]
  },
  {
    "id": "est_ago14",
    "mese": "1914-08",
    "fronte": "orientale",
    "colore": "#e67e22",
    "label": "Invasione russa della Prussia Orientale e Galizia",
    "coordinates": [
      [
        20.5,
        54.8
      ],
      [
        21.0,
        53.8
      ],
      [
        22.0,
        53.0
      ],
      [
        22.5,
        52.0
      ],
      [
        22.5,
        51.0
      ],
      [
        22.0,
        50.0
      ],
      [
        22.5,
        49.5
      ],
      [
        24.0,
        49.0
      ],
      [
        25.5,
        48.5
      ],
      [
        26.0,
        47.8
      ]
    ]
  },
  {
    "id": "est_dic14",
    "mese": "1914-12",
    "fronte": "orientale",
    "colore": "#e67e22",
    "label": "Dopo Tannenberg — Fronte sui confini pre-guerra",
    "coordinates": [
      [
        22.5,
        55.0
      ],
      [
        22.0,
        54.0
      ],
      [
        22.5,
        53.0
      ],
      [
        22.8,
        52.0
      ],
      [
        22.5,
        51.0
      ],
      [
        22.8,
        50.0
      ],
      [
        23.5,
        49.5
      ],
      [
        24.5,
        49.0
      ],
      [
        26.0,
        48.0
      ],
      [
        26.5,
        47.5
      ]
    ]
  },
  {
    "id": "est_set15",
    "mese": "1915-09",
    "fronte": "orientale",
    "colore": "#e67e22",
    "label": "Grande Ritirata russa — Germania avanza profondamente",
    "coordinates": [
      [
        24.0,
        57.0
      ],
      [
        24.5,
        56.0
      ],
      [
        25.0,
        55.0
      ],
      [
        25.5,
        54.0
      ],
      [
        26.0,
        53.0
      ],
      [
        26.0,
        52.0
      ],
      [
        25.5,
        51.0
      ],
      [
        25.8,
        50.0
      ],
      [
        26.5,
        49.0
      ],
      [
        27.0,
        48.0
      ],
      [
        27.5,
        47.0
      ]
    ]
  },
  {
    "id": "est_dic16",
    "mese": "1916-12",
    "fronte": "orientale",
    "colore": "#e67e22",
    "label": "Dopo Brusilov — Fronte stabilizzato",
    "coordinates": [
      [
        24.0,
        57.0
      ],
      [
        24.5,
        56.0
      ],
      [
        25.0,
        55.0
      ],
      [
        25.5,
        54.0
      ],
      [
        26.0,
        53.0
      ],
      [
        26.0,
        52.0
      ],
      [
        25.0,
        51.0
      ],
      [
        24.5,
        50.0
      ],
      [
        25.0,
        49.0
      ],
      [
        26.0,
        48.0
      ],
      [
        26.5,
        47.0
      ]
    ]
  },
  {
    "id": "est_mar18",
    "mese": "1918-03",
    "fronte": "orientale",
    "colore": "#f39c12",
    "label": "Brest-Litovsk — Russia fuori dalla guerra",
    "coordinates": [
      [
        22.5,
        57.5
      ],
      [
        23.0,
        56.5
      ],
      [
        23.5,
        55.5
      ],
      [
        24.0,
        54.5
      ],
      [
        24.5,
        53.5
      ],
      [
        25.0,
        52.5
      ],
      [
        25.0,
        51.5
      ],
      [
        25.5,
        50.5
      ],
      [
        26.0,
        49.5
      ],
      [
        27.0,
        48.5
      ],
      [
        28.0,
        47.0
      ]
    ]
  },
  {
    "id": "ita_mag15",
    "mese": "1915-05",
    "fronte": "italiano",
    "colore": "#2980b9",
    "label": "Fronte dell'Isonzo — Entrata in guerra dell'Italia",
    "coordinates": [
      [
        13.6,
        46.7
      ],
      [
        13.6,
        46.3
      ],
      [
        13.58,
        46.0
      ],
      [
        13.55,
        45.8
      ],
      [
        13.5,
        45.6
      ],
      [
        13.45,
        45.4
      ],
      [
        13.4,
        45.2
      ],
      [
        13.35,
        45.0
      ]
    ]
  },
  {
    "id": "ita_nov17",
    "mese": "1917-10",
    "fronte": "italiano",
    "colore": "#e74c3c",
    "label": "Caporetto — Ripiegamento al Piave",
    "coordinates": [
      [
        12.0,
        46.5
      ],
      [
        12.2,
        46.1
      ],
      [
        12.4,
        45.8
      ],
      [
        12.55,
        45.6
      ],
      [
        12.6,
        45.4
      ],
      [
        12.65,
        45.2
      ],
      [
        12.6,
        45.0
      ],
      [
        12.55,
        44.8
      ]
    ]
  },
  {
    "id": "ita_nov18",
    "mese": "1918-11",
    "fronte": "italiano",
    "colore": "#27ae60",
    "label": "Vittorio Veneto — Fine della guerra",
    "coordinates": [
      [
        12.8,
        46.6
      ],
      [
        13.0,
        46.2
      ],
      [
        13.2,
        45.9
      ],
      [
        13.4,
        45.6
      ],
      [
        13.5,
        45.3
      ],
      [
        13.55,
        45.0
      ]
    ]
  },
  {
    "id": "bal_dic15",
    "mese": "1915-12",
    "fronte": "balcanico",
    "colore": "#8e44ad",
    "label": "Fronte di Salonicco — Intesa attestata",
    "coordinates": [
      [
        19.5,
        41.8
      ],
      [
        20.0,
        41.4
      ],
      [
        20.8,
        41.1
      ],
      [
        21.5,
        41.2
      ],
      [
        22.0,
        41.4
      ],
      [
        22.5,
        41.3
      ],
      [
        23.0,
        41.2
      ],
      [
        23.5,
        41.3
      ],
      [
        24.0,
        41.2
      ],
      [
        24.5,
        41.1
      ],
      [
        25.0,
        41.3
      ],
      [
        26.0,
        41.1
      ]
    ]
  },
  {
    "id": "bal_dic16",
    "mese": "1916-12",
    "fronte": "balcanico",
    "colore": "#8e44ad",
    "label": "Conquista di Monastir — Leggera avanzata alleata",
    "coordinates": [
      [
        19.5,
        42.0
      ],
      [
        20.2,
        41.6
      ],
      [
        21.0,
        41.3
      ],
      [
        21.5,
        41.5
      ],
      [
        22.0,
        41.6
      ],
      [
        22.5,
        41.5
      ],
      [
        23.0,
        41.4
      ],
      [
        23.5,
        41.4
      ],
      [
        24.2,
        41.3
      ],
      [
        25.0,
        41.4
      ],
      [
        26.0,
        41.2
      ]
    ]
  },
  {
    "id": "bal_set18",
    "mese": "1918-09",
    "fronte": "balcanico",
    "colore": "#27ae60",
    "label": "Offensiva di Salonicco — Sfondamento bulgaro",
    "coordinates": [
      [
        19.5,
        42.5
      ],
      [
        20.5,
        42.2
      ],
      [
        21.5,
        42.0
      ],
      [
        22.5,
        42.1
      ],
      [
        23.5,
        42.0
      ],
      [
        24.5,
        41.8
      ],
      [
        25.5,
        41.6
      ],
      [
        26.5,
        41.5
      ]
    ]
  }
];
