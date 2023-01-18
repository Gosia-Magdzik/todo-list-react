import "./style.css";

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id}
            className={`list__items  {task.done && props.hideDoneTasks ? "list__items--hidden" : "list__items"}`}
            >
                <button  className="list__button list__button--done">
                         {task.done ? "✔" : ""}
                    </button>
                        <span className={`list__task {task.done ? "list__task--done" : ""}`}>
                         {task.content}
                        </span>
                    <button  className="list__button list__button--remove">
                        🗑
                    </button>
            </li>
        ))}
    </ul> 
);

export default Tasks;