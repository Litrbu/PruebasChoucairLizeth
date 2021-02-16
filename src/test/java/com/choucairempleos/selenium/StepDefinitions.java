package com.choucairempleos.selenium;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class StepDefinitions {
    private WebDriver webDriver; //Sale del selenium que se agrego en build.gradle
    //private String baseUrl = "https://www.google.com"; //La url que vamos a probar
    private String baseUrl = "https://www.choucairtesting.com/empleos-testing"; //La url que vamos a probar

    @Before //Antes que inicien las pruebas
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();
    }

    @Given("Open google.com")
    public void open_google_com() {
        webDriver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        webDriver.get(baseUrl);
    }

    @When("Entering number {int} and {int}")
    public void entering_number_and(Integer first, Integer second) {
        //Obtenemos el input que tenga la clase gLFyf y le asignamos una cadena de texto
        /*WebElement googleTextBox = webDriver.findElement(By.className("gLFyf"));
        googleTextBox.sendKeys(first + " + " + second);*/
    }

    @When("Press enter")
    public void press_enter() {
        /*WebElement searchButton = webDriver.findElement(By.className("gNO89b"));
        searchButton.click();*/
    }

    @Then("Result should be {int}")
    public void result_should_be(Integer result) {
        /*WebElement calculatorTextBox = webDriver.findElement(By.className("qv3Wpe"));
        Integer getResult = Integer.parseInt(calculatorTextBox.getText());
        Assert.assertEquals(getResult, result);*/
        WebElement calculatorTextBox = webDriver.findElement(By.className("mob-standard-logo"));
        Assert.assertNotNull(calculatorTextBox);
        webDriver.close();
    }

    @After
    public void end() {
        if (webDriver != null) {
            webDriver.quit();
        }
    }

}
