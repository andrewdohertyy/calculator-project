//Arrange //Act //Assert

beforeEach(() => {
  
  cy.visit('http://127.0.0.1:5500/index.html')
})

describe('testing number buttons', () => {
  it('if a button is clicked it clicked it should show a number on the display', () => {
  cy.get('#one').click()
  cy.get('#two').click()
  cy.get('#three').click()
  cy.get('#display').should("contain", "123")
  })
})



describe('testing addition functionality', () => {
  it('if a number is clicked followed by the + then another number it should output the total', () => {
    cy.get('#one').click()
    cy.get('#plus').click()
    cy.get('#three').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "4")
  })
})

describe('testing minus functionality', () => {
  it('if a number is clicked followed by the - then another number it should output the total ', () => {
    cy.get('#eight').click()
    cy.get('#minus').click()
    cy.get('#three').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "5")
  })
})

describe('testing times functionality', () => {
  it('if a number is clicked followed by the * then another number it should give the multiplication', () => {
    cy.get('#eight').click()
    cy.get('#time').click()
    cy.get('#three').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "24")
  })
})

describe('testing divide functionality', () => {
  it('if a number is clicked followed by the * then another number it should give the division', () => {
    cy.get('#eight').click()
    cy.get('#divide').click()
    cy.get('#two').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "4")
  })
})

describe('testing decimal button functionality', () => {
  it('if a number is clicked followed by the . then another number it should give the value as a decimal number', () => {
    cy.get('#five').click()
    cy.get('#dec').click()
    cy.get('#seven').click()
    cy.get('#display').should("contain", "5.7")
  })
})

describe('testing percent button functionality', () => {
  it('if a number is clicked followed by the % it should give the value of the number/100', () => {
    cy.get('#nine').click()
    cy.get('#percent').click()
    cy.get('#display').should("contain", "0.09")
  })
})

describe('testing make negative button functionality', () => {
  it('if a number is clicked followed by the % it should give the value of the number/100', () => {
    cy.get('#three').click()
    cy.get('#neg').click()
    cy.get('#display').should("contain", "-3")
  })
})

describe('testing clear button functionality', () => {
  it('if a number is clicked followed by the clear button it should change the display to blank', () => {
    cy.get('#three').click()
    cy.get('#AC').click()
    cy.get('#display').should("contain", "")
  })
})

//alll function buttons tested, will now test chained functions 

describe('testing multiple addition functionality', () => {
  it('if a number is clicked followed by the + button then equals you should be able to carry the process on after', () => {
    cy.get('#three').click()
    cy.get('#plus').click()
    cy.get('#seven').click()
    cy.get('#equals').click()
    cy.get('#plus').click()
    cy.get('#one').click()
    cy.get('#equals').click()
    cy.get('#plus').click()
    cy.get('#six').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "17")
  })
})


describe('testing multiple minus functionality', () => {
  it('if a number is clicked followed by the - button then equals you should be able to carry the process on after', () => {
    cy.get('#four').click()
    cy.get('#minus').click()
    cy.get('#seven').click()
    cy.get('#equals').click()
    cy.get('#minus').click()
    cy.get('#nine').click()
    cy.get('#equals').click()
    cy.get('#minus').click()
    cy.get('#six').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "-18")
  })
})

describe('testing multiple times functionality', () => {
  it('if a number is clicked followed by the * button then equals you should be able to carry the process on after', () => {
    cy.get('#three').click()
    cy.get('#time').click()
    cy.get('#seven').click()
    cy.get('#equals').click()
    cy.get('#time').click()
    cy.get('#nine').click()
    cy.get('#equals').click()
    cy.get('#time').click()
    cy.get('#six').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "1134")
  })
})

describe('testing multiple divide functionality', () => {
  it('if a number is clicked followed by the / button then equals you should be able to carry the process on after', () => {
    cy.get('#three').click()
    cy.get('#divide').click()
    cy.get('#three').click()
    cy.get('#equals').click()
    cy.get('#divide').click()
    cy.get('#two').click()
    cy.get('#equals').click()
    cy.get('#divide').click()
    cy.get('#four').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "0.125")
  })
})

describe('testing multiple equals functionality', () => {
  it('if a number is clicked followed by a sum and another number equals should keep adding the value', () => {
    cy.get('#three').click()
    cy.get('#plus').click()
    cy.get('#three').click()
    cy.get('#equals').click()
    cy.get('#equals').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "24")
  })
})


describe('testing multiply and addition functionality', () => {
  it('to create a sum using a mix of + & * in a chain', () => {
    cy.get('#three').click()
    cy.get('#plus').click()
    cy.get('#three').click()
    cy.get('#equals').click()
    cy.get('#time').click()
    cy.get('#five').click()
    cy.get('#equals').click()
    cy.get('#plus').click()
    cy.get('#four').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "34")
  })
})

describe('testing division and subraction functionality', () => {
  it('to create a sum using a mix of - & / in a chain', () => {
    cy.get('#four').click()
    cy.get('#minus').click()
    cy.get('#three').click()
    cy.get('#equals').click()
    cy.get('#divide').click()
    cy.get('#two').click()
    cy.get('#equals').click()
    cy.get('#minus').click()
    cy.get('#two').click()
    cy.get('#equals').click()
    cy.get('#display').should("contain", "-1.5")
  })
})

describe('testing using the should.not.contain function', () => {
  it('make sure the test is accurate and only the corrrect number will be returned', () => {
    cy.get('#four').click()
    cy.get('#minus').click()
    cy.get('#three').click()
    cy.get('#equals').click()
    cy.get('#display').should("not.contain", "2")
  })
})

describe('testing using the should.not.contain function', () => {
  it('if decimal is clicked twice it shouldnt return ..', () => {
    cy.get('#dec').click()
    cy.get('#dec').click()
    cy.get('#display').should("not.contain", "..")
  })
})




