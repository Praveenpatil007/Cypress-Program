/// <reference types="Cypress" />

describe("Login page, Environment: Staging, Build No: Bxx", () => {
  beforeEach("Open the Krysp Application", () => {
    cy.visit("https://flow.iopulsedev.net/connect/login", {
      failOnStatusCode: false,
    });
  });
  it("Login page components", () => {
    cy.contains("CUSTOMER CONNECT");
    cy.get('button[type="button"]').should("contain", "Sign Up");
    cy.get('button[type="button"]').click();
    cy.get('button[type="submit"]').should("contain", " Create an account ");
    cy.go("back");
    cy.contains("LOGIN TO CUSTOMER CONNECT");
    cy.get("input[type='email']").type("Email@gmail.com").clear();
    cy.get("input[type='password']").type("password").clear();
    cy.contains("Forgot your password ?").click();
    cy.get('p[class="login-title"]').should("contain", " Reset Password ");
    cy.go("back");
  });

  it("Privacy", () => {
    cy.contains("privacy policy").invoke("removeAttr", "target").click();
    cy.get('span[style="font-family:open sans,sans-serif;"]').should(
      "contain",
      "PRIVACY"
    );
  });

  it("Terms & conditions", () => {
    cy.contains("terms & conditions").invoke("removeAttr", "target").click();
    cy.get('span[style="font-family:open sans,sans-serif;"]').should(
      "contain",
      "TERMS"
    );
  });
});
