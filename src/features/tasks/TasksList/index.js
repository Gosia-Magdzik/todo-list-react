import { List, Item, Content, ToggleDoneButton, RemovedButton  } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { SelectTasks, toggleTaskDone, removeTask, selectHideDone } from "../tasksSlice";

const TasksList = () => {
  const tasks = useSelector(SelectTasks); 
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
                          {task.content}
                </Content>removeTask
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