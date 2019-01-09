// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Welcome to Your Vue.js App");
    cy.contains("Welcome");
    cy.contains("About").click();
    cy.url().should("include", "/about");
  });
});

describe("Example of Failed Test", () => {
  xit("Fails a sample test", () => {
    expect(true).to.equal(false);
  });
});

describe("Example of Passed Test", () => {
  it("Passes a sample test", () => {
    expect(true).to.equal(true);
  });
});
