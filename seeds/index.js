const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const cities = require('./cities');
const {places, descriptors} = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", ()=>{
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async() => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20)+10;
        const camp = new Campground({
            author: '6785116bdf8c0629bb586599',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit',
            price,
            images: [
                {
                    url: 'https://res.cloudinary.com/do7pop7od/image/upload/v1737209879/YelpCamp/rqhtla6barfnphztjx3i.png',
                    filename: 'YelpCamp/rqhtla6barfnphztjx3i',
                  },
                  {
                    url: 'https://res.cloudinary.com/do7pop7od/image/upload/v1737209880/YelpCamp/g9ofdx9gzfdqhvwswc64.jpg',
                    filename: 'YelpCamp/g9ofdx9gzfdqhvwswc64',
                  }
            ]
        })
        await camp.save();
    }
}

seedDB().then(()=> {
    mongoose.connection.close();
});