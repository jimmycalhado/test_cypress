import './App.css';
import './index.js';
import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]); // Estado das tarefas
  const [inputValue, setInputValue] = useState(""); // Estado do input

  // Carregar tarefas do localStorage ao iniciar
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Atualizar localStorage sempre que tasks mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar uma nova tarefa
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue(""); // Limpar input após adicionar
    }
  };

  // Remover tarefa pelo índice
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div className="list">
        <h1>Lista de Tarefas</h1>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()} // Adiciona com Enter
        />
        <button onClick={addTask}>Adicionar</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} data-testid="task-item">
              <span>{task}</span>
              <button data-testid="remove-btn" onClick={() => removeTask(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
