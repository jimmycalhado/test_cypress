describe('Testes de Integração - To-Do List (React)', () => {
  
    beforeEach(() => {
      cy.visit('/'); // Visita a aplicação React
      cy.clearLocalStorage(); // Limpa o LocalStorage antes de cada teste
    });
  
    it('Deve adicionar uma tarefa na lista ao clicar em "Adicionar"', () => {
      cy.get('input[placeholder="Adicione uma nova tarefa"]').type('Nova Tarefa');
      cy.contains('Adicionar').click(); // Clica no botão "Adicionar"
  
      cy.get('[data-testid="task-item"]').should('have.length', 1);
      cy.get('[data-testid="task-item"]').first().should('contain', 'Nova Tarefa');
    });
  
    it('Deve remover uma tarefa da lista ao clicar no botão "X"', () => {
      cy.get('input[placeholder="Adicione uma nova tarefa"]').type('Tarefa a Remover');
      cy.contains('Adicionar').click();
      
      cy.get('[data-testid="task-item"]').should('have.length', 1);
      cy.get('[data-testid="remove-btn"]').click(); // Clica no botão de remover
      
      cy.get('[data-testid="task-item"]').should('have.length', 0);
    });
  
    it('Deve persistir as tarefas no LocalStorage após recarregar a página', () => {
      cy.get('input[placeholder="Adicione uma nova tarefa"]').type('Tarefa Persistente');
      cy.contains('Adicionar').click();
  
      cy.wait(500); // Espera 500ms para garantir que o React renderizou
  
      cy.get('[data-testid="task-item"]', { timeout: 4000 }) // Espera até 4s antes de falhar
        .should('have.length', 1)
        .and('contain', 'Tarefa Persistente');
    });
  
  });