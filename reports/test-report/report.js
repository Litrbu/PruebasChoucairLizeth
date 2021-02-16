$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.choucairempleos.selenium/choucair.feature");
formatter.feature({
  "name": "Testear pagina/choucair",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Testear pagina",
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
        "1",
        "1",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testear pagina",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Open google.com",
  "keyword": "Given "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.open_google_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Entering number 1 and 1",
  "keyword": "When "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.entering_number_and(java.lang.Integer,java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.press_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Result should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "com.choucairempleos.selenium.StepDefinitions.result_should_be(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});