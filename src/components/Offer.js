import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Paper, Grid, Container, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import oferta from '../assets/diagram_DK.png';
import { animateScroll as scroll, Events } from 'react-scroll';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '60%',
  height: '50vh',
  sx: { allingItems: 'center' },
};

const centerOfPoland = {
  lat: 51.9189,
  lng: 19.1344
};

const locations = [
  { lat: 52.2297, lng: 21.0122 }, // Warszawa
  { lat: 50.0647, lng: 19.9450 }, // Kraków
  { lat: 51.9194, lng: 19.1451 }, // Łódź
  { lat: 53.0138, lng: 18.5984 }, // Toruń
  { lat: 50.2863, lng: 19.1041 }, // Katowice
  { lat: 51.1071, lng: 17.0385 }, // Wrocław
  { lat: 52.4064, lng: 16.9252 }, // Poznań
  { lat: 54.3520, lng: 18.6466 }, // Gdańsk
  { lat: 53.4289, lng: 14.5530 }, // Szczecin
  { lat: 50.6680, lng: 17.9235 }, // Opole
  { lat: 53.7799, lng: 20.4942 }, // Olsztyn
  { lat: 51.4027, lng: 21.1471 }, // Radom
  { lat: 51.9356, lng: 15.5062 }, // Zielona Góra
  { lat: 51.2465, lng: 22.5684 }, // Lublin
  { lat: 50.0138, lng: 20.9866 }, // Tarnów
  { lat: 53.1333, lng: 23.1643 }, // Białystok
  { lat: 51.7611, lng: 18.0910 }, // Kalisz
  { lat: 52.3402, lng: 16.9348 }, // Puszczykowo
  { lat: 53.9679, lng: 14.7660 }, // Świnoujście
  { lat: 52.5468, lng: 19.7065 }, // Płock
  { lat: 50.2868, lng: 19.1038 }, // Chorzów
  { lat: 52.1500, lng: 21.0500 }, // Piaseczno
  { lat: 52.2919, lng: 21.0487 }, // Legionowo
  { lat: 50.0412, lng: 21.9991 }, // Rzeszów
  { lat: 50.6721, lng: 17.9253 }, // Gliwice
  { lat: 53.9125, lng: 14.2471 }, // Wolin
  { lat: 52.6431, lng: 19.0603 }, // Włocławek
  { lat: 51.7610, lng: 18.0910 }, // Kalisz
  { lat: 52.6482, lng: 19.0678 }, // Kutno
  { lat: 54.5189, lng: 18.5319 },  // Gdynia
  { lat: 49.2969, lng: 19.9501 }, // Zakopane
  { lat: 54.1750, lng: 15.5834 }, // Kołobrzeg
  { lat: 52.7322, lng: 15.2360 }, // Gorzów Wielkopolski
  { lat: 51.2101, lng: 16.1619 }, // Głogów
  { lat: 51.3978, lng: 21.1471 }, // Kielce
  { lat: 50.3480, lng: 18.9328 }, // Zabrze
  { lat: 52.4084, lng: 16.9319 }, // Swarzędz
  { lat: 50.8703, lng: 20.6275 }, // Kielce
  { lat: 53.0153, lng: 18.6056 }, // Bydgoszcz
  { lat: 51.7689, lng: 19.4564 }, // Piotrków Trybunalski
  { lat: 52.2442, lng: 21.0854 }, // Pruszków
  { lat: 50.7969, lng: 19.1240 }, // Częstochowa
  { lat: 50.3480, lng: 18.9328 }, // Sosnowiec
  { lat: 50.2860, lng: 19.1042 }, // Siemianowice Śląskie
  { lat: 51.7611, lng: 18.0910 }, // Ostrów Wielkopolski
  { lat: 52.6481, lng: 19.0678 }, // Pabianice
  { lat: 52.3084, lng: 21.1668 }, // Otwock
  { lat: 52.2924, lng: 20.9353 }, // Wołomin
  { lat: 50.0136, lng: 20.9888 }, // Bochnia
  { lat: 52.2405, lng: 20.9883 }, // Błonie
  { lat: 50.0410, lng: 21.9991 }, // Sanok
  { lat: 50.6720, lng: 17.9235 }, // Kędzierzyn-Koźle
  { lat: 50.5824, lng: 22.0533 }, // Sandomierz
  { lat: 51.8882, lng: 15.8058 }, // Głogów
  { lat: 52.4092, lng: 16.9306 }, // Luboń
  { lat: 52.4084, lng: 16.9319 }, // Buk  
  { lat: 52.4084, lng: 16.9319 }, // Kostrzyn 
  { lat: 52.4084, lng: 16.9319 }, // Śrem
  { lat: 52.4084, lng: 16.9319 }, // Września
  { lat: 52.4084, lng: 16.9319 }, // Środa Wielkopolska
  { lat: 52.4084, lng: 16.9319 }, // Wągrowiec
  { lat: 52.4084, lng: 16.9319 }, // Rawicz 
  { lat: 52.4084, lng: 16.9319 }, // Pniewy
  { lat: 52.4084, lng: 16.9319 }, // Szamotuły
  { lat: 52.4084, lng: 16.9319 }, // Oborniki
  { lat: 52.4084, lng: 16.9319 }, // Wolsztyn
  { lat: 52.4084, lng: 16.9319 }, // Nowy Tomyśl
  { lat: 52.4084, lng: 16.9319 }, // Kościan
  { lat: 52.4084, lng: 16.9319 }, // Międzychód
  { lat: 52.4084, lng: 16.9319 }, // Czarnków
  { lat: 52.4084, lng: 16.9319 }, // Wronki
  { lat: 52.4084, lng: 16.9319 }, // Trzcianka
  { lat: 52.4084, lng: 16.9319 }, // Szamotuły
  { lat: 52.4084, lng: 16.9319 }, // Międzyrzecz
  { lat: 52.5855, lng: 16.8851 }, // Grodzisk Wielkopolski
  { lat: 51.8837, lng: 15.7273 }, // Gubin
  { lat: 52.2131, lng: 15.9806 }, // Sulechów
  { lat: 51.8045, lng: 15.7175 }, // Żary
  { lat: 52.4015, lng: 16.8999 }, // Swarzędz
  { lat: 53.1514, lng: 16.7378 }, // Piła
  { lat: 50.3182, lng: 21.7544 }, // Stalowa Wola
  { lat: 52.9827, lng: 15.2288 }, // Strzelce Krajeńskie
  { lat: 50.0136, lng: 20.9623 }, // Miechów
  { lat: 50.0410, lng: 21.9991 }, // Rzeszów
  { lat: 51.3615, lng: 16.6338 }, // Bolesławiec
  { lat: 51.9189, lng: 19.1344 }, // Zgierz
  { lat: 50.1372, lng: 18.9664 }, // Rybnik
  { lat: 51.8034, lng: 19.2510 }, // Zgierz
  { lat: 52.2919, lng: 21.0487 }, // Legionowo
  { lat: 51.7634, lng: 18.0910 }, // Ostrów Wielkopolski
  { lat: 53.1508, lng: 23.1695 }, // Łomża
  { lat: 54.4641, lng: 17.0285 }, // Słupsk
  { lat: 50.0130, lng: 20.9863 }, // Mielec
  { lat: 50.5822, lng: 22.0536 }  // Stalowa Wol
];

const GlassPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(221, 235, 255, 0.3)',
  color: 'white',
  backdropFilter: 'blur(10px)',
  padding: theme.spacing(2),
  borderRadius: '10px',
  textAlign: 'center',
  opacity: 1,

  '&.visible': {
    opacity: 1,
    transform: 'translateY(0)',
  },

  '&:hover': {
    boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.15)',
  },
}));

const Oferta = () => {
  const [isFullscreen, setFullscreen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleFlip = (card) => {
    setExpandedCard(card);
    setFullscreen(true);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    const checkVisibility = () => {
      const el = document.getElementById('aboutUsSection');
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', checkVisibility);

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.card-class')) {
        setFullscreen(false);
        setExpandedCard(null);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Container component="section" maxWidth="lg">
      <div id="Offer"></div>
      <Typography variant="h2" align="center">
        Nasze Usługi
      </Typography>

      <Box sx={{ mt: 6, mb: 4 }}>
        <Typography variant="body1" align="center">
          Odkryj, jak SC Data Hub może wspomóc Twój biznes, oferując różnorodne dane miejskie.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ display: isFullscreen ? 'none' : 'flex' }}>

        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={`card-class ${isVisible ? 'visible' : ''}`}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Zintegrowane i generyczne API
            </Typography>
            <Typography>
              Nasze spójne API ułatwia integrację z obszernymi zestawami otwartych danych miejskich, umożliwiając wdrożenie nowych usług i rozwiązań dostosowanych do Twojego biznesu.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card1')}>
              Dowiedz się więcej
            </Button>
          </GlassPaper>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={`card-class ${isVisible ? 'visible' : ''}`}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Szeroki zakres usług
            </Typography>
            <Typography>
              SC DATA HUB oferuje dostęp do rozległego wyboru otwartych danych miejskich. Z naszym wszechstronnym API, zdolnym do elastycznej wymiany danych, możesz przyspieszyć innowacje i ulepszać usługi, dostosowując je do potrzeb Twojej organizacji.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card2')}>
              Nasze kompleksowe rozwiązania
            </Button>
          </GlassPaper>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <GlassPaper elevation={3} sx={{ height: '90%' }} className={`card-class ${isVisible ? 'visible' : ''}`}>
            <Typography variant="h5" fontWeight={'bold'} gutterBottom>
              Profesjonalne Wsparcie
            </Typography>
            <Typography>
              Nasza wizja współpracy to partnerstwo oparte na wzajemnych korzyściach.
              Nasz zespół ekspertów jest dostępny, aby pomóc w osiągnięciu Twoich celów biznesowych i technicznych. Wspieramy w realizacji strategii i zapewniamy niezbędne narzędzia.
            </Typography>
            <Button variant="contained" style={{ backgroundColor: 'white', color: 'black' }} sx={{ mt: 2 }} onClick={() => handleFlip('card3')}>
              Jak możemy współpracować?
            </Button>
          </GlassPaper>
        </Grid>
      </Grid>

      {/* Expanded Card */}
      {isFullscreen && (
        <div
          data-backdrop="true"
          style={{
            width: '80%',
            height: '70%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '2rem',
          }}
        >
          <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ mb: 10 }}>
            <Grid item xs={12}>
              <GlassPaper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  {expandedCard === 'card1' && (
                    <>
                      <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                        Zintegrowane i Uniwersalne API
                      </Typography>
                      <Typography variant="h5" gutterBottom style={{ textAlign: 'justify' }}>
                        Nasze zaawansowane API dostarcza szeroką gamę możliwości integracyjnych oraz dostępu do danych, co umożliwia efektywne wdrażanie innowacyjnych rozwiązań miejskich, które mają potencjał fundamentalnie przekształcić sposób prowadzenia działalności przez Twoją organizację, a także sposób wspierania społeczności lokalnych.
                        <br /><br />
                        Co więcej, nasz wyrafinowany model uniwersalnego API otwiera nowe horyzonty, pozwalając na szybką i sprawną integrację z nowymi zestawami danych, które stają się dostępne w naszym systemie. To oznacza, że możesz dynamicznie rozszerzać swoją ofertę, włączając do niej nowatorskie usługi, pozostając w awangardzie branży.
                      </Typography>
                    </>
                  )}


                  {expandedCard === 'card2' && (
                    <>
                      <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                        Szeroki zakres usług
                      </Typography>
                      <Typography variant="h6" gutterBottom style={{ textAlign: 'justify' }}>
                        - <strong>Ponad 100</strong> miast w Polsce w zakresie mobilnych płatności parkingowych, zarówno w strefach publicznych, jak i na prywatnych parkingach.
                        <br /><br />
                        - <strong>Ponad 70</strong> miast, zintegrowanych pod względem zakupu biletów miejskich.
                        <br /><br />
                        - Obsługujemy <strong>aż 99% połączeń kolejowych</strong>, a nasze API pozwala na zakup biletów kolejowych, sprawdzenie rozkładów jazdy, a także dostęp do informacji o opóźnieniach i zmianach w planie podróży.
                        <br /><br />
                        Szybkie i intuicyjne płatności - Twoi klienci dokonują płatności za bilety autostradowe, nie tracąc czasu na szukanie portfela.
                        <br /><br />
                        Dążymy do wsparcia cyfrowego rozwoju społeczeństwa.
                      </Typography>
                      <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                          <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={centerOfPoland}
                            zoom={6}
                          >
                          </GoogleMap>
                        </LoadScript>
                      </Box>
                    </>
                  )}

                  {expandedCard === 'card3' && (
                    <>
                      <Typography variant="h4" fontWeight={'bold'} gutterBottom>
                        Profesjonalne Wsparcie
                      </Typography>
                      <Typography variant="h5" gutterBottom>
                        Nasze API jest łatwe w integracji, a nasi specjaliści oferują wsparcie techniczne na każdym etapie procesu - od planowania do wdrożenia. Dodatkowo oferujemy szereg szkoleń, zarówno online, jak i stacjonarnych, aby pomóc naszym partnerom efektywnie wykorzystywać naszą platformę.
                        <br /><br />
                        Dostarczamy również materiały promocyjne wspierające działania naszych partnerów, a nasze długoterminowe, strategiczne podejście do współpracy pozwala osiągać wspólne cele.
                        <br /><br />
                        Wierzymy, że nasz sukces jest ściśle powiązany z sukcesem naszych partnerów. Zapraszamy do współtworzenia przyszłości opartej na efektywnym wykorzystaniu danych.
                      </Typography>
                    </>
                  )}
                </div>
              </GlassPaper>
            </Grid>
          </Grid>
        </div>
      )}
      <Box sx={{ mt: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" fontWeight={'bold'} textAlign={'center'}>
          Schemat działania naszego API
        </Typography>
        <img src={oferta} alt="oferta" style={{ width: '70%', height: '70%' }} />
      </Box>
      <Typography variant="h4" fontWeight={'bold'} textAlign={'center'}>
        Szeroki zasięg naszych usług
      </Typography>
      <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={centerOfPoland}
            zoom={6}
          >
            {locations.map((location, i) => (
              <Marker key={i} position={location} />
            ))}
          </GoogleMap>
        </LoadScript>
      </Box>
    </Container >
  );
};

export default Oferta;