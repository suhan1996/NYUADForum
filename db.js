/**
 * Created by Suhan on 25/03/2017.
 */
var mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');
// my schema goes here!
const Comment = new mongoose.Schema({
    text: String,
    user: String
});
const Link = new mongoose.Schema({
    //url: String,
    title: String,
    comment: [Comment],
    vote: Number
});

const Upvote = new mongoose.Schema({
    number: Number
})

//URLSlugs('<user>');
Link.plugin(URLSlugs("_id"));
mongoose.model('Comment', Comment);
mongoose.model('Link', Link);
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost/nyushit');
mongoose.connect('mongodb://suhan1996:112496@ds155820.mlab.com:55820/heroku_fbpxtp00');

//
//if (process.env.NODE_ENV === 'PRODUCTION') {
//    // if we're in PRODUCTION mode, then read the configration from a file
//    // use blocking file io to do this...
//    var fs = require('fs');
//    var path = require('path');
//    var fn = path.join(__dirname, 'config.json');
//    var data = fs.readFileSync(fn);
//
//    // our configuration file will be in json, so parse it and set the
//    // conenction string appropriately!
//    var conf = JSON.parse(data);
//    var dbconf = conf.dbconf;
//} else {
//    // if we're not in PRODUCTION mode, then use
//    dbconf = 'mongodb://localhost/final';
//    console.log("else",dbconf)
//}
//console.log("final",dbconf)
//
//mongoose.connect(dbconf)