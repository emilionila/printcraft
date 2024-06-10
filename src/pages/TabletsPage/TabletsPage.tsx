/* eslint-disable max-len */
import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import style from '../../assets/catalogue.module.scss';
import {Card} from '../../components/Card/Card';
import {Loader} from '../../components/Loader';
import {SortPanel} from '../../components/SortPanel/SortPanel';
import {Pagination} from '../../components/Pagination/Pagination';
import {Breadcrumbs} from '../../components/Breadcrumbs';
import {Search} from '../../components/SearchComponent/Search';
import {Product} from '../../types/product';
import {searchProductList} from '../../utils/helpers';
import {NotFoundSearchItems} from '../../components/NotFoundSearchItems/NotFoundSearchItems';

const scanners = [
    {
        "id": "Epson-EcoTank-L3250sad",
        "namespaceId": "Epson-EcoTank-L3250sad",
        "name": "Epson EcoTank L3250",
        "priceRegular": 1100,
        "priceActual": 1050,

        "colorsAvailable": [
            "black"
        ],
        "color": "black",
        "images": [
            "https://m.media-amazon.com/images/I/61Rvx5C7MBL._AC_SL1000_.jpg",
            "https://m.media-amazon.com/images/I/41dtZxP2g4L._AC_.jpg",
            "https://m.media-amazon.com/images/I/81kFBV9WGLL._AC_SL1500_.jpg",
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
        "id": "CanonCanoScanLiDE400(2996C010AA)",
        "namespaceId": "CanonCanoScanLiDE400(2996C010AA)",
        "name": "Canon CanoScan LiDE 400 (2996C010AA)",
        "priceRegular": 1100,
        "priceActual": 1050,
        "colorsAvailable": [
            "black"
        ],
        "color": "black",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big/16777884.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/16777902.jpg",
            "https://content.rozetka.com.ua/goods/images/big/16777927.jpg",
            "https://content.rozetka.com.ua/goods/images/big/16777950.jpg",
        ],
        "description": [
            {
                "title": "Scanning",
                "text": [
                    "An affordable 3-in-1 laser multifunctional device with support for high-quality A4 monochrome laser printing, fast color scanning and copying with convenient scaling. Positioned as an affordable mid-price product designed for small or home offices. It is distinguished by the traditionally high quality characteristic of all Canon brand devices, the presence of a vertical display, simple maintenance and the use of popular Canon 725 cartridges, which are easily remanufactured and refilled (the use of remanufactured or so-called compatible cartridges will void the official warranty)."]
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
        "id": "PlustekOpticSlim550Plus",
        "namespaceId": "Plustek-OpticSlim550Plus",
        "name": "Plustek OpticSlim 550 Plus",
        "priceRegular": 1100,
        "priceActual": 1050,
        "colorsAvailable": [
            "black"
        ],
        "color": "black",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big/13773362.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/13773379.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/13773405.jpg",
            "https://content.rozetka.com.ua/goods/images/big/13773432.jpg",
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
        "id": "PlustekOpticSlim2700 lack",
        "namespaceId": "PlustekOpticSlim2700Black",
        "name": "Plustek OpticSlim 2700 Black",
        "priceRegular": 1100,
        "priceActual": 1050,
        "colorsAvailable": [
            "black"
        ],
        "color": "black",
        "images": [
            "https://content1.rozetka.com.ua/goods/images/big/350945140.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/350945141.jpg",
            "https://content2.rozetka.com.ua/goods/images/big/350945142.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/350945143.jpg",
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
        "id": "Media-TechScanLineMT4090",
        "namespaceId": "Media-TechScanLineMT4090",
        "name": "Media-Tech ScanLine MT4090",
        "priceRegular": 1100,
        "priceActual": 1050,
        "colorsAvailable": [
            "black"
        ],
        "color": "black",
        "images": [
            "https://content.rozetka.com.ua/goods/images/big/340374428.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/340374430.jpg",
            "https://content.rozetka.com.ua/goods/images/big/340374433.jpg",
            "https://content.rozetka.com.ua/goods/images/big/340374438.jpg",
            "https://content.rozetka.com.ua/goods/images/big/340374445.jpg"
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
        "id": "CanonimageFORMULADR-S130Black(4812C001)",
        "namespaceId": "CanonDR-S130Black(4812C001)",
        "name": "Canon imageFORMULA DR-S130",
        "priceRegular": 1100,
        "priceActual": 1050,
        "colorsAvailable": [
            "black"
        ],
        "color": "black",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big/405213003.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/405213004.jpg",
            "https://content.rozetka.com.ua/goods/images/big/405213005.jpg",
            "https://content1.rozetka.com.ua/goods/images/big/405213006.jpg",
            "https://content.rozetka.com.ua/goods/images/big/405213007.jpg"
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
        "id": "CanonCanoScanLIDE300",
        "namespaceId": "CanonCanoScanLIDE300",
        "name": "Canon CanoScan LIDE 300",
        "priceRegular": 1172,
        "priceActual": 1115,
        "colorsAvailable": [
            "white"
        ],
        "color": "white",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big/19988562.jpg",
            "https://content.rozetka.com.ua/goods/images/big/19988576.jpg"
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
        "id": "FujitsuScanSnapA3SV600",
        "namespaceId": "FujitsuScanSnapA3SV600",
        "name": "Fujitsu ScanSnap A3 SV600",
        "priceRegular": 1172,
        "priceActual": 1115,
        "colorsAvailable": [
            "white"
        ],
        "color": "white",
        "images": [
            "https://content1.rozetka.com.ua/goods/images/big/333275718.jpg",
            "https://content2.rozetka.com.ua/goods/images/big/333275720.jpg",
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
        "id": "CanonimageFORMULA",
        "namespaceId": "CanonimageFORMULA",
        "name": "Canon imageFORMULA",
        "priceRegular": 1172,
        "priceActual": 1115,
        "colorsAvailable": [
            "white"
        ],
        "color": "white",
        "images": [
            "https://content2.rozetka.com.ua/goods/images/big/405213045.jpg",
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

export const TabletsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(12);
    const [tabletsList, setTabletsList] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const [serchParams, setSearchParams] = useSearchParams();
    const currentUrl = new URLSearchParams(serchParams);
    const sortBy = currentUrl.get('sortBy') || 'year';
    const order = currentUrl.get('sort') || 'DESC';

    useEffect(() => {
        setTabletsList(scanners);
        setIsLoading(false)
    }, [sortBy, order, tabletsList ]);

    const handleSortFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sortValue = event.target.value;
        let sortedList = [...scanners];

        if (sortValue === 'ASC') {
            sortedList.sort((a, b) => (a.name > b.name ? 1 : -1));
        } else if (sortValue === 'DESC') {
            sortedList.sort((a, b) => (a.name < b.name ? 1 : -1));
        }

        console.log(sortedList)

        setTabletsList(sortedList);
    };

    const handleSortPostCount = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPostPerPage(+event.target.value);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleSortOrder = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        currentUrl.set('sort', event.target.value);
        setSearchParams(currentUrl);
    };


    const visibleProduct = searchProductList(scanners, searchQuery);

    const indexOfLastItem = currentPage * postPerPage;
    const indexOfFirstItem = indexOfLastItem - postPerPage;
    const currentItems = visibleProduct.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <div className={style.CataloguePage}>
            <Breadcrumbs/>

            <h1 className={style.CataloguePage__title}>
                Scanners
            </h1>
            <p className={style.CataloguePage__CatalogueCount}>
                {`${tabletsList.length} models`}
            </p>

            <SortPanel
                onSortField={handleSortFieldChange}
                selectedSortField={sortBy}
                selectedSortOrder={order}
                onSelectOrder={handleSortFieldChange}
                onSelectPerPage={handleSortPostCount}
                postPerPage={postPerPage}
            />

            <Search
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
            />
            {isLoading ? (
                <Loader/>
            ) : (
                <>

                    {scanners.length > 0 ? (
                        <div className={style.CataloguePage__container}>
                            {scanners.map(product => (
                                <Card
                                    key={product.name}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <NotFoundSearchItems/>
                    )}

                    {visibleProduct.length > postPerPage ? (
                        <Pagination
                            postPorPage={postPerPage}
                            totalPost={visibleProduct.length}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    ) : (
                        <span/>
                    )}
                </>

            )}
        </div>
    );
};
