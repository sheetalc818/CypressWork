///<reference types = "cypress"/>

describe('Login', ()=>{
    it('Verify login with valid credentials', function(){
        cy.visit('https://dev-my.biomarking.com/login')
        cy.get('#mui-2').type('deveorder1')
        cy.get('#mui-5').type('Abc12345')
        cy.get('.jss39 > .MuiButtonBase-root').click()
        //cy.contains('Add Patient').should('be.visible')
        //cy.contains('button[text="Add Patient"]').should('contain','Add Patient')
        cy.get('.jss98 > .MuiButtonBase-root')
                            .should('be.visible')
                            .should('contain','Add Patient')
                            
        cy.wait(3000)
    })
    
    it('Verify login with invalid credentials', ()=>{
        cy.wait(100)
        cy.visit('https://dev-my.biomarking.com/login')
        cy.get('#mui-2').type('deveorder')
        cy.get('#mui-5').type('Abc12345')
        cy.get('.jss39 > .MuiButtonBase-root').click()
        cy.get('.notification-container')
                            .should('be.visible')
                            .should('have.text','ErrorThe username/email address or password you inputted is incorrect. ')
    })
})
