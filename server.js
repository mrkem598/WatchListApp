//dependencies
var express = require("express");
var bodyParser = require("bodyParser");
var methodOverride = require("method-override");
//creating express app with a given port
var app = express();
var port = 3050;
// Server static content for the app from the "public" directory in the application directory.
