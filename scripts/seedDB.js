const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
  {
    name: "Olivia Oxley",
    username: "ooxley918",
    password: "123"
  },
  {
    name: "Thomas Calhoun",
    Username: "tomjcal89",
    password: "123"
    
  }
];

