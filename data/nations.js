// Nazioni con schieramento e descrizioni per anno
// schieramento cambia per anno: intesa | imp_centrali | neutrale
var NATIONS = [
  {
    "id": "germania",
    "nome": "Impero Tedesco",
    "bandiera": "🇩🇪",
    "schieramento": {
      "1914": "imp_centrali",
      "1915": "imp_centrali",
      "1916": "imp_centrali",
      "1917": "imp_centrali",
      "1918": "imp_centrali"
    },
    "capitali_key": [
      "Berlin"
    ],
    "geo_name": "German Empire",
    "anni": {
      "1914": {
        "desc": "Mobilizzazione totale il 1° agosto. Il Piano Schlieffen prevede di schiacciare la Francia in 6 settimane prima di voltarsi a est. L'invasione del Belgio porta la Gran Bretagna in guerra. La Marna ferma l'avanzata.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Stabilizzazione del fronte occidentale. Successi a est contro la Russia (Grande Ritirata). Introduzione del gas cloro a Ypres (aprile). La guerra sottomarina inizia a colpire il commercio alleato.",
        "perdite_cumulative": 612000
      },
      "1916": {
        "desc": "Verdun: tentativo di dissanguare l'esercito francese (febbraio-dicembre). La battaglia della Somme (luglio) porta i carri armati britannici. Jutland: vittoria tattica navale ma il blocco alleato resta.",
        "perdite_cumulative": 1804000
      },
      "1917": {
        "desc": "Brest-Litovsk libera truppe dal fronte est. La guerra sottomarina illimitata porta gli USA nel conflitto. Offensiva di Nivelle respinta — ammutinamenti alleati ma non decisivi. Passchendaele.",
        "perdite_cumulative": 2737000
      },
      "1918": {
        "desc": "Offensiva di primavera (marzo-luglio): i Kaiserschlacht avanzano fino alla Marna ma non sfondano. Da agosto: controffensiva alleata inarrestabile. Rivoluzione interna, abdicazione del Kaiser, armistizio 11 novembre.",
        "perdite_cumulative": 3800000
      }
    }
  },
  {
    "id": "austria_ungheria",
    "nome": "Impero Austro-Ungarico",
    "bandiera": "🇦🇹",
    "schieramento": {
      "1914": "imp_centrali",
      "1915": "imp_centrali",
      "1916": "imp_centrali",
      "1917": "imp_centrali",
      "1918": "imp_centrali"
    },
    "geo_name": "Austro-Hungarian Empire",
    "anni": {
      "1914": {
        "desc": "L'ultimatum alla Serbia il 23 luglio scatena la crisi. Guerra dichiarata il 28 luglio. Difficoltà sul fronte serbo (tre invasioni respinte) e sconfitte iniziali contro la Russia in Galizia.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Con la Bulgaria, la Serbia viene sopraffatta (fine 1915). Fronte italiano aperto dopo Patto di Londra (maggio). A est, con la Germania, si riconquista la Galizia.",
        "perdite_cumulative": 1000000
      },
      "1916": {
        "desc": "L'offensiva Brusilov (giugno) è una catastrofe: oltre 600.000 prigionieri. La Romania entra in guerra (agosto) ma viene rapidamente sconfitta. L'imperatore Francesco Giuseppe muore (novembre).",
        "perdite_cumulative": 2200000
      },
      "1917": {
        "desc": "Carlo I tenta di negoziare una pace separata in segreto (Affaire Sixtus). Caporetto (ottobre): con la Germania, sfonda il fronte italiano e avanza fino al Piave.",
        "perdite_cumulative": 2850000
      },
      "1918": {
        "desc": "L'offensiva sul Piave (giugno) fallisce. Nazionalità interne (cechi, polacchi, slavi del sud) proclamano l'indipendenza. Vittorio Veneto (ottobre) — sfacelo dell'esercito. L'Impero si dissolve il 3 novembre.",
        "perdite_cumulative": 3620000
      }
    }
  },
  {
    "id": "ottomani",
    "nome": "Impero Ottomano",
    "bandiera": "🇹🇷",
    "schieramento": {
      "1914": "imp_centrali",
      "1915": "imp_centrali",
      "1916": "imp_centrali",
      "1917": "imp_centrali",
      "1918": "imp_centrali"
    },
    "geo_name": "Ottoman Empire",
    "anni": {
      "1914": {
        "desc": "Entra in guerra a novembre (bombardamento di Odessa). I Giovani Turchi cercano di riconquistare territori perduti e creare un impero turco-centrico. Sconfitte iniziali nel Caucaso.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Genocidio degli Armeni (aprile). Gallipoli: respinge il tentativo alleato di aprire lo stretto dei Dardanelli. Mesopotamia: sconfitta britannica a Kut.",
        "perdite_cumulative": 300000
      },
      "1916": {
        "desc": "Perdita della Mesopotamia meridionale. Lawrence d'Arabia organizza la rivolta araba (giugno). Successi sul Caucaso contro la Russia.",
        "perdite_cumulative": 600000
      },
      "1917": {
        "desc": "Caduta di Baghdad (marzo) e Gerusalemme (dicembre) agli Inglesi. La rivolta araba si espande. Il fronte caucasico si stabilizza con il crollo russo.",
        "perdite_cumulative": 900000
      },
      "1918": {
        "desc": "Crollo su tutti i fronti: Palestina (settembre), Siria (ottobre). Armistizio di Mudros (30 ottobre). L'Impero Ottomano cessa di esistere come potenza militare.",
        "perdite_cumulative": 1200000
      }
    }
  },
  {
    "id": "bulgaria",
    "nome": "Bulgaria",
    "bandiera": "🇧🇬",
    "schieramento": {
      "1914": "neutrale",
      "1915": "imp_centrali",
      "1916": "imp_centrali",
      "1917": "imp_centrali",
      "1918": "imp_centrali"
    },
    "geo_name": "Bulgaria",
    "anni": {
      "1914": {
        "desc": "Neutrale. Entrambi gli schieramenti corteggiano Sofia per la sua posizione strategica nei Balcani.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Entra in guerra a fianco degli Imperi Centrali (ottobre). Contribuisce allo sfacelo della Serbia: in poche settimane il paese è conquistato.",
        "perdite_cumulative": 50000
      },
      "1916": {
        "desc": "Tiene il fronte macedone contro l'esercito di Salonicco. Avanza in Romania dopo la sua entrata in guerra.",
        "perdite_cumulative": 200000
      },
      "1917": {
        "desc": "Stallo sul fronte macedone. Tensioni interne crescenti per le pesanti perdite e la crisi alimentare.",
        "perdite_cumulative": 350000
      },
      "1918": {
        "desc": "Il fronte macedone crolla a settembre — offensiva di Salonicco. Armistizio il 29 settembre, il primo tra gli Imperi Centrali. Re Ferdinando abdica.",
        "perdite_cumulative": 412000
      }
    }
  },
  {
    "id": "francia",
    "nome": "Francia",
    "bandiera": "🇫🇷",
    "schieramento": {
      "1914": "intesa",
      "1915": "intesa",
      "1916": "intesa",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "France",
    "anni": {
      "1914": {
        "desc": "Mobilitazione il 1° agosto. Il Piano XVII prevede un'offensiva in Alsazia-Lorena — fallisce. La Marna (settembre) ferma l'invasione tedesca. Fine dell'anno: 10 dipartimenti occupati, 300.000 morti.",
        "perdite_cumulative": 300000
      },
      "1915": {
        "desc": "Offensive infruttuose in Artois e Champagne. Enormi perdite senza risultati. Il fronte si consolida nella guerra di trincea. Prima guerra sottomarina.",
        "perdite_cumulative": 1100000
      },
      "1916": {
        "desc": "Verdun (febbraio-dicembre): 160.000 morti francesi su 700.000 caduti totali. Joffre viene sostituito da Nivelle. La Somme allevia la pressione.",
        "perdite_cumulative": 2050000
      },
      "1917": {
        "desc": "L'offensiva Nivelle (aprile) fallisce disastrosamente → ammutinamenti in 68 divisioni. Pétain ristabilisce la disciplina. Attese dell'arrivo degli Americani. Passchendaele (belgio, con gli Inglesi).",
        "perdite_cumulative": 2600000
      },
      "1918": {
        "desc": "Resistenza all'offensiva di primavera tedesca. Foch diventa comandante supremo alleato (marzo). Controffensiva dei Cento Giorni (agosto-novembre). Armistizio 11 novembre. 1,4 milioni di morti.",
        "perdite_cumulative": 3100000
      }
    }
  },
  {
    "id": "regno_unito",
    "nome": "Regno Unito",
    "bandiera": "🇬🇧",
    "schieramento": {
      "1914": "intesa",
      "1915": "intesa",
      "1916": "intesa",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "United Kingdom of Great Britain and Ireland",
    "anni": {
      "1914": {
        "desc": "Entra in guerra il 4 agosto per la violazione della neutralità belga. Il British Expeditionary Force (BEF) raggiunge il Belgio. Battaglia di Mons. Blocco navale alla Germania.",
        "perdite_cumulative": 90000
      },
      "1915": {
        "desc": "Gallipoli (aprile-dicembre): tentativo di aprire i Dardanelli — fallimento costoso. Neuve Chapelle, Loos. Crisi delle munizioni → governo di coalizione. Lusitania affondato (maggio).",
        "perdite_cumulative": 530000
      },
      "1916": {
        "desc": "Somme (luglio): il primo giorno 57.000 caduti britannici — il più sanguinoso della storia militare britannica. Jutland (maggio): la flotta regge ma non decisivo. Coscription introdotta.",
        "perdite_cumulative": 1200000
      },
      "1917": {
        "desc": "Guerra sottomarina illimitata minaccia le rotte atlantiche — convogli come risposta. Passchendaele (luglio-novembre). Gli USA entrano in guerra. Lawrence d'Arabia. Dichiarazione Balfour.",
        "perdite_cumulative": 1800000
      },
      "1918": {
        "desc": "L'offensiva tedesca di marzo rompe il fronte britannico → Haig emette l'ordine «spalle al muro». Controffensiva dei Cento Giorni. Vittoria. 900.000 morti dell'Impero britannico totali.",
        "perdite_cumulative": 2400000
      }
    }
  },
  {
    "id": "russia",
    "nome": "Impero Russo",
    "bandiera": "🇷🇺",
    "schieramento": {
      "1914": "intesa",
      "1915": "intesa",
      "1916": "intesa",
      "1917": "neutrale",
      "1918": "neutrale"
    },
    "geo_name": "Russian Empire",
    "anni": {
      "1914": {
        "desc": "Mobilitazione generale il 30 luglio. Tannenberg (agosto): disastro — 150.000 prigionieri. Ma successi in Galizia contro l'Austria. Il fronte orientale è vastissimo e fluido.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "La Grande Ritirata: Germania e Austria recuperano Polonia, Lituania, parte del Baltico. 2 milioni di prigionieri. Carenza di armi e munizioni devastante.",
        "perdite_cumulative": 1800000
      },
      "1916": {
        "desc": "Offensiva Brusilov (giugno-settembre): il maggiore successo alleato dell'anno. 400.000 austriaci prigionieri. Ma le perdite russe sono insostenibili: 1 milione di caduti.",
        "perdite_cumulative": 3400000
      },
      "1917": {
        "desc": "Rivoluzione di febbraio: abdica lo Zar. Il governo provvisorio continua la guerra. Offensiva Kerenskij (luglio) — fallimento. Rivoluzione d'ottobre: i Bolscevichi al potere. Armistizio a dicembre.",
        "perdite_cumulative": 5000000
      },
      "1918": {
        "desc": "Trattato di Brest-Litovsk (marzo): la Russia cede Polonia, Finlandia, Paesi Baltici, Ucraina. Esce dal conflitto. Guerra civile interna tra Rossi e Bianchi.",
        "perdite_cumulative": 5000000
      }
    }
  },
  {
    "id": "italia",
    "nome": "Regno d'Italia",
    "bandiera": "🇮🇹",
    "schieramento": {
      "1914": "neutrale",
      "1915": "intesa",
      "1916": "intesa",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "Kingdom of Italy",
    "anni": {
      "1914": {
        "desc": "Neutrale nonostante la Triplice Alleanza con Germania e Austria. Entrambi i blocchi la corteggiano. Il governo Salandra avvia trattative segrete con l'Intesa.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Patto di Londra (aprile): l'Italia entra in guerra contro l'Austria (non la Germania) il 24 maggio. 11 battaglie dell'Isonzo (1915-1917). Progressi minimi a costi enormi.",
        "perdite_cumulative": 300000
      },
      "1916": {
        "desc": "Strafexpedition austriaca (maggio): quasi sfonda. Controffensiva italiana. 6ª battaglia dell'Isonzo: conquista di Gorizia. L'Italia dichiara guerra alla Germania.",
        "perdite_cumulative": 700000
      },
      "1917": {
        "desc": "Caporetto (24 ottobre): sfondamento austro-tedesco — l'esercito italiano si ritira di 150 km in 10 giorni, 300.000 prigionieri. Il fronte si stabilizza sul Piave. Cadorna sostituito da Diaz.",
        "perdite_cumulative": 1200000
      },
      "1918": {
        "desc": "Vittorio Veneto (24 ottobre - 3 novembre): grande offensiva italiana. L'Austria-Ungheria si dissolve. Armistizio a Villa Giusti il 3 novembre. 650.000 morti italiani totali.",
        "perdite_cumulative": 1850000
      }
    }
  },
  {
    "id": "usa",
    "nome": "Stati Uniti",
    "bandiera": "🇺🇸",
    "schieramento": {
      "1914": "neutrale",
      "1915": "neutrale",
      "1916": "neutrale",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "United States",
    "anni": {
      "1914": {
        "desc": "Il presidente Wilson dichiara la neutralità degli USA. L'America rifornisce entrambi i fronti ma il blocco navale britannico favorisce l'Intesa. Dibattito interno tra isolazionisti e interventisti.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Affondamento del Lusitania (maggio): 1.198 morti, 128 americani. Wilson protesta ma non entra in guerra. La Germania sospende la guerra sottomarina illimitata dopo le pressioni.",
        "perdite_cumulative": 0
      },
      "1916": {
        "desc": "Wilson rieletto con lo slogan «ci ha tenuto fuori dalla guerra». La Germania riprende la guerra sottomarina. Il telegramma Zimmermann propone al Messico un'alleanza contro gli USA.",
        "perdite_cumulative": 0
      },
      "1917": {
        "desc": "Dichiarazione di guerra alla Germania il 6 aprile. L'esercito americano (AEF) sotto Pershing inizia ad arrivare in Europa. L'America fornisce crediti, materiali, uomini: un contributo decisivo.",
        "perdite_cumulative": 50000
      },
      "1918": {
        "desc": "2 milioni di soldati americani in Francia. Il loro arrivo è il fattore che inclina le sorti della guerra. Partecipano alle grandi offensive finali. 116.000 morti americani. I 14 punti di Wilson.",
        "perdite_cumulative": 116000
      }
    }
  },
  {
    "id": "serbia",
    "nome": "Serbia",
    "bandiera": "🇷🇸",
    "schieramento": {
      "1914": "intesa",
      "1915": "neutrale",
      "1916": "neutrale",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "Serbia",
    "anni": {
      "1914": {
        "desc": "L'ultimatum austro-ungarico è il casus belli. La Serbia lo accetta quasi integralmente ma l'Austria dichiara guerra ugualmente. Tre invasioni respinte — la Serbia tiene.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Attacco combinato di Austria, Germania e Bulgaria (ottobre). La Serbia è sopraffatta. L'esercito si ritira attraverso le montagne albanesi in inverno — una tragedia. 200.000 civili morti.",
        "perdite_cumulative": 400000
      },
      "1916": {
        "desc": "L'esercito serbo, riorganizzato a Corfù, sbarca a Salonicco e combatte sul fronte macedone.",
        "perdite_cumulative": 450000
      },
      "1917": {
        "desc": "Stallo sul fronte macedone. Il governo in esilio promuove la creazione di uno stato degli Slavi del Sud (futuro Yugoslavia).",
        "perdite_cumulative": 470000
      },
      "1918": {
        "desc": "Offensiva di Salonicco (settembre): sfondamento del fronte bulgaro. Liberazione della Serbia (novembre). La Serbia ha perso il 16% della popolazione — la proporzione più alta di qualsiasi paese.",
        "perdite_cumulative": 700000
      }
    }
  },
  {
    "id": "romania",
    "nome": "Romania",
    "bandiera": "🇷🇴",
    "schieramento": {
      "1914": "neutrale",
      "1915": "neutrale",
      "1916": "intesa",
      "1917": "intesa",
      "1918": "neutrale"
    },
    "geo_name": "Romania",
    "anni": {
      "1914": {
        "desc": "Neutrale nonostante i legami con la Francia. Attende per vedere chi offrirà di più in termini di territori.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Corteggiate da entrambe le parti. L'Intesa promette Transilvania (ancora austro-ungarica).",
        "perdite_cumulative": 0
      },
      "1916": {
        "desc": "Entra in guerra il 27 agosto a fianco dell'Intesa. Invade la Transilvania ma viene attaccata da tre lati. Bucharest cade a dicembre. Catastrofe militare.",
        "perdite_cumulative": 250000
      },
      "1917": {
        "desc": "Riorganizzazione con aiuto francese. Resistenza sul fronte moldavo. Il crollo russo mette la Romania in posizione insostenibile.",
        "perdite_cumulative": 500000
      },
      "1918": {
        "desc": "Costretta all'armistizio (marzo). Trattato di Bucarest: gravi perdite territoriali. Rientra in guerra il 10 novembre — 24 ore prima dell'armistizio. Ottiene comunque i territori promessi.",
        "perdite_cumulative": 530000
      }
    }
  },
  {
    "id": "belgio",
    "nome": "Belgio",
    "bandiera": "🇧🇪",
    "schieramento": {
      "1914": "intesa",
      "1915": "intesa",
      "1916": "intesa",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "Belgium",
    "anni": {
      "1914": {
        "desc": "La violazione della neutralità belga (garantita dal Trattato di Londra del 1839) porta la Gran Bretagna in guerra. L'esercito belga resiste a Liegi più del previsto. Il paese è quasi interamente occupato.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Il re Alberto I mantiene l'esercito belga in trincea lungo l'Yser (il solo territorio non occupato). Occupazione tedesca brutale — fucilazioni, deportazioni, saccheggi.",
        "perdite_cumulative": 50000
      },
      "1916": {
        "desc": "Ypres è il simbolo del sacrificio belga e britannico. L'esercito in esilio combatte nelle Fiandre.",
        "perdite_cumulative": 100000
      },
      "1917": {
        "desc": "Passchendaele combattuta per la terza volta nelle Fiandre. Il fango e i gas fanno strage.",
        "perdite_cumulative": 140000
      },
      "1918": {
        "desc": "Liberazione del Belgio (settembre-novembre). Re Alberto rientra a Bruxelles il 22 novembre. Il Belgio ha perso 100.000 soldati e subìto 4 anni di occupazione.",
        "perdite_cumulative": 200000
      }
    }
  },
  {
    "id": "grecia",
    "nome": "Grecia",
    "bandiera": "🇬🇷",
    "schieramento": {
      "1914": "neutrale",
      "1915": "neutrale",
      "1916": "neutrale",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "Greece",
    "anni": {
      "1914": {
        "desc": "Neutrale. Il re Costantino I (cognato del Kaiser) è filo-tedesco; il primo ministro Venizelos è filo-alleato. Inizia uno «scisma nazionale» che divide il paese.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Venizelos invita gli Alleati a sbarcare a Salonicco (ottobre) per aiutare la Serbia. Il re lo revoca. Doppio governo: alleato a Salonicco, regio ad Atene.",
        "perdite_cumulative": 0
      },
      "1916": {
        "desc": "Gli Alleati occupano Salonicco. Venizelos forma un governo provvisorio pro-Intesa nel nord. La Grecia è di fatto divisa.",
        "perdite_cumulative": 0
      },
      "1917": {
        "desc": "Gli Alleati forzano l'abdicazione del re Costantino (giugno). Venizelos porta la Grecia ufficialmente in guerra a fianco dell'Intesa.",
        "perdite_cumulative": 50000
      },
      "1918": {
        "desc": "Partecipa all'offensiva di Salonicco (settembre) che sfonda il fronte bulgaro. La guerra si conclude con la Grecia sul lato vincitore.",
        "perdite_cumulative": 150000
      }
    }
  },
  {
    "id": "portogallo",
    "nome": "Portogallo",
    "bandiera": "🇵🇹",
    "schieramento": {
      "1914": "neutrale",
      "1915": "neutrale",
      "1916": "intesa",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "Portugal",
    "anni": {
      "1914": {
        "desc": "Neutrale, ma legami con la Gran Bretagna (alleanza risalente al 1373). Pressioni interne tra interventisti e neutralisti.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Il governo repubblicano vuole intervenire per consolidare le colonie africane. La Germania sequestra navi portoghesi.",
        "perdite_cumulative": 0
      },
      "1916": {
        "desc": "Dopo il sequestro di navi tedesche nei porti portoghesi, la Germania dichiara guerra al Portogallo (marzo). Il CEP (Corpo Expedicionário Português) è inviato in Fiandra.",
        "perdite_cumulative": 0
      },
      "1917": {
        "desc": "Il CEP combatte nelle Fiandre. Instabilità politica interna — colpo di stato di Sidônio Pais (dicembre).",
        "perdite_cumulative": 5000
      },
      "1918": {
        "desc": "Battaglia di La Lys (aprile): il CEP viene sopraffatto dall'offensiva tedesca. Circa 8.000 morti portoghesi totali durante il conflitto.",
        "perdite_cumulative": 8000
      }
    }
  },
  {
    "id": "giappone",
    "nome": "Giappone",
    "bandiera": "🇯🇵",
    "schieramento": {
      "1914": "intesa",
      "1915": "intesa",
      "1916": "intesa",
      "1917": "intesa",
      "1918": "intesa"
    },
    "geo_name": "Empire of Japan",
    "anni": {
      "1914": {
        "desc": "Dichiara guerra alla Germania (agosto) in base all'alleanza anglo-giapponese. Conquista le colonie tedesche in Cina (Tsingtao) e nel Pacifico. Poca partecipazione in Europa.",
        "perdite_cumulative": 0
      },
      "1915": {
        "desc": "Presenta le «21 richieste» alla Cina: tentativo di egemonizzare il continente. Continua il controllo del Pacifico ex-tedesco.",
        "perdite_cumulative": 0
      },
      "1916": {
        "desc": "Invia navi da guerra nel Mediterraneo per combattere i sommergibili tedeschi. Ruolo prevalentemente navale.",
        "perdite_cumulative": 0
      },
      "1917": {
        "desc": "Il Giappone ottiene il riconoscimento dei suoi possedimenti nel Pacifico da Francia, Russia e Gran Bretagna.",
        "perdite_cumulative": 0
      },
      "1918": {
        "desc": "Intervento in Siberia contro i Bolscevichi (agosto). Il Giappone emerge dalla guerra come potenza regionale rafforzata.",
        "perdite_cumulative": 1000
      }
    }
  }
];
