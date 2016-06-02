class Api::RoomsController < ApplicationController

  def index
    @rooms = Room.all
    render 'api/rooms/index'
  end

  def create
    @room = Room.new(room_params)
    if @room.save
      render "api/rooms/show"
    else
      @errors = @room.errors.full_messages
      render "api/shared/error", status: 422
    end
  end

  def show
    @room = Room.find(params[:id])
    if @room
      render "api/rooms/show"
    else
      render json: nil, status: 404
    end
  end

  def update
    @room = Room.find(params[:id])
    if @room.update(room_params)
      render "api/rooms/show"
    elsif @room
      @errors = @room.errors.full_messages
      render "api/shared/error", status: 422
    else
      render json: nil, status: 404
    end
  end

  def destroy
    @room = Room.find(params[:id])
    @room.destroy
    render "api/rooms/show"
  end

  private
  def room_params
    params.require(:room).permit(:name, :description)
  end

end
