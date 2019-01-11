describe("Data Page", ()=> {
  it("visits the data url", () => {
    cy.visit("data");
    cy.url().should("include", "/data");
    cy.contains("h1", "TODO Data");
  });
});
