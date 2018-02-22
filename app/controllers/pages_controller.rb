class PagesController < ApplicationController
  def home
  end

  def about
      @programming_ls = ProgrammingL.all
  end
end
