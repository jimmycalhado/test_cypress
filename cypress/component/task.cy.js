import { addTask, removeTask, loadTasks } from "../../src/utils/taskManager";

describe("Funções de Manipulação de Tarefas", () => {
  beforeEach(() => {
    localStorage.clear(); // Garante um ambiente limpo antes de cada teste
  });

  it("addTask() deve adicionar uma tarefa ao LocalStorage", () => {
    localStorage.setItem("tasks", JSON.stringify(["Tarefa 1"]));
    
    const newTask = "Tarefa 2";
    cy.wrap(null).then(() => {
      addTask(newTask);
    });

    cy.wrap(localStorage.getItem("tasks")).then((storedTasks) => {
      storedTasks = JSON.parse(storedTasks);
      expect(storedTasks).to.have.length(2);
      expect(storedTasks).to.include(newTask);
    });
  });

  it("removeTask() deve remover uma tarefa do LocalStorage", () => {
    localStorage.setItem("tasks", JSON.stringify(["Tarefa 1", "Tarefa 2"]));

    cy.wrap(null).then(() => {
      removeTask(0);
    });

    cy.wrap(localStorage.getItem("tasks")).then((storedTasks) => {
      storedTasks = JSON.parse(storedTasks);
      expect(storedTasks).to.have.length(1);
      expect(storedTasks).not.to.include("Tarefa 1");
    });
  });

  it("loadTasks() deve carregar tarefas do LocalStorage", () => {
    const tasks = ["Tarefa 1", "Tarefa 2"];
    localStorage.setItem("tasks", JSON.stringify(tasks));

    cy.wrap(null).then(() => {
      const taskList = loadTasks();
      expect(taskList).to.have.length(2);
      expect(taskList[0]).to.equal("Tarefa 1");
      expect(taskList[1]).to.equal("Tarefa 2");
    });
  });

  it("Não deve adicionar tarefas vazias ao LocalStorage", () => {
    localStorage.setItem("tasks", JSON.stringify(["Tarefa 1"]));

    cy.wrap(null).then(() => {
      addTask("");
    });

    cy.wrap(localStorage.getItem("tasks")).then((storedTasks) => {
      storedTasks = JSON.parse(storedTasks);
      expect(storedTasks).to.have.length(1);
      expect(storedTasks).to.include("Tarefa 1");
    });
  });

  it("loadTasks() deve retornar um array vazio se não houver tarefas", () => {
    localStorage.removeItem("tasks");

    cy.wrap(null).then(() => {
      const taskList = loadTasks();
      expect(taskList).to.deep.equal([]);
    });
  });
});
