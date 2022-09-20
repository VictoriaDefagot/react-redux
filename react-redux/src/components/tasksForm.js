import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

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
    const params = useParams();
    const tasks = useSelector(state => state.tasks);

    const handlerSubmit = e => {
        e.preventDefault();

        if(params.id) {

            dispatch(
                editTask(task)
            );

        } else {

            dispatch(
                addTask({
                ...task,
                id: uuid(),
                })
            );
        }

        navigate('/');
    };

    useEffect(() => {
        if(params.id) {
            setTask(tasks.find(task => task.id === params.id));
        }
    }, []);

    return(
        <form onSubmit={handlerSubmit}>
            <input type="text" name="title" placeholder="Task Title" onChange={handlerChange} value={task.title}></input>
            <textarea placeholder="Task Description" name="description" onChange={handlerChange} value={task.description}></textarea>
            <button>Save</button>
        </form>
    )

};

export default TasksForm;