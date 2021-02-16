Feature: Testear ingreso/choucair


  Scenario Outline: TestearIngreso
    Given Open www.choucairtesting.com/empleos-testing
    When Entering number <PrimerTexto> and <segundoTexto>
    And Press enter
    Then Result should be <result>

    Examples:
      | PrimerTexto| segundoTexto| result |
      | 1          | 1           | 1      |
