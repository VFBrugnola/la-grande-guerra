// Armamenti della Prima Guerra Mondiale
var WEAPONS = [
  {
    "id": "mitragliatrice",
    "nome": "Mitragliatrice",
    "sottotipo": "MG 08 / Vickers / Hotchkiss",
    "introdotto": "1914-08",
    "introdotto_da": "Tutti gli eserciti (già in uso, massicciamente dal 1914)",
    "wiki": "Vickers_machine_gun",
    "desc": "La mitragliatrice pesante è il simbolo della guerra di trincea. Capace di sparare 400-600 colpi al minuto, rese impossibili gli attacchi frontali della fanteria. Una singola postazione poteva fermare un'intera reggimento.",
    "impatto": "Trasformò radicalmente la tattica militare. Le offensive frontali ereditate dal XIX secolo si rivelarono massacri. Impose la guerra di trincea come unica alternativa.",
    "prima_uso": "Tutte le battaglie dal 1914",
    "lat": 50.85,
    "lng": 2.87,
    "tags": [
      "trincea",
      "fanteria",
      "difesa"
    ]
  },
  {
    "id": "gas_velenosi",
    "nome": "Gas velenosi",
    "sottotipo": "Cloro, Fosgene, Iprite (gas mostarda)",
    "introdotto": "1915-04-22",
    "introdotto_da": "Germania",
    "wiki": "Yperite",
    "desc": "Il 22 aprile 1915 a Ypres i tedeschi rilasciano 168 tonnellate di cloro. Le nuvole giallo-verdi avanzano verso le trincee francesi e algerine: panico e fuga. L'iprite (1917) è ancora più letale perché penetra nell'abbigliamento.",
    "impatto": "Causò 1,3 milioni di vittime da gas (90.000 morti). Portò allo sviluppo della maschera antigas e fu vietato dalla Convenzione di Ginevra del 1925.",
    "prima_uso": "Seconda battaglia di Ypres, 22 aprile 1915",
    "lat": 50.85,
    "lng": 2.87,
    "tags": [
      "gas",
      "chimica",
      "trincea",
      "ypres"
    ]
  },
  {
    "id": "carro_armato",
    "nome": "Carro armato",
    "sottotipo": "Mark I britannico",
    "introdotto": "1916-09-15",
    "introdotto_da": "Gran Bretagna",
    "wiki": "Mark_I_tank",
    "desc": "Il 15 settembre 1916 49 carri Mark I britannici avanzano sulla Somme. Lenti (6 km/h), meccanicamente inaffidabili, soffocanti all'interno, rivoluzionano comunque la tattica. A Cambrai (1917) 476 carri sfondano per la prima volta le linee.",
    "impatto": "Spezzò lo stallo della trincea. Divenne l'arma simbolo della guerra moderna, sviluppata massicciamente nel secondo conflitto mondiale.",
    "prima_uso": "Battaglia della Somme, 15 settembre 1916",
    "lat": 50.0,
    "lng": 2.65,
    "tags": [
      "meccanizzazione",
      "sfondamento",
      "somme"
    ]
  },
  {
    "id": "sommergibile",
    "nome": "Sommergibile (U-Boot)",
    "sottotipo": "U-Boot Tipo U-31",
    "introdotto": "1914-09",
    "introdotto_da": "Germania",
    "wiki": "U-boat",
    "desc": "Gli U-Boot tedeschi condussero due campagne di guerra sottomarina illimitata (1915 e 1917). Affondarono 11 milioni di tonnellate di naviglio alleato. Il Lusitania (1915, 1.198 morti) fu il caso più noto. I convogli alleati e i nuovi cacciatorpediniere li contenevano.",
    "impatto": "Quasi portò alla resa britannica per fame (1917). La ripresa della guerra senza restrizioni fu il fattore principale che trascinò gli USA nel conflitto.",
    "prima_uso": "Settembre 1914 — primo silurante di un incrociatore britannico",
    "lat": 53.0,
    "lng": -20.0,
    "tags": [
      "marina",
      "blocco",
      "atlantico",
      "usa"
    ]
  },
  {
    "id": "aereo",
    "nome": "Aeroplano da guerra",
    "sottotipo": "Fokker Eindecker / Nieuport / Sopwith Camel",
    "introdotto": "1914-08",
    "introdotto_da": "Tutti gli eserciti",
    "wiki": "Fokker_Eindecker",
    "desc": "All'inizio usato solo per ricognizione, l'aereo diventa arma nel 1915 con il sincronizzatore di Fokker che permette di sparare attraverso l'elica. I duelli aerei creano i miti degli «assi» (Manfred von Richthofen, il Barone Rosso). Verso il 1918 i bombardieri colpiscono le città.",
    "impatto": "Fondò l'aviazione militare moderna. Ricognizione, caccia, bombardamento diventano ruoli distinti. Il controllo del cielo si rivela decisivo.",
    "prima_uso": "Agosto 1914 (ricognizione), 1915 (combattimento)",
    "lat": 49.44,
    "lng": 2.08,
    "tags": [
      "aviazione",
      "caccia",
      "ricognizione"
    ]
  },
  {
    "id": "artiglieria_pesante",
    "nome": "Artiglieria pesante",
    "sottotipo": "Obice 420mm (Big Bertha) / 75mm francese",
    "introdotto": "1914-08",
    "introdotto_da": "Germania (obici pesanti) / Francia (75mm campale)",
    "wiki": "Big_Bertha_(howitzer)",
    "desc": "L'artiglieria causa il 60% delle perdite della Grande Guerra. I «Big Bertha» tedeschi distruggono i forti belgi a Liegi. Il 75mm francese è il cannone campale più preciso. A Verdun vengono sparati 40 milioni di proiettili in 10 mesi.",
    "impatto": "Trasformò il paesaggio. I bombardamenti preliminari avvertivano il nemico dell'attacco imminente e uccidevano i soldati nelle trincee ma non distruggevano i bunker più profondi.",
    "prima_uso": "Agosto 1914 — assedio di Liegi",
    "lat": 50.63,
    "lng": 5.57,
    "tags": [
      "artiglieria",
      "bombardamento",
      "trincea"
    ]
  },
  {
    "id": "lanciafiamme",
    "nome": "Lanciafiamme",
    "sottotipo": "Kleinflammenwerfer tedesco",
    "introdotto": "1915-07-30",
    "introdotto_da": "Germania",
    "wiki": "Flamethrower",
    "desc": "Usato per la prima volta a Hooge (Belgio) il 30 luglio 1915. Un getto di liquido infiammato poteva raggiungere 18 metri. Terrificante psicologicamente, fu impiegato in attacchi su trincee ravvicinate.",
    "impatto": "Arma psicologica oltre che letale. Limitata autonomia e pericolosa per chi la usava. Sopravvissuta fino alla seconda guerra mondiale.",
    "prima_uso": "Hooge, Belgio, 30 luglio 1915",
    "lat": 50.86,
    "lng": 2.94,
    "tags": [
      "assalto",
      "trincea",
      "psicologico"
    ]
  },
  {
    "id": "filo_spinato",
    "nome": "Filo spinato e sistema trincea",
    "sottotipo": "Rete difensiva a più linee",
    "introdotto": "1914-12",
    "introdotto_da": "Tutti gli eserciti",
    "wiki": "Barbed_wire",
    "desc": "Il sistema trincea si sviluppa tra novembre e dicembre 1914 sul fronte occidentale. Trincee di prima linea, di supporto e di riserva collegate da camminamenti. Davanti: chilometri di filo spinato. Tra i fronti: la terra di nessuno.",
    "impatto": "Rese impossibili le offensive senza un costo enorme in vite umane. Il sistema si estese per 700 km dal Mare del Nord alla Svizzera.",
    "prima_uso": "Novembre-dicembre 1914 — fronte occidentale",
    "lat": 49.5,
    "lng": 3.0,
    "tags": [
      "difesa",
      "trincea",
      "immobilismo"
    ]
  },
  {
    "id": "granata_a_mano",
    "nome": "Granata a mano",
    "sottotipo": "Stielhandgranate tedesca / Mills Bomb britannica",
    "introdotto": "1915-01",
    "introdotto_da": "Germania / Gran Bretagna",
    "wiki": "Mills_bomb",
    "desc": "La guerra di trincea richiede armi per combattere a distanza ravvicinata. La Stielhandgranate tedesca (Kartoffelstampfer, pestello) e la Mills Bomb britannica diventano l'arma del soldato nelle trincee. Ogni offensiva inizia con una granata.",
    "impatto": "Trasformò il combattimento ravvicinato. La granata diventa arma standard per ogni soldato, ancora in uso oggi.",
    "prima_uso": "1915 su tutti i fronti",
    "lat": 50.0,
    "lng": 3.0,
    "tags": [
      "fanteria",
      "trincea",
      "combattimento_ravvicinato"
    ]
  },
  {
    "id": "corazzate",
    "nome": "Corazzate e incrociatori da battaglia",
    "sottotipo": "HMS Dreadnought / SMS Scharnhorst",
    "introdotto": "1914-08",
    "introdotto_da": "Gran Bretagna / Germania",
    "wiki": "HMS_Dreadnought_(1906)",
    "desc": "La corsa agli armamenti navali tra Gran Bretagna e Germania (1906-1914) aveva costruito enormi flotte. La battaglia dello Jutland (31 maggio 1916) fu il maggiore scontro navale della storia: 250 navi, 100.000 uomini, 8.000 morti. Nessuno vinse davvero.",
    "impatto": "Le grandi flotte si rivelarono troppo preziose per rischiare. Il dominio del mare rimase britannico, il che garantì il blocco alla Germania.",
    "prima_uso": "Agosto 1914 — guerra navale immediata",
    "lat": 56.9,
    "lng": 5.5,
    "tags": [
      "marina",
      "jutland",
      "blocco"
    ]
  },
  {
    "id": "mine_navali",
    "nome": "Mine navali",
    "sottotipo": "Mina di contatto / Mina magnetica",
    "introdotto": "1914-08",
    "introdotto_da": "Tutti gli eserciti navali",
    "wiki": "Naval_mine",
    "desc": "Milioni di mine furono posate nel Mare del Nord, nel Canale della Manica, nel Baltico e nel Mediterraneo. Crearono barriere quasi invalicabili. La «Grande Barriera del Nord» (USA-Gran Bretagna) nel 1918 tentò di bloccare l'uscita degli U-Boot.",
    "impatto": "Limitò i movimenti navali e fece molte vittime tra sommergibili e navi mercantili. Alcune mine rimasero pericolose per decenni.",
    "prima_uso": "Agosto-settembre 1914",
    "lat": 55.0,
    "lng": 5.0,
    "tags": [
      "marina",
      "blocco",
      "difesa"
    ]
  },
  {
    "id": "siluro",
    "nome": "Siluro",
    "sottotipo": "G7a / G7e (tedeschi) / Mark IV (britannico)",
    "introdotto": "1914-09",
    "introdotto_da": "Germania / Gran Bretagna",
    "wiki": "Torpedo#World_War_I",
    "desc": "Il siluro lanciato da sottomarini diventa l'arma navale più temuta. Affonda il Lusitania (1915), dozzine di corazzate e migliaia di navi mercantili. La Germania affonda 5.000 navi alleate con i siluri degli U-Boot.",
    "impatto": "Rivoluzionò la guerra navale. Rese vulnerabili anche le più grandi navi da guerra. La minaccia dei siluri cambiò le rotte e le tattiche navali.",
    "prima_uso": "Settembre 1914",
    "lat": 50.0,
    "lng": -5.0,
    "tags": [
      "marina",
      "sommergibile",
      "atlantico"
    ]
  }
];
