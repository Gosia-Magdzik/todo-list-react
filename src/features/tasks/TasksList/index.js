import { List, Item, Content, ToggleDoneButton, RemovedButton  } from "./styled";

const TasksList = ({tasks, hideDone, removeTask, toggleTaskDone}) => (
    <List>
        {tasks.map(task => (
            <Item 
                key={task.id}
                hidden={task.done && hideDone}
            >
                <ToggleDoneButton
                        onClick = {() => toggleTaskDone(task.id)}
                >
                        {task.done ? "✔" : ""}
                </ToggleDoneButton>
                        <Content done={task.done}>
                            {task.id} - {task.content}
                        </Content>
                <RemovedButton
                         onClick= {() => removeTask(task.id)}
                >
                        🗑
                </RemovedButton>
            </Item>
        ))}
    </List> 
);

export default TasksList;