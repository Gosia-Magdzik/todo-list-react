import "./style.css";

const Buttons = ({tasks, hideDone}) => (
    
    <div className="buttons">
        {tasks.length > 0 && (
        <>
            <button 
                className= "hideShow">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button 
                className="finishAll"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </>
    )}
    </div>
); 

export default Buttons;
