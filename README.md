# Simple API created using NodeJS with Express

## Run 

- npm install
- node index.js

## URL's

1. http://localhost:5000/orders - POST Request



```
//Request params - JSON Object
{
	"orderid":"103",
	"ordername":"order 100",
	"items":[
		{
			"itemname":"item1",
			"itemcost":"100"
		},
		{
			"itemname":"item2",
			"itemcost":"200"
		}								
	]
}
```

2. http://localhost:5000/orders - GET Request

```
//Response Object
{
  "orders": [
    {
      "orderId": 100,
      "orderName": "order 100",
      "items": [
        {
          "itemName": "item1",
          "itemCost": 101
        },
        {
          "itemName": "item2",
          "itemCost": 200
        }
      ]
    },
    {
      "orderId": 101,
      "orderName": "order 100",
      "items": [
        {
          "itemName": "item1",
          "itemCost": 102
        },
        {
          "itemName": "item2",
          "itemCost": 200
        }
      ]
    },
    {
      "orderId": 102,
      "orderName": "order 100",
      "items": [
        {
          "itemName": "item1",
          "itemCost": 103
        },
        {
          "itemName": "item2",
          "itemCost": 200
        }
      ]
    },
    {
      "orderId": 103,
      "orderName": "order 100",
      "items": [
        {
          "itemName": "item1",
          "itemCost": 104
        },
        {
          "itemName": "item2",
          "itemCost": 200
        }
      ]
    }
  ]
}
```

