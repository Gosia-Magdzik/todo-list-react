import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    
const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrim = newTaskContent.trim();
    
    if(!contentTrim) {return;}

    addNewTask(contentTrim);
    setNewTaskContent("");
};

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                value={newTaskContent}
                className="form__input" 
                placeholder="Co jest do zrobienia?" autoFocus
                onChange={({target}) => setNewTaskContent(target.value)}
            />
            <button className="form__button ">Dodaj zadanie</button>
        </form>
    );
};

export default Form;