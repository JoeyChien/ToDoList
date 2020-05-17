class GroupsController < ApplicationController
  def index
    @groups = Group.all
    @group = Group.new
  end

  def new
    
  end

  def create
    @group = Group.new(group_params)

    if @group.save
      # render json: { msg: "Save successful!" }  
      render notice: "Try again!" 
      # redirect_to groups_path , notice: "Save successful!"  
    else
      render notice: "Try again!" 
    end
  end

  def edit
    
    redirect_to todolists_path
   
  end

  private
  def group_params
    params.require(:group).permit(:name,
                                  :description)
  end

end
