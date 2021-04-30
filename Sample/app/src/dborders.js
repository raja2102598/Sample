var path = require("path")

var conn = require(path.join(__dirname, "../../app/db/dbConn"))

// var conn=require()


function saveOrders(input, callback) {

  var viewlog = dbdata(input)
  var item_length=input.items.length
//   console.log(input.items[0]);

  conn.query("insert into orders SET ?", viewlog, (err, results) => {
    if (err) {
      console.log(err)
    } else if (results) {
      for(var i=0;i<item_length;i++){
        conn.query("insert into items (itemName,itemCost,orderId) VALUES(?,?,?)",[input.items[i].itemname,input.items[i].itemcost,input.orderid],(err,result)=>{})
      }
      callback(null, results)
    } else {
      conn.end()
    }
  })
}

function dbdata(dblog) {
  
  var uilog = {}
  uilog.orderId=dblog.orderid
  uilog.orderName=dblog.ordername
  return uilog
}


function getOrders(input, callback) {
  conn.query("SELECT * from orders",(err, results) => {

    if (err) {
      console.log(err)
    } else if (results) {
      var i=0
      var len=results.length
      orders=[]
      results.forEach(element => {
        getItems(element.orderId,(err,result)=>{
            // console.log(i,result,results[i]);
            val={
              ...results[i],
              "items":result
            }
            i++
            orders.push(val)
            // console.log(val,i,len);
            if(i==len){
              callback(null,orders)
            }
        })
      });
      // callback(null, results)
      // console.log(val);
    } else {
      conn.end()
    }
  })
}

function getItems(input,callback){
  conn.query("select itemName,itemCost from items where orderId=?",input,(err,results)=>{
    if (err) {
      console.log(err)
    } else if (results) {
      callback(null, results)
      // console.log(results);
    } else {
      conn.end()
    }
  })
}


module.exports = {
  saveOrders,
  getOrders,
  getItems
}