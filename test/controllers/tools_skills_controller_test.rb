require 'test_helper'

class ToolsSkillsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @tools_skill = tools_skills(:one)
  end

  test "should get index" do
    get tools_skills_url
    assert_response :success
  end

  test "should get new" do
    get new_tools_skill_url
    assert_response :success
  end

  test "should create tools_skill" do
    assert_difference('ToolsSkill.count') do
      post tools_skills_url, params: { tools_skill: { imgLink: @tools_skill.imgLink, name: @tools_skill.name, percent_iq: @tools_skill.percent_iq } }
    end

    assert_redirected_to tools_skill_url(ToolsSkill.last)
  end

  test "should show tools_skill" do
    get tools_skill_url(@tools_skill)
    assert_response :success
  end

  test "should get edit" do
    get edit_tools_skill_url(@tools_skill)
    assert_response :success
  end

  test "should update tools_skill" do
    patch tools_skill_url(@tools_skill), params: { tools_skill: { imgLink: @tools_skill.imgLink, name: @tools_skill.name, percent_iq: @tools_skill.percent_iq } }
    assert_redirected_to tools_skill_url(@tools_skill)
  end

  test "should destroy tools_skill" do
    assert_difference('ToolsSkill.count', -1) do
      delete tools_skill_url(@tools_skill)
    end

    assert_redirected_to tools_skills_url
  end
end
