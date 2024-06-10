/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Card } from '../Card/Card';
import styles from './Carousel.module.scss';
import arrow from '../../icons/SliderButtonRight.png';
import { Loader } from '../Loader';
import { CaruselSort } from '../../types/CaruselSort';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 4.5,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1199, min: 860 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  tabletSmall: {
    breakpoint: { max: 859, min: 641 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 60,
  },
  largeMobile: {
    breakpoint: { max: 640, min: 400 },
    items: 1.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 400, min: 320 },
    items: 1,
    slidesToSlide: 1,
  },
};

const printers = [
  {
    "id": "Epson-EcoTank-L3250",
    "namespaceId": "Epson-EcoTank-L3250",
    "name": "Epson EcoTank L3250",
    "priceRegular": 1100,
    "priceActual": '1050',
    "colorsAvailable": [
      "black"
    ],
    "color": "black",
    "images": [
      "https://s.ek.ua/jpg_zoom1/2139580.jpg",
      "https://s.ek.ua/jpg_zoom1/2139580.jpg",
      "https://mzimg.com/big/11/gx01uxiba11.jpg",
      "https://mzimg.com/big/71/gx01uy0ne71.jpg",
      "https://mzimg.com/big/x1/gx01uykjux1.jpg"
    ],
    "description": [
      {
        "title": "Versions: L3250 - black MFP",
        "text": [
          "Relatively compact model of an efficient and performant inkjet multifunctional printer with built-in continuous ink supply (CISS) and integrated Wi-Fi 4 wireless adapter. Launched in 2021 as part of Epson's L family of devices aimed at home or small office use . It is positioned as a product of the middle price category. The Epson EcoTank L3250 MFP can perform the functions of a classic inkjet printer, including a photo printer (print speed is 69 s per 10x15 cm page), an A4 flatbed scanner and a copier."
        ]
      },
      {
        "title": "L3251 - black MFP",
        "text": [
          "Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it."
        ]
      },
      {
        "title": "The front control panel is blue, the L3256 is a white MFP",
        "text": [
          "The integrated flatbed scanner boasts a scanning resolution of up to 1200x2400 dpi, which is quite enough for scanning photos and documents. The control panel is devoid of a display, but it provides the possibility of both wired connection to a PC (USB interface) and wireless (Wi-Fi 4 interface). The manufacturer also implemented the ability to print directly from smartphones, Epson iPrint and Epson Email Print cloud printing services are supported."
        ]
      }
    ],
    "type": "colour, flowers 4, inkjet",
    "connection": "USB B, Wi-Fi 4 (802.11n)",
    "scanning": "1200х2400 dpi",
    "colourPrint": "15 ppm",
    "format": "A4",
    "resolution": "5760x1440 dpi"
  },
  {
    "id": "Canon-i-SENSYS-MF3010",
    "namespaceId": "Canon-i-SENSYS-MF3010",
    "name": "Canon i-SENSYS MF3010",
    "priceRegular": 1100,
    "priceActual": 1050,
    "colorsAvailable": [
      "black"
    ],
    "color": "black",
    "images": [
      "https://s.ek.ua/jpg_zoom1/169982.jpg",
      "https://mzimg.com/big/s1/dohkyl2kbs1.jpg",
      "https://mzimg.com/big/81/fpkq3xuqr81.jpg",
      "https://mzimg.com/big/f1/ge8s0r3v3f1.jpg",
      "https://mzimg.com/big/g1/ge8s0rdr6g1.jpg"
    ],
    "description": [
      {
        "title": "Scanning",
        "text": [
          "An affordable 3-in-1 laser multifunctional device with support for high-quality A4 monochrome laser printing, fast color scanning and copying with convenient scaling. Positioned as an affordable mid-price product designed for small or home offices. It is distinguished by the traditionally high quality characteristic of all Canon brand devices, the presence of a vertical display, simple maintenance and the use of popular Canon 725 cartridges, which are easily remanufactured and refilled (the use of remanufactured or so-called compatible cartridges will void the official warranty)."        ]
      },
      {
        "title": "Cut it. Light it. Tweak it. Love it.",
        "text": [
          "With a standard USB port, the Canon i-SENSYS MF3010 All-In-One connects easily to your PC, laptop or workstation. The manufacturer claims support for current versions of Windows 11/10/8.1, Windows Server from 2022 to 2008, Mac OS X 10.4.9-10.7.x1 and Linux. Despite its affordable price (the youngest model in the family) and modest dimensions, this device is equipped with spacious trays and quickly reaches operating mode during hot/cold starts. This feature, as well as the decent operating speed of the printer (up to 18 ppm A4), ensures quick output or fast copying of large multi-page documents."
        ]
      }
    ],
    "type": "monochrome, laser",
    "connection": "USB B",
    "scanning": "600х1200 dpi",
    "colourPrint": "18 ppm",
    "format": "A4",
    "resolution": "1200х600 dpi"
  },
  {
    "id": "Canon-PIXMA-G3410",
    "namespaceId": "Canon-PIXMA-G3410",
    "name": "Canon PIXMA G3410",
    "priceRegular": 1100,
    "priceActual": 1050,
    "colorsAvailable": [
      "black"
    ],
    "color": "black",
    "images": [
      "https://s.ek.ua/jpg_zoom1/1322438.jpg",
      "https://mzimg.com/big/a1/fp4lnd996a1.jpg",
      "https://mzimg.com/big/91/g7jzo4lcg91.jpg",
      "https://mzimg.com/big/v1/fp4lncymwv1.jpg",
      "https://mzimg.com/big/11/ge8rvphkq11.jpg"
    ],
    "description": [
      {
        "title": "Updated version of Canon PIXMA G3400.",
        "text": [
          "Compact and versatile MFP (scanner-printer-copier) with a built-in factory continuous ink supply system. Positioned as a mid-range product designed for use in a small office or home. It is an updated and improved version of the very successful Canon PIXMA G3400 MFP. The main difference between this model and its predecessors, equipped with separate print cartridges, is a greatly increased resource and a much lower cost of printing."
        ]
      },
      {
        "title": "Built-in CISS. Economical ink consumption. Printing over Wi-Fi.\n",
        "text": [
          "The standard black ink supply is enough for 6,000 pages (5% coverage), and the supply of colour ink is enough for 7,000 pages. A flatbed scanner of A4 format with a resolution of 600x1200 dpi is provided, which is enough for high-quality scanning of photographs and copying monochrome documents. Connection to a computer is carried out via a standard USB 2.0 interface. Thanks to the presence of a Wi-Fi module, wireless printing is possible from smartphones running Android and iOS (requires a pre-installed application). The PIXMA Cloud Link cloud printing service is also supported. The MFP is able to work with paper of various thicknesses and densities, it can print high-quality colour photos without borders.\n\n"
        ]
      }
    ],
    "type": "colour, flowers 4, inkjet",
    "connection": "USB B, Wi-Fi 4 (802.11n)",
    "scanning": "600х1200 dpi",
    "colourPrint": "5 ppm",
    "format": "A4",
    "resolution": "4800x1200 dpi"
  },
  {
    "id": "HP-LaserJet-M140W",
    "namespaceId": "HP-LaserJet-M140W",
    "name": "HP LaserJet M140W",
    "priceRegular": 1100,
    "priceActual": 1050,
    "colorsAvailable": [
      "white"
    ],
    "color": "white",
    "images": [
      "https://s.ek.ua/jpg_zoom1/2255849.jpg",
      "https://mzimg.com/big/e1/h4wh9ooqde1.jpg",
      "https://mzimg.com/big/01/h4wh9oqun01.jpg",
      "https://mzimg.com/big/91/h4wh9p57i91.jpg",
      "https://mzimg.com/big/g1/h4wh9pa1zg1.jpg"
    ],
    "description": [
      {
        "title": "And then there was Pro",
        "text": [
          "Arelatively inexpensive multifunctional device that combines a monochrome laser printer, scanner and copier. This is one of the most compact and lightweight MFPs for office work. Case dimensions are 360x264x197 mm. The device confidently copes with printing up to 8 thousand pages per month, while the print quality corresponds to a resolution of 600x600 dpi. The optical scanning system has the same resolution."
        ]
      }
    ],
    "type": "monochrome, laser",
    "connection": ":USB B, Bluetooth, Wi-Fi 4 (802.11nm)",
    "scanning": "600х600 dpi",
    "colourPrint": "21 ppm",
    "format": "A4",
    "resolution": "600х600 dpi"
  },
  {
    "id": "Epson-EcoTank-L3260",
    "namespaceId": "Epson-EcoTank-L3260",
    "name": "Epson EcoTank L3260",
    "priceRegular": 1100,
    "priceActual": 1050,
    "colorsAvailable": [
      "black"
    ],
    "color": "black",
    "images": [
      "https://s.ek.ua/jpg_zoom1/2139581.jpg",
      "https://s.ek.ua/jpg_zoom1/2139581.jpg",
      "https://mzimg.com/big/91/gx02lb8e591.jpg",
      "https://mzimg.com/big/c1/gx02lbpacc1.jpg",
      "https://mzimg.com/big/01/gx02lbqh101.jpg"
    ],
    "description": [
      {
        "title": "Updated version of Canon PIXMA G3400.",
        "text": [
          "Compact and versatile MFP (scanner-printer-copier) with a built-in factory continuous ink supply system. Positioned as a mid-range product designed for use in a small office or home. It is an updated and improved version of the very successful Canon PIXMA G3400 MFP. The main difference between this model and its predecessors, equipped with separate print cartridges, is a greatly increased resource and a much lower cost of printing."
        ]
      },
      {
        "title": "Built-in CISS. Economical ink consumption. Printing over Wi-Fi.\n",
        "text": [
          "The standard black ink supply is enough for 6,000 pages (5% coverage), and the supply of colour ink is enough for 7,000 pages. A flatbed scanner of A4 format with a resolution of 600x1200 dpi is provided, which is enough for high-quality scanning of photographs and copying monochrome documents. Connection to a computer is carried out via a standard USB 2.0 interface. Thanks to the presence of a Wi-Fi module, wireless printing is possible from smartphones running Android and iOS (requires a pre-installed application). The PIXMA Cloud Link cloud printing service is also supported. The MFP is able to work with paper of various thicknesses and densities, it can print high-quality colour photos without borders.\n\n"
        ]
      }
    ],
    "type": "colour, flowers 4, inkjet",
    "connection": "USB B, Wi-Fi 4 (802.11n)",
    "scanning": "600х1200 dpi",
    "colourPrint": "5 ppm",
    "format": "A4",
    "resolution": "4800x1200 dpi"
  },
  {
    "id": "Xerox-WorkCentre-3025BI",
    "namespaceId": "Xerox-WorkCentre-3025BI",
    "name": "Xerox WorkCentre 3025BI",
    "priceRegular": 1100,
    "priceActual": 1050,
    "colorsAvailable": [
      "white"
    ],
    "color": "white",
    "images": [
      "https://s.ek.ua/jpg_zoom1/587626.jpg",
      "https://mzimg.com/big/e1/fg3h2s3ooe1.jpg",
      "https://mzimg.com/big/61/geb2ki2jv61.jpg",
      "https://mzimg.com/big/e1/geb2kiga2e1.jpg",
      "https://mzimg.com/big/01/geb2kj77001.jpg"
    ],
    "description": [
      {
        "title": "Updated version of Canon PIXMA G3400.",
        "text": [
          "Compact and versatile MFP (scanner-printer-copier) with a built-in factory continuous ink supply system. Positioned as a mid-range product designed for use in a small office or home. It is an updated and improved version of the very successful Canon PIXMA G3400 MFP. The main difference between this model and its predecessors, equipped with separate print cartridges, is a greatly increased resource and a much lower cost of printing."
        ]
      },
      {
        "title": "Built-in CISS. Economical ink consumption. Printing over Wi-Fi.\n",
        "text": [
          "The standard black ink supply is enough for 6,000 pages (5% coverage), and the supply of colour ink is enough for 7,000 pages. A flatbed scanner of A4 format with a resolution of 600x1200 dpi is provided, which is enough for high-quality scanning of photographs and copying monochrome documents. Connection to a computer is carried out via a standard USB 2.0 interface. Thanks to the presence of a Wi-Fi module, wireless printing is possible from smartphones running Android and iOS (requires a pre-installed application). The PIXMA Cloud Link cloud printing service is also supported. The MFP is able to work with paper of various thicknesses and densities, it can print high-quality colour photos without borders.\n\n"
        ]
      }
    ],
    "type": "colour, flowers 4, inkjet",
    "connection": "USB B, Wi-Fi 4 (802.11n)",
    "scanning": "600х1200 dpi",
    "colourPrint": "5 ppm",
    "format": "A4",
    "resolution": "4800x1200 dpi"
  },
  {
    "id": "Canon-i-SENSYS-MF655CDW",
    "namespaceId": "Canon-i-SENSYS-MF655CDW",
    "name": "Canon i-SENSYS MF655CDW",
    "priceRegular": 1172,
    "priceActual": 1115,
    "colorsAvailable": [
      "white"
    ],
    "color": "white",
    "images": [
      "https://s.ek.ua/jpg_zoom1/2375030.jpg",
      "https://mzimg.com/big/41/hfu8srm4t41.jpg"
    ],
    "description": [
      {
        "title": "Updated version of Canon PIXMA G3400.",
        "text": [
          "Compact and versatile MFP (scanner-printer-copier) with a built-in factory continuous ink supply system. Positioned as a mid-range product designed for use in a small office or home. It is an updated and improved version of the very successful Canon PIXMA G3400 MFP. The main difference between this model and its predecessors, equipped with separate print cartridges, is a greatly increased resource and a much lower cost of printing."
        ]
      },
      {
        "title": "Built-in CISS. Economical ink consumption. Printing over Wi-Fi.\n",
        "text": [
          "The standard black ink supply is enough for 6,000 pages (5% coverage), and the supply of colour ink is enough for 7,000 pages. A flatbed scanner of A4 format with a resolution of 600x1200 dpi is provided, which is enough for high-quality scanning of photographs and copying monochrome documents. Connection to a computer is carried out via a standard USB 2.0 interface. Thanks to the presence of a Wi-Fi module, wireless printing is possible from smartphones running Android and iOS (requires a pre-installed application). The PIXMA Cloud Link cloud printing service is also supported. The MFP is able to work with paper of various thicknesses and densities, it can print high-quality colour photos without borders.\n\n"
        ]
      }
    ],
    "type": "colour, flowers 4, inkjet",
    "connection": "USB B, Wi-Fi 4 (802.11n)",
    "scanning": "600х1200 dpi",
    "colourPrint": "5 ppm",
    "format": "A4",
    "resolution": "4800x1200 dpi"
  },
  {
    "id": "Canon-PIXMA-G3430",
    "namespaceId": "Canon-PIXMA-G3430",
    "name": "Canon PIXMA G3430",
    "priceRegular": 1172,
    "priceActual": 1115,
    "colorsAvailable": [
      "black"
    ],
    "color": "black",
    "images": [
      "https://s.ek.ua/jpg_zoom1/2461416.jpg",
      "https://mzimg.com/big/k1/hej8hco1pk1.jpg"
    ],
    "description": [
      {
        "title": "Updated version of Canon PIXMA G3400.",
        "text": [
          "Compact and versatile MFP (scanner-printer-copier) with a built-in factory continuous ink supply system. Positioned as a mid-range product designed for use in a small office or home. It is an updated and improved version of the very successful Canon PIXMA G3400 MFP. The main difference between this model and its predecessors, equipped with separate print cartridges, is a greatly increased resource and a much lower cost of printing."
        ]
      },
      {
        "title": "Built-in CISS. Economical ink consumption. Printing over Wi-Fi.\n",
        "text": [
          "The standard black ink supply is enough for 6,000 pages (5% coverage), and the supply of colour ink is enough for 7,000 pages. A flatbed scanner of A4 format with a resolution of 600x1200 dpi is provided, which is enough for high-quality scanning of photographs and copying monochrome documents. Connection to a computer is carried out via a standard USB 2.0 interface. Thanks to the presence of a Wi-Fi module, wireless printing is possible from smartphones running Android and iOS (requires a pre-installed application). The PIXMA Cloud Link cloud printing service is also supported. The MFP is able to work with paper of various thicknesses and densities, it can print high-quality colour photos without borders.\n\n"
        ]
      }
    ],
    "type": "colour, flowers 4, inkjet",
    "connection": "USB B, Wi-Fi 4 (802.11n)",
    "scanning": "600х1200 dpi",
    "colourPrint": "5 ppm",
    "format": "A4",
    "resolution": "4800x1200 dpi"
  },
  {
    "id": "HP-Laser-135W",
    "namespaceId": "HP-Laser-135W",
    "name": "HP Laser 135W",
    "priceRegular": 1172,
    "priceActual": 1115,
    "colorsAvailable": [
      "white"
    ],
    "color": "white",
    "images": [
      "https://mzimg.com/big/k1/hej8hco1pk1.jpg",
      "https://mzimg.com/big/k1/hej8hco1pk1.jpg",
      "https://mzimg.com/big/k1/hej8hco1pk1.jpg",
      "https://mzimg.com/big/k1/hej8hco1pk1.jpg",
      "https://mzimg.com/big/k1/hej8hco1pk1.jpg"
    ],
    "description": [
      {
        "title": "Updated version of Canon PIXMA G3400.",
        "text": [
          "Compact and versatile MFP (scanner-printer-copier) with a built-in factory continuous ink supply system. Positioned as a mid-range product designed for use in a small office or home. It is an updated and improved version of the very successful Canon PIXMA G3400 MFP. The main difference between this model and its predecessors, equipped with separate print cartridges, is a greatly increased resource and a much lower cost of printing."
        ]
      },
      {
        "title": "Built-in CISS. Economical ink consumption. Printing over Wi-Fi.\n",
        "text": [
          "The standard black ink supply is enough for 6,000 pages (5% coverage), and the supply of colour ink is enough for 7,000 pages. A flatbed scanner of A4 format with a resolution of 600x1200 dpi is provided, which is enough for high-quality scanning of photographs and copying monochrome documents. Connection to a computer is carried out via a standard USB 2.0 interface. Thanks to the presence of a Wi-Fi module, wireless printing is possible from smartphones running Android and iOS (requires a pre-installed application). The PIXMA Cloud Link cloud printing service is also supported. The MFP is able to work with paper of various thicknesses and densities, it can print high-quality colour photos without borders.\n\n"
        ]
      }
    ],
    "type": "colour, flowers 4, inkjet",
    "connection": "USB B, Wi-Fi 4 (802.11n)",
    "scanning": "600х1200 dpi",
    "colourPrint": "5 ppm",
    "format": "A4",
    "resolution": "4800x1200 dpi"
  },
  {
    "id": "Epson-L8160 ",
    "namespaceId": "Epson-L8160",
    "name": "Epson L8160 ",
    "priceRegular": 1172,
    "priceActual": 1115,
    "colorsAvailable": [
      "white"
    ],
    "color": "white",
    "images": [
      "https://s.ek.ua/jpg_zoom1/2066687.jpg",
      "https://mzimg.com/big/11/gt2kwjdbr11.jpg",
      "https://mzimg.com/big/21/gt2kwjege21.jpg",
      "https://mzimg.com/big/91/gt2kwk1pj91.jpg",
      "https://mzimg.com/big/k1/gt2kwk735k1.jpg"
    ],
    "description": [
      {
        "title": "Updated version of Canon PIXMA G3400.",
        "text": [
          "Compact and versatile MFP (scanner-printer-copier) with a built-in factory continuous ink supply system. Positioned as a mid-range product designed for use in a small office or home. It is an updated and improved version of the very successful Canon PIXMA G3400 MFP. The main difference between this model and its predecessors, equipped with separate print cartridges, is a greatly increased resource and a much lower cost of printing."
        ]
      },
      {
        "title": "Built-in CISS. Economical ink consumption. Printing over Wi-Fi.\n",
        "text": [
          "The standard black ink supply is enough for 6,000 pages (5% coverage), and the supply of colour ink is enough for 7,000 pages. A flatbed scanner of A4 format with a resolution of 600x1200 dpi is provided, which is enough for high-quality scanning of photographs and copying monochrome documents. Connection to a computer is carried out via a standard USB 2.0 interface. Thanks to the presence of a Wi-Fi module, wireless printing is possible from smartphones running Android and iOS (requires a pre-installed application). The PIXMA Cloud Link cloud printing service is also supported. The MFP is able to work with paper of various thicknesses and densities, it can print high-quality colour photos without borders.\n\n"
        ]
      }
    ],
    "type": "colour, flowers 4, inkjet",
    "connection": "USB B, Wi-Fi 4 (802.11n)",
    "scanning": "600х1200 dpi",
    "colourPrint": "5 ppm",
    "format": "A4",
    "resolution": "4800x1200 dpi"
  }
]

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  next,
  previous,
  carouselState,
}: ButtonGroupProps) => {
  const currentSlide = carouselState?.currentSlide ?? 0;
  const isInitialSlide = currentSlide === 0;

  const handlePrevClick = () => {
    if (previous) {
      previous();
    }
  };

  const handleNextClick = () => {
    if (next) {
      next();
    }
  };

  return (
    <div className={classNames(styles['carousel-button-group'])}>
      <button
        type="button"
        className={classNames(
          styles.button,
          { [styles['button--disabled']]: isInitialSlide },
        )}
        aria-label="previous slide / item"
        onClick={handlePrevClick}
      >
        <img
          src={arrow}
          alt="arrow_left"
          className={classNames(styles.buttonImg)}
        />
      </button>

      <button
        type="button"
        className={classNames(styles.button, styles.buttonRight)}
        aria-label="next slide / item"
        onClick={handleNextClick}
      >
        <img
          src={arrow}
          alt="arrow_right"
          className={classNames(styles.buttonImg, styles['button--right'])}
        />
      </button>
    </div>
  );
};

interface Props {
  title: string;
  selectedSortCarusel: string;
  categoryId?: number;
}

export const Carusel: React.FC<Props> = ({ title, selectedSortCarusel, categoryId }) => {
  const [phonesList, setphonesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        let data;



        if (selectedSortCarusel === CaruselSort.Years) {
          response = await fetch(`../../api/products.json`);
        } else if (selectedSortCarusel === CaruselSort.HotPrices) {
          response = await fetch(`/api/products.json`);
        } else {
          response = await fetch(`/api/printers.json`);
        }

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Network response was not ok: ${text}`);
        }

        data = await response.json();
        setphonesList(data); // Update state with the fetched data
        console.log(phonesList)
      } catch (error) {
        console.error('Error when fetching data from API', error);
      } finally {
        setIsLoading(false); // Ensure loading state is reset
      }
    };

    fetchData();
  }, [selectedSortCarusel, categoryId]);


  return (
    <section className={classNames(styles.CarouselContainer)}>
      <div className={classNames(styles.carusel__title)}>{title}</div>
      {isLoading ? (
        <Loader />
      ) : (
        <Carousel
          itemClass={classNames(styles.Cards, 'Cards')}
          responsive={responsive}
          customButtonGroup={<ButtonGroup />}
          arrows={false}
          renderButtonGroupOutside
          partialVisible
          infinite
        >
          {printers.map((product) => (
            <Card product={product} key={uuidv4()} />
          ))}
        </Carousel>
      )}
    </section>
  );
};