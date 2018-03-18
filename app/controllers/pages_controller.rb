class PagesController < ApplicationController

  def about
      @programming_ls = ProgrammingL.all
      @tools_skills = ToolsSkill.all
      @web = WorkProject.where("category = 1")
      @mobile = WorkProject.where("category = 2")
      @desktop = WorkProject.where("category = 3")
      @work_projects = WorkProject.all
  end

end
