class PagesController < ApplicationController
  def home
  end

  def about
      @programming_ls = ProgrammingL.all
      @tools_skills = ToolsSkill.all
  end
end
