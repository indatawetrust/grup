import test from 'ava';
import g from './index';

const monitors = [
  'HP Pavilion 22cwa 21.5-inch IPS LED Backlit Monitor',
  'Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor',
  'Dell Computer Ultrasharp U2415 24.0-Inch Screen LED Monitor',
  'ASUS VS228H-P 21.5" Full HD 1920x1080 HDMI DVI VGA Back-lit LED Monitor',
  'LG 32MA68HY-P 32-Inch IPS Monitor with Display Port and HDMI Inputs',
  'ASUS VG248QE 24" Full HD 1920x1080 144Hz 1ms HDMI Gaming Monitor',
  'ViewSonic VX2452MH 24" 2ms 1080p Monitor HDMI, DVI, VGA',
  'Dell SE2416HX 23.8" Screen LED-Lit IPS Monitor',
  'ASUS VE278H 27" Full HD 1920x1080 2ms HDMI VGA Back-lit LED Monitor',
  'Dell UltraSharp U3415W PXF79 34-Inch Curved LED-Lit Monitor',
  'Acer GN246HL Bbid 24-Inch 3D Gaming Display (144Hz Refresh Rate)',
  'Samsung U28E590D 28-Inch UHD LED-Lit Monitor with Freesync support',
  'Dell UltraSharp U2414H 23.8” Inch Screen LED Monitor',
  'ASUS VS247H-P 23.6- Inch Full HD 1920x1080 2ms HDMI DVI VGA Monitor',
  'AOC I2267FW 22-Inch Class IPS Frameless/Slim LED Monitor, Full HD,250 cd/m2 Brightness,5ms,50M:1 DCR,VGA/DVI',
  'ViewSonic VA2446M-LED 24" 1080p LED Monitor DVI, VGA',
  'Dell Ultra HD 4K Monitor P2415Q 24-Inch Screen LED-Lit Monitor',
  'Acer G6 G276HL Gbd 27-Inch Full HD Widescreen LCD Monitor (1920 x 1080), Black',
  'AOC e1659Fwu 16-Inch Ultra Slim 1366x768 Res 200 cd/m2 Brightness USB 3.0-Powered Portable LED Monitor w/ Case',
  'ASUS ROG SWIFT PG279Q 27" 2560x1440 IPS 165Hz 4ms G-SYNC Eye Care Gaming Monitor',
  'HP 27er 27-in IPS LED Backlit Monitor',
  'Samsung SF350 Series 19-Inch Slim Design Monitor (S19F350)',
  'ASUS MX279H 27-Inch, Full HD 1920x1080 IPS, Audio by Bang & Olufsen ICEpower HDMI VGA Frameless Monitor',
  'Acer Predator 34-inch Curved UltraWide QHD (3440 x 1440) NVIDIA G-Sync Widescreen Display (X34 bmiphz)',
  'Nixeus Vue 24" 144Hz Gaming Monitor, AMD FreeSync, 1920x1080, 1ms, Adaptive-Sync 30Hz to 144Hz, Widescreen with...',
  'WASABI MANGO UHD400 REAL 4K HDMI 2.0 3840X2160 UHD Samsung PVA Panel 40-Inch Display Port 10Bit Monitor',
  'ViewSonic VP2780-4K 27" IPS 4K 2160p Pro Monitor HDMI, DisplayPort',
  'ViewSonic VX2757-MHD 27" 2ms 1080p FreeSync Monitor HDMI, DisplayPort',
  'ViewSonic VX2257-MHD 22" 2ms 1080p FreeSync Gaming Monitor HDMI, DisplayPort (Certified Refurbished)',
  'Dell S Series Screen LED-Lit Monitor 21.5" Black (S2218M)',
];

const datas = {
  led: [
    'HP Pavilion 22cwa 21.5-inch IPS LED Backlit Monitor',
    'Dell Computer Ultrasharp U2415 24.0-Inch Screen LED Monitor',
    'ASUS VS228H-P 21.5" Full HD 1920x1080 HDMI DVI VGA Back-lit LED Monitor',
    'Dell SE2416HX 23.8" Screen LED-Lit IPS Monitor',
    'ASUS VE278H 27" Full HD 1920x1080 2ms HDMI VGA Back-lit LED Monitor',
    'Dell UltraSharp U3415W PXF79 34-Inch Curved LED-Lit Monitor',
    'Samsung U28E590D 28-Inch UHD LED-Lit Monitor with Freesync support',
    'Dell UltraSharp U2414H 23.8” Inch Screen LED Monitor',
    'AOC I2267FW 22-Inch Class IPS Frameless/Slim LED Monitor, Full HD,250 cd/m2 Brightness,5ms,50M:1 DCR,VGA/DVI',
    'ViewSonic VA2446M-LED 24" 1080p LED Monitor DVI, VGA',
    'Dell Ultra HD 4K Monitor P2415Q 24-Inch Screen LED-Lit Monitor',
    'AOC e1659Fwu 16-Inch Ultra Slim 1366x768 Res 200 cd/m2 Brightness USB 3.0-Powered Portable LED Monitor w/ Case',
    'HP 27er 27-in IPS LED Backlit Monitor',
    'Dell S Series Screen LED-Lit Monitor 21.5" Black (S2218M)',
  ],
  hdmi: [
    'Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor',
    'ASUS VS228H-P 21.5" Full HD 1920x1080 HDMI DVI VGA Back-lit LED Monitor',
    'LG 32MA68HY-P 32-Inch IPS Monitor with Display Port and HDMI Inputs',
    'ASUS VG248QE 24" Full HD 1920x1080 144Hz 1ms HDMI Gaming Monitor',
    'ViewSonic VX2452MH 24" 2ms 1080p Monitor HDMI, DVI, VGA',
    'ASUS VE278H 27" Full HD 1920x1080 2ms HDMI VGA Back-lit LED Monitor',
    'ASUS VS247H-P 23.6- Inch Full HD 1920x1080 2ms HDMI DVI VGA Monitor',
    'ASUS MX279H 27-Inch, Full HD 1920x1080 IPS, Audio by Bang & Olufsen ICEpower HDMI VGA Frameless Monitor',
    'WASABI MANGO UHD400 REAL 4K HDMI 2.0 3840X2160 UHD Samsung PVA Panel 40-Inch Display Port 10Bit Monitor',
    'ViewSonic VP2780-4K 27" IPS 4K 2160p Pro Monitor HDMI, DisplayPort',
    'ViewSonic VX2757-MHD 27" 2ms 1080p FreeSync Monitor HDMI, DisplayPort',
    'ViewSonic VX2257-MHD 22" 2ms 1080p FreeSync Gaming Monitor HDMI, DisplayPort (Certified Refurbished)',
  ],
  lcd: [
    'Acer G6 G276HL Gbd 27-Inch Full HD Widescreen LCD Monitor (1920 x 1080), Black',
  ],
};

const datas2 = {
  '/HP/': [
    'HP Pavilion 22cwa 21.5-inch IPS LED Backlit Monitor',
    'HP 27er 27-in IPS LED Backlit Monitor',
  ],
  '/Moni*/': [
    'HP Pavilion 22cwa 21.5-inch IPS LED Backlit Monitor',
    'Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor',
    'Dell Computer Ultrasharp U2415 24.0-Inch Screen LED Monitor',
    'ASUS VS228H-P 21.5" Full HD 1920x1080 HDMI DVI VGA Back-lit LED Monitor',
    'LG 32MA68HY-P 32-Inch IPS Monitor with Display Port and HDMI Inputs',
    'ASUS VG248QE 24" Full HD 1920x1080 144Hz 1ms HDMI Gaming Monitor',
    'ViewSonic VX2452MH 24" 2ms 1080p Monitor HDMI, DVI, VGA',
    'Dell SE2416HX 23.8" Screen LED-Lit IPS Monitor',
    'ASUS VE278H 27" Full HD 1920x1080 2ms HDMI VGA Back-lit LED Monitor',
    'Dell UltraSharp U3415W PXF79 34-Inch Curved LED-Lit Monitor',
    'Samsung U28E590D 28-Inch UHD LED-Lit Monitor with Freesync support',
    'Dell UltraSharp U2414H 23.8” Inch Screen LED Monitor',
    'ASUS VS247H-P 23.6- Inch Full HD 1920x1080 2ms HDMI DVI VGA Monitor',
    'AOC I2267FW 22-Inch Class IPS Frameless/Slim LED Monitor, Full HD,250 cd/m2 Brightness,5ms,50M:1 DCR,VGA/DVI',

    'ViewSonic VA2446M-LED 24" 1080p LED Monitor DVI, VGA',
    'Dell Ultra HD 4K Monitor P2415Q 24-Inch Screen LED-Lit Monitor',
    'Acer G6 G276HL Gbd 27-Inch Full HD Widescreen LCD Monitor (1920 x 1080), Black',
    'AOC e1659Fwu 16-Inch Ultra Slim 1366x768 Res 200 cd/m2 Brightness USB 3.0-Powered Portable LED Monitor w/ Case',
    'ASUS ROG SWIFT PG279Q 27" 2560x1440 IPS 165Hz 4ms G-SYNC Eye Care Gaming Monitor',
    'HP 27er 27-in IPS LED Backlit Monitor',
    'Samsung SF350 Series 19-Inch Slim Design Monitor (S19F350)',
    'ASUS MX279H 27-Inch, Full HD 1920x1080 IPS, Audio by Bang & Olufsen ICEpower HDMI VGA Frameless Monitor',
    'Nixeus Vue 24" 144Hz Gaming Monitor, AMD FreeSync, 1920x1080, 1ms, Adaptive-Sync 30Hz to 144Hz, Widescreen with...',
    'WASABI MANGO UHD400 REAL 4K HDMI 2.0 3840X2160 UHD Samsung PVA Panel 40-Inch Display Port 10Bit Monitor',
    'ViewSonic VP2780-4K 27" IPS 4K 2160p Pro Monitor HDMI, DisplayPort',
    'ViewSonic VX2757-MHD 27" 2ms 1080p FreeSync Monitor HDMI, DisplayPort',
    'ViewSonic VX2257-MHD 22" 2ms 1080p FreeSync Gaming Monitor HDMI, DisplayPort (Certified Refurbished)',
    'Dell S Series Screen LED-Lit Monitor 21.5" Black (S2218M)',
  ],
  '/Dell/': [
    'Dell Computer Ultrasharp U2415 24.0-Inch Screen LED Monitor',
    'Dell SE2416HX 23.8" Screen LED-Lit IPS Monitor',
    'Dell UltraSharp U3415W PXF79 34-Inch Curved LED-Lit Monitor',
    'Dell UltraSharp U2414H 23.8” Inch Screen LED Monitor',
    'Dell Ultra HD 4K Monitor P2415Q 24-Inch Screen LED-Lit Monitor',
    'Dell S Series Screen LED-Lit Monitor 21.5" Black (S2218M)',
  ],
  '/ASUS/': [
    'ASUS VS228H-P 21.5" Full HD 1920x1080 HDMI DVI VGA Back-lit LED Monitor',
    'ASUS VG248QE 24" Full HD 1920x1080 144Hz 1ms HDMI Gaming Monitor',
    'ASUS VE278H 27" Full HD 1920x1080 2ms HDMI VGA Back-lit LED Monitor',
    'ASUS VS247H-P 23.6- Inch Full HD 1920x1080 2ms HDMI DVI VGA Monitor',
    'ASUS ROG SWIFT PG279Q 27" 2560x1440 IPS 165Hz 4ms G-SYNC Eye Care Gaming Monitor',
    'ASUS MX279H 27-Inch, Full HD 1920x1080 IPS, Audio by Bang & Olufsen ICEpower HDMI VGA Frameless Monitor',
  ],
};

test('group keys', t => {
  t.is(Object.keys(g(monitors)).length, 181);
});

test('hdmi group', t => {
  const keys = ['hdmi', 'led', 'lcd'];

  const _ = g(monitors, keys);

  for (let key of keys)
    t.deepEqual(_[key], datas[key]);
});

test('regex group', t => {

  const keys = [/HP/, /ASUS/, /Dell/, /Moni*/];

  const _ = g(monitors, keys);

  for (let key of keys)
    t.deepEqual(_[key], datas2[key]);

});
