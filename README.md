
# E-Commerce Marketplace REST API

This project involves building a REST API for an e-commerce marketplace. The system allows buyers and sellers to register and log in. Sellers can create a catalog of items, and buyers can interact with the system by getting a list of sellers, viewing a seller's catalog, and creating orders for items from the catalog. Sellers can retrieve a list of orders they've received.


## Installation

1. Clone the repository:

```bash
  git clone https://github.com/Ash-Armas/Unity-ECommerce.git
```
2. Navigate to the project directory:

```bash
  cd your-repository
```
3. Install dependencies:
```bash
  npm install
```
## dotenv
create a dotenv file at the root folder which will contain
```bash
  PORT=3000
  MONGODB_URI=""
```
#### Follow the below steps:
- Go to mongodb atlas
- create a database
- find the connection string
- put that connection string in the{ MONGODB_URI="(put here)" }
    in the dotenv file

## Run
To run the project: 
```bash
  npm start
```
## API Reference
### Auth APIs

##### • Register a user -

```http
  POST /api/auth/register
```
##### • Login -

```http
  POST /api/auth/login
```

### APIs for buyers

##### • Get a list of all sellers -
```http
  GET /api/buyer/list-of-sellers
```
##### • Get the catalog of a seller by seller_id -

```http
  GET /api/buyer/seller-catalog/:seller_id
```
##### • Send a list of items to create an order for seller with id = seller_id -

```http
  POST /api/buyer/create-order/:seller_id
```

### APIs for sellers

##### • Send a list of items to create a catalog for a seller -
```http
  POST /api/seller/create-catalog
```
##### •	Retrieve the list of orders received by a seller -

```http
  GET /api/seller/orders
```