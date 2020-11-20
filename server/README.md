# Backend

The server runs on localhost port 4000.

## Endpoints

### Items Endpoints:

| Endpoints    | HTTP Method | Description                        |
| ------------ | ----------- | ---------------------------------- |
| `/items`     | GET         | Retrieve all items in the database |
| `/items/:id` | GET         | Get an item by its id              |

### Companies Endpoints:

| Endpoints        | HTTP Method | Description                            |
| ---------------- | ----------- | -------------------------------------- |
| `/companies`     | GET         | Retrieve all companies in the database |
| `/companies/:id` | GET         | Get a company by its id                |

### Order Endpoints

| Endpoints  | HTTP Method | Description                         |
| ---------- | ----------- | ----------------------------------- |
| `/orders`  | GET         | Retrieve all orders in the database |
| `/orders/` | POST        | Create an order                     |

#### Order body data structure

```json {
   "created_at": "2020-11-20T12:00:00Z",
   "_id": "f619188a-2b49-11eb-adc1-0242ac120002",
   "customer_name": "John Smith",
   "shipping_address": "3213 Rue Coloniale, Montreal, H6Y27J QC",
   "total_price": 309.97,
   "total_quantity": 3,
   "payment_information": {
     "credit_card_number": 378282246310005,
     "expiration_date": "2025-11-20T12:00:00Z",
     "name_on_credit_card": "John Smith",
     "billing_address": "5555 avenue Mont Royal Ouest, H2A2HA, Montreal QC"
   },
   "items": [
     {
       "_id": 6543,
       "quantity": 1,
       "price": 49.99,
       "item": {
         "_id": 6543,
         "name": "Barska GB12166 Fitness Watch with Heart Rate Monitor",
         "price": "$49.99",
         "body_location": "Wrist",
         "category": "Fitness",
         "imageSrc":"...",
         "numInStock": 9,
         "companyId": 19962
       }
     },
     {
       "_id": 6556,
       "quantity": 2,
       "price": 259.98,
       "item": {
         "name": "Garmin Vivofita,, Fitness Band",
         "price": "$129.99",
         "body_location": "Wrist",
         "category": "Fitness",
         "_id": 6556,
         "imageSrc": "...",
         "numInStock": 11,
         "companyId": 10713
       }
     }
   ]
 }
```
