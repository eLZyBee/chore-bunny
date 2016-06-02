class Api::BunniesController < ApplicationController

  def index
    @bunnies = Bunny.all
    render 'api/bunnies/index'
  end

  def create
    @bunny = Bunny.new(bunny_params)
    if @bunny.save
      login(@bunny)
      render "api/bunnies/show"
    else
      @errors = @bunny.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @bunny = Bunny.find(params[:id])
    if @bunny
      render "api/bunnies/show"
    else
      render json: nil, status: 404
    end
  end

  def update
    @bunny = Bunny.find(params[:id])
    if @bunny.update(bunny_params)
      render "api/bunnies/show"
    elsif @bunny
      @errors = @bunny.errors.full_messages
      render "api/shared/error", status: 422
    else
      render json: nil, status: 404
    end
  end

  def destroy
    @bunny = Bunny.find(params[:id])
    @bunny.destroy
    render "api/bunnies/show"
  end

  private
  def bunny_params
    params.require(:bunny).permit(:user_id)
  end

end
