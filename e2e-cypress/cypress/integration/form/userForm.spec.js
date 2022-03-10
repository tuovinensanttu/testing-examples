describe("User form", () => {
  it("User form is working correctly", () => {
    cy.visit("http://localhost:3000");

    cy.get("input[id='firstName']").type("Santtu", { delay: 100 });

    cy.get("input[id='lastName']").type("Tuovinen", { delay: 100 });

    cy.get("input[id='streetAddress']").type("Test street 11", { delay: 100 });

    cy.get("input[id='city']").type("Espoo", { delay: 100 });

    cy.get("input[id='postalCode']").type("12345", { delay: 100 });

    cy.get("select[id='country']").select("sweden");

    cy.get("input[id='termsOfService']").click();

    cy.wait(2000);

    cy.get("button[type='submit']").click();
  });
});
