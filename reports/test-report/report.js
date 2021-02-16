$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.choucairempleos.selenium/choucair.feature");
formatter.feature({
  "name": "Testear formularios de login/choucair",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Testear formularios",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.step({
  "name": "Entering number \u003cfirstNumber\u003e and \u003csecondNumber\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.step({
  "name": "Result should be \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstNumber",
        "secondNumber",
        "result"
      ]
    },
    {
      "cells": [
        "6",
        "6",
        "12"
      ]
    },
    {
      "cells": [
        "6",
        "2",
        "8"
      ]
    },
    {
      "cells": [
        "8",
        "5",
        "13"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testear formularios",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\ASEGURAMIENTO\\IdeaProjects\\PruebaAutomatizacionChoucair\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.choucairempleos.selenium.StepDefinitions.setup(StepDefinitions.java:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.open_google_com()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Entering number 6 and 6",
  "keyword": "When "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.entering_number_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.press_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Result should be 12",
  "keyword": "Then "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.result_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testear formularios",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\ASEGURAMIENTO\\IdeaProjects\\PruebaAutomatizacionChoucair\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.choucairempleos.selenium.StepDefinitions.setup(StepDefinitions.java:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.open_google_com()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Entering number 6 and 2",
  "keyword": "When "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.entering_number_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.press_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Result should be 8",
  "keyword": "Then "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.result_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Testear formularios",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\Users\\ASEGURAMIENTO\\IdeaProjects\\PruebaAutomatizacionChoucair\\driver\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.choucairempleos.selenium.StepDefinitions.setup(StepDefinitions.java:24)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.open_google_com()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Entering number 8 and 5",
  "keyword": "When "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.entering_number_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.press_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Result should be 13",
  "keyword": "Then "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.result_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});