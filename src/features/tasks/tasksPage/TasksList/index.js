import { List, Item, Content, ToggleDoneButton, RemovedButton, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery }  from "../../tasksSlice";
import { useLocation } from "react-router-dom";

const TasksList = () => {
   const location = useLocation(); 
   const query = (new URLSearchParams(location.search)).get("szukaj");

   const tasks = useSelector(state => selectTasksByQuery(state, query)); 
   const hideDone = useSelector(selectHideDone);  

   const dispatch = useDispatch();
  
    return (
        <List>
            {tasks.map(task => (
                  <Item 
                    key={task.id}
                    hidden={task.done && hideDone}
                  >
                  <ToggleDoneButton
                     onClick = {() => dispatch(toggleTaskDone(task.id))}
                     done
                  >
                    {task.done ? "✔" : ""}
                  </ToggleDoneButton>
                     <Content done={task.done}>
                            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                     </Content>
                  <RemovedButton
                     remove
                     onClick= {() => dispatch(removeTask(task.id))}
                  >
                     🗑
                  </RemovedButton>
                  </Item>
            ))}
        </List> 
    );
};

export default TasksList;