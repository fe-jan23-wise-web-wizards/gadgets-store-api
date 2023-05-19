# API for [Gadgets Store](https://github.com/fe-jan23-wise-web-wizards/gadgets-store)

## Base URL

`https://gadgets-store-api.up.railway.app`

## Endpoints
- [/products](https://github.com/fe-jan23-wise-web-wizards/gadgets-store-api/edit/main/README.md#products)
- [/orders](https://github.com/fe-jan23-wise-web-wizards/gadgets-store-api/edit/main/README.md#orders)
- [/favorites](https://github.com/fe-jan23-wise-web-wizards/gadgets-store-api/edit/main/README.md#favorites)
- [/cart](https://github.com/fe-jan23-wise-web-wizards/gadgets-store-api/edit/main/README.md#cart)
- [/static](https://github.com/fe-jan23-wise-web-wizards/gadgets-store-api/edit/main/README.md#static)

## Docs

### /products

`GET /products` - Use this endpoint to get all the products. You can use the following search parameters to make some filtering & sorting:
- **query** to get products that contain the substring in their names;
- **page** to get products of specific page (for pagination);
- **limit** to specify the number of products to return;
- **sort** to specify the sorting mode;
- **category** to specify the category of products;
<br/><br/>

Request example:
```sh
GET /products?query=apple&page=3&category=phones
```

Response example:
```sh
[
  {
    id: 17,
    itemId: "apple-iphone-xs-max-256gb-silver",
    category: "phones",
    name: "Apple iPhone XS Max 256GB Silver",
    fullPrice: 1080,
    price: 1000,
    screen: "6.5' OLED",
    capacity: "256GB",
    color: "silver",
    ram: "4GB",
    year: 2018,
    image: "img/phones/apple-iphone-xs-max/silver/00.webp"
  },
  {
    id: 34,
    itemId: "apple-iphone-xs-max-256gb-gold",
    category: "phones",
    name: "Apple iPhone XS Max 256GB Gold",
    fullPrice: 1080,
    price: 1000,
    screen: "6.5' OLED",
    capacity: "256GB",
    color: "gold",
    ram: "4GB",
    year: 2018,
    image: "img/phones/apple-iphone-xs-max/gold/00.webp"
  }
]
```
<br/>

`GET /products/new` - Use this endpoint to get the newest products. You can use **limit** search parameter to specify the number of products to return.

Request example:
```sh
GET /products/new?limit=2
```

Response example:
```sh
[
  {
    id: 193,
    itemId: "apple-iphone-14-pro-512gb-gold",
    category: "phones",
    name: "Apple iPhone 14 Pro 512GB Gold",
    fullPrice: 1600,
    price: 1530,
    screen: "6.1' OLED",
    capacity: "512GB",
    color: "gold",
    ram: "6GB",
    year: 2022,
    image: "img/phones/apple-iphone-14-pro/gold/00.webp"
  },
  {
    id: 72,
    itemId: "apple-iphone-14-128gb-midnight",
    category: "phones",
    name: "Apple iPhone 14 128GB Midnight",
    fullPrice: 1056,
    price: 980,
    screen: "6.1' IPS",
    capacity: "32GB",
    color: "midnight",
    ram: "6GB",
    year: 2022,
    image: "img/phones/apple-iphone-14/midnight/00.webp"
  }
]
```
<br/>

`GET /products/discount` - Use this endpoint to get all the products sorted by discount in descending order. You can use **limit** search parameter to specify the number of products to return.

Request example:
```sh
GET /products/discount?limit=1
```

Response example:
```sh
[
  {
    id: 137,
    itemId: "apple-watch-series-5-40mm-silver",
    category: "accessories",
    name: "Apple Watch Series 5 40mm Silver",
    fullPrice: 399,
    price: 299,
    screen: "1.57' OLED",
    capacity: "40mm",
    color: "silver",
    ram: "1GB",
    year: 2019,
    image: "img/accessories/apple-watch-series-5/silver/00.webp"
  }
]
```
<br/>

`GET /products/count` - Use this endpoint to get the products quantity. You can use the following search parameters to make some filtering & sorting:
- **query** to get products that contain the substring in their names;
- **category** to specify the category of products;

Request example:
```sh
GET /products/count?category=phones&query=apple
```

Response example:
```sh
{
  count: 124
}
```
<br/>

`GET /products/:id` - Use this endpoint to get the product by id.

Request example:
```sh
GET /products/apple-ipad-pro-11-2021-2tb-silver
```

Response example:
```sh
{
  id: 164,
  itemId: "apple-ipad-pro-11-2021-2tb-silver",
  category: "tablets",
  name: "Apple iPad Pro 11 (2021) 2TB Silver",
  fullPrice: 999,
  price: 939,
  screen: "11' Liquid Retina",
  capacity: "2TB",
  color: "silver",
  ram: "8GB",
  year: 2021,
  image: "img/tablets/apple-ipad-pro-11-2021/silver/00.webp"
}
```
<br/>

`GET /products/:id/details` - Use this endpoint to get the product's details.

Request example:
```sh
GET /products/apple-ipad-pro-11-2021-2tb-silver/details
```

Response example:
```sh
{
  "id": "apple-ipad-pro-11-2021-2tb-silver",
  "namespaceId": "apple-ipad-pro-11-2021",
  "name": "Apple iPad Pro 11 (2021) 2TB Silver",
  "capacityAvailable": [
    "128GB",
    "256GB",
    "512GB",
    "1TB",
    "2TB"
  ],
  "capacity": "2TB",
  "priceRegular": 999,
  "priceDiscount": 939,
  "colorsAvailable": [
    "spacegray",
    "silver"
  ],	
  "color": silver",
  "images": [
    "img/tablets/apple-ipad-pro-11-2021/silver/00.webp",
    "img/tablets/apple-ipad-pro-11-2021/silver/01.webp",
    "img/tablets/apple-ipad-pro-11-2021/silver/02.webp"
  ],
  "description": [
    {
      "text": [
        "Experience incredible power and performance with the Apple iPad Pro 11. With the M1 chip, it delivers a new level of performance, making it faster and more efficient than ever before.",
        "Whether you're editing photos, designing artwork, or multitasking with demanding apps, the iPad Pro 11 handles it all with ease."
      ],
      "title": "Powerful Performance"
    },
    {
      "text": [
        "Enjoy a vibrant and immersive visual experience on the iPad Pro 11's Liquid Retina display. With ProMotion technology and True Tone, the display adapts to your environment, providing smooth scrolling, precise color accuracy, and incredible detail.",
        "From watching movies to editing videos, the iPad Pro 11's display brings your content to life with stunning clarity."
      ],
      "title": "Stunning Liquid Retina Display"
    },
    {
      "text": [
        "Capture stunning photos and videos with the iPad Pro 11's advanced camera system. Featuring a 12MP Ultra Wide front camera and a 12MP Wide rear camera with LiDAR scanner, you can take high-quality shots and enjoy augmented reality experiences.",
        "Whether you're video calling, scanning documents, or recording 4K videos, the iPad Pro 11's camera system delivers exceptional performance."
      ],
      "title": "Versatile Camera System"
    },
  ],
  "screen": "11' Liquid Retina",
  "resolution": "2388x1668",
  "processor": "Apple M1",
  "ram": "16GB",
  "camera": "12MP + 12MP",
  "zoom": "Digital zoom up to 5x",
  "cell": [
    "Not applicable"
  ]	
}
```
<br/>

`GET /products/:id/recommended` - Use this endpoint to get the recommendations for the product.

Request example:
```sh
GET /products/apple-ipad-pro-11-2021-2tb-silver/recommended
```

Response example:
```sh
[
  {
    "id": 58,
    "itemId": "apple-iphone-11-pro-max-256gb-silver",
    "category": "phones",
    "name": "Apple iPhone 11 Pro Max 256GB Silver",
    "fullPrice": 1776,
    "price": 1680,
    "screen": "6.5' OLED",
    "capacity": "256GB",
    "color": "silver",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11-pro-max/silver/00.webp"
  },
  {
    "id": 59,
    "itemId": "apple-iphone-11-pro-max-512gb-midnightgreen",
    "category": "phones",
    "name": "Apple iPhone 11 Pro Max 512GB Midnightgreen",
    "fullPrice": 2020,
    "price": 1930,
    "screen": "6.5' OLED",
    "capacity": "512GB",
    "color": "midnightgreen",
    "ram": "4GB",
    "year": 2019,
    "image": "img/phones/apple-iphone-11-pro-max/midnightgreen/00.webp"
  }
]
```
<br/>


### /orders

`GET /orders/:userId` - Use this endpoint to get all the orders by user id.

Request example:
```sh
GET /orders/some-user-id
```

Response example:
```sh
[
  {
    "id": 1
    "userId": "some-user-id"
    "products": [
      {
        "quantity": 5,
        "productId": "apple-iphone-xs-max-256gb-gold"
      }
    ],
    "totalPrice": 5000,
    "createdAt": "2023-05-16T19:06:35.601Z"
  }
]
```
<br/>

`POST /orders/new` - Use this endpoint to create new order.

Request example:
```sh
POST /orders/new
```

Request body:
```sh
  {
    "userId": "some-user-id",
      "products": [
        {
          "quantity": 1,
          "productId": "apple-iphone-xs-max-256gb-gold"
        }
      ],
      "totalPrice": 1000
  }
```

Response example:
```sh
[
  {
    "id": 28,
    "userId": "some-user-id",
    "products": [{
        "quantity": 1,
        "productId": "apple-iphone-xs-max-256gb-gold"
    }],
    "totalPrice": 1000,
    "createdAt": "2023-05-18T10:21:27.922Z"
  }
]
```
<br/>

### /favorites

`GET /favorites/:userId` - Use this endpoint to get favorites of specific user.

Request example:
```sh
GET /favorites/some-user-id
```

Response example:
```sh
{
    "userId": "some-user-id",
    "products": [
      "apple-iphone-xs-max-256gb-gold",
      "apple-iphone-11-pro-max-256gb-silver",
      "apple-iphone-11-pro-max-512gb-midnight-green"
    ],
}
```
<br/>

`POST /favorites` - Use this endpoint to add new favorite or update it if it already exists.

Request example:
```sh
POST /favorites
```

Request body:
```sh
{
  "userId": "some-user-id",
  "products": [
    "apple-iphone-xs-max-256gb-gold",
    "apple-iphone-11-pro-max-256gb-silver",
    "apple-iphone-11-pro-max-512gb-midnight-green"
  ]
}
```

Response example:
```sh
{
  "userId": "some-user-id",
  "products": [
    "apple-iphone-xs-max-256gb-gold",
    "apple-iphone-11-pro-max-256gb-silver",
    "apple-iphone-11-pro-max-512gb-midnight-green"
  ]
}
```

<br/>

### /cart

`GET /cart/:userId` - Use this endpoint to get all the products in the cart by user id.

Request example:
```sh
GET /cart/some-user-id
```

Response example:
```sh
{
  "userId": "some-user-id",
  "products": [
    {
      "id": "apple-iphone-xs-max-256gb-gold",
      "price": 897,
      "quantity": 3,
    },
    {
      "id": "apple-iphone-11-pro-max-256gb-silver",
      "price": 1680,
      "quantity": 1,
    }
  ]
}
```
<br/>

`POST /cart` - Use this endpoint to add new product to the cart or update it if it already exists.

Request example:
```sh
POST /cart
```

Request body:
```sh
{
  "userId": "some-user-id",
  "products": [
    {
      "id": "apple-iphone-xs-max-256gb-gold",
      "price": 897,
      "quantity": 3,
    }
  ]
}
```

Response example:
```sh
{
  "userId": "some-user-id",
  "products": [
    {
      "id": "apple-iphone-xs-max-256gb-gold",
      "price": 897,
      "quantity": 3,
    }
  ]
}
```
<br/>

### /static

`GET /static` - Use this endpoint to get images.

Request example:
```sh
GET /static/img/banners/banner-1.webp
```

Response example: <br/>
![Banner](https://gadgets-store-api.up.railway.app/static/img/banners/banner-1.webp)


## How to run locally
1. Clone or fork the repository.
1. Create your own `.env` file based on `.env.example` file.
2. Run `npm install` in your terminal to download all the packages and dependencies.
3. `npm run dev` in your terminal to start development server.
