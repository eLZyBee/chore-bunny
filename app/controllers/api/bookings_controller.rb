class Api::BookingsController < ApplicationController

  def index
    if current_user
      @bookings = current_user.bookings
      @appointments = current_user.appointments
      render 'api/bookings/index'
    else
      render json: nil
    end
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
			render "api/bookings/show"
		else
			@errors = @booking.errors.full_messages
			render "api/shared/error", status: 422
		end
  end

  def show
    @booking = Booking.find(params[:id])
    if @booking
			render "api/bookings/show"
		else
			render json: nil, status: 404
		end
  end

  def update
    @booking = Booking.find(params[:id])
    if @booking.update(booking_params)
      render "api/bookings/show"
    elsif @booking
      @errors = @booking.errors.full_messages
      render "api/shared/error", status: 422
    else
      render json: nil, status: 404
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy
    render "api/bookings/show"
  end

  private
  def booking_params
    params.require(:booking).permit(
      :bunny_id,
      :parent_id,
      :chore_id,
      :room_id,
      :details,
      :date,
      :completed
    )
  end

end
