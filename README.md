# BrewMate

### Created by The Four Horseman - Aaron Criner, Joey Alexander, John Rucker, and Xavier Barker

## Overview
The BrewMate app is a combination of two major functions - a database of beers with information that can be added to by users, as well as a reccomendation function that takes in a users previous likes, and generates suggestions based on past behavior.

## Features
At a basic level, a BrewMate user can create an account and view an index of beers. They are able to upload beers to the database if they do not already exist, and can modify information on those beers. 

A user is able to 'like' a beer, which will allow users to track beers that they have enjoyed in the past. 

The like feature also allows for the creation of a background metric for a user, which tallys up the amount of each style of beer a user has liked, as well as calculate an average abv and ibu. 

Using these metrics, BrewMate will provide suggestions of beers that the user has not tried, providing suggestions that are based on previous liked beers. These suggestions are designed to be close to what a user has liked in the past, while allowing the user to be exposed to new styles of beer that they may not have thought of in the past. 



## Project Set Up
To run this application, you will need to install dependecies listed in the dependencies section

Clone this repository
Install required dependencies:
```
$ bundle install
$ yarn install
```

Generate your database (seed file is located in the project already)
```
$ rails db:create
$ rails db:migrate
$ rails db:seed
```

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
