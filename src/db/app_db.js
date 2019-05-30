/*

    *** events schema ***

    "eventDateStart":{
      eventName: "",
      date:{
        start: "",
        end: ""
      }, 
      location: {
        en: {
          name:"",
          address: "",
          city: "",
          state:"",
          zip: ""
        },
        ko:{
          name: "",
          city:""
        }
      },
      description: "",
      exhibitor: 0,
      expectedVisitor: 0,
      exhibition: [
        [],[]
      ],
      images: {
        thumbnail: "",
        other: []
      }
    }

    *** companies schema ***
    "company name": {
      name: "",
      desc: "",
      images: {
        thumbnail: ""
      }
    }
*/

export default {
  events: {
    "2019-04-08": {
      eventName: {
        ko: "라스베가스 방송기자재 박람회",
        en: "NAB 2019"
      },
      date: {
        start: "2019-04-08",
        end: "2019-04-11"
      },
      location: {
        en: {
          name: "Las Vegas Convention Center",
          address: "3150 Paradise Rd",
          city: "Las Vegas",
          state: "NV",
          zip: "89109"
        },
        ko: {
          name: "라스베가스 컨벤션 센터",
          city: "라스베가스"
        }
      },
      description:
        "방송장비, 위성, 통신 및 기술 전반으로 전시. 세계 최대 규모의 방송 기자재 전문 박람회.",
      exhibitor: "1,700",
      expectedVisitor: "100,000",
      exhibition: [
        "Acquisition & Production",
        "Content - Music and Sound Libraries",
        "Display Systems - Digital Signage(Hardware and software)",
        "Industry Resources - Research/Data Science, Analytics, Data Visualizations",
        "Post-Production - Animation and VFX,Audio Editing",
        "Radio - Advertising and Media Sales Solutions(SSP, DMP,DSP)"
      ],
      images: {
        thumbnail: "/assets/image/event-images/nab-2019.jpg",
        banner:
          "https://www.xytechsystems.com/wp-content/uploads/2017/04/blog_image_blue_nab-1170x500.gif",
        other: [
          "https://shorttakes.professional-lighting.com/content/images/2018/04/12-NAB-Show.jpg",
          "https://vintageking.com/wp/wp-content/uploads/NAB2018.jpg"
        ]
      }
    },

    "2019-04-10": {
      eventName: {
        ko: "라스베가스 보안장비 박람회",
        en: "ISC WEST 2019"
      },
      date: {
        start: "2019-04-10",
        end: "2019-04-12"
      },
      location: {
        en: {
          name: "Sands Expo",
          address: "201 Sands Ave.",
          city: "Las Vegas",
          state: "NV",
          zip: "89169"
        },
        ko: {
          name: "샌즈 엑스포",
          city: "라스베가스"
        }
      },
      description: "미국 최대의 통합 보안 업계 전시회",
      exhibitor: "1,000",
      expectedVisitor: "30,000",
      exhibition: [
        "액세스 제어",
        "생체 인식",
        "도난 경보 및 모니터링",
        "CCTV 및 원격 모니터링",
        "데이터 보안",
        "지문 및 얼굴 인식",
        "화재 경보기 및 감지기, 가스, 연기 및 전문 금속 탐지기",
        "홈 오토메이션",
        "잠금 장치",
        "공공 보안",
        "주거용 및 상업용 감시 장비",
        "시스템 통합",
        "보안 카드 및 관련 특수 잠금 장치",
        "무선 보안 응용 프로그램"
      ],
      images: {
        thumbnail: "/assets/image/event-images/isc-west-2019.jpg",
        banner:
          "https://bioconnect.com/assets/img/events/article-images/event-190410_iscwest_article.jpg",
        other: []
      }
    },
    "2019-05-07": {
      eventName: {
        ko: "라스베가스 전자부품 박람회",
        en: "EDS 2019"
      },
      date: {
        start: "2019-05-07",
        end: "2019-05-10"
      },
      location: {
        en: {
          name: "The Mirage Las Vegas",
          address: "3400 S Las Vegas Blvd.",
          city: "Las Vegas",
          state: "NV",
          zip: "89109"
        },
        ko: {
          name: "더 므라지",
          city: "라스베가스"
        }
      },
      description: "전자부품 박람회 및 리더십 서밋",
      exhibitor: "300",
      expectedVisitor: "4,500",
      exhibition: [
        "Passive and Electromechanical Components",
        "Instruments",
        "Datacom Products",
        "Accessories",
        "Active Components",
        "Publications",
        "Value added equipments",
        "Data Processing Equipment and software",
        "Office and warehouse equipment",
        "Consulting Services"
      ],
      images: {
        thumbnail: "/assets/image/event-images/eds-2019.jpg",
        banner: "https://edssummit.com/assets/email/footer.jpg",
        other: []
      }
    },
    "2019-05-07_1": {
      eventName: {
        ko: "라스베가스 하드웨어 박람회",
        en: "National Hardware Show 2019"
      },
      date: {
        start: "2019-05-07",
        end: "2019-05-09"
      },
      location: {
        en: {
          name: "Las Vegas Convention Center",
          address: "3150 Paradise Rd.",
          city: "Las Vegas",
          state: "NV",
          zip: "89109"
        },
        ko: {
          name: "라스베가스 컨밴션 센터",
          city: "라스베가스"
        }
      },
      description: "",
      exhibitor: "3,600",
      expectedVisitor: "33,000",
      exhibition: [
        "[Building Products] - Aluminum Products, Aluminum Products, Builder Tools and Instruments, Doors, Fasteners, Nails, Nuts, Bolts, Rivets, Screws, Flooring and Floor Coverings, Insulation, Lumber/Wood Products, Masonry Products/Concrete/Cement, Millwork, Moldings, Roofing, Siding/Vapor Barriers, Wallboard, Windows, Skylights",
        "[Farm & Ranch] - Farmhand Knives, Storage Bins, Tools, Fencing Pliers, Hammers, Grass and Weed Trimmers, Pest control, Bale Covers, Shovels, Hoes, Fencing Tools, Post Hole Diggers, Tomato Cages, Gloves and Rainwear, Tree Care, Hedge Shears, Rolled Fencing, Trellis, Welding Supplies, Water Pumps, Portable Generators",
        "[Hardware & Tool] - Abrasives, Air Compressors, Aluminum Products, Apparel, As Seen On TV, Automotive Accessories, Builder Tools and Instruments, Building Materials, Ceiling Products, Chain and Chain Accessories, DIY Products, Door Accessories and Hardware, Doors, E-Commerce, Emergency Preparedness, Energy Efficient, Fasteners, Nails, Nuts, Bolts, Rivets, Screws, Fire Safety, Flooring and Floor Coverings, Garage/Outdoor Storage, Generators/Portable Power, Gutters, Downspouts, Vents, Awnings, Hand Tools & Accessories, Home Hardware, Impulse Items, Insulation, Knives, Licensed Products, Locksets, Keys & Accessories, Lubricants, Lumber/Wood Products, Mailboxes, Masonry Products/Concrete/Cement, Material Handling, Millwork, Moldings, Numbers & Letters, Paneling, Point of Sale, Power Tools & Accessories/Portable Power, Power Washers, Roofing, Rope, Cordage, Twine, Tie-downs, Safes/Security Products, Safety Products, Siding/Vapor Barriers, Storage and Organization, Tool Boxes/Storage, Wallboard, Windows, Skylights, Wire, Workwear/Workgloves",
        "[Homewares] - Air Purification, As Seen On TV, Bathroom & Shower Accessories, Brooms, Brushes, Mops, Candles, Child Safety, Cleaning Products, Supplies, Chemicals, Closet Organizers, Decorative Lighting & Accessories, Disaster Relief Items, DIY Products, Drain Cleaners/Plungers, Electric Fireplaces, Emergency Preparedness & Disaster Relief, Energy Efficient, Fans, Floor & Carpet Care, Food Storage & Organizers, Garage/Outdoor Storage, Giftware, Heaters, Home & Health Safety, Home Decorative Items, Home Healthcare, Personal Care, Home Organization & Storage, Home Security, Impulse Items, Indoor Rugs/Mats, Kitchen Appliances, Accessories & Gadgets, Laundry Aids, Licensed Products, Maintenance Equipment & Supplies, Massage Chairs/Equipment, Pet Products, Point of Sale, Portable Heaters, Fans, Cooling Systems, RTA Furniture, Safety Products, Skincare Products, Space Organizers/Racks/Storage, Storage & Organization, Toilet Seats, Vacuums & Steam Cleaners, Waste Handling Material, Home Recycling, Water Bottles, Mugs, Flasks, Water Conditioners & Filtration, Window Treatments"
      ],
      images: {
        thumbnail: "/assets/image/event-images/nhs-2019.jpg",
        banner:
          "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/36885781_10156002151744608_4098926674870009856_n.jpg?_nc_cat=108&_nc_ht=scontent-sjc3-1.xx&oh=84defdadb74a233b0e67c013a05370d6&oe=5D2B1270",

        other: []
      },
      website: "https://www.nationalhardwareshow.com/"
    },
    "2019-05-21": {
      eventName: {
        ko: "필라델피아 국제 조명기기 박람회",
        en: "Lightfair International 2019"
      },
      date: {
        start: "2019-05-21",
        end: "2019-05-23"
      },
      location: {
        en: {
          name: "Pennsylvania Convention Center",
          address: "1101 Arch St.",
          city: "Philadelphia",
          state: "PA",
          zip: "19107"
        },
        ko: {
          name: "펜실베니아 컨벤션 센터",
          city: "필라델피아"
        }
      },
      description: "",
      exhibitor: "500",
      expectedVisitor: "26,000",
      exhibition: [
        "Alternative Energy and Solar Power",
        "Ballasts,Drives and Trandsformers",
        "Building Integration,lntelligent Building,and smart Lighting",
        "Coatings,Finishes and Materials",
        "Components",
        "Costom Lighting",
        "Daylighting Intergration Products",
        "Decorative Sconces,Chandeliers, Pendants,Surface Mounts,Table and Task lamps",
        "Design and Analsis Software",
        "Digital Signage",
        "Exit Signs and Emergency Lighting",

        "Fiber Optic and Remote Source Lighting",
        "Fixtures",
        "Flood,Facade and Sports Lighting",
        "Fluorescebt Lamps",
        "HID Lamps"
      ],
      images: {
        thumbnail: "/assets/image/event-images/lfi-2019.png",
        banner:
          "https://brucklighting.com/media/wysiwyg/tradeshows/2019/lfi-2019.jpg",
        other: []
      },
      website: "http://lightfair.com/"
    },
    "2019-05-20": {
      eventName: {
        ko: "라스베가스 네트워크 박람회",
        en: "INTEROP 2019"
      },
      date: {
        start: "2019-05-20",
        end: "2019-05-23"
      },
      location: {
        en: {
          name: "The Mirage",
          address: "3400 S Las Vegas Blvd.",
          city: "Las Vegas",
          state: "NV",
          zip: "89109"
        },
        ko: {
          name: "더 므라지",
          city: "라스베가스"
        }
      },
      description: "",
      exhibitor: "100",
      expectedVisitor: "10,000",
      exhibition: [
        "Applications",
        "Cloud Connect",
        "Wireless & Mobility",
        "Collaboration",
        "Security",
        "Networking",
        "Leadership",
        "Mobility",
        "Software-Defined Networking",
        "Storage",
        "Wireless",
        "Virtualization & Data Center"
      ],
      images: {
        thumbnail: "/assets/image/event-images/interop-2019.png",
        banner: "https://pbs.twimg.com/media/DohJJTCXkAYmPyr.jpg",
        other: []
      },
      website: "http://www.interop.com/"
    },
    "2019-06-03": {
      eventName: {
        ko: "필라델피아 바이오 박람회",
        en: "BIO 2019"
      },
      date: {
        start: "2019-06-03",
        end: "2019-06-07"
      },
      location: {
        en: {
          name: "Pennsylvania Convention Center",
          address: "1101 Arch St.",
          city: "Philadelphia",
          state: "PA",
          zip: "19107"
        },
        ko: {
          name: "펜실베니아 컨벤션 센터",
          city: "필라델피아"
        }
      },
      description: "",
      exhibitor: "1,100",
      expectedVisitor: "16,000",
      exhibition: [
        "Plant & Animal Made Pharmaceuticals",
        "Gene/Cell Therapy",
        "Bioinformatics",
        "Genomics/Genetics",
        "Biomanufacturing",
        "Medical Devices",
        "Cell Biology",
        "Nanotechnology",
        "Clinical Research & Lab Services",
        "Chemistry",
        "Tech Transfer"
      ],
      images: {
        thumbnail: "/assets/image/event-images/bio-2019.png",
        banner:
          "https://convention.bio.org/uploadedImages/Register/BIO19-Theme-socialheaders-facebook.jpg",
        other: []
      },
      website: "https://convention.bio.org/"
    },
    "2019-06-11": {
      eventName: {
        ko: "로스앤젤레스 게임 박람회",
        en: "E3 2019"
      },
      date: {
        start: "2019-06-11",
        end: "2019-06-13"
      },
      location: {
        en: {
          name: "Los Angeles Convention Center",
          address: "1201 S Figueroa St.",
          city: "Los Angeles",
          state: "CA",
          zip: "90015"
        },
        ko: {
          name: "로스엔젤레스 컨벤션 센터",
          city: "로스엔젤레스"
        }
      },
      description: "",
      exhibitor: "2,000",
      expectedVisitor: "68,000",
      exhibition: [
        "Console, PC, online, social and mobile game publishers",
        "Development companies",
        "Makers of video game hardware",
        "Technologies and peripherals",
        "Production and packaging services",
        "In-game advertising",
        "Virtual commerce and service providers for online business models",
        "Domestic and international wireless carriers",
        "Academic institutions featuring programs specific to interactive media game development"
      ],
      images: {
        thumbnail: "/assets/image/event-images/e3-2019.png",
        banner:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoEbADg127Gqy3RrKm7OajOPIK9np318Vucgvpx-WabIqUvE7",
        other: []
      },
      website: "https://www.e3expo.com/"
    },
    "2019-06-12": {
      eventName: {
        ko: "올랜도 오디오, 비디오 박람회",
        en: "INFOCOMM 2019"
      },
      date: {
        start: "2019-06-12",
        end: "2019-06-14"
      },
      location: {
        en: {
          name: "Orange County Convention Center",
          address: "9800 International Dr.",
          city: "Orlando",
          state: "FL",
          zip: "32819"
        },
        ko: {
          name: "오렌지 카운티 컨벤션 센터",
          city: "올랜도"
        }
      },
      description: "",
      exhibitor: "1,000",
      expectedVisitor: "44,000",
      exhibition: [
        "[Audio] - Loudspeakers, amplifiers and mixers, Microphones, headphones and headsets, Signal processing and wireless equipment, Sound reinforcement systems, Distributed audio, nurse call and paging solutions",
        "[Digital Signage] - Displays and display walls, Digital signage processors, Content playback and management, Content management software, Media players, Mounts, Network infrastructure, Narrowcasters, Content distribution solutions",
        "[Immersive Technologies] - Head mounted displays, Cameras, 3D Visualization Software, Audio for augmented and virtual reality, Sensors, Projectors, Mobile applications, Streaming devices, Simulation software, Editing/stitching software, Projection system management tools, Displays, Processors",
        "[Lighting and Staging] - Lighting, Audio Mixers, Rigging, Drapes, Lighting Control, Power, Speakers, Microphones, Equipment for Worship Settings",
        "[Unified Comminications and collaboration] - Videoconferencing and telepresence systems, Remote worker / teleworker technologies, Cloud services, Unified communications and collaboration technologies, Networked interactive whiteboards, Unified communications as a service (UCaaS) providers, Videoconferencing as a service (VCaaS) providers, Managed services providers, Collaboration systems integrators, ICT service providers"
      ],
      images: {
        thumbnail: "/assets/image/event-images/infocomm-2019.png",
        banner:
          "https://www.bematrix.com/media/img/pics/_original/Infocomm_2019_973x400.jpg",
        other: []
      },
      website: "http://www.infocommshow.org/"
    },
    "2019-07-09": {
      eventName: {
        ko: "샌프란시스코 반도체 박람회",
        en: "SEMICON WEST 2019"
      },
      date: {
        start: "2019-07-09",
        end: "2019-07-11"
      },
      location: {
        en: {
          name: "Moscone Convention Center",
          address: "730 Howard St.",
          city: "San Francisco",
          state: "CA",
          zip: "94103"
        },
        ko: {
          name: "모스콘 센터",
          city: "샌프란시스코"
        }
      },
      description: "",
      exhibitor: "500",
      expectedVisitor: "22,400",
      exhibition: [
        "Design/EDA",
        "Fabless",
        "Foundries",
        "Packaging and Test Services(OSAT)",
        "Electronic Manufacturing Services(EMS)/System Integration",
        "R&D/Technology Transfer",
        "Wafers/Substrates",
        "Process Materials",
        "Inks/Pastes/Printing Materials"
      ],
      images: {
        thumbnail: "/assets/image/event-images/semicon-west-2019.png",
        banner:
          "http://www.semiconwest.org/sites/semiconwest.org/files/SCW19_Home_Banner_1920x969_BeyondSmart.jpg",
        other: []
      },
      website: "http://www.semiconwest.org/"
    },
    "2019-06-03_1": {
      eventName: {
        ko: "전자 보안 박람회",
        en: "ELECTRONIC SECURITY EXPO 2019"
      },
      date: {
        start: "2019-06-03",
        end: "2019-06-06"
      },
      location: {
        en: {
          name: "Indiana Convention Center",
          address: "100 S Capitol Ave.",
          city: "Indianapolis",
          state: "IN",
          zip: "46225"
        },
        ko: {
          name: "인디아나 컨벤션 센터",
          city: "인디아나폴리스"
        }
      },
      description: "전자부품, 반도체, 보안기술",
      exhibitor: "2,500",
      expectedVisitor: "10,000",
      exhibition: [
        "Marketing & Communications/Insurance",
        "Education/Legal Affairs/Technology",
        "Government Relations/PSLC/Standards/Video"
      ],
      images: {
        thumbnail: "/assets/image/event-images/esx-2019.jpg",
        banner:
          "https://www.eiseverywhere.com/file_uploads/3c12da03dbd5571efb05838ec05bec80_ESX_2019_Banner.png",
        other: []
      },
      website: "https://www.esxweb.com/"
    },
    "2019-07-10": {
      eventName: {
        ko: "사이버 보안 박람회",
        en: "CYBER SECURITY SUMMIT 2019"
      },
      date: {
        start: "2019-07-10",
        end: "2019-07-12"
      },
      location: {
        en: {
          name: "Gurney's Newport Resort & Marina",
          address: "1 Goat Island",
          city: "Newport",
          state: "RI",
          zip: "02840"
        },
        ko: {
          name: "거니스 뉴포트 리조트",
          city: "뉴포트"
        }
      },
      description: "",
      exhibitor: "3,000",
      expectedVisitor: "10,000",
      exhibition: [
        "Investing in Cyber Security",
        "Machine Learning & AI",
        "Governance, Risk & Compliance",
        "Application Security & DevOps",
        "Phishing",
        "Mobile & IoT Security",
        "Hackers & Threats"
      ],
      images: {
        thumbnail: "/assets/image/event-images/cyber-security-summit-2019.png",
        banner:
          "https://events.opalgroup.net/file_uploads/2087acecab54510e374b2096547a25c7_css_etouches_900x400.jpg",
        other: []
      },
      website: "https://opalgroup.net/conference/cyber-security-summit-2019/"
    },
    "2019-07-28": {
      eventName: {
        ko: "화장,미용용품 박람회",
        en: "COSMOPROF NORTH AMERICA 2019"
      },
      date: {
        start: "2019-07-28",
        end: "2019-07-30"
      },
      location: {
        en: {
          name: "Mandalay Bay Convention Center",
          address: "3950 S Las Vegas Blvd.",
          city: "Las Vegas",
          state: "NV",
          zip: "89119"
        },
        ko: {
          name: "만달레이 베이 컨벤션 센터",
          city: "라스베가스"
        }
      },
      description: "",
      exhibitor: "1,415",
      expectedVisitor: "40,000",
      exhibition: [
        "Cosmetics Personal Care",
        "Cosmetics skincare",
        "raw materials of machinery, formulatio to packaing, private label, business tools and POS system",

        "Packaging, contract private label",
        "Professional beauty section"
      ],
      images: {
        thumbnail: "/assets/image/event-images/cosmoprof-2019.png",
        banner: "https://cosmoprofnorthamerica.com/img/CPNA-banner-2019.jpg",
        other: []
      },
      website: "https://cosmoprofnorthamerica.com/"
    },
    "2019-08-20": {
      eventName: {
        ko: "애완용품 박람회",
        en: "SUPERZOO 2019"
      },
      date: {
        start: "2019-08-20",
        end: "2019-08-22"
      },
      location: {
        en: {
          name: "Mandalay Bay Convention Center",
          address: "3950 S Las Vegas Blvd.",
          city: "Lav Vegas",
          state: "NV",
          zip: "89119"
        },
        ko: {
          name: "만달레 베이 컨벤션 센터",
          city: "라스베가스"
        }
      },
      description: "",
      exhibitor: "1,086",
      expectedVisitor: "10,057",
      exhibition: [
        "Aquatic / Pond Products",
        "Aquatic Foods",
        "Bird Food & Treats",
        "Cat Food & Treats",
        "Grooming Products",
        "Natural Food & Treats",
        "Other Products for Service Providers",
        "POS / Store Equipment",
        "Reptile Food & Treats",
        "Reptile Products",
        "Small Animal Food & Treats",
        "Small Animal Products",
        "Training Products"
      ],
      images: {
        thumbnail: "/assets/image/event-images/superzoo-2019.jpg",
        banner:
          "https://superzoo.org/wp-content/uploads/2019/04/pet-products-banner.jpg",
        other: []
      },
      website: "https://superzoo.org/"
    },
    "2019-09-25": {
      eventName: {
        ko: "AI 서밋",
        en: "THE AI SUMMIT SF 2019"
      },
      date: {
        start: "2019-09-25",
        end: "2019-09-26"
      },
      location: {
        en: {
          name: "The Palace of Fine Arts",
          address: "3601 Lyon St",
          city: "San Francisco",
          state: "CA",
          zip: "94123"
        },
        ko: {
          name: "팔라스 오브 파인 아트",
          city: "샌프란시스코"
        }
      },
      description:
        "AI Summit San Francisco는 기업 조직이 AI의 실용적 의의에 대해 생각하면서 업무의 생산성을 대폭 높이고 있는 실용적 솔루션에 초점을 맞추는 세계 최초의 대규모 컨퍼런스 및 전시회입니다",
      exhibitor: "200",
      expectedVisitor: "6,000",
      exhibition: [
        "Responsible and Ethical AI",
        "Building Stronger Customer Relationships",
        "Machine Learning and Analytics",
        "Building a Data Team of Talent",
        "From Concept to Reality",
        "Procurement Considerations",
        "Perception(Vision and Language) AI",
        "AI Development"
      ],
      images: {
        thumbnail: "/assets/image/event-images/ai-summit-sf-2019.png",
        banner: "/assets/image/event-images/ai-summit-sf-2019-banner.png",
        other: []
      },
      website: "https://theaisummit.com/"
    },
    "2019-08-25": {
      eventName: {
        ko: "VM 월드",
        en: "VM WORLD 2019"
      },
      date: {
        start: "2019-08-25",
        end: "2019-08-29"
      },
      location: {
        en: {
          name: "Moscone Center North, South, and West",
          address: "730 Howard st.",
          city: "San Francisco",
          state: "CA",
          zip: "94103"
        },
        ko: {
          name: "모스콘센터",
          city: "샌프란시스코"
        }
      },
      description: "",
      exhibitor: "230",
      expectedVisitor: "21,000",
      exhibition: [
        "Hybrid Cloud",
        "Multi - Cloud",
        "Modern Apps",
        "Networking & Security",
        "Digital Workspace",
        "Emerging Trends",
        "IoT and Edge",
        "Unified Endpoint Management",
        "Cloud Networking"
      ],
      images: {
        thumbnail: "/assets/image/event-images/vm-world-2019.png",
        banner: "/assets/image/event-images/vm-world-2019-banner.png",
        other: []
      },
      website: "https://www.vmworld.com/en/us/index.html#"
    },
    "2019-09-04": {
      eventName: {
        ko: "미국치과협회 컨퍼런스",
        en: "ADA 2019"
      },
      date: {
        start: "2019-09-04",
        end: "2019-09-08"
      },
      location: {
        en: {
          name: "Moscone Center North, South, and West",
          address: "730 Howard st.",
          city: "San Francisco",
          state: "CA",
          zip: "94103"
        },
        ko: {
          name: "모스콘센터",
          city: "샌프란시스코"
        }
      },
      description:
        "The ADA FDI World Dental Congress is not only exceptional because it's jointly held by the ADA and FDI -- we're also celebrating ADA's 160th anniversary and the 150th anniversary of the San Francisco Dental Society",
      exhibitor: "2,000",
      expectedVisitor: "20,000",
      exhibition: [
        "The Digital Future of Dentistry",
        "ADA Dental Sleep Medicine Conference",
        "Women in Dentistry",
        "Dental Hygiene Track",
        "Pathology Track",
        "Oral Medicine Track",
        "Pediatrics Track",
        "Restorative Track",
        "Cariology Track",
        "Occlusion Track"
      ],
      images: {
        thumbnail: "/assets/image/event-images/ada-2019.png",
        banner:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdG2Slf2-8cdDqM1yrvKAeU07j6h9jDwVoOl7EuP990SFIqeg3BQ",
        other: []
      },
      website:
        "https://www.ada.org/en/publications/ada-news/2019-archive/february/registration-open-for-ada-fdi-world-dental-congress-in-san-francisco"
    },
    "2019-09-16": {
      eventName: {
        ko: "오라클 오픈월드",
        en: "ORACLE OPEN WORLD 2019"
      },
      date: {
        start: "2019-09-16",
        end: "2019-09-19"
      },
      location: {
        en: {
          name: "Moscone Center North, South, and West",
          address: "730 Howard st.",
          city: "San Francisco",
          state: "CA",
          zip: "94103"
        },
        ko: {
          name: "모스콘센터",
          city: "샌프란시스코"
        }
      },
      description: "",
      exhibitor: "500",
      expectedVisitor: "60,000",
      exhibition: [
        "Systems Integrations",
        "Business Transformation",
        "Multisolution Customer Experience(CX) cloud and SaaS solutions and integrations",
        "Time and attendance, workforce management, HR data collection, and employee self-service ",
        "labor management solutions",
        "real-time data integration",
        "data management software solutions"
      ],
      images: {
        thumbnail: "https://pbs.twimg.com/media/D4iJo-VXoAAWlFf.jpg",
        banner:
          "https://www.ensah.nl/wp-content/uploads/2018/12/OracleOpenWorld2019.png",
        other: []
      },
      website: "https://www.oracle.com/openworld/"
    },
    "2019-10-02": {
      eventName: {
        ko: "디스럽트 SF",
        en: "DISRUPT SF 2019"
      },
      date: {
        start: "2019-10-02",
        end: "2019-10-04"
      },
      location: {
        en: {
          name: "Moscone Center North, South, and West",
          address: "730 Howard st.",
          city: "San Francisco",
          state: "CA",
          zip: "94103"
        },
        ko: {
          name: "모스콘센터",
          city: "샌프란시스코"
        }
      },
      description: "",
      exhibitor: "400",
      expectedVisitor: "10,000",
      exhibition: [
        "Artificial Intelligence/Machine Learning",
        "BioTech / HealthTech",
        "Blockchain",
        "FinTech",
        "Gaming",
        "Investor Topics",
        "Media",
        "Mobility",
        "Privacy / Security,",
        "Retail / eCommerce",
        "Robotics / IoT / Hardware",
        "SaaS",
        "Space",
        "Social Impact & Education"
      ],
      images: {
        thumbnail:
          "https://techcrunch.com/wp-content/uploads/2018/08/Disrupt-SF-19-466X269.png?w=466",
        banner: "/assets/image/event-images/tc-2019-banner.png",
        other: []
      },
      website: "https://techcrunch.com/events/disrupt-sf-2019/"
    },
    "2019-10-22": {
      eventName: {
        ko: "MWC 19",
        en: "MWC 2019"
      },
      date: {
        start: "2019-10-22",
        end: "2019-10-24"
      },
      location: {
        en: {
          name: "Los Angeles Convention Center",
          address: "1201 South Figueroa St.",
          city: "Los Angeles",
          state: "CA",
          zip: "90015"
        },
        ko: {
          name: "LA 컨벤션센터",
          city: "로스앤젤레스"
        }
      },
      description: "",
      exhibitor: "1,000",
      expectedVisitor: "15,000",
      exhibition: [
        "AI & The Future of Work: Is your Business Ready for Chagne?",
        "Scaling the Internet of Intelligent Things",
        "Marketing 5G: First of Best to Market",
        "Edge Computing: Creating New IoT Applications",
        "5G: Power, Tlanet, Profit",
        "The Promise of IoT Connectivity"
      ],
      images: {
        thumbnail:
          "https://www.mwclosangeles.com/wp-content/themes/theme_mwcla/images/logo-mb.png?v4",
        banner: "/assets/image/event-images/mwc-2019.gif",
        other: []
      },
      website: "https://www.mwclosangeles.com/"
    },
    "2019-11-05": {
      eventName: {
        ko: "자동차 부품 박람회",
        en: "SEMA 2019"
      },
      date: {
        start: "2019-11-05",
        end: "2019-11-08"
      },
      location: {
        en: {
          name: "Las Vegas Convention Center",
          address: "3150 Paradise Rd.",
          city: "Las Vegas",
          state: "NV",
          zip: "89019"
        },
        ko: {
          name: "라스베가스 컨벤션센터",
          city: "라스베가스"
        }
      },
      description: "",
      exhibitor: "4,000",
      expectedVisitor: "100,000",
      exhibition: [
        "Accessories",
        "Air Conditioning",
        "Audio, Security and Mobile Electronics",
        "Bedliners",
        "Body Shop Service / Repair",
        "Brake System Components",
        "Business Management Hardware / Software",
        "Chemicals & Lubricants",
        "Clothing / Memorabilia",
        "Emissions Control",
        "Engines / Engine Parts, Manifolds, Motor Mounts, Valve Covers",
        "Machine Shop Equipment",
        "Motorcycle Parts & Accessories",
        "Off - Road Parts & Accessories",
        "Paint, Body & Equipment",
        "Performance Parts / Accessories",
        "Racing Products",
        "Replacement Parts",
        "Restyling / Ground Effects",
        "RV Parts & Accessories"
      ],
      images: {
        thumbnail:
          "https://www.semashow.com/sites/all/themes/semashow/logo.png",
        banner:
          "http://www.12voltnews.com/wp-content/uploads/2019/04/fen2-0416-sma-19-reg-650x400.jpg",
        other: []
      },
      website: "https://www.semashow.com/"
    },
    "2019-11-05_1": {
      eventName: {
        ko: "자동차 부품 박람회",
        en: "AAPEX 2019"
      },
      date: {
        start: "2019-11-05",
        end: "2019-11-07"
      },
      location: {
        en: {
          name: "Sands Expo Convention Center",
          address: "201 Sands Ave.",
          city: "Las Vegas",
          state: "NV",
          zip: "89169"
        },
        ko: {
          name: "샌즈엑스포 컨벤션센터",
          city: "라스베가스"
        }
      },
      description: "Automotive Aftermarket Products Expo",
      exhibitor: "2,500",
      expectedVisitor: "48,000",
      exhibition: [
        "Specialized training and hands - on experience on the most in -demand systems",
        "Build your professional network in Las Vegas",
        "Work with our Marketing Technicians to design a laser beam- focused approach",
        "Get a comprehensive read on what will be hitting the industry in this and future years"
      ],
      images: {
        thumbnail:
          "https://www.aapexshow.com/wp-content/uploads/2019/03/brand.full_.png",
        banner:
          "https://www.bullyliner.com/wp-content/uploads/2019/03/bullyliner-AAPEX-Auto-Show.jpg",
        other: []
      },
      website: "https://www.aapexshow.com/"
    },

    "2019-11-20": {
      eventName: {
        ko: "뉴욕 보안장비 박람회",
        en: "ISC EAST 2019"
      },
      date: {
        start: "2019-11-20",
        end: "2019-11-21"
      },
      location: {
        en: {
          name: "JAVITS CENTER NEW YORK",
          address: "655 W 34th St.",
          city: "New York",
          state: "NY",
          zip: "10001"
        },
        ko: {
          name: "자비츠 컨벤션 센터",
          city: "뉴욕"
        }
      },
      description: "미국 최대의 통합 보안 업계 전시회",
      exhibitor: "1,000",
      expectedVisitor: "30,000",
      exhibition: [
        "액세스 제어",
        "생체 인식",
        "도난 경보 및 모니터링",
        "CCTV 및 원격 모니터링",
        "데이터 보안",
        "지문 및 얼굴 인식",
        "화재 경보기 및 감지기, 가스, 연기 및 전문 금속 탐지기",
        "홈 오토메이션",
        "잠금 장치",
        "공공 보안",
        "주거용 및 상업용 감시 장비",
        "시스템 통합",
        "보안 카드 및 관련 특수 잠금 장치",
        "무선 보안 응용 프로그램"
      ],
      images: {
        thumbnail:
          "https://security-img.scdn6.secure.raxcdn.com/news/612/isc-east-2018-expansion-920x533.jpg",
        banner:
          "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/57703281_10161865720460387_2535667289043238912_n.png?_nc_cat=103&_nc_oc=AQkoDjQhrYI2jFAm1DJtwrzxWHJ5AgDMv_TIahjuw5-8VC4lA1GcC4iSLg2481bQzTs&_nc_ht=scontent-sjc3-1.xx&oh=efe88664e305a7dad619d2d65a749543&oe=5D50B8A3",
        other: []
      },
      website: "https://www.isceast.com/"
    }
  },
  companies: {
    tesla: {
      type: "company",
      name: {
        en: "Tesla, Inc.",
        ko: "테슬라"
      },
      industry: "Eletric Automotive and Energy",
      products: [
        "Automobile and Parts",
        "Powerwall for Homes",
        "Powerpack for Commercial"
      ],
      established: "July 2003",
      hqLocation: "Palo Alto, California",
      desc: `Tesla, Inc. (formerly Tesla Motors, Inc.) is an American automotive and energy company based in Palo Alto, California. The company specializes in electric car manufacturing and, through its SolarCity subsidiary, solar panel manufacturing. It operates multiple production and assembly plants, notably Gigafactory 1 near Reno, Nevada, and its main vehicle manufacturing facility at Tesla Factory in Fremont, California. As of March 2019, Tesla sells the Model S, Model X, and Model 3 automobiles. It is accepting reservations for the Model Y, Roadster (2020), and Semi vehicles. Tesla also sells Powerwall and Powerpack batteries, solar panels, solar roof tiles[19], and some related products.
<br /><br />Tesla was founded in July 2003, by engineers Martin Eberhard and Marc Tarpenning, under the name Tesla Motors. The company's name was derived from engineer Nikola Tesla. In early Series A funding, Tesla Motors was joined by Elon Musk, J. B. Straubel and Ian Wright, all of whom are retroactively allowed to call themselves co-founders of the company. Musk, who formerly served as chairman and is the current chief executive officer, said that he envisioned Tesla Motors as a technology company and independent automaker, aimed at eventually offering electric cars at prices affordable to the average consumer. Tesla Motors shortened its name to Tesla in February 2017.
<br /><br />After 10 years in the market, Tesla ranked as the world's best selling plug-in passenger car manufacturer in 2018, both as a brand and by automotive group, with 245,240 units delivered and a market share of 12% of the plug-in segment sales. Tesla vehicle sales in the U.S. increased by 280% from 48,000 in 2017 to 182,400 in 2018, and globally were up by 138% from 2017.
`,
      images: {
        thumbnail: "/assets/image/company-images/tesla/image-main.jpg",
        other: []
      }
    },
    google: {
      type: "company",
      name: {
        en: "Google LLC",
        ko: "구글"
      },
      industry: "Internet Search Engine Service",
      products: [
        "Internet Advertisement",
        "Operating System",
        "Google Glass",
        "Chromecast",
        "Cloud Computing"
      ],
      established: "September 1998",
      hqLocation: "Mountain View, California",
      desc: `Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple and Facebook.
<br /><br />Google was founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a privately held company on September 4, 1998. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet.
<br /><br />Google.com is the most visited website in the world. Several other Google services also figure in the top 100 most visited websites, including YouTube and Blogger. Google is the most valuable brand in the world as of 2017, but has received significant criticism involving issues such as privacy concerns, tax avoidance, antitrust, censorship, and search neutrality. Google's mission statement is "to organize the world's information and make it universally accessible and useful". The companies unofficial slogan "Don't be evil" was removed from the company's code of conduct around May 2018.
`,
      images: {
        thumbnail: "/assets/image/company-images/google/image-main.jpg",
        other: []
      }
    },
    airbnb: {
      type: "company",

      name: {
        en: "Airbnb, Inc.",
        ko: "에어비앤비"
      },
      industry: "Lodging",
      products: ["Airbnb"],
      established: "August 2008",
      hqLocation: "San Francisco, California",
      desc: `
A‌i‌r‌b‌n‌b‌,‌ ‌I‌n‌c‌.‌, headquartered in San Francisco, operates a global online marketplace and hospitality service accessible via its websites and mobile apps. Members can use the service to arrange or offer lodging, primarily homestays, or tourism experiences. The company does not own any of the real estate listings, nor does it host events; it acts as a broker, receiving commissions from every booking.
<br /><br />The company's name is a shortened version of its original name, AirBedandBreakfast.com; the company got its start after its founders put an air mattress in their living room and turned their apartment into a bed and breakfast.
`,
      images: {
        thumbnail: "/assets/image/company-images/airbnb/image-main.png",
        other: []
      }
    },
    plugandplay: {
      type: "company",
      name: {
        en: "Plug and Play",
        ko: "플러그앤플레이"
      },
      industry:
        "Venture Capital Firm, Startup Accelerator, and Corporate Innovation Consultancy",
      products: [],
      established: "February 2006",
      hqLocation: "Sunnyvale, California",
      desc: `Plug and Play Tech Center (or "Plug and Play") is an early stage investor (Plug and Play Ventures) and corporate innovation platform with global headquarters in Sunnyvale, California in the Silicon Valley. Plug and Play runs two programs per year in each industry and location (totaling 50 accelerator programs per year) and has 300 corporate partners and 200 venture capitalists in its ecosystem. It was recently named the 'Most active Silicon Valley venture capital firm' by Silicon Valley Business Journal. 
      According to Plug and Play's 2018 report, the company accelerated 1,107 startups in 2018 (562 in USA, 545 non-domestic). The company claims to have made 222 investments in 2018.
      <br /><br />Plug and Play were early investors in Google, PayPal, Dropbox, LendingClub, N26, Soundhound and Guardant Health.
<br />
      Its Spring 2017 programs hosted 175 startups in nine different industries:
<br />
Its Spring 2019 programs hosted 135 startups in seven different industries:
<br />
The industries the company focuses on include:
<br />
<br />Brand & Retail
<br />Financial Technologies (Fintech)
<br />Food & Beverage
<br />Health & Wellness
<br />Insurance Technologies (Insurtech)
<br />Internet of Things
<br />Mobility
<br />New Materials & Packaging
<br />Travel & Hospitality
<br />Real Estate Tech
<br />Energy & Sustainability
<br />Cybersecurity
<br />Supply Chain & Logistics (Logtech)
<br />Smart Cities
<br />Industrial Safety Technology (Safetytech)

    `,

      images: {
        thumbnail: "/assets/image/company-images/pnp/image-main.jpg",
        other: []
      }
    },
    apple: {
      type: "company",
      name: {
        en: "Apple Inc.",
        ko: "애플"
      },
      industry:
        "Computer Software, Computer Hardware, Consumer Electronics, Financial Technology.",
      products: [
        "Smartphone",
        "Personal Computer",
        "TV",
        "Digital Media Player",
        "AI Speaker"
      ],
      established: "April 1976",
      hqLocation: "Cupertino, California",
      desc: `
      Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Four of technology along with Amazon, Google, and Facebook.
      <br /><br />
      The company's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, and the HomePod smart speaker. Apple's software includes the macOS and iOS operating systems, the iTunes media player, the Safari web browser, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.
<br /><br />
Apple is well known for its size and revenues. Its worldwide annual revenue totaled $265 billion for the 2018 fiscal year. Apple is the world's largest information technology company by revenue and the world's third-largest mobile phone manufacturer after Samsung and Huawei. In August 2018, Apple became the first public U.S. company to be valued at over $1 trillion. The company employs 123,000 full-time employees and maintains 504 retail stores in 24 countries as of 2018. It operates the iTunes Store, which is the world's largest music retailer. As of January 2018, more than 1.3 billion Apple products are actively in use worldwide. The company also has a high level of brand loyalty and is ranked as the world's most valuable brand. However, Apple receives significant criticism regarding the labor practices of its contractors, its environmental practices and unethical business practices, including anti-competitive behavior, as well as the origins of source materials.
      `,
      images: {
        thumbnail: "/assets/image/company-images/apple/image-main.png",
        other: []
      }
    },
    linkedin: {
      type: "company",
      name: {
        en: "LinkedIn",
        ko: "링크드인"
      },
      industry: "Social Media Server",
      products: ["Subscription", "Advertisement", "Recruitment Solution"],
      established: "May 2003",
      hqLocation: "Mountain View, California",
      desc: `
      LinkedIn is a business and employment-oriented service that operates via websites and mobile apps. Founded on December 28, 2002, and launched on May 5, 2003, it is mainly used for professional networking, including employers posting jobs and job seekers posting their CVs. As of 2015, most of the company's revenue came from selling access to information about its members to recruiters and sales professionals. As of March 2019, LinkedIn had 610 million registered members in 200 countries.
<br /><br />
LinkedIn allows members (both workers and employers) to create profiles and "connections" to each other in an online social network which may represent real-world professional relationships. Members can invite anyone (whether an existing member or not) to become a connection. Since December 2016 it has been a wholly owned subsidiary of Microsoft. LinkedIn participated in the EU's International Safe Harbor Privacy Principles.
      `,
      images: {
        thumbnail: "/assets/image/company-images/linkedin/image-main.jpg",
        other: []
      }
    },
    nvidia: {
      type: "company",
      name: {
        en: "Nvidia Corporation",
        ko: "엔비디아"
      },
      industry:
        "Semiconductors, Video Games, Consumer Electronics, Computer Hardware",
      products: [
        "Graphics Processing Units",
        "Central Processing Units",
        "Chipsets",
        "Drivers"
      ],
      established: "April 1993",
      hqLocation: "Santa Clara, California",
      desc: `
      Nvidia Corporation, more commonly referred to as Nvidia (stylized as NVIDIA), is an American technology company incorporated in Delaware and based in Santa Clara, California. It designs graphics processing units (GPUs) for the gaming and professional markets, as well as system on a chip units (SoCs) for the mobile computing and automotive market. Its primary GPU product line, labeled "GeForce", is in direct competition with Advanced Micro Devices' (AMD) "Radeon" products. Nvidia expanded its presence in the gaming industry with its handheld Shield Portable, Shield Tablet and Shield Android TV.
<br /><br />
Since 2014, Nvidia has shifted to become a platform company focused on four markets – gaming, professional visualization, data centers and auto. Nvidia is also now focused on artificial intelligence.
<br /><br />
In addition to GPU manufacturing, Nvidia provides parallel processing capabilities to researchers and scientists that allow them to efficiently run high-performance applications. They are deployed in supercomputing sites around the world. More recently, it has moved into the mobile computing market, where it produces Tegra mobile processors for smartphones and tablets as well as vehicle navigation and entertainment systems. In addition to AMD, its competitors include Intel, Qualcomm and Arm (e.g., because of Denver, while Nvidia also licenses Arm's designs).
      `,
      images: {
        thumbnail: "/assets/image/company-images/nvidia/image-main.png",
        other: []
      }
    },
    ignitexl: {
      type: "company",
      name: {
        en: "igniteXL",
        ko: "이그나잇XL"
      },
      industry: "Start-Up Accelerator",
      products: [
        "Pre-Entrepreneurship",
        "Crowth",
        "SVBeautyTech",
        "Global Acceleration",
        "igniteXL Alumni Network"
      ],
      established: "2014",
      hqLocation: "San Mateo, California",
      desc: `
      Founded in 2014, igniteXL is Silicon Valley and Asia based accelerator and seed fund focused on early stage startups expanding to global markets. Taking a very focused, customized and high-touch approach, igniteXL has developed a reputation among entrepreneurs as ‘must-have’, ‘dedicated team’, and ‘best-partner in Silicon Valley’. In June 2018, igniteXL launched its first beauty-tech acceleration program in partnership with Draper University to work with the most promising beauty-tech startups from all around the world.
<br /><br />
Greatness comes in many different shapes and forms. Often times, it gets lost in translation because of culture and language. We set out to help international entrepreneurs discover their own greatness by injecting key resources to speed up the process of building great global companies.
      `,
      images: {
        thumbnail: "/assets/image/company-images/ignitexl/image-main.png",
        other: []
      }
    }
  },
  colleges: {
    ucb: {
      type: "school",
      name: {
        ko: "UC 버클리",
        en: "UC Berkeley"
      },
      favMajor: [
        "Haas(School of Business)",
        "Computer Science",
        "Electrical Engineering"
      ],
      established: "1868",
      location: "Berkeley, California",
      desc: `2010년 기준 인문칼리지, 경영스쿨, 화학칼리지, 교육대학원, 공학칼리지, 환경설계칼리지, 정보스쿨, 언론대학원, 법학스쿨, 천연자원칼리지, 안과스쿨, 보건학스쿨, 공공정책스쿨, 사회복지스쿨의 14개 칼리지·스쿨·대학원으로 이루어진다. 칼리지에서는 학부과정과 대학원과정을, 스쿨에서는 주로 대학원과정을 진행한다.
      <br /><br />
      부속시설로는 3개 주요 도서관, 18개의 특수도서관, 11개의 제휴도서관, 버클리자연사박물관, 미술관, 라디오와 텔레비전 방송국, 과학관 등이 있다. 버클리자연사박물관은 포브허스트인류학박물관, 식물원, 에시그곤충학박물관, 고생물학박물관, 척추동물학박물관, 인간진화연구센터, 태평양필름보관소를 포함한다.
      <br /><br />
      샌프란시스코에서 동쪽으로 16km 떨어진 시가지에 위치한다. 교지의 많은 부분은 로렌스 버클리국립실험소가 차지하며 로렌스과학홀, 우주과학실험소를 비롯한 여러 연구소가 있다. 주 캠퍼스 안으로 스트로베리 크리크의 두 지류가 흘러든다.`,
      images: {
        thumbnail: "/assets/image/school-images/ucb.png"
      },
      website: "https://www.berkeley.edu/"
    },
    stanford: {
      type: "school",
      name: {
        ko: "스탠포드",
        en: "Stanford University"
      },
      favMajor: [
        "School of Humanities and Sciences",
        "School of Earth Sciences",
        "School of Engineering",
        "Stanford Graduate School of Business",
        "D-School",
        "Stanford Law School",
        "Medical School",
        "School of Pharmacy"
      ],
      established: "1891",
      location: "Stanford, California",
      desc: `스탠퍼드대학교는 연구 중심의 세계적인 명문 사립대학으로 미국 캘리포니아 주 스탠퍼드에 있다. 정식 명칭은 릴랜드스탠퍼드주니어대학교(Leland Stanford Junior University)이고 줄여서 '스탠퍼드대학교' 또는 '스탠퍼드'라고 부른다.
    <br /><br />
    2018년 현재 문리대학(School of Humanities and Sciences), 지구과학대학(School of Earth Sciences), 공과대학(School of Engineering) 등 3개 대학에서는 학부와 대학원 과정을, 경영대학원(Stanford Graduate School of Business), 교육대학원(School of Education), 스탠포드 로스쿨(Stanford Law School), 의학대학원(Stanford University School of Medicine) 등 4개 대학원에서는 석·박사과정의 교육 프로그램을 제공하고 있다. 문리대학은 27개 학부, 공과대학은 9개 학부, 지구과학대학은 4개 학부가 설치돼 있다.
    <br /><br />
    그밖에 인문학, 자연과학, 문예창작 부문 등에서 400여 개 강좌가 개설되어 있는 평생교육 프로그램을 운영한다. 학부에서는 특히 물리학과, 경제학과, 심리학과, 정치학과, 공학과, 철학과, 그리고 대학원에서는 경제학과, 사회학과, 심리학과, 역사학과가 경쟁력을 갖춘 것으로 인정받고 있다. 창의적 사고, 문제해결 능력 향상, 연구방법론 제고 등이 스탠퍼드대학교에서 가장 중시하는 교육의 목적이다. 캠퍼스에는 700개가 넘는 건물이 있으며 학부생의 97%가 기숙사에 묵고 있다.
    `,
      images: {
        thumbnail: "/assets/image/school-images/stanford.png"
      },
      website: "https://www.stanford.edu/"
    },
    ucsc: {
      type: "school",
      name: {
        ko: "UC 산타크루즈",
        en: "UC Santa Cruz"
      },
      favMajor: [
        "Astrophysics",
        "Astronomy",
        "Biology",
        "Psychology",
        "Ocean Science"
      ],
      established: "1965",
      location: "Santa Cruz, California",
      desc: `이과대에서는 천문학과 우주과학, 물리학, 해양과학 프로그램이 우수한 걸로 유명하며 여러 스타들이 거쳐간 문과대는 진보적 성향의 학제연구로 유명하다.
    <br /><br />
    UCSC는 UCSD와 유사한 학부생을 대상으로 레지던셜 칼리지 시스템이 쓰이고 있다. 학생들은 750~1500명 단위로 나뉘어진 10개의 칼리지로 입학해서 학내에 거주하며 필수적인 커리큘럼을 배우게 된다. 숲안의 전원같은 캠퍼스에 각각의 칼리지가 넓게 분포되서 학생들은 대학생활을 한다 생각하면 된다.
    `,
      images: {
        thumbnail: "/assets/image/school-images/ucsc.png"
      },
      website: "https://www.ucsc.edu/"
    }
  }
};
