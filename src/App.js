import React from 'react';
import Form from "./form";
import Tasks from "./Tasks";
import Buttons from './Buttons';
import Section from './Section';

const tasks = [
  {id: 1, content: "przejść na reacta", done: false},
  {id: 2, content: "iść na yogę", done: true},
];
const hideDoneTasks = false;

function App() {
  return (
<main className="body">
    <h1>Lista Zadań</h1>
    <section className="section">
        <h2 className="section__header">Dodaj nowe zadanie</h2>
        <Form/>
    </section>
    
    <section className="section">
        <h2 className="section__header--grid">Lista zadań
        <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>
        </h2>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} /> 
    </section>
</main>
  );
}

export default App;
