class WorkProjectsController < ApplicationController
  before_action :set_work_project, only: [:show, :edit, :update, :destroy]

  # GET /work_projects
  # GET /work_projects.json
  def index
    @work_projects = WorkProject.all
  end

  # GET /work_projects/1
  # GET /work_projects/1.json
  def show
  end

  # GET /work_projects/new
  def new
    @work_project = WorkProject.new
  end

  # GET /work_projects/1/edit
  def edit
  end

  # POST /work_projects
  # POST /work_projects.json
  def create
    @work_project = WorkProject.new(work_project_params)

    respond_to do |format|
      if @work_project.save
        format.html { redirect_to @work_project, notice: 'Work project was successfully created.' }
        format.json { render :show, status: :created, location: @work_project }
      else
        format.html { render :new }
        format.json { render json: @work_project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /work_projects/1
  # PATCH/PUT /work_projects/1.json
  def update
    respond_to do |format|
      if @work_project.update(work_project_params)
        format.html { redirect_to @work_project, notice: 'Work project was successfully updated.' }
        format.json { render :show, status: :ok, location: @work_project }
      else
        format.html { render :edit }
        format.json { render json: @work_project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /work_projects/1
  # DELETE /work_projects/1.json
  def destroy
    @work_project.destroy
    respond_to do |format|
      format.html { redirect_to work_projects_url, notice: 'Work project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_work_project
      @work_project = WorkProject.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def work_project_params
      params.require(:work_project).permit(:title, :description, :imgLink, :info_link, :category, :technology)
    end
end
