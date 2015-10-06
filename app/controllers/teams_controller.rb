class TeamsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_team, only: [:edit, :update, :show, :destroy]

  def index
    @teams = current_user.teams
  end

  def new
    @team = Team.new
  end

  def create
    @team = Team.create(team_params)

    if @team.save
      flash[:notice]= "Team Created!"
      redirect_to user_path(current_user.id)
    else
      flash[:error]= "Something went wrong"
      render :new
    end
  end

  def edit
  end

  def update
    if @team.update(team_params)
      flash[:notice]= "Update successful!"
      redirect_to user_path(current_user.id)
    else
      flash[:error]= "Something went wrong"
      render :edit
    end
  end

  def show
  end

  def destroy
    @team.destroy
    redirect_to user_path(current_user.id)
  end

  private

    def team_params
      params.require(:team).permit(:team_name, :user_id)
    end

    def find_team
      @team = Team.find_by(id: params[:id])
    end
end
