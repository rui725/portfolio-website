class PagesController < ApplicationController
  def home
  end

  def about
      @programming_ls = ProgrammingL.all
      @tools_skills = ToolsSkill.all
  end

  def work
     @work_projects = WorkProject.all
     @web = WorkProject.where("category = 1")
     @mobile = WorkProject.where("category = 2")
     @desktop = WorkProject.where("category = 3")
  end

end
