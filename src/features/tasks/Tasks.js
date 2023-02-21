import Form from './Form';
import TasksList from './TasksList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';
import { useTasks } from '../../useTasks';
import { useState } from 'react';

function Tasks() {

      const [hideDone, setHideDone] = useState(false);
  
      const toggleHideDone = () => {
       setHideDone(hideDone => !hideDone)
  };

      const {
            tasks,
            removeTask,
            toggleTaskDone,
            addNewTask,
            setAllDone,
      } = useTasks();

      return (
            <Container>
                  <Header title="Lista Zadań" />
                  <Section title="Dodaj nowe zadanie"
                        body={<Form addNewTask={addNewTask} />}
                  />
                  <Section title="Lista zadań"
                        body={<TasksList tasks={tasks}
                              hideDone={hideDone}
                              removeTask={removeTask}
                              toggleTaskDone={toggleTaskDone}
                        />}
                        extraHeaderContent={<Buttons tasks={tasks}
                              hideDone={hideDone}
                              toggleHideDone={toggleHideDone}
                              setAllDone={setAllDone}
                        />}
                  />
            </Container>
      );
};

export default Tasks;
