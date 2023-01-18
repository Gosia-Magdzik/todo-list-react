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
    <Section  title="Dodaj nowe zadanie"
              body={<Form/>} 
    />

    <Section  title="Lista zadań"
              body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} 
              extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}/>}
    />


</main>
  );
}

export default App;
