import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate } from 'react-router-dom';

function TasksForm() {

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const handlerChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerSubmit = e => {
        e.preventDefault();
        dispatch(addTask({
            ...task,
            id: uuid(),
        }));
        navigate('/');
    };

    return(
        <form onSubmit={handlerSubmit}>
            <input type="text" name="title" placeholder="Task Title" onChange={handlerChange}></input>
            <textarea placeholder="Task Description" name="description" onChange={handlerChange}></textarea>
            <button>Save</button>
        </form>
    )

};

export default TasksForm;