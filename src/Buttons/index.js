import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    tasks.length > 0 && (
    <div className="Buttons">
        <button className= "hideShow">
            {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button className="finishAll"
            disabled={tasks.every(({ done }) => done)}
        >
                Ukończ wszystkie
        </button>
    </div>
)
);
    


export default Buttons;