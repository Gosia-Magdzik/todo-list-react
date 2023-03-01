import { ListButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, 
         setAllDone, 
         selectHideDone, 
         selectAreTaskEmpty, 
         selectIsEveryTaskDone,
         fetchExampleTasks } from "../tasksSlice";

const Buttons = () => {
    const hideDone  = useSelector(selectHideDone);
    const areTaskEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
   
    const dispatch = useDispatch();

    return (
        <ListButtons>
                <Button onClick={() => dispatch(fetchExampleTasks())}>
                    Dodaj przykładowe zadania
                </Button>
            {!areTaskEmpty && (
                <>
                    <Button 
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button 
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>       
                </>
            )}
        </ListButtons>
    );
}; 

export default Buttons;
