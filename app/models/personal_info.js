var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/
 
// set up a mongoose model
var UserSchema = new Schema({
  	f_name: {
        type: String,
        required: true
    },
  	l_name: {
        type: String,
        required: true
    },
  	address:{
    	type:String,
    	require:true
    },
    birth:{
    	type: Date,
    	require: true
    }
});