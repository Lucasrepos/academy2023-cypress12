
describe("Register Users", () => {
    it("Register New User - Happy Path", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var RandomEmail=`auto${new Date().getTime()}@matico.com`
        var pass = "Crowdar.2023!";

        cy.get('reg_email').type(RandomEmail);
        cy.get('reg_password').type(pass+"{enter}");
                
        cy.get('strong').should('contain.text', 'academyCypress_');
        

    });
    it("Register New User - Bad Email Format", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "academyCypress_usuarioNormal@crowdaronline.com";
        var pass = "Crowdar.2023!";

        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");
                
        cy.get('strong').should('contain.text', 'academyCypress_');
        

    });
    it("Register New User - Empity Password", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "academyCypress_usuarioNormal@crowdaronline.com";
        var pass = "Crowdar.2023!";

        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");
                
        cy.get('strong').should('contain.text', 'academyCypress_');
        

    });
});