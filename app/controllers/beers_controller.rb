class BeersController < ApplicationController

    def index
        beers = Beer.all
        render json: beers
    end

    def create 
        beer = Beer.create(strong_params)
        if beer.valid? 
            render json: beer
        else
            render json: beer.errors, status: 422
        end
    end

    private
    def strong_params
        params.require(:beer).permit(:beer_name, :brewery_name, :style, :abv, :ibu, :image, :user_id)
    end
end
