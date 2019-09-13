var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var ListSchema = new Schema({
    Item: String,
    Owner: String,
});
mongoose.model('List', ListSchema);