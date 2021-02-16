$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com.choucairempleos.selenium/choucair.feature");
formatter.feature({
  "name": "Testear ingreso/choucair",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Testear ingreso",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open www.choucairtesting.com/empleos-testing",
  "keyword": "Given "
});
formatter.step({
  "name": "Entering number \u003cPrimerTexto\u003e and \u003csegundoTexto\u003e",
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
        "PrimerTexto",
        "segundoTexto",
        "result"
      ]
    },
    {
      "cells": [
        "\"prueba\"",
        "\"antioquia\"",
        "\"ok\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Testear ingreso",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Open www.choucairtesting.com/empleos-testing",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Entering number \"prueba\" and \"antioquia\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Press enter",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Result should be \"ok\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});