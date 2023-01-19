import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => (
    
    <div className="Buttons">
        {tasks.length > 0 && (
        <>
            <button 
                className= "hideShow">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button 
                className="finishAll"
                autoFocus
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </>
    )}
    </div>
); 

export default Buttons;
