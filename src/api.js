import { Observable } from 'rxjs';

export default class Server {
    static getNearbyOrders() {
        return Observable.of({
            "count": 6,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 348,
                    "user": {
                        "id": 47,
                        "first_name": "Jayden",
                        "last_name": "Windle",
                        "phone": "+14157662054",
                        "profile_photo": null,
                        "rating": 4.0,
                        "is_jetpacker": false
                    },
                    "total_price": "2.00",
                    "line_items": [
                        {
                            "id": 472,
                            "product": 15,
                            "quantity": 1
                        }
                    ],
                    "location": {
                        "id": 5410,
                        "name": "1000 Stockton St",
                        "lat": 37.785834,
                        "lng": -122.406417,
                        "timestamp": "2018-04-11T23:42:26.034393Z"
                    },
                    "delivery": null,
                    "created_at": "2018-04-11T23:42:26.030066Z",
                    "distance": 0.0,
                    "status": "EXPIRED"
                },
                {
                    "id": 347,
                    "user": {
                        "id": 47,
                        "first_name": "Jayden",
                        "last_name": "Windle",
                        "phone": "+14157662054",
                        "profile_photo": null,
                        "rating": 4.0,
                        "is_jetpacker": false
                    },
                    "total_price": "4.00",
                    "line_items": [
                        {
                            "id": 471,
                            "product": 17,
                            "quantity": 1
                        }
                    ],
                    "location": {
                        "id": 5404,
                        "name": "1000 Stockton St",
                        "lat": 37.785834,
                        "lng": -122.406417,
                        "timestamp": "2018-04-11T23:33:45.316565Z"
                    },
                    "delivery": null,
                    "created_at": "2018-04-11T23:33:45.311851Z",
                    "distance": 0.0,
                    "status": "EXPIRED"
                },
                {
                    "id": 346,
                    "user": {
                        "id": 47,
                        "first_name": "Jayden",
                        "last_name": "Windle",
                        "phone": "+14157662054",
                        "profile_photo": null,
                        "rating": 4.0,
                        "is_jetpacker": false
                    },
                    "total_price": "4.00",
                    "line_items": [
                        {
                            "id": 470,
                            "product": 17,
                            "quantity": 1
                        }
                    ],
                    "location": {
                        "id": 5388,
                        "name": "1000 Stockton St",
                        "lat": 37.785834,
                        "lng": -122.406417,
                        "timestamp": "2018-04-11T23:05:35.916644Z"
                    },
                    "delivery": null,
                    "created_at": "2018-04-11T23:05:35.912215Z",
                    "distance": 0.0,
                    "status": "EXPIRED"
                },
                {
                    "id": 345,
                    "user": {
                        "id": 47,
                        "first_name": "Jayden",
                        "last_name": "Windle",
                        "phone": "+14157662054",
                        "profile_photo": null,
                        "rating": 4.0,
                        "is_jetpacker": false
                    },
                    "total_price": "4.00",
                    "line_items": [
                        {
                            "id": 469,
                            "product": 17,
                            "quantity": 1
                        }
                    ],
                    "location": {
                        "id": 5381,
                        "name": "1000 Stockton St",
                        "lat": 37.785834,
                        "lng": -122.406417,
                        "timestamp": "2018-04-11T22:52:00.110634Z"
                    },
                    "delivery": null,
                    "created_at": "2018-04-11T22:52:00.105328Z",
                    "distance": 0.0,
                    "status": "EXPIRED"
                },
                {
                    "id": 318,
                    "user": {
                        "id": 47,
                        "first_name": "Jayden",
                        "last_name": "Windle",
                        "phone": "+14157662054",
                        "profile_photo": null,
                        "rating": 4.0,
                        "is_jetpacker": false
                    },
                    "total_price": "2.00",
                    "line_items": [
                        {
                            "id": 437,
                            "product": 15,
                            "quantity": 1
                        }
                    ],
                    "location": {
                        "id": 2936,
                        "name": "270 11th St",
                        "lat": 37.772073,
                        "lng": -122.414934,
                        "timestamp": "2018-03-21T07:30:55.873186Z"
                    },
                    "delivery": null,
                    "created_at": "2018-03-21T07:30:55.868482Z",
                    "distance": 1.1,
                    "status": "EXPIRED"
                },
                {
                    "id": 317,
                    "user": {
                        "id": 47,
                        "first_name": "Jayden",
                        "last_name": "Windle",
                        "phone": "+14157662054",
                        "profile_photo": null,
                        "rating": 4.0,
                        "is_jetpacker": false
                    },
                    "total_price": "4.00",
                    "line_items": [
                        {
                            "id": 436,
                            "product": 17,
                            "quantity": 1
                        }
                    ],
                    "location": {
                        "id": 2888,
                        "name": "270 11th St",
                        "lat": 37.772073,
                        "lng": -122.414934,
                        "timestamp": "2018-03-21T06:25:38.072504Z"
                    },
                    "delivery": null,
                    "created_at": "2018-03-21T06:25:38.067805Z",
                    "distance": 1.1,
                    "status": "EXPIRED"
                }
            ]
        });
    }
    static getProducts() {
        return Observable.of({
            "count": 17,
            "next": null,
            "previous": null,
            "results": [
                {
                    "id": 15,
                    "name": "Advil Single Use Pack",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_59.png",
                    "price": "2.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 17,
                    "name": "Blowfish Hangover Remedy",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_63.png",
                    "price": "4.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 16,
                    "name": "Chocolate Sea Salt RX Bar",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_60.png",
                    "price": "3.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 4,
                    "name": "Cliff Bar",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/cliff_bar.jpg",
                    "price": "3.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 3,
                    "name": "Coke",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/coke.jpg",
                    "price": "2.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 10,
                    "name": "Cora Tampons",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_50.png",
                    "price": "3.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 13,
                    "name": "GoCubes Chewable Coffee",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_57.png",
                    "price": "3.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 14,
                    "name": "Goodwipes Premium Body Wipes",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_58.png",
                    "price": "3.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 1,
                    "name": "iPhone Cable",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/iphone-usb-charging-cable.jpg",
                    "price": "8.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 8,
                    "name": "Kit Kat",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/kit_kat.jpg",
                    "price": "2.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 6,
                    "name": "Kleenex on the go",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/kleenex-on-the-go.jpeg",
                    "price": "1.50",
                    "description": "",
                    "available": true
                },
                {
                    "id": 2,
                    "name": "Method Soap",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/method_soap.png",
                    "price": "4.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 7,
                    "name": "Mucinex",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Mucinex.jpg",
                    "price": "11.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 12,
                    "name": "Outlet-Free Phone CHRGR",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_54.png",
                    "price": "5.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 11,
                    "name": "Sambazon Energy Drink",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_52.png",
                    "price": "2.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 5,
                    "name": "Tide to go",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Tide_to_go.jpg",
                    "price": "5.00",
                    "description": "",
                    "available": true
                },
                {
                    "id": 9,
                    "name": "Zorpads Odor-Destroying Shoe Inserts",
                    "image": "https://jtpk-backend-dev.s3.amazonaws.com/products/Untitled_design_55.png",
                    "price": "5.00",
                    "description": "",
                    "available": true
                }
            ]
        });
    }
}