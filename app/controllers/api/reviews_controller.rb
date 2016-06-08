class Api::ReviewsController < ApplicationController

  def index
    @reviews = Bunny.find(params[:bunny_id]).reviews
    render "api/reviews/index"
  end

  def create
    @review = Review.new(review_params)
    if @review.save
			render "api/reviews/show"
		else
			@errors = @review.errors.full_messages
			render "api/shared/error", status: 422
		end
  end

  def show
    @review = Review.find(params[:id])
    if @review
			render "api/reviews/show"
		else
			render json: nil, status: 404
		end
  end

  private
  def review_params
    params.require(:booking).permit(:booking_id, :body, :positive)
  end

end
