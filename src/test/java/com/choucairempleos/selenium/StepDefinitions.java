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
    private WebDriver webDriver;
    private String baseUrl = "https://www.choucairtesting.com/empleos-testing"; // Esta es la URL de Choucair a probar

    @Before //Antes de comenzar con las pruebas
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

    }

    @When("Press enter")
    public void press_enter() {
    }

    @Then("Result should be {int}")
    public void result_should_be(Integer result) {

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
