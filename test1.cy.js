///<reference types = "cypress"/>

let getText;
let url = 'https://dev-my.biomarking.com/login'
let username = 'deveorder1'
let password = 'Abc12345'

describe('Login', ()=>{

    it('Verify login with valid credentials', function(){
        cy.visit(url)
        cy.get('#mui-2').type(username)
        cy.get('#mui-5').type(password)
        cy.get('.jss39 > .MuiButtonBase-root').click()
        //cy.contains('Add Patient').should('be.visible')
        //cy.contains('button[text="Add Patient"]').should('contain','Add Patient')

        //Implicit Assertion
        cy.get('.jss98 > .MuiButtonBase-root')
                            .should('be.visible')
                            .and('contain','Add Patient')
                            //.and('be.focused')     
                
        cy.get('#AvatarMenu > img').click()
        cy.wait(300)
        cy.get('b').invoke('text').as('userN')
        cy.log("################Username1 : "+this.userN)   

        //Explicit Assertions
        //expect(this.username).to.be.equal('Lachlan Holden')   
        cy.contains('Lachlan Holden').then(($value) => {
            getText = $value.text()
        })   
        cy.log("*******************Username2 : "+this.getText) 
        //expect(this.getText).to.be.equal('Lachlan Holden')  

        cy.wait(3000)
    })
    
    it('Verify login with invalid credentials', ()=>{
        cy.wait(100)
        cy.visit(url)
        cy.get('#mui-2').type('deveorder')
        cy.get('#mui-5').type(password)
        cy.get('.jss39 > .MuiButtonBase-root').click()
        //Implicit Assertion
        cy.get('.notification-container')
                            .should('be.visible')
                            .should('have.text','ErrorThe username/email address or password you inputted is incorrect. ')
    })
})

