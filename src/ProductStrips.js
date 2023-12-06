import React from "react";
import ProductStrip from "./ProductStrip";
import "./ProductStrips.css"

const ProductStrips = ({productOnClick}) => {

    const moboTestProducts = {
      "from": 1,
      "to": 10,
      "currentPage": 1,
      "total": 46,
      "totalPages": 5,
      "queryTime": "0.010",
      "totalTime": "0.018",
      "partial": false,
      "canonicalUrl": "/v1/products(categoryPath.id=abcat0507008)?show=name,image,url,salePrice,categoryPath.id&sort=name&format=json&apiKey=toaWjCNlzNVWZrIH9p4VJxIL",
      "products": [
        {
          "name": "ASUS - PRIME Z690-A Socket LGA 1700 USB 3.2 Intel Motherboard",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6486/6486294_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6486294/pdp",
          "salePrice": 219.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - PRIME Z790-A WIFI (Socket LGA 1700) USB 3.2 Intel Motherboard",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6523/6523719_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6523719/pdp",
          "salePrice": 309.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - ProArt X670E-CREATOR WIFI (Socket AM5) AMD Ryzen 7000 Series ATX Motherboard",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6523/6523723_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6523723/pdp",
          "salePrice": 499.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - ROG CROSSHAIR X670E HERO (Socket AM5) USB-C Gen2 AMD Motherboard with LED Lighting",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6523/6523724_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6523724/pdp",
          "salePrice": 699.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - ROG MAXIMUS Z790 HERO (Socket LGA 1700) USB 3.2 Intel Motherboard",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6523/6523718_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6523718/pdp",
          "salePrice": 549.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - ROG STRIX B550-F GAMING AM4 Socket USB 3.2 AMD Motherboard - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6422/6422283_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6422283/pdp",
          "salePrice": 164.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - ROG STRIX B650E-F GAMING WIFI (Socket AM5) USB 3.2 AMD Motherboard",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6523/6523721_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6523721/pdp",
          "salePrice": 289.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - ROG STRIX X670E-I GAMING WIFI (Socket AM5) USB 3.2 AMD Motherboard",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6523/6523772_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6523772/pdp",
          "salePrice": 459.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - ROG STRIX Z690-E GAMING WIFI Socket LGA 1700 USB 3.2 Intel Motherboard - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6486/6486295_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6486295/pdp",
          "salePrice": 279.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        },
        {
          "name": "ASUS - ROG STRIX Z790-E GAMING WIFI (Socket LGA 1700) USB 3.2 Intel Motherboard",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6523/6523725_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6523725/pdp",
          "salePrice": 399.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507008"
            }
          ]
        }
      ]
    }

    const processorTestProducts = {
        "from": 1,
        "to": 10,
        "currentPage": 1,
        "total": 47,
        "totalPages": 5,
        "queryTime": "0.028",
        "totalTime": "0.036",
        "partial": false,
        "canonicalUrl": "/v1/products(categoryPath.id=abcat0507010)?show=name,image,url,salePrice,categoryPath.id&sort=name&format=json&apiKey=toaWjCNlzNVWZrIH9p4VJxIL",
        "products": [
          {
            "name": "AMD - Ryzen 5 4500 3.6 GHz Six-Core AM4 Processor - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6510/6510771_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6510771/pdp",
            "salePrice": 79,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 5 5500 3.6 GHz Six-Core AM4 Processor - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6510/6510779_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6510779/pdp",
            "salePrice": 99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 5 5600 3.5 GHz Six-Core AM4 Processor - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6510/6510772_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6510772/pdp",
            "salePrice": 149,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 5 5600G 6-Core - 12-Thread - (4.4 GHz Max Boost) Unlocked Desktop Processor - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6474/6474407_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6474407/pdp",
            "salePrice": 139,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 5 5600X 4th Gen 6-core, 12-threads Unlocked Desktop Processor With Wraith Stealth Cooler - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6438/6438943_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6438943/pdp",
            "salePrice": 169,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 5 7600 6-core - 12-Thread 4.0 GHz (5.2 GHz Max Boost) Socket AM5 Unlocked Desktop Processor - Silver",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6530/6530445_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6530445/pdp",
            "salePrice": 199,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 5 7600X 6-core - 12-Thread 4.7GHz (5.3 GHz Max Boost) Socket AM5 Desktop Processor - Silver",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6519/6519479cv11d.jpg",
            "url": "https://api.bestbuy.com/click/-/6519479/pdp",
            "salePrice": 219.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 7 5700G 8-Core - 16-Thread - (4.6 GHz Max Boost) Unlocked Desktop Processor - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6474/6474406_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6474406/pdp",
            "salePrice": 209,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 7 5700X W/O Fan - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6510/6510770_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6510770/pdp",
            "salePrice": 189,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          },
          {
            "name": "AMD - Ryzen 7 5800X 4th Gen 8-core, 16-threads Unlocked Desktop Processor Without Cooler - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6439/6439000_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6439000/pdp",
            "salePrice": 259,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507010"
              }
            ]
          }
        ]
      }


      const caseTestResults = {
        "from": 1,
        "to": 10,
        "currentPage": 1,
        "total": 82,
        "totalPages": 9,
        "queryTime": "0.013",
        "totalTime": "0.023",
        "partial": false,
        "canonicalUrl": "/v1/products(categoryPath.id=abcat0507006)?show=name,image,url,salePrice,categoryPath.id&sort=name&format=json&apiKey=toaWjCNlzNVWZrIH9p4VJxIL",
        "products": [
          {
            "name": "Cooler Master - MasterBox MCB-D500D-KGNN-S01 ATX/SSI CEB/EATX/Micro ATX/Mini ITX Mid-tower Case - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6495/6495658_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6495658/pdp",
            "salePrice": 130.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "Cooler Master - MasterBox TD500 Mini ITX/Micro ATX/ATX/SSI CEB/EATX Mid-tower - White",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6567/6567533_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6567533/pdp",
            "salePrice": 94.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "CORSAIR - 2000D AIRFLOW Mini-ITX Case - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6547/6547705_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6547705/pdp",
            "salePrice": 104.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "CORSAIR - 4000D AIRFLOW ATX MidTower Case - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6424/6424213_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6424213/pdp",
            "salePrice": 104.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "CORSAIR - 5000D AIRFLOW ATX Mid-Tower - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6453/6453227_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6453227/pdp",
            "salePrice": 174.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "CORSAIR - AIRFLOW 7000D ATX/Mini ITX/Micro ATX/EATX Full-tower Case - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6469/6469130_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6469130/pdp",
            "salePrice": 269.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "CORSAIR - iCUE 2000D RGB AIRFLOW Mini-ITX Case - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6547/6547710_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6547710/pdp",
            "salePrice": 139.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "CORSAIR - iCUE 4000D RGB AIRFLOW ATX Mid-Tower Case - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6530/6530795_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6530795/pdp",
            "salePrice": 149.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "CORSAIR - iCUE 4000D RGB AIRFLOW ATX Mid-Tower Case - True White",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6530/6530797_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6530797/pdp",
            "salePrice": 149.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          },
          {
            "name": "CORSAIR - iCUE 4000X ATX RGB Tempered Glass Mid-Tower - Black",
            "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6424/6424616_sd.jpg",
            "url": "https://api.bestbuy.com/click/-/6424616/pdp",
            "salePrice": 137.99,
            "categoryPath": [
              {
                "id": "cat00000"
              },
              {
                "id": "abcat0500000"
              },
              {
                "id": "abcat0507000"
              },
              {
                "id": "abcat0507006"
              }
            ]
          }
        ]
      }

    const ramTestProducts = {
      "from": 1,
      "to": 10,
      "currentPage": 1,
      "total": 58,
      "totalPages": 6,
      "queryTime": "0.016",
      "totalTime": "0.027",
      "partial": false,
      "canonicalUrl": "/v1/products(categoryPath.id=abcat0506000)?show=name,image,url,salePrice,categoryPath.id&sort=name&format=json&apiKey=toaWjCNlzNVWZrIH9p4VJxIL",
      "products": [
        {
          "name": "CORSAIR - DOMINATOR PLATINUM 32GB (2PK x 16GB) 3600MHz DDR4 C18 DIMM Desktop Memory RGB - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6450/6450421_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6450421/pdp",
          "salePrice": 109.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - DOMINATOR PLATINUM 32GB (2PK x 16GB) 5600MHz DDR5 C36 DIMM Desktop Memory with RGB lighting - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6497/6497417_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6497417/pdp",
          "salePrice": 146.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - DOMINATOR PLATINUM CMT32GX5M2X6200C36 RGB 32GB (2PK X 16GB) 6200MHz DDR5 C36 DESKTOP - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6496/6496081_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6496081/pdp",
          "salePrice": 173.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - DOMINATOR PLATINUM CMT64GX5M2B5200C40 RGB 64GB (2PK X 32GB) 5200MHz DDR5 C40 DESKTOP - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6496/6496086_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6496086/pdp",
          "salePrice": 217.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - DOMINATOR TITANIUM CMP32GX5M2X7000C34 RGB 32GB (2PKx16GB) DDR5 C34 Desktop - Black - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6565/6565642_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6565642/pdp",
          "salePrice": 214.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - DOMINATOR TITANIUM CMP32GX5M2X7000C34 RGB 32GB (2PKx16GB) DDR5 C34 Desktop - White - White",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6565/6565640_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6565640/pdp",
          "salePrice": 214.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - VENGEANCE (2x16GB) 6000 MHz DDR5 C36 Intel XMP Desktop Memory - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6562/6562317_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6562317/pdp",
          "salePrice": 99.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - Vengeance 16GB (1PK 16GB) 4800MHz DDR5 C40 SODIMM Laptop Memory - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6516/6516932_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6516932/pdp",
          "salePrice": 40.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - VENGEANCE 32GB (1PK 32GB) 4800MHz DDR5 C40 SODIMM Laptop Memory - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6519/6519626_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6519626/pdp",
          "salePrice": 79.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        },
        {
          "name": "CORSAIR - VENGEANCE 32GB (2PK 16GB) 6000MHz DDR5 C36 Desktop Memory - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6536/6536565_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6536565/pdp",
          "salePrice": 119.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0506000"
            }
          ]
        }
      ]
    }

    const gpuTestProducts = {
      "from": 1,
      "to": 10,
      "currentPage": 1,
      "total": 130,
      "totalPages": 13,
      "queryTime": "0.013",
      "totalTime": "0.024",
      "partial": false,
      "canonicalUrl": "/v1/products(categoryPath.id=abcat0507002)?show=name,image,url,salePrice,categoryPath.id&sort=name&format=json&apiKey=toaWjCNlzNVWZrIH9p4VJxIL",
      "products": [
        {
          "name": "ASUS - NVIDIA GeForce RTX 3060 Dual Overclock 12GB GDDR6 PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6557/6557544_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6557544/pdp",
          "salePrice": 299.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4060 Overclock 8GB GDDR6 PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6549/6549640_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6549640/pdp",
          "salePrice": 309.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4060 Strix 8GB GDDR6 PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6549/6549644_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6549644/pdp",
          "salePrice": 389.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4060 Ti Dual Overclock 16GB GDDR6 PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6557/6557696_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6557696/pdp",
          "salePrice": 499.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4060 Ti Dual Overclock 8GB GDDR6 PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6545/6545279_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6545279/pdp",
          "salePrice": 399.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4060 Ti ProArt Overclock 16GB GDDR6 PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6557/6557698_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6557698/pdp",
          "salePrice": 509.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4060 Ti TUF 8GB GDDR6 PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6545/6545278_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6545278/pdp",
          "salePrice": 439.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4070 12GB GDDR6X PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6540/6540000_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6540000/pdp",
          "salePrice": 599.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4070 Overclock 12GB GDDR6X PCI Express 4.0 Graphics Card",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6540/6540002_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6540002/pdp",
          "salePrice": 649.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        },
        {
          "name": "ASUS - NVIDIA GeForce RTX 4070 Overclock 12GB GDDR6X PCI Express 4.0 Graphics Card - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6540/6540001_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6540001/pdp",
          "salePrice": 579.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507002"
            }
          ]
        }
      ]
    }

    const psuTestProducts = {
      "from": 1,
      "to": 10,
      "currentPage": 1,
      "total": 46,
      "totalPages": 5,
      "queryTime": "0.011",
      "totalTime": "0.023",
      "partial": false,
      "canonicalUrl": "/v1/products(categoryPath.id=abcat0507009)?show=name,image,url,salePrice,categoryPath.id&sort=name&format=json&apiKey=toaWjCNlzNVWZrIH9p4VJxIL",
      "products": [
        {
          "name": "CORSAIR - 12-Pin GPU Power Cable, Sleeved - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6437/6437465_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6437465/pdp",
          "salePrice": 19.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - 2’ Premium Individually Sleeved 12+4pin PCIe Gen 5 Type-4 600W 12VHPWR Cable - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6531/6531632_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6531632/pdp",
          "salePrice": 29.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - 2’ Premium Individually Sleeved 12+4pin PCIe Gen 5 Type-4 600W 12VHPWR Cable - White",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6531/6531631_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6531631/pdp",
          "salePrice": 29.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - CX-M Series CX650M Semi-Modular Low-Noise ATX Power Supply - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6459/6459240_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6459240/pdp",
          "salePrice": 79.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - CX-M Series CX750M Semi-Modular Low-Noise ATX Power Supply - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6459/6459241_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6459241/pdp",
          "salePrice": 89.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - HXi Series 1000W 80 Plus Platinum Fully-Modular Ultra-Low Noise ATX Power Supply - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6544/6544995_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6544995/pdp",
          "salePrice": 234.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - HXi Series 1500W 80 Plus Platinum Fully-Modular Ultra-Low Noise ATX Power Supply - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6544/6544981_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6544981/pdp",
          "salePrice": 359.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - HXi Series HX1000i 80 PLUS Platinum Fully Modular Ultra-Low Noise ATX Power Supply - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6510/6510383_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6510383/pdp",
          "salePrice": 246.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - HXi Series HX1500i 80 PLUS Platinum Fully Modular Ultra-Low Noise ATX Power Supply - Black",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6510/6510382cv14d.jpg",
          "url": "https://api.bestbuy.com/click/-/6510382/pdp",
          "salePrice": 399.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        },
        {
          "name": "CORSAIR - RM Series RM750 750W ATX 80 PLUS GOLD Certified Fully Modular Power Supply - White",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6477/6477388_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6477388/pdp",
          "salePrice": 129.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0507000"
            },
            {
              "id": "abcat0507009"
            }
          ]
        }
      ]
    }

    const storageTestProducts = {
      "from": 1,
      "to": 10,
      "currentPage": 1,
      "total": 135,
      "totalPages": 14,
      "queryTime": "0.027",
      "totalTime": "0.039",
      "partial": false,
      "canonicalUrl": "/v1/products(categoryPath.id=pcmcat1538498095184)?show=name,image,url,salePrice,categoryPath.id&sort=name&format=json&apiKey=toaWjCNlzNVWZrIH9p4VJxIL",
      "products": [
        {
          "name": "ADATA - LEGEND 960 MAX 1TB Internal SSD PCIe Gen4 x4 with Heatsink for PS5",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6528/6528753_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6528753/pdp",
          "salePrice": 109.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "ADATA - LEGEND 960 MAX 4TB Internal SSD PCIe Gen4 x4 with Heatsink for PS5",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6528/6528752_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6528752/pdp",
          "salePrice": 499.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "ADATA - XPG GAMMIX S70 Blade 1TB Internal SSD PCIe Gen 4 x4 with Heatsink for PS5",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6486/6486459_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6486459/pdp",
          "salePrice": 89.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "ADATA - XPG GAMMIX S70 Blade 2TB Internal SSD PCIe Gen 4 x4 with Heatsink for PS5",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6486/6486460_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6486460/pdp",
          "salePrice": 149.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "ADATA - XPG GAMMIX S70 Blade 4TB Internal SSD PCIe Gen 4 x4 with Heatsink for PS5",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6504/6504289_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6504289/pdp",
          "salePrice": 529.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "CORSAIR - MP600 PRO LPX 1TB Internal SSD PCIe Gen 4 x4 NVMe with Heatsink for PS5",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6495/6495944_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6495944/pdp",
          "salePrice": 74.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "CORSAIR - MP600 PRO LPX 2TB Internal SSD PCIe Gen 4 x4 NVMe with Heatsink for PS5",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6495/6495945_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6495945/pdp",
          "salePrice": 119.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "CORSAIR - MP600 PRO XT 1TB Internal Gaming SSD PCIe Gen 4 x4 NVMe with Heatsink for Desktops",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6524/6524203_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6524203/pdp",
          "salePrice": 74.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "CORSAIR - MP600 PRO XT 2TB Internal Gaming SSD PCIe Gen 4 x4 NVMe with Heatsink for Desktops",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6524/6524204_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6524204/pdp",
          "salePrice": 129.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        },
        {
          "name": "Crucial - BX500 1TB Internal SSD SATA",
          "image": "https://pisces.bbystatic.com/prescaled/500/500/image2/BestBuy_US/images/products/6394/6394313_sd.jpg",
          "url": "https://api.bestbuy.com/click/-/6394313/pdp",
          "salePrice": 58.99,
          "categoryPath": [
            {
              "id": "cat00000"
            },
            {
              "id": "abcat0500000"
            },
            {
              "id": "abcat0515000"
            },
            {
              "id": "abcat0504001"
            },
            {
              "id": "pcmcat1538498095184"
            }
          ]
        }
      ]
    };
    
    return (
        <div className="ProductStrips">
            <ProductStrip stripName={"Motherboards"} products={moboTestProducts.products} productType="motherboard" productOnClick={productOnClick}></ProductStrip>
            <ProductStrip stripName={"Processors"} products={processorTestProducts.products} productType="processor" productOnClick={productOnClick}></ProductStrip>
            <ProductStrip stripName={"Graphics Cards"} products={gpuTestProducts.products} productType="gpu" productOnClick={productOnClick}></ProductStrip>
            <ProductStrip stripName={"Memory"} products={ramTestProducts.products} productType="ram" productOnClick={productOnClick}></ProductStrip>
            <ProductStrip stripName={"Power Supplies"} products={psuTestProducts.products} productType="psu" productOnClick={productOnClick}></ProductStrip>
            <ProductStrip stripName={"Storage"} products={storageTestProducts.products} productType="storage" productOnClick={productOnClick}></ProductStrip>
            <ProductStrip stripName={"Cases"} products={caseTestResults.products} productType="case" productOnClick={productOnClick}></ProductStrip>

        </div>
    )
}

export default ProductStrips;