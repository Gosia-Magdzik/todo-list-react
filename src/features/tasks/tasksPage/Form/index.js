import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedContent = newTaskContent.trim();

        if (!trimmedContent) {
            return;
        }

        setNewTaskContent("");

        dispatch(addTask({
            content: trimmedContent,
            done: false,
            id: nanoid(),
        }));
    };

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <StyledForm onSubmit={ onFormSubmit }>
            <Input
                ref={ inputRef }
                value={ newTaskContent }
                placeholder="Co jest do zrobienia?"
                onChange= {({ target }) => setNewTaskContent(target.value)}
            />
            <Button onClick={ focusInput }>
                Dodaj zadanie
            </Button>
        </StyledForm>
    );
};

export default Form;
