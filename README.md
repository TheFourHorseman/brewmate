# BrewMate

### Created by The Four Horseman - Aaron Criner, Joey Alexander, John Rucker, and Xavier Barker

## Overview
The BrewMate app is a combination of two major functions - a database of beers with information that can be added to by users, as well as a reccomendation function that takes in a users previous likes, and generates suggestions based on past behavior.

## Features
At a basic level, a BrewMate user can create an account and view an index of beers. They are able to upload beers to the database if they do not already exist, and can modify information on those beers. 

A user is able to 'like' a beer, which will allow users to track beers that they have enjoyed in the past. 

The like feature also allows for the creation of a background metric for a user, which tallys up the amount of each style of beer a user has liked, as well as calculate an average abv and ibu. 

Using these metrics, BrewMate will provide suggestions of beers that the user has not tried, providing suggestions that are based on previous liked beers. These suggestions are designed to be close to what a user has liked in the past, while allowing the user to be exposed to new styles of beer that they may not have thought of in the past. 

## Live App
The most current version of the live application is located at:
https://brewmate-web-service.onrender.com


## Project Set Up
To run this application, you will need to install dependecies listed in the dependencies section

Clone this repository
Install required dependencies:
```
$ bundle install
$ yarn install
```

Generate your database (a seed file with beers is located in the project already)
```
$ rails db:create
$ rails db:migrate
$ rails db:seed
```

## Dependencies - 
javascript:
    "@babel/preset-react": "^7.18.6",
    "@rails/activestorage": "^7.0.4-3",
    "@rails/ujs": "^7.0.4-3",
    "@rails/webpacker": "5.4.4",
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "babel-plugin-transform-react-remove-prop-types": "^0.4.24",
    "jest": "^29.5.0",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.10.0",
    "react_ujs": "^2.6.2",
    "reactstrap": "^9.1.9",
    "webpack": "^4.46.0",
    "webpack-cli": "^3.3.12"
ruby:
    ruby "3.2.0"
    gem "rails", "~> 7.0.4", ">= 7.0.4.3"
    gem "sprockets-rails"
    gem "pg", "~> 1.1"
    gem "puma", "~> 5.0"
    gem "importmap-rails"
    gem "turbo-rails"
    gem "stimulus-rails"
    gem "jbuilder"
    gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
    gem "bootsnap", require: false
    gem "rspec-rails", "~> 6.0"
    gem "webpacker", "~> 5.4"
    gem "react-rails", "~> 2.6"
    gem "devise", "~> 4.9"
    gem "bootstrap", "~> 5.2"



## Database Management
### Initial Setup
When database is initially seeded, since all beers are going to have an assosciated user, we create a user during database setup, then assign all of our beers to that user. This allows for the creation of an initial database of beers that are protected from user modification.

A .csv file is used to preload the database with a number of beers, this allows for a quick implementation of basic functionality, while also allowing for long term updates, for example, migrating beers that belonged to users into being owned by the application.

## The User Model
The User model is handled by Devise, with the addition of a has_many likes and has_many beers association to connect to those models in the database.

## The Beer Model
The Beer Model consists of the following information:
beer_name
brewery_name
abv
ibu
style
image

### Beer Validations
Beers must have ALL categories required, and beer name must be unique within the scope of brewery.

## The Likes Model
The likes model is simply a linking model between beers and users. A like belongs_to a User and a Beer. This linking association let's us track each time a user likes a beer.

## Generating suggestions
Suggestions are generated to the user through a set of database lookups. 
There are three suggestion categories: Style, ABV, and IBU
The style suggestions queries the database for 5 beers that match the top 3 styles that a user has liked
The ABV and IBU suggestions work by calculating the average ABV or IBU of the user, and finding 5 beers from the database that are closest to that average.



To-Do:
- About us xavier card has weird button spacing
- add visual to 'how our app works' section
- add video background to logo section of home page
- add styling to devise pages
- change beer show to have a table inside for beer data instead of lines of text
- change button on beer show to navigate instead of href 
- update add a beer style drop down to match edit beer dropdown


Stretch To-Do: 
- re render component instead of reloading page