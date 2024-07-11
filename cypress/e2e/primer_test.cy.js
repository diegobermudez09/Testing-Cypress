/// <reference types="cypress" />

describe('Carga la página principal', () => {
    it('Carga la pagina principal', () => {

        cy.visit('http://127.0.0.1:5500/index.html');

        // Verificar el elemento y su texto
        cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria');

        // Verificar que exista el elemento
        cy.get('[data-cy="titulo-proyecto"]').should('exist');

        // Verficar que eiste el elemento y contenga un texto
        cy.get('[data-cy="titulo-proyecto"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');
        
            cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('not.equal', 'diferente');
    });
})
