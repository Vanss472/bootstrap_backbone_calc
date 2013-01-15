require_relative "../test_helper"                
class KrcRouterTest < CapybaraTestCase 
  # def test_index_route
  #   visit("/")
  #   assert page.has_content?("Three facts")
  #   assert page.has_content?("more of them")
  # end 

  # def test_default_route
  #   visit("/#foo")
  #   assert page.has_content?("Three facts")
  #   visit("/#")
  #   assert page.has_content?("Three facts")
  # end 

  def test_click_thru  
    visit("/") 
    find('.triangle-down').click  
    assert page.has_content?("architecture for clouds")       
  end    
   
  def test_home_click_thru  
    visit("/#firstFact") 
    assert page.has_content?("architecture for clouds")
  end 
 
  def test_fact_click_thru 
    visit("/#firstFact")
    find('.antennablack').click
    assert page.has_content?("Approximately")
  end  
 
  def test_fact2_click_thru
    visit("/#secondFact") 
    find('.antennablackSize').click
    assert page.has_content?("security controls")
  end  

  def test_fact3_click_thru
    visit("/#thirdFact")
    find('.antennablackSize').click
    assert page.has_content?("DISCOVERING")
  end

  def test_question_click_thru
    visit("/#introQuestions")
    find('.triangle-down').click
    assert page.has_content?("VM hosts")
  end
end
