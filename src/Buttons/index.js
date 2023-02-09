import { ListButtons, Button } from "./styled";


const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone }) => (
    
    <ListButtons>
        {tasks.length > 0 && (
        <>
            <Button 
                onClick={toggleHideDone}
                className= "hideShow">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button 
                onClick={setAllDone}
                className="finishAll"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>       
        </>
    )}
    </ListButtons>
); 

export default Buttons;
