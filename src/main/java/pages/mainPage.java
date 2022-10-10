package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class mainPage  {
	WebDriver driver;
	
	public mainPage(WebDriver driver) {
		this.driver=driver;
	}

	
	@FindBy (how= How.XPATH,using = "//button[contains (text() , 'Set SkyBlue Background')]") WebElement skyBlue_element;
	@FindBy (how= How.XPATH,using = "//button[contains (text() , 'Set White Background')]") WebElement skyWhite_element;

	//method to interact with webelement
	public  void click_skyBlue() {
		skyBlue_element.click();
	}
	
	public  void click_White_Button() {
		skyWhite_element.click();
	}
	

}
