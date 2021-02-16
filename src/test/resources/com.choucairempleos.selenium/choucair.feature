Feature: Testear formularios de login/choucair


  Scenario Outline: Testear formularios
    Given Open google.com
    When Entering number <firstNumber> and <secondNumber>
    And Press enter
    Then Result should be <result>

    Examples:
      | firstNumber | secondNumber | result |
      | 6           | 6            | 12     |
      | 6           | 2            | 8      |
      | 8           | 5            | 13     |