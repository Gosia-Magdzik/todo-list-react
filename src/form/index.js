import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

const onFormSubmit = (event) => {
    event.preventDefault();
    
    const contentTrim = newTaskContent.trim();
    
    if(!contentTrim) {return;}

    addNewTask(contentTrim);
    setNewTaskContent("");
};

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();    
    }


    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input 
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?" 
                onChange={({target}) => setNewTaskContent(target.value)}
            />
            <Button onClick={focusInput}>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
};

export default Form;
