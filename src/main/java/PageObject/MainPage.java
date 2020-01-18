package PageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class MainPage {

    WebDriver driver;

    private By userNameIdField = By.id("id_username");
    private By passwordIdField = By.id("id_password");
    private By submitButton = By.xpath("/html/body/div[1]/div/form/button");
    private By nameMessageField = By.id("id_content");
    private By tweetButton = By.xpath("/html/body/div[1]/div/div[2]/div[1]/form/input[2]");
    private By lastMessageTweet = By.xpath("/html/body/div[1]/div/div[2]/div[2]/div[1]/div/span");
    private By regEmailField = By.id("id_email");
    private By regPasswordField2 = By.id("id_password2");
    private By registerClickField = By.xpath("//*[@id=\"bs-example-navbar-collapse-1\"]/ul/li[2]/a");
    private By registerButton = By.xpath("/html/body/div[1]/div/div/form/input[2]");

    public MainPage(WebDriver driver){
        this.driver = driver;
    }

    public void fillOutSecondForm(String username, String password){
        driver.findElement(userNameIdField).clear();
        driver.findElement(userNameIdField).sendKeys(username);
        driver.findElement(passwordIdField).clear();
        driver.findElement(passwordIdField).sendKeys(password);
        driver.findElement(submitButton).click();
    }
    public void fillMessageForm(String message) {
        driver.findElement(nameMessageField).clear();
        driver.findElement(nameMessageField).sendKeys(message);
        driver.findElement(tweetButton).click();
    }
        public void registrationSelection() {
            driver.findElement(registerClickField).click();
    }
    public Boolean checkInvalidLogin() {
        return driver.findElement(submitButton).isDisplayed();
    }
    public Boolean checkRegistrationSelection() {
            return driver.findElement(regEmailField).isDisplayed();
    }
    public Boolean checkLogged() {
            return driver.findElement(nameMessageField).isDisplayed();
    }
    public String checkLastMassageTweet() {
        return driver.findElement(lastMessageTweet).getText();
    }
    public void fillOutRegistrationForm(String username, String mail, String password){
        driver.findElement(userNameIdField).clear();
        driver.findElement(userNameIdField).sendKeys(username);
        driver.findElement(regEmailField).clear();
        driver.findElement(regEmailField).sendKeys(mail);
        driver.findElement(passwordIdField).clear();
        driver.findElement(passwordIdField).sendKeys(password);
        driver.findElement(regPasswordField2).clear();
        driver.findElement(regPasswordField2).sendKeys(password);
        driver.findElement(registerButton).click();
        driver.findElement(userNameIdField).clear();
        driver.findElement(userNameIdField).sendKeys(username);
        driver.findElement(passwordIdField).clear();
        driver.findElement(passwordIdField).sendKeys(password);
        driver.findElement(submitButton).click();
    }
}
