class SearchQuery{
    getSearchQuery(){
        return cy.get('[id="searchQuery"]', {timeout:5000});
    }
    getTypeAndConfirmQuery(){
       return cy.get('[id="mat-input-0"]', {timeout:5000});
    }
}; 
export default new SearchQuery();