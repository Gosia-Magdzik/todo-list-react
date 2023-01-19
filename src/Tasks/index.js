import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id}
            className={`list__items  ${task.done && hideDoneTasks ? "list__items--hidden" : "list__items"}`}
            >
                <button  className={`list__button list__button--done`}>
                         {task.done ? "✔" : ""}
                </button>
                        <span className={`list__task 
                        ${task.done ? "list__task--done" : ""}`}>
                        {task.content}
                        </span>
                <button  className={`list__button list__button--remove`}>
                        🗑
                </button>
            </li>
        ))}
    </ul> 
);

export default Tasks;