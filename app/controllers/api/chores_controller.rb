class Api::ChoresController < ApplicationController

  def index
    @chores = Chore.all
    render 'api/chores/index'
  end

  def create
    @chore = Chore.new(chore_params)
    if @chore.save
      render "api/chores/show"
    else
      @errors = @chore.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @chore = Chore.find(params[:id])
    if @chore
      render "api/chores/show"
    else
      render json: nil, status: 404
    end
  end

  def update
    @chore = Chore.find(params[:id])
    if @chore.update(chore_params)
      render "api/chores/show"
    elsif @chore
      @errors = @chore.errors.full_messages
      render "api/shared/error", status: 422
    else
      render json: nil, status: 404
    end
  end

  def destroy
    @chore = Chore.find(params[:id])
    @chore.destroy
    render "api/chores/show"
  end

  private
  def chore_params
    params.require(:chore).permit(:name)
  end

end
