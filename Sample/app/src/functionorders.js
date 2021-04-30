var path = require("path")

var dbconn = require(path.join(__dirname, "./dborders"))




function saveOrderDetails(req, res) {
  // console.log(req);
  dbconn.saveOrders(req.body, (err, result) => {
    var user = req.body
      if (err) {
        console.log(err)
      } else {
        // console.log(result)
        res.send("Data stored successfully")
      }
  })
}

function getOrderDetails(req, res) {
  // console.log(req);
  dbconn.getOrders(req.body, (err, result) => {
    var user = req.body
      if (err) {
        console.log(err)
      } else {
        resp={"orders":result}
        res.send(resp)
      }
  })
}

module.exports = {
  saveOrderDetails,
  getOrderDetails
}