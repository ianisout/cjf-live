const artistas = [
  {
    id: 'princs',
    artistName: 'PRINCESAS DO RITMO',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Sábado',
    stage: 'fdb',
    gigDate: 'eleven',
    'Hora início': '10h15',
    url: 'https://www.instagram.com/princesasdoritmocwb/',
  },
  {
    id: 'elas',
    artistName: 'ELAS & LA VISTA',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Sábado',
    stage: 'fdb',
    gigDate: 'eleven',
    'Hora início': '11h',
    url: 'https://www.instagram.com/lavista.selo/',
  },
  {
    id: 'thaisM',
    artistName: 'THAÏS MORELL',
    stage: 'cjf',
    weekDay: 'Sábado',
    gigDate: 'eleven',
    imgUrl: 'img/artists/thais.jpg',
    'Hora início': '12h',
    url: 'https://www.instagram.com/thais.morell/',
  },
  {
    id: 'jazzB',
    artistName: 'JAZZBOP',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Sábado',
    stage: 'fdb',
    gigDate: 'eleven',
    'Hora início': '13h',
    url: 'https://www.instagram.com/jazzbopcwb/',
  },
  {
    id: 'orquestraF',
    artistName: 'ORQUESTRA FRIORENTA',
    weekDay: 'Sábado',
    stage: 'cjf',
    gigDate: 'eleven',
    imgUrl: 'img/artists/orquestra-friorenta.jpg',
    'Hora início': '14h',
    url: 'https://www.instagram.com/orquestrafriorenta/',
  },
  {
    id: 'notivagos',
    artistName: 'NOTÍVAGOS',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Sábado',
    stage: 'fdb',
    gigDate: 'eleven',
    'Hora início': '15h',
    url: 'https://www.instagram.com/bandanotivagos/',
  },
  {
    id: 'wesV',
    artistName: 'WES VENTURA',
    weekDay: 'Sábado',
    stage: 'cjf',
    gigDate: 'eleven',
    imgUrl: 'img/artists/artist1.jpeg',
    'Hora início': '16h',
    url: 'https://www.instagram.com/wes_ventura/',
  },
  {
    id: 'mumbai',
    artistName: 'MUMBAI EXPRESS',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Sábado',
    stage: 'fdb',
    gigDate: 'eleven',
    'Hora início': '17h',
    url: 'https://www.instagram.com/mumbaiexpressbrasil/',
  },
  {
    id: 'sotak',
    artistName: 'SOTAK COMFUSION FAMILY',
    weekDay: 'Sábado',
    stage: 'cjf',
    gigDate: 'eleven',
    imgUrl: 'img/artists/artist4.jpeg',
    'Hora início': '18h',
    url: 'https://www.instagram.com/sotakcomfusionfamily/',
  },
  {
    id: 'bface',
    artistName: 'BFACE',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Sábado',
    stage: 'fdb',
    gigDate: 'eleven',
    'Hora início': '19h',
    url: 'https://www.instagram.com/bfacee/',
  },
  {
    id: 'rosaA',
    artistName: 'ROSA ARMORIAL',
    weekDay: 'Sábado',
    stage: 'cjf',
    gigDate: 'eleven',
    imgUrl: 'img/artists/rosa.jpg',
    'Hora início': '20h',
    url: 'https://www.instagram.com/rosaarmorial/',
  },
  {
    id: 'cfantoche',
    artistName: 'COMPANHIA DE FANTOCHES RITMUNDO',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Domingo',
    stage: 'fdb',
    gigDate: 'twelve',
    'Hora início': '10h15',
    url: '#lineup',
  },
  {
    id: 'duoeuela',
    artistName: 'DUO EU E ELA',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Domingo',
    stage: 'fdb',
    gigDate: 'twelve',
    'Hora início': '11h',
    url: 'https://www.instagram.com/duo.eueela/',
  },
  {
    id: 'melangeD',
    artistName: 'MELANGE DE CULTURE',
    weekDay: 'Domingo',
    stage: 'cjf',
    gigDate: 'twelve',
    imgUrl: 'img/artists/artist6.jpeg',
    'Hora início': '12h',
    url: 'https://melangedeculture.webnode.com/',
  },
  {
    id: 'capybara',
    artistName: 'CAPYBARA TRIO',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Domingo',
    stage: 'fdb',
    gigDate: 'twelve',
    'Hora início': '13h',
    url: 'https://www.instagram.com/capybara_trio/',
  },
  {
    id: 'boldrini',
    artistName: 'BOLDRINI QUARTETO',
    weekDay: 'Domingo',
    stage: 'cjf',
    gigDate: 'twelve',
    imgUrl: 'img/artists/boldrini.jpg',
    'Hora início': '14h',
    url: 'https://www.instagram.com/boldriniquartet/',
  },
  {
    id: 'orquidalia',
    artistName: 'ORQUIDÁLIA',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Domingo',
    stage: 'fdb',
    gigDate: 'twelve',
    'Hora início': '15h',
    url: 'https://www.instagram.com/instadaorquidalia/',
  },
  {
    id: 'ericaS',
    artistName: 'ERICA SILVA & KLUBBER',
    stage: 'cjf',
    weekDay: 'Domingo',
    gigDate: 'twelve',
    imgUrl: 'img/artists/artist2.jpeg',
    'Hora início': '16h',
    url: 'https://www.instagram.com/ericasemka/',
  },
  {
    id: 'nemprala',
    artistName: 'OPEN JAM SESSION: NEM PRA LÁ NEM PRA CÁ',
    stage: 'fdb',
    weekDay: 'Domingo',
    gigDate: 'twelve',
    imgUrl: 'img/artists/artist2.jpeg',
    'Hora início': '17h',
    url: '#lineup',
  },
  {
    id: 'francoisM',
    artistName: 'FRANÇOIS MULEKA',
    weekDay: 'Domingo',
    stage: 'cjf',
    gigDate: 'twelve',
    imgUrl: 'img/artists/francois.jpg',
    'Hora início': '18h',
    url: 'https://www.instagram.com/francoismuleka/',
  },
  {
    id: 'jazzrap',
    artistName: 'O JAZZ É RAP',
    stage: 'fdb',
    weekDay: 'Domingo',
    gigDate: 'twelve',
    imgUrl: 'img/artists/artist2.jpeg',
    'Hora início': '19h',
    url: '#lineup',
  },
  {
    id: 'dowR',
    artistName: 'DOW RAIZ',
    weekDay: 'Domingo',
    stage: 'cjf',
    gigDate: 'twelve',
    imgUrl: 'img/artists/artist6.jpeg',
    'Hora início': '20h',
    url: 'https://www.instagram.com/dowraizoficial/',
  },
  {
    id: 'discoV',
    artistName: 'DISCO VENENO',
    weekDay: 'Sábado',
    stage: 'discotecagem',
    gigDate: 'eleven',
    'Hora início': 'DJ',
    imgUrl: 'img/artists/artist6.jpeg',
    url: 'https://www.instagram.com/discoveneno/',
  },
  {
    id: 'mitayL',
    artistName: 'MITAY',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Domingo',
    stage: 'discotecagem',
    gigDate: 'twelve',
    'Hora início': 'DJ',
    url: 'https://www.instagram.com/mitaydj/',
  },
  {
    id: 'luVi',
    artistName: 'LU VIEIRA',
    imgUrl: 'img/artists/artist6.jpeg',
    weekDay: 'Domingo',
    stage: 'discotecagem',
    gigDate: 'twelve',
    'Hora início': 'DJ',
    url: 'https://www.instagram.com/lucianovinille/',
  },
];

const gastronomia = [
  {
    id: 'chimichurri',
    name: 'CHIMICHURRI',
    url: 'https://www.instagram.com/chimichurricuritiba/',
  },
  {
    id: 'kvegan',
    name: 'KING VEGAN',
    url: '#feira-gastronomica',
  },
  {
    id: 'jazzburger',
    name: 'JAZZ BURGER',
    url: '#feira-gastronomica',
  },
  {
    id: 'acaicara',
    name: 'A CAIÇARA',
    url: 'https://www.instagram.com/acaicara/',
  },
  {
    id: 'armazen',
    name: 'VENDA ARMAZÉN E BOTECO',
    url: 'https://www.instagram.com/vendaarmazemeboteco/',
  },
  {
    id: 'camaleao',
    name: 'CAMALEÃO CULTURAL',
    url: 'https://www.instagram.com/camaleaocultural/',
  },
  {
    id: 'opao',
    name: 'O PÃO QUE O VIADO AMASSOU',
    url: 'https://www.instagram.com/opaoqueoviadoamassou/',
  },
  {
    id: 'barfogo',
    name: 'BAR DO FOGO',
    url: 'https://www.instagram.com/bardofogo/',
  },
  {
    id: 'savagep',
    name: 'SAVAGE PIZZAS',
    url: 'https://www.instagram.com/savage_pizzas/',
  },
  {
    id: 'expresso',
    name: 'EXPRESSO CURITIBA',
    url: 'https://www.instagram.com/expressocuritiba/',
  },
  {
    id: 'cavalheiro',
    name: 'AO DISTINTO CAVALHEIRO',
    url: 'https://www.instagram.com/aodistintocavalheiro/',
  },
];

const bazarList = [
  {
    name: 'HYPE BRASIL',
    url: 'https://www.instagram.com/hype.brasil/',
  },
  {
    name: 'FEEKA',
    url: 'https://www.instagram.com/feeka.br/',
  },
  {
    name: 'CIGANITA',
    url: 'https://www.instagram.com/lojaciganita/',
  },
  {
    name: 'NÓ T-SHIRT',
    url: 'https://www.instagram.com/no.tshirt/',
  },
  {
    name: 'LALUZ BRASIL',
    url: 'https://www.instagram.com/laluzbrasil/',
  },
  {
    name: 'BEM DE BOWIE/WILDPEOPLE',
    url: 'https://www.instagram.com/bemdebowiebrecho/',
  },
  {
    name: 'PÉ DE CHICÓRIA',
    url: 'https://www.instagram.com/pedechicoria/',
  },
  {
    name: 'SMARTSHOP',
    url: 'https://www.instagram.com/smartsbrasil_/',
  },
  {
    name: 'AUGUSTA ZANETTE',
    url: 'https://www.instagram.com/zanetteaugusta/',
  },
  {
    name: 'BLUE CHIC',
    url: 'https://www.instagram.com/bluechic_/',
  },
  {
    name: 'DAS MINAS BRECHÓ',
    url: 'https://www.instagram.com/dasminas.brecho/',
  },
  {
    name: 'FLORES PETALUM',
    url: 'https://www.instagram.com/lojaflorespetalum/',
  },
  {
    name: 'ENTALPÎA VELAS',
    url: 'https://www.instagram.com/entalpia.velas/',
  },
  {
    name: 'FLORIM KIDS',
    url: 'https://www.instagram.com/florim_kids/',
  },
  {
    name: 'COMUM',
    url: 'https://www.instagram.com/docomum/',
  },
  {
    name: 'LUCZ/CAL86',
    url: 'https://www.instagram.com/luczoficial/',
  },
  {
    name: 'CAIPORA',
    url: 'https://www.instagram.com/caipora.veste/',
  },
  {
    name: 'SOUTRIO',
    url: 'https://www.instagram.com/use.soutrio/',
  },
  {
    name: 'SKIN GRAY',
    url: 'https://www.instagram.com/ateliebotanico.skin_gray/',
  },
  {
    name: 'BRIQUE CHIQUE BRECHÓ',
    url: 'https://www.instagram.com/brique.chique.brecho/',
  },
  {
    name: 'BAD TO THE BONE',
    url: 'https://www.instagram.com/use_bad/',
  },
  {
    name: 'CONFIO',
    url: 'https://www.instagram.com/eu.confio/',
  },
  {
    name: 'ZERO COSMÉTICOS',
    url: 'https://www.instagram.com/zerocosmeticos_/',
  },
  {
    name: 'MANDALUNAR',
    url: 'https://www.instagram.com/mandalunar/',
  },
  {
    name: 'OBAKÊ',
    url: 'https://www.instagram.com/obake.obake/',
  },
  {
    name: 'PĀ NINHO',
    url: 'https://www.instagram.com/pa.ninho/',
  },
  {
    name: 'RUÍDO CAMISETAS',
    url: 'https://www.instagram.com/ruidocamisetas/',
  },
  {
    name: 'ROPA',
    url: 'https://www.instagram.com/use.ropa/',
  },
  {
    name: 'ARTE COMBATE',
    url: 'https://www.instagram.com/artecombate/',
  },
];

let hashFirstAccess = 'FirstAccessTrue';

/* LOGO GLOW */
const logo = document.getElementById('navbar-logo');
logo.addEventListener('mouseover', () => {
  setTimeout(() => {
    logo.src = 'img/logocjf-glow.png';
  }, 150);
});

logo.addEventListener('mouseout', () => {
  setTimeout(() => {
    logo.src = 'img/logocjf.png';
  }, 150);
});

const videoFilter = document.querySelector('.video-filter');
const container = document.querySelector('.container');
const patrocinadores = document.querySelector('.patrocinadores');
const h1 = document.querySelector('h1');
const img = document.querySelector('.arrow-down');
const footer = document.querySelector('footer');

if (window.innerWidth <= 780) {
  setTimeout(() => {
    if (
      localStorage.firstAccess === 'Yes' &&
      localStorage.firstAccessCheck === undefined
    ) {
      localStorage.setItem('firstAccessCheck', 'no');
      window.location.reload();
      setMobilePage();
    } else {
      setMobilePage();
    }
  }, 500);
} else {
  container.style.background = 'transparent';
}

function setMobilePage() {
  const navbar = document.getElementById('navbar');
  container.style.position = 'fixed';
  document.body.style.overflow = 'hidden';
  navbar.classList.add('py-3');

  setTimeout(function () {
    videoFilter.style.opacity = '1';
    videoFilter.style.transition = '0.7s';
    container.style.opacity = '1';
    container.style.transition = '0.7s';
    container.style.position = 'static';
    h1.style.opacity = '1';
    h1.style.transition = '0.7s';
    img.style.opacity = '1';
    img.style.transition = '0.7s';
    footer.style.opacity = '1';
    footer.style.transition = '0.7s';
    patrocinadores.style.display = 'flex';
    document.body.style.overflow = 'unset';
  }, 1200);
}

/* UPLOADING ARTISTS ON LINEUP SECTION */
function uploadArtists() {
  const eleventh = document.querySelector('.dec-eleventh');
  const twelveth = document.querySelector('.dec-twelveth');

  artistas.map((artista) => {
    const artistInfo = document.createElement('div');
    const artistName = document.createElement('a');
    const artistTime = document.createElement('p');

    artistInfo.classList.add('artist-info');

    artistTime.innerText = artista['Hora início'];
    artistName.innerText = artista.artistName;
    artistName.href = artista.url;
    artistName.target = '_blank';
    artistTime.classList.add('artist-time');
    artistInfo.setAttribute('id', artista.id);
    artistName.classList.add('unique-artist');

    if (artista.gigDate.slice(0, 2) == '11') {
      artistName.classList.add('eleven');
    } else {
      artistName.classList.add('twelve');
    }

    artistName.classList.add(artista.stage);

    artistInfo.appendChild(artistTime);
    artistInfo.appendChild(artistName);

    if (artista.gigDate === 'eleven') eleventh.appendChild(artistInfo);
    if (artista.gigDate === 'twelve') twelveth.appendChild(artistInfo);
  });
}

uploadArtists();

/* UPLOADING RESTAURANTS */
function uploadRestaurants() {
  const restaurantsDiv = document.querySelector('.restaurants');

  gastronomia.map((restaurant) => {
    const restaurantName = document.createElement('a');
    restaurantName.classList.add('unique-restaurant');
    restaurantName.setAttribute('id', restaurant.id);
    restaurantName.innerText = restaurant.name;
    restaurantName.href = restaurant.url;
    restaurantName.target = '_blank';

    restaurantsDiv.appendChild(restaurantName);
  });
}

uploadRestaurants();

/* UPLOADING BAZARS */
function uploadBazars() {
  const bazarsDiv = document.querySelector('.bazars');

  bazarList.map((bazar) => {
    const bazarName = document.createElement('a');
    bazarName.classList.add('unique-bazar');
    bazarName.innerText = bazar.name;
    bazarName.href = bazar.url;
    bazarName.target = '_blank';

    bazarsDiv.appendChild(bazarName);
  });
}

uploadBazars();

/* FILTER SELECTIONS FOR LINE UP  */

const breakDiv = document.querySelector('.break');

const diaSelector = document.querySelector('.dia-selector');
const palcoSelector = document.querySelector('.palco-selector');

const btnDayEleven = document.createElement('div');
const btnDayTwelve = document.createElement('div');
const btnStageOne = document.createElement('div');
const btnStageTwo = document.createElement('div');
const btnStageDiscotecagem = document.createElement('div');

btnDayEleven.classList.add('days-stages-options');
btnDayEleven.setAttribute('id', 'eleven');
btnDayEleven.tabIndex = '0';
btnDayEleven.innerText = '11 DE DEZEMBRO';
btnDayTwelve.classList.add('days-stages-options');
btnDayTwelve.setAttribute('id', 'twelve');
btnDayTwelve.innerText = '12 DE DEZEMBRO';

btnStageOne.classList.add('days-stages-options');
btnStageOne.innerText = 'CURITIBA JAZZ FESTIVAL';
btnStageOne.setAttribute('id', 'cjf');
btnStageTwo.classList.add('days-stages-options');
btnStageTwo.innerText = 'FESTIVAL DE BOLSO';
btnStageTwo.setAttribute('id', 'fdb');
btnStageDiscotecagem.classList.add('days-stages-options');
btnStageDiscotecagem.innerText = 'DISCOTECAGEM';
btnStageDiscotecagem.setAttribute('id', 'discotecagem');

diaSelector.addEventListener('click', () => {
  breakDiv.innerHTML = '';
  breakDiv.appendChild(btnDayEleven);
  breakDiv.appendChild(btnDayTwelve);
  makeSelection();
});

palcoSelector.addEventListener('click', () => {
  breakDiv.innerHTML = '';
  breakDiv.appendChild(btnStageOne);
  breakDiv.appendChild(btnStageTwo);
  breakDiv.appendChild(btnStageDiscotecagem);
  makeSelection();
});

/* APPENDING SELECTED FILTERS */

function makeSelection() {
  const btnsFilter = document.querySelectorAll('.days-stages-options');
  const artistsOnPage = document.querySelectorAll('.artist-info');
  const artistsDays = document.querySelectorAll('.day-divider');

  btnsFilter.forEach((selection) => {
    btnsFilter.forEach((btn) => btn.classList.remove('active-button'));
    selection.addEventListener('click', () => {
      btnsFilter.forEach((btn) => btn.classList.remove('active-button'));
      selection.classList.add('active-button');

      artistsDays.forEach((i) => (i.style.display = 'none'));

      artistsOnPage.forEach((item) => (item.style.display = 'none'));

      uploadSelectedArtists(selection, artistsOnPage);
    });
  });
}

function uploadSelectedArtists(selectionType, artistsOnPage) {
  const artistsDays = document.querySelectorAll('.day-divider');

  artistas.map((artistFromLista) => {
    if (artistFromLista.stage === selectionType.id) {
      artistsOnPage.forEach((pageArtist) => {
        if (artistFromLista.id === pageArtist.id)
          pageArtist.style.display = 'flex';
        artistsDays.forEach((i) => (i.style.display = 'unset'));
      });
    }

    if (artistFromLista.gigDate === selectionType.id) {
      artistsOnPage.forEach((pageArtist) => {
        if (artistFromLista.id === pageArtist.id)
          pageArtist.style.display = 'flex';
      });
    }
  });
}
