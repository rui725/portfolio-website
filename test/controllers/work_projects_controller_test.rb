require 'test_helper'

class WorkProjectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @work_project = work_projects(:one)
  end

  test "should get index" do
    get work_projects_url
    assert_response :success
  end

  test "should get new" do
    get new_work_project_url
    assert_response :success
  end

  test "should create work_project" do
    assert_difference('WorkProject.count') do
      post work_projects_url, params: { work_project: { category: @work_project.category, description: @work_project.description, imgLink: @work_project.imgLink, info_link: @work_project.info_link, technology: @work_project.technology, title: @work_project.title } }
    end

    assert_redirected_to work_project_url(WorkProject.last)
  end

  test "should show work_project" do
    get work_project_url(@work_project)
    assert_response :success
  end

  test "should get edit" do
    get edit_work_project_url(@work_project)
    assert_response :success
  end

  test "should update work_project" do
    patch work_project_url(@work_project), params: { work_project: { category: @work_project.category, description: @work_project.description, imgLink: @work_project.imgLink, info_link: @work_project.info_link, technology: @work_project.technology, title: @work_project.title } }
    assert_redirected_to work_project_url(@work_project)
  end

  test "should destroy work_project" do
    assert_difference('WorkProject.count', -1) do
      delete work_project_url(@work_project)
    end

    assert_redirected_to work_projects_url
  end
end
