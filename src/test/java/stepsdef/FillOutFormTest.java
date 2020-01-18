package stepsdef;
import PageObject.MainPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import static junit.framework.TestCase.*;

public class FillOutFormTest {

    WebDriver driver;
    MainPage fillPage;

    private String msg = "Kocham Twittme. Jeśli też go kochasz, to świetnie, napisz do mnie 751.";

    @Given("^User is on Tweetme\\.co$")
    public void userIsOnTweetmeCo() {
        System.setProperty("webdriver.gecko.driver", "src/test/resource/geckodriver");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.get("http://127.0.0.1:8000/");
    }
    @When("^Entered Login: \"([^\"]*)\" and Password: \"([^\"]*)\"$")
    public void enteredLoginAndPassword(String arg0, String arg1) {
        fillPage = new MainPage(this.driver);
        fillPage.fillOutSecondForm(arg0, arg1);
    }
    @Then("^The user isn't logged$")
    public void theUserIsnTLogged() {
        assertTrue(fillPage.checkInvalidLogin().equals(true));
        driver.close();
    }
    @Then("^The user is logged$")
    public void theUserIsLogged() {
        assertSame(fillPage.checkLogged(), true);
      }

    @When("^Entered message on Tweetme$")
    public void enteredMessageOnTweetme() {
        fillPage = new MainPage(this.driver);
        fillPage.fillMessageForm(msg);
    }

    @Then("^The message is displayed$")
    public void theMessageIsDisplayed() throws InterruptedException {
        Thread.sleep(1000);
    //    assertSame(fillPage.checkLastMassageTweet(),"Nowy1 komentarz");
        assertEquals(fillPage.checkLastMassageTweet(),msg);
    }

    @When("^The user is logged in Tweetme$")
    public void theUserIsLoggedInTweetme() throws InterruptedException {
        fillPage = new MainPage(this.driver);
        fillPage.fillOutSecondForm("krzysztofKordecki", "specjalnosciowe");
        assertSame(fillPage.checkLogged(), true);
    }

    @When("^The user is Chosed the registration field$")
    public void theUserIsChosedTheRegistrationField() {
        fillPage = new MainPage(this.driver);
        fillPage.registrationSelection();
        assertSame(fillPage.checkRegistrationSelection(),true);
    }


    @When("^Entered Username: \"([^\"]*)\", Email: \"([^\"]*)\", Password: \"([^\"]*)\"$")
    public void enteredUsernameEmailPassword(String arg0, String arg1, String arg2) throws Throwable {
        fillPage = new MainPage(this.driver);
        fillPage.fillOutRegistrationForm(arg0,arg1,arg2);
        assertSame(fillPage.checkLogged(), true);
    }

    @Then("^The user is registrated in Tweetme$")
    public void theUserIsRegistratedInTweetme() {
        assertSame(fillPage.checkLogged(), true);
    //    driver.close();
    }
}
