class LikeController < ApplicationController
    def create
        like = Like.new(strong_params)
        if like.valid?
            render json: like
        else
            render json: like.errors, status: 422
        end        
    end

    def destroy
        like = Like.find(params[:id])
        like.destroy
        if like.valid?
            render json: like
        else
            render json: like.errors, status: 422
        end
    end

    def index
        likes = Like.all
        render json: likes.joins[:beer]
    end

    private

    def strong_params
        params.require(:like).permit(:beer_id, :user_id)
    end
end
