describe("Select test", () =>{
  it("Should open the website and perform selecion of all categories", () => {
    cy.visit("https://rickyandmorty-next-jsua.vercel.app");

    //Click button with id "characters"
    cy.get("#characters").click();

    //Verify that selected results are all shown on the page and they are correct
    cy.get(".styles.card").each(($card) => {
      cy.wrap($card).within(() => {
        cy.get(".styles.name").should("exist");
        cy.get(".styles.image").should("exist");
        cy.get(".styles.description").should("exist");
        cy.get(".styles.description").within(() => {
          cy.get("p").eq(0).should("contain", "Status: ");
          cy.get("p").eq(1).should("contain", "Species: ");
          cy.get("p").eq(2).should("contain", "Type: ");
          cy.get("p").eq(3).should("contain", "Gender: ");
          cy.get("p").eq(4).should("contain", "Origin: ");
          cy.get("p").eq(5).should("contain", "Location: ");
        })
        cy.contains("Episodes").should("be.visible");
      })
    })
  })
})