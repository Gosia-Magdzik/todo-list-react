import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

const onFormSubmit = (event) => {
    event.preventDefault();
    
    const contentTrim = newTaskContent.trim();
    
    if(!contentTrim) {return;}

    setNewTaskContent("");

    dispatch(addTask({
        content: contentTrim,
        done: false,
        id: nanoid(),
    }));


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
