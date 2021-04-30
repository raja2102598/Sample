var express = require("express")

var bodyParser = require("body-parser")

var path = require("path")
const app = express()


var orders = require(path.join(
  __dirname,
  "./app/src/functionorders"
))




app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.send("hello")
})

app.post("/orders",orders.saveOrderDetails)

app.get("/orders",orders.getOrderDetails)


app.listen(process.env.PORT || 5000, () => {
  console.log("Server Started")
})