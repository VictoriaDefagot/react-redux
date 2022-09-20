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
    }, [params.id, tasks]);

    return(
        <form onSubmit={handlerSubmit} className='bg-zinc-800 max-w-sm p-4'>
            <label htmlFor='title' className='block text-xs font-bold mb-2'>Task:</label>
            <input type="text" name="title" placeholder="Title" onChange={handlerChange} value={task.title}
            className='w-full p-2 rounded-md bg-zinc-600 mb-2'></input>

            <label htmlFor='description' className='block text-xs font-bold mb-2'>Description:</label>
            <textarea placeholder="Description" name="description" onChange={handlerChange} value={task.description}
            className='w-full p-2 rounded-md bg-zinc-600 mb-2'></textarea>

            <button className='bg-indigo-600 px-2 py-1'>Save</button>
        </form>
    )

};

export default TasksForm;