export function findProduct(productName) {
    cy.get("body").then((body) => {
      if (body.find(`[alt="${productName}"]`).length > 0) {
        cy.get(`[alt="${productName}"]`).should("exist");
        cy.contains(".item-name", productName)
          .parents(".mat-card")
          .within(() => {
            cy.get(".btn-basket").click();
          });
        cy.wait(300);
        cy.get('button[aria-label="Show the shopping cart"]').click();
        cy.get(`[alt="${productName}"]`).should("exist");
      } else {
        cy.get(`.mat-paginator-container button[aria-label="Next page"]`).click({forse:true});
        findProduct(productName);
      }
    })
  }