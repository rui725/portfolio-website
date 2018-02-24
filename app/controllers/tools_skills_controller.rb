class ToolsSkillsController < ApplicationController
  before_action :set_tools_skill, only: [:show, :edit, :update, :destroy]

  # GET /tools_skills
  # GET /tools_skills.json
  def index
    @tools_skills = ToolsSkill.all
  end

  # GET /tools_skills/1
  # GET /tools_skills/1.json
  def show
  end

  # GET /tools_skills/new
  def new
    @tools_skill = ToolsSkill.new
  end

  # GET /tools_skills/1/edit
  def edit
  end

  # POST /tools_skills
  # POST /tools_skills.json
  def create
    @tools_skill = ToolsSkill.new(tools_skill_params)

    respond_to do |format|
      if @tools_skill.save
        format.html { redirect_to @tools_skill, notice: 'Tools skill was successfully created.' }
        format.json { render :show, status: :created, location: @tools_skill }
      else
        format.html { render :new }
        format.json { render json: @tools_skill.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tools_skills/1
  # PATCH/PUT /tools_skills/1.json
  def update
    respond_to do |format|
      if @tools_skill.update(tools_skill_params)
        format.html { redirect_to @tools_skill, notice: 'Tools skill was successfully updated.' }
        format.json { render :show, status: :ok, location: @tools_skill }
      else
        format.html { render :edit }
        format.json { render json: @tools_skill.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tools_skills/1
  # DELETE /tools_skills/1.json
  def destroy
    @tools_skill.destroy
    respond_to do |format|
      format.html { redirect_to tools_skills_url, notice: 'Tools skill was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tools_skill
      @tools_skill = ToolsSkill.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tools_skill_params
      params.require(:tools_skill).permit(:name, :imgLink, :percent_iq)
    end
end
