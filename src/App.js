import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';
import { useTasks } from './useTasks';

function App() {

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
                        body={<Tasks tasks={tasks}
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

export default App;
