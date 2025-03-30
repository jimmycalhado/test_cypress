import App from '../../src/App'; // Ajuste o caminho conforme necessário
import { mount } from 'cypress/react';

describe('Lista de Tarefas', () => {
  beforeEach(() => {
    cy.clearLocalStorage(); // Limpa LocalStorage antes de cada teste
    cy.visit('/'); // Visita a página inicial para garantir que o ambiente esteja carregado
  });

  it('Deve adicionar uma tarefa à lista e ao LocalStorage', () => {
    cy.mount(<App />);

    // Verifica se o campo de input existe
    cy.get("input").should("exist").type("Nova Tarefa");
    cy.get("button").contains("Adicionar").click();

    // Verifica se a tarefa aparece na lista
    cy.get('[data-testid="task-item"]').should("contain", "Nova Tarefa");

    // Verifica se o LocalStorage foi atualizado
    cy.window().then((window) => {
      const tasks = window.localStorage.getItem("tasks");
      expect(tasks).to.include("Nova Tarefa");
    });
  });

  it('Deve remover uma tarefa da lista', () => {
    cy.mount(<App />);

    cy.get("input").should("exist").type("Tarefa para Remover");
    cy.get("button").contains("Adicionar").click();

    // Clica no botão de remover (X)
    cy.get('[data-testid="remove-btn"]').click();

    // Verifica que a tarefa foi removida da lista
    cy.get('[data-testid="task-item"]').should("not.exist");
  });
});
