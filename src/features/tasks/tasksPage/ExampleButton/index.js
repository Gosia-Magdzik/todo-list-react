import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Buttons/styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";

const ExampleButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    return (
        <>
            <Button 
                onClick= {() => dispatch(fetchExampleTasks())}
                disabled = {loading}
            >
                {loading ? "Trwa ładowanie" : "Pobierz przykładowe zadania"}
            </Button>
        </>

    )
};

export default ExampleButton


