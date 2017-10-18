/**
 * Created by Suhan on 25/03/2017.
 */
var mongoose = require('mongoose');
const URLSlugs = require('mongoose-url-slugs');
// my schema goes here!
const Comment = new mongoose.Schema({
    text: String,
    user: String,
    time:String
});
const Link = new mongoose.Schema({
    //url: String,
    title: String,
    comment: [Comment],
    vote: Number,
    time: String
});

const Upvote = new mongoose.Schema({
    number: Number
})

//URLSlugs('<user>');
Link.plugin(URLSlugs("_id"));
mongoose.model('Comment', Comment);
mongoose.model('Link', Link);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://passwordis123456:123456@ds139124.mlab.com:39124/heroku_cftw89xp');
