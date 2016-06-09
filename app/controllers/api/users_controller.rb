class Api::UsersController < ApplicationController

  def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render "api/users/show"
		else
			@errors = @user.errors.full_messages
			render "api/shared/error", status: 422
		end
	end

  def update

    @user = User.find(params[:id])
    if @user.update(user_params)
      login(@user)
      render "api/users/show"
    elsif @user
      @errors = @user.errors.full_messages
      render "api/shared/error", status: 422
    else
      render json: nil, status: 404
    end
  end

	def show
		@user = current_user
		if @user
			render "api/users/show"
		else
			render json: nil, status: 404
		end
	end

	private
	def user_params
		params.require(:user).permit(:name, :email, :password, :image)
	end

end
