class ProgrammingLsController < ApplicationController
  before_action :set_programming_l, only: [:show, :edit, :update, :destroy]

  # GET /programming_ls
  # GET /programming_ls.json
  def index
    @programming_ls = ProgrammingL.all
  end

  # GET /programming_ls/1
  # GET /programming_ls/1.json
  def show
  end

  # GET /programming_ls/new
  def new
    @programming_l = ProgrammingL.new
  end

  # GET /programming_ls/1/edit
  def edit
  end

  # POST /programming_ls
  # POST /programming_ls.json
  def create
    @programming_l = ProgrammingL.new(programming_l_params)

    respond_to do |format|
      if @programming_l.save
        format.html { redirect_to @programming_l, notice: 'Programming l was successfully created.' }
        format.json { render :show, status: :created, location: @programming_l }
      else
        format.html { render :new }
        format.json { render json: @programming_l.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /programming_ls/1
  # PATCH/PUT /programming_ls/1.json
  def update
    respond_to do |format|
      if @programming_l.update(programming_l_params)
        format.html { redirect_to @programming_l, notice: 'Programming l was successfully updated.' }
        format.json { render :show, status: :ok, location: @programming_l }
      else
        format.html { render :edit }
        format.json { render json: @programming_l.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /programming_ls/1
  # DELETE /programming_ls/1.json
  def destroy
    @programming_l.destroy
    respond_to do |format|
      format.html { redirect_to programming_ls_url, notice: 'Programming l was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_programming_l
      @programming_l = ProgrammingL.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def programming_l_params
      params.require(:programming_l).permit(:name, :imgLink, :percent_iq)
    end
end
