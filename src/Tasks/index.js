import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id}>
                {task.content}
            </li>
        ))}
    </ul> 
);

export default Tasks;