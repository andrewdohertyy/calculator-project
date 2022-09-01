"use strict";

//Arrange //Act //Assert
beforeEach(function () {
  cy.visit('http://127.0.0.1:5500/index.html');
});
describe('testing number buttons', function () {
  it('if a button is clicked it clicked it should show a number on the display', function () {
    cy.get('#one').click();
    cy.get('#two').click();
    cy.get('#three').click();
    cy.get('#display').should("contain", "123");
  });
});
describe('testing addition functionality', function () {
  it('if a number is clicked followed by the + then another number it should output the total', function () {
    cy.get('#one').click();
    cy.get('#plus').click();
    cy.get('#three').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "4");
  });
});
describe('testing minus functionality', function () {
  it('if a number is clicked followed by the - then another number it should output the total ', function () {
    cy.get('#eight').click();
    cy.get('#minus').click();
    cy.get('#three').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "5");
  });
});
describe('testing times functionality', function () {
  it('if a number is clicked followed by the * then another number it should give the multiplication', function () {
    cy.get('#eight').click();
    cy.get('#time').click();
    cy.get('#three').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "24");
  });
});
describe('testing divide functionality', function () {
  it('if a number is clicked followed by the * then another number it should give the division', function () {
    cy.get('#eight').click();
    cy.get('#divide').click();
    cy.get('#two').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "4");
  });
});
describe('testing decimal button functionality', function () {
  it('if a number is clicked followed by the . then another number it should give the value as a decimal number', function () {
    cy.get('#five').click();
    cy.get('#dec').click();
    cy.get('#seven').click();
    cy.get('#display').should("contain", "5.7");
  });
});
describe('testing percent button functionality', function () {
  it('if a number is clicked followed by the % it should give the value of the number/100', function () {
    cy.get('#nine').click();
    cy.get('#percent').click();
    cy.get('#display').should("contain", "0.09");
  });
});
describe('testing make negative button functionality', function () {
  it('if a number is clicked followed by the % it should give the value of the number/100', function () {
    cy.get('#three').click();
    cy.get('#neg').click();
    cy.get('#display').should("contain", "-3");
  });
});
describe('testing clear button functionality', function () {
  it('if a number is clicked followed by the clear button it should change the display to blank', function () {
    cy.get('#three').click();
    cy.get('#AC').click();
    cy.get('#display').should("contain", "");
  });
}); //alll function buttons tested, will now test chained functions 

describe('testing multiple addition functionality', function () {
  it('if a number is clicked followed by the + button then equals you should be able to carry the process on after', function () {
    cy.get('#three').click();
    cy.get('#plus').click();
    cy.get('#seven').click();
    cy.get('#equals').click();
    cy.get('#plus').click();
    cy.get('#one').click();
    cy.get('#equals').click();
    cy.get('#plus').click();
    cy.get('#six').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "17");
  });
});
describe('testing multiple minus functionality', function () {
  it('if a number is clicked followed by the - button then equals you should be able to carry the process on after', function () {
    cy.get('#four').click();
    cy.get('#minus').click();
    cy.get('#seven').click();
    cy.get('#equals').click();
    cy.get('#minus').click();
    cy.get('#nine').click();
    cy.get('#equals').click();
    cy.get('#minus').click();
    cy.get('#six').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "-18");
  });
});
describe('testing multiple times functionality', function () {
  it('if a number is clicked followed by the * button then equals you should be able to carry the process on after', function () {
    cy.get('#three').click();
    cy.get('#time').click();
    cy.get('#seven').click();
    cy.get('#equals').click();
    cy.get('#time').click();
    cy.get('#nine').click();
    cy.get('#equals').click();
    cy.get('#time').click();
    cy.get('#six').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "1134");
  });
});
describe('testing multiple divide functionality', function () {
  it('if a number is clicked followed by the / button then equals you should be able to carry the process on after', function () {
    cy.get('#three').click();
    cy.get('#divide').click();
    cy.get('#three').click();
    cy.get('#equals').click();
    cy.get('#divide').click();
    cy.get('#two').click();
    cy.get('#equals').click();
    cy.get('#divide').click();
    cy.get('#four').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "0.125");
  });
});
describe('testing multiple equals functionality', function () {
  it('if a number is clicked followed by a sum and another number equals should keep adding the value', function () {
    cy.get('#three').click();
    cy.get('#plus').click();
    cy.get('#three').click();
    cy.get('#equals').click();
    cy.get('#equals').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "24");
  });
});
describe('testing multiply and addition functionality', function () {
  it('to create a sum using a mix of + & * in a chain', function () {
    cy.get('#three').click();
    cy.get('#plus').click();
    cy.get('#three').click();
    cy.get('#equals').click();
    cy.get('#time').click();
    cy.get('#five').click();
    cy.get('#equals').click();
    cy.get('#plus').click();
    cy.get('#four').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "34");
  });
});
describe('testing division and subraction functionality', function () {
  it('to create a sum using a mix of - & / in a chain', function () {
    cy.get('#four').click();
    cy.get('#minus').click();
    cy.get('#three').click();
    cy.get('#equals').click();
    cy.get('#divide').click();
    cy.get('#two').click();
    cy.get('#equals').click();
    cy.get('#minus').click();
    cy.get('#two').click();
    cy.get('#equals').click();
    cy.get('#display').should("contain", "-1.5");
  });
});
describe('testing using the should.not.contain function', function () {
  it('make sure the test is accurate and only the corrrect number will be returned', function () {
    cy.get('#four').click();
    cy.get('#minus').click();
    cy.get('#three').click();
    cy.get('#equals').click();
    cy.get('#display').should("not.contain", "2");
  });
});
describe('testing using the should.not.contain function', function () {
  it('if decimal is clicked twice it shouldnt return ..', function () {
    cy.get('#dec').click();
    cy.get('#dec').click();
    cy.get('#display').should("not.contain", "..");
  });
});