describe("Map page", () => {
  it("Visits the map url", () => {
    cy.visit("/map");
    cy.url().should("include", "/map");
    cy.contains("h1", "TODO Map");
  });
});
