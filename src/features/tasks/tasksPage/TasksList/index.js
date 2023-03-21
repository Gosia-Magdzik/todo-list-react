import { List, Item, Content, ToggleDoneButton, RemovedButton, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery }  from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes"
import { useQueryParameter } from "../queryParameters";

const TasksList = () => {
   const query = useQueryParameter(searchQueryParamName);
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
                            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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