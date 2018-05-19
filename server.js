var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Product = require('./api/models/productModel'), //created model loading here
  Category = require('./api/models/categoryModel'), //created model loading here
  Payment = require('./api/models/paymentModel'), //created model loading here
  Feedback = require('./api/models/feedbackModel'), //created model loading here
  Comment = require('./api/models/commentModel'), //created model loading here
  Order = require('./api/models/orderModel'), //created model loading here
  bodyParser = require('body-parser'),
  session = require('express-session'),
  validator = require('express-validator'),
  jwt = require('jsonwebtoken'),
  morgan = require('morgan'); 

var productRoutes = require('./api/routes/productRoutes');
var categoryRoutes = require('./api/routes/categoryRoutes');
var cartRoutes = require('./api/routes/cartRoutes');
var userRoutes = require('./api/routes/userRoutes');
var paymentRoutes = require('./api/routes/paymentRoutes');
var commentRoutes = require('./api/routes/commentRoutes');
var feedbackRoutes = require('./api/routes/feedbackRoutes');
var orderRoutes = require('./api/routes/orderRoutes');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

// var mongoDB = "mongodb://localhost/Renterdb"
var mongoDB = process.env.MONGODB_URI

mongoose.connect(mongoDB);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());	

productRoutes(app)
categoryRoutes(app)
userRoutes(app)
cartRoutes(app)
paymentRoutes(app)
feedbackRoutes(app)
commentRoutes(app)
orderRoutes(app)

app.listen(port);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

console.log('Rental RESTful API server started on: ' + port);