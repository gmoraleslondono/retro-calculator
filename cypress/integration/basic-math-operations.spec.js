/// <reference types="cypress" />

describe("basic math operations", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080/");
  });

  it("should add two numbers", () => {
    cy.get(".one").click();
    cy.get(".addition").click();
    cy.get(".two").click();
    cy.get(".equal").click();
    cy.get("#screenText").should("have.text", "3");
  });

  it("should subtract two numbers", () => {
    cy.get(".three").click();
    cy.get(".subtraction").click();
    cy.get(".one").click();
    cy.get(".equal").click();
    cy.get("#screenText").should("have.text", "2");
  });

  it("should multiply two numbers", () => {
    cy.get(".three").click();
    cy.get(".multiplication").click();
    cy.get(".two").click();
    cy.get(".equal").click();
    cy.get("#screenText").should("have.text", "6");
  });

  it("should divide two numbers", () => {
    cy.get(".six").click();
    cy.get(".division").click();
    cy.get(".two").click();
    cy.get(".equal").click();
    cy.get("#screenText").should("have.text", "3");
  });

  it("should show message error if divide by zero", () => {
    cy.get(".nine").click();
    cy.get(".division").click();
    cy.get(".zero").click();
    cy.get(".equal").click();
    cy.get("#screenText").should("have.text", "Error");
  });
});
