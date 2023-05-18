# API for Gadgets store

## Installation
1. create your own `.env` file based on `.env.example` file.
2. Run `npm install` in your terminal to download all the packages and dependencies.
3. `npm run dev` in your terminal to start development server.
<br/>

## API usage

### Base URL
All API endpoints have the following base URL:<br/> `gadgets-store-api.up.railway.app`

### Products

1. `GET /products` <br/>
Use this endpoint to get all the products. You can use the following search parameters to make some filtering & sorting:
- **query** to get products that contain the substring in their names;
- **page** to get products of specific page (for pagination);
- **limit** to specify the number of products to return;
- **sort** to specify the sorting mode;
- **category** to specify the category of products;
<br/><br/>

Request example:
```sh
GET /products?query=apple&page=3&&category=phones
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

2. `GET /products/new` <br/>
Use this endpoint to get the newest products. You can use **limit** search parameter to specify the number of products to return.

3. `GET /products/discount` <br/>
Use this endpoint to get all the products sorted by discount in descending order. You can use **limit** search parameter to specify the number of products to return.`

4. `GET /products/count` <br/>
Use this endpoint to get the products quantity. You can use the following search parameters to make some filtering & sorting:
- **query** to get products that contain the substring in their names;
- **category** to specify the category of products;

5. `GET /products/:id` <br/>
Use this endpoint to get the product by id.

6. `GET /products/:id/details` <br/>
Use this endpoint to the product's details.

7. `GET /products/:id/recommended` <br/>
Use this endpoint to get the recommendations for the product.


### Orders

1. `GET /orders/:userId` <br/>
Use this endpoint to get all the orders by user id.

2. `POST /orders/new` <br/>
Use this endpoint to create new order.

### Images

1. `GET /static` <br/>
Use this endpoint to get an image.

