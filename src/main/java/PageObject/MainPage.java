package PageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MainPage {

    WebDriver driver;

    private By userNameIdField = By.id("id_username");
    private By passwordIdField = By.id("id_password");
    private By submitButtonField = By.xpath("/html/body/div[1]/div/form/button");
    private By nameLoginField = By.id("id_content");

    public MainPage(WebDriver driver){
        this.driver = driver;
    }

    public void fillOutSecondForm(String username, String password){
        driver.findElement(userNameIdField).clear();
        driver.findElement(userNameIdField).sendKeys(username);
        driver.findElement(passwordIdField).clear();
        driver.findElement(passwordIdField).sendKeys(password);
        driver.findElement(submitButtonField).click();
    }
    public Boolean checkInvalidLogin() {
        return driver.findElement(submitButtonField).isDisplayed();
    }
    public Boolean checkLogged() {
            return driver.findElement(nameLoginField).isDisplayed();
    }
}
