/// <reference types="Cypress" />

describe("Login Process", () => {
    beforeEach("Open the Application", () => {
      cy.visit("http://localhost:8080/login", {
        failOnStatusCode: false,
      });
    });

    it("Login",()=>{
        cy.get('input[id="username"]').type("ameyrupji");
        cy.get('input[id="password"]').type("P@ssword!");
        cy.get('button[type="button"]').click();
        cy.get('div[class="secure"]').should('contain','This is an secure page')
    });

    it("Login failed case",()=>{
        cy.get('input[id="username"]').type("ameupji");
        cy.get('input[id="password"]').type("Pord!");
        cy.get('button[type="button"]').click();
        cy.get('div[class="secure"]').should('contain','This is an secure page')
    });
});