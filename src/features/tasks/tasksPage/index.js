import Form from "../tasksPage/Form";
import TasksList from '../tasksPage/TasksList';
import Buttons from '../tasksPage/Buttons';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Container from '../../../common/Container';
import Search from "./Search";

function TasksPage() {  
      return (
            <Container>
                  <Header 
                        title="Lista Zadań" 
                  />
                  <Section 
                        title="Dodaj nowe zadanie"
                        body={<Form/>}
                  />
                  <Section 
                        title="Wyszukiwarka🔎"
                        body={<Search/>}
                  />
                  <Section 
                        title="Lista zadań"
                        body={
                              <TasksList />
                        }
                        extraHeaderContent={
                              <Buttons/>
                        }
                  />
            </Container>
      );
}

export default TasksPage;
