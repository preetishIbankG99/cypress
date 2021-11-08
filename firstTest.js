describe('My Test Suite', function() {
    it('Verify Title of page-positive', function() {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.title().should('eq','OrangeHRM')
      cy.get("#txtUsername").type("Admin")
      cy.get("#txtPassword").type("admin123")
      cy.get("#btnLogin").click()
    })

    it('Verify Title of page-positive', function() {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should('eq','Register')
        cy.get("[placeholder='First Name']").type("preetish")
        cy.wait(5000)
        cy.get("[value='Male']").click()
        cy.wait(5000)
         cy.get("#checkbox1").click()
       // cy.get("#checkbox1").check().should('be.checked').and('have.value','Cricket')

      })

      it('Skills DropDown', function() {
       cy.get('#Skills').select( 'Android' ).should('have.value','Android')

      })
  })