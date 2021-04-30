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

