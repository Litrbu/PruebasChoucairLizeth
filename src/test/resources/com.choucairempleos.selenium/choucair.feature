Feature: Testear pagina/choucair


  Scenario Outline: Testear pagina
    Given Open google.com
    When Entering number <firstNumber> and <secondNumber>
    And Press enter
    Then Result should be <result>

    Examples:
      | firstNumber | secondNumber | result |
      | 1           | 1            |1       |
