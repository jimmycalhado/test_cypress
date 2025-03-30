describe('Funções de Manipulação de Tarefas', () => {

    it('addTask() deve adicionar uma tarefa ao LocalStorage', () => {
      const tasks = ['Tarefa 1'];
      localStorage.setItem('tasks', JSON.stringify(tasks));  // Simula o LocalStorage
  
      const newTask = 'Tarefa 2';
      addTask(newTask);  // Chama a função diretamente
  
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      expect(storedTasks).to.have.length(2);
      expect(storedTasks).to.include(newTask);
    });
  
    it('removeTask() deve remover uma tarefa do LocalStorage', () => {
      const tasks = ['Tarefa 1', 'Tarefa 2'];
      localStorage.setItem('tasks', JSON.stringify(tasks));  // Simula o LocalStorage
  
      removeTask(0);  // Remove a primeira tarefa
  
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      expect(storedTasks).to.have.length(1);
      expect(storedTasks).not.to.include('Tarefa 1');
    });
  
    it('loadTasks() deve carregar tarefas do LocalStorage', () => {
      const tasks = ['Tarefa 1', 'Tarefa 2'];
      localStorage.setItem('tasks', JSON.stringify(tasks));  // Simula o LocalStorage
  
      const taskList = loadTasks();  // Chama a função diretamente
      expect(taskList).to.have.length(2);
      expect(taskList[0]).to.equal('Tarefa 1');
      expect(taskList[1]).to.equal('Tarefa 2');
    });
  
    it('Não deve adicionar tarefas vazias ao LocalStorage', () => {
      const tasks = ['Tarefa 1'];
      localStorage.setItem('tasks', JSON.stringify(tasks));  // Simula o LocalStorage
  
      const emptyTask = '';  // Tarefa vazia
      addTask(emptyTask);  // Chama a função diretamente
  
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      expect(storedTasks).to.have.length(1);  // Só deve ter uma tarefa
      expect(storedTasks).to.include('Tarefa 1');
    });
  
    it('loadTasks() deve retornar um array vazio se não houver tarefas', () => {
      localStorage.removeItem('tasks');  // Remove qualquer item existente no LocalStorage
  
      const taskList = loadTasks();  // Chama a função diretamente
      expect(taskList).to.deep.equal([]);  // Espera um array vazio
    });
  
  });