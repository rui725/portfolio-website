require 'test_helper'

class ProgrammingLsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @programming_l = programming_ls(:one)
  end

  test "should get index" do
    get programming_ls_url
    assert_response :success
  end

  test "should get new" do
    get new_programming_l_url
    assert_response :success
  end

  test "should create programming_l" do
    assert_difference('ProgrammingL.count') do
      post programming_ls_url, params: { programming_l: { imgLink: @programming_l.imgLink, name: @programming_l.name, percent_iq: @programming_l.percent_iq } }
    end

    assert_redirected_to programming_l_url(ProgrammingL.last)
  end

  test "should show programming_l" do
    get programming_l_url(@programming_l)
    assert_response :success
  end

  test "should get edit" do
    get edit_programming_l_url(@programming_l)
    assert_response :success
  end

  test "should update programming_l" do
    patch programming_l_url(@programming_l), params: { programming_l: { imgLink: @programming_l.imgLink, name: @programming_l.name, percent_iq: @programming_l.percent_iq } }
    assert_redirected_to programming_l_url(@programming_l)
  end

  test "should destroy programming_l" do
    assert_difference('ProgrammingL.count', -1) do
      delete programming_l_url(@programming_l)
    end

    assert_redirected_to programming_ls_url
  end
end
